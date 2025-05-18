import { api } from '@/src/api/axios';
import { user } from '@/src/api/user';
import { useQuery } from '@tanstack/react-query';

export const initialQueryKey = 'user.dashboard';

// Get user dashboard information
export const useGetDashboard = () => {
  return useQuery({
    queryKey: [initialQueryKey, 'base'],
    queryFn: async () => {
      const response = await api.get('/api/UserDashboard/User-Get-Dashboard');
      return response.data;
    },
  });
};

// Get user's ongoing rentals
export const useGetOngoingRentals = () => {
  return useQuery({
    queryKey: [initialQueryKey, 'ongoingRentals'],
    queryFn: async () => {
      const response = await api.get('/api/UserDashboard/User-Get-Ongoing-Rentals');
      return response.data;
    },
  });
};
