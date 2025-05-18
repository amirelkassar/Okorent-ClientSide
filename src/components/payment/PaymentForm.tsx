'use client';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import Button from '@/src/components/button';
import { usePayment } from '@/src/hooks/payment';

interface PaymentFormProps {
  amount: number;
  onSuccess?: () => void;
  onError?: (error: any) => void;
}

export default function PaymentForm({ amount, onSuccess, onError }: PaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const { confirmPayment } = usePayment();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    try {
      const cardElement = elements.getElement(CardElement);
      if (!cardElement) {
        throw new Error('Card element not found');
      }

      const result = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (!result.paymentMethod) {
        throw new Error('Failed to create payment method');
      }

      await confirmPayment.mutateAsync(result.paymentMethod.id);
      onSuccess?.();
    } catch (error) {
      onError?.(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
      </div>
      <Button type="submit" disabled={!stripe || isLoading} className="w-full">
        {isLoading ? 'Processing...' : `Pay $${amount}`}
      </Button>
    </form>
  );
}
