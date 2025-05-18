'use client';
import React from 'react';
import PlanPage from './planPage';
import { useSwitchBilling } from '@/src/store/rent-slice';
import SwitchBilling from './switchBilling';
import RentOuts from './RentOuts';
import SearchItem from './searchItem';
import FilterBilling from './filterBilling';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/src/api/axios';
import { user } from '@/src/api/user';
import { QueryWrapper } from '@/src/components/query-wrapper';

// Define interfaces for your data types
interface PlanData {
  id: string;
  name: string;
  price: number;
  // Add other plan properties as needed
}

interface SubscriptionData {
  id: string;
  planId: string;
  // Add other subscription properties as needed
}

interface TransactionData {
  id: string;
  amount: number;
  date: string;
  // Add other transaction properties as needed
}

// Add type definitions to match your component props
// Important: These must match exactly what your components expect
type PlanPageProps = {
  plans: any;
  currentPlan: any;
};

type RentOutsProps = {
  transactions: any;
};

// Define query keys
const initialQueryKeyBilling = 'user.billing';
const initialQueryKeyPlans = 'user.plans';

// Get billing information
const useGetBillingInfo = (query = '') => {
  return useQuery({
    queryKey: [initialQueryKeyBilling, query],
    queryFn: async () => {
      // Using base URL instead of non-existent getAll method
      const response = await api.get(user.billing.base + (query ? `?${query}` : ''));
      return response.data;
    },
  });
};

// Get available plans
const useGetPlans = () => {
  return useQuery({
    queryKey: [initialQueryKeyPlans],
    queryFn: async () => {
      // Since plans is not a property of billing, constructing the URL manually
      // Adjust this path based on your actual API structure
      const response = await api.get(`${user.billing.base}/plans`);
      return response.data;
    },
  });
};

// Get user transactions
const useGetTransactions = (query = '') => {
  return useQuery({
    queryKey: [initialQueryKeyBilling, 'transactions', query],
    queryFn: async () => {
      // Using the getTransactions method which appears to exist
      const response = await api.get(user.billing.getTransactions(query));
      return response.data;
    },
  });
};

// Type assertion to help TypeScript understand the component props
const TypedPlanPage = PlanPage as React.ComponentType<PlanPageProps>;
const TypedRentOuts = RentOuts as React.ComponentType<RentOutsProps>;

function BillingPage() {
  const { switchBilling } = useSwitchBilling();
  const plansQuery = useGetPlans();
  const billingQuery = useGetBillingInfo();
  const transactionsQuery = useGetTransactions();

  return (
    <div className="mb-16">
      <div
        className={`mx-auto relative min-h-[46px] ${
          switchBilling === 'plan' ? ' justify-center' : 'justify-between'
        } mb-8 flex flex-col lg:flex-row gap-7 items-center `}
      >
        {switchBilling !== 'plan' && <FilterBilling />}
        <div
          className={` order-1 lg:order-2 ${
            switchBilling !== 'plan'
              ? 'xl:absolute xl:top-1/2 xl:left-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2'
              : ''
          }`}
        >
          <SwitchBilling />
        </div>
        {switchBilling !== 'plan' && <SearchItem />}
      </div>

      {switchBilling === 'plan' ? (
        <QueryWrapper query={plansQuery}>
          {({ data }) => (
            <TypedPlanPage plans={data} currentPlan={billingQuery.data?.subscription} />
          )}
        </QueryWrapper>
      ) : (
        <QueryWrapper query={transactionsQuery}>
          {({ data }) => <TypedRentOuts transactions={data} />}
        </QueryWrapper>
      )}
    </div>
  );
}

export default BillingPage;
