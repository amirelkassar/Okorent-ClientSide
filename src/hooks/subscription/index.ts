import { useQuery } from '@tanstack/react-query';
import { SubscriptionService } from '@/src/services/subscription';

export const useSubscriptionPlans = () => {
  return useQuery({
    queryKey: ['subscriptionPlans'],
    queryFn: SubscriptionService.getPlans,
  });

  const getCurrentPlan = useQuery({
    queryKey: ['currentPlan'],
    queryFn: SubscriptionService.getCurrentPlan,
  });

  return {
    plans: useQuery({
      queryKey: ['subscriptionPlans'],
      queryFn: SubscriptionService.getPlans,
    }),
    currentPlan: getCurrentPlan,
  };
};
