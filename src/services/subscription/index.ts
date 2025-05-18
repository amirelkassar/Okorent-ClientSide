import { api } from '@/src/api/axios';

export const SubscriptionService = {
  getPlans: async () => {
    const response = await api.get('/api/subscriptions/plans');
    return response.data;
  },

  getCurrentPlan: async () => {
    const response = await api.get('/api/subscriptions/current');
    return response.data;
  },
};
