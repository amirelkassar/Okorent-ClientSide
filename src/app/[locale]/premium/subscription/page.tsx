'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getToken } from '@/lib/token';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Button from '@/src/components/button';
import { Toast } from '@/src/components/toast';
import ROUTES from '@/src/routes';
import { usePayment } from '@/src/hooks/payment';
import MasterCardIcon from '@/src/assets/icons/MasterCard';
import VisaIcon from '@/src/assets/icons/visa';
import { MembershipService, Membership } from '@/src/services/membership';
import { useMemberships, Plan } from '@/src/hooks/membership';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

type BillingPeriod = 'monthly' | 'yearly';

const convertMembershipToPlan = (membership: Membership): Plan => {
  return {
    id: membership.id,
    name: membership.name,
    monthlyPrice: Math.round(membership.pricePerMonth * 100), // Convert to cents for Stripe
    yearlyPrice: Math.round(membership.pricePerYear * 100), // Convert to cents for Stripe
    description: membership.description,
    features: [], // You may want to add features from membershipFeatureMaps when available
    popular: membership.name === 'Pro', // Mark Pro plan as popular
  };
};

function BillingToggle({
  period,
  onChange,
}: {
  period: BillingPeriod;
  onChange: (period: BillingPeriod) => void;
}) {
  return (
    <div className="flex justify-center items-center gap-4 mb-8">
      <button
        onClick={() => onChange('monthly')}
        className={`px-6 py-2 rounded-lg transition-colors ${
          period === 'monthly'
            ? 'bg-green text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        Monthly billing
      </button>
      <button
        onClick={() => onChange('yearly')}
        className={`px-6 py-2 rounded-lg transition-colors ${
          period === 'yearly'
            ? 'bg-green text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        Yearly billing
        <span className="ml-2 text-sm bg-yellow-400 text-yellow-800 px-2 py-0.5 rounded-full">
          Save 17%
        </span>
      </button>
    </div>
  );
}

function PlanCard({
  plan,
  isSelected,
  onSelect,
  billingPeriod,
}: {
  plan: Plan;
  isSelected: boolean;
  onSelect: () => void;
  billingPeriod: BillingPeriod;
}) {
  const price = billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  const monthlyEquivalent =
    billingPeriod === 'yearly' ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice;
  const savings =
    billingPeriod === 'yearly'
      ? Math.round(((plan.monthlyPrice * 12 - plan.yearlyPrice) / (plan.monthlyPrice * 12)) * 100)
      : 0;

  return (
    <div
      className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all ${
        isSelected ? 'border-green shadow-lg' : 'border-gray-200 hover:border-green/50'
      }`}
      onClick={onSelect}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green text-white px-4 py-1 rounded-full text-sm">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
      <p className="text-gray-600 mb-4">{plan.description}</p>
      <p className="text-3xl font-bold text-green mb-2">
        ${Math.round(price / 100)}
        <span className="text-base font-normal text-gray-600">
          /{billingPeriod === 'monthly' ? 'month' : 'year'}
        </span>
      </p>
      {billingPeriod === 'yearly' && (
        <p className="text-sm text-green mb-4">
          ${Math.round(monthlyEquivalent / 100)}/mo equivalent • Save {savings}%
        </p>
      )}
      <ul className="space-y-2">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-green">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PaymentForm({
  selectedPlan,
  billingPeriod,
  isProcessing,
  onSubmit,
}: {
  selectedPlan: Plan;
  billingPeriod: BillingPeriod;
  isProcessing: boolean;
  onSubmit: (event: React.FormEvent) => Promise<void>;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const token = getToken();
  const price = billingPeriod === 'monthly' ? selectedPlan.monthlyPrice : selectedPlan.yearlyPrice;

  return (
    <div className="mt-8 max-w-md mx-auto">
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <MasterCardIcon className="w-8 h-auto" />
            <VisaIcon className="w-10 h-auto" />
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Selected Plan</p>
            <p className="font-semibold">{selectedPlan.name}</p>
            <p className="text-sm text-gray-600">{billingPeriod} billing</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': { color: '#aab7c4' },
                  },
                  invalid: { color: '#9e2146' },
                },
                hidePostalCode: true,
              }}
            />
          </div>

          <Button
            type="submit"
            disabled={!stripe || !elements || !token || isProcessing}
            className="w-full h-12"
          >
            {isProcessing ? (
              <div className="flex items-center justify-center gap-2">
                <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                Processing...
              </div>
            ) : (
              `Subscribe for $${price / 100}/${billingPeriod === 'monthly' ? 'month' : 'year'}`
            )}
          </Button>
        </form>

        {!token && (
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-center text-yellow-700">
              Please sign in to activate your subscription
            </p>
          </div>
        )}

        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <p>Secured by Stripe</p>
        </div>
      </div>
    </div>
  );
}

function Page() {
  const router = useRouter();
  const token = getToken();
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('monthly');
  const [isProcessing, setIsProcessing] = useState(false);
  const { plans, selectedPlan, setSelectedPlan, isLoading, error } = useMemberships();
  const { createPaymentIntent } = usePayment();

  const handlePayment = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!token) {
      router.push(ROUTES.AUTH.LOGIN);
      return;
    }

    if (!selectedPlan) {
      console.error('Please select a plan');
      return;
    }

    setIsProcessing(true);

    try {
      const price =
        billingPeriod === 'monthly' ? selectedPlan.monthlyPrice : selectedPlan.yearlyPrice;

      await createPaymentIntent.mutateAsync({
        amount: price,
        currency: 'usd',
      });

      Toast.Notification('Subscription activated successfully!');
      router.push(ROUTES.USER.DASHBOARD);
    } catch (error: any) {
      Toast.Notification(error?.message || 'Payment failed. Please try again.');
      console.error('Payment error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-2">Choose Your Plan</h1>
      <p className="text-center text-gray-600 mb-8">Select the perfect plan for your needs</p>

      <BillingToggle period={billingPeriod} onChange={setBillingPeriod} />

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            isSelected={selectedPlan?.id === plan.id}
            onSelect={() => setSelectedPlan(plan)}
            billingPeriod={billingPeriod}
          />
        ))}
      </div>

      <Elements stripe={stripePromise}>
        <PaymentForm
          selectedPlan={selectedPlan || plans[0]}
          billingPeriod={billingPeriod}
          isProcessing={isProcessing}
          onSubmit={handlePayment}
        />
      </Elements>
    </div>
  );
}

export default Page;
