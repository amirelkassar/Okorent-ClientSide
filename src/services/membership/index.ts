import { API_ROUTES } from '@/src/routes/api-routes';
import { axiosInstance } from '../axios-instance';

export interface Membership {
  id: string;
  name: string;
  description: string;
  pricePerMonth: number;
  pricePerYear: number;
  discountPerMonth: number;
  discountPerYear: number;
  created: string;
  lastModified: string;
}

interface MembershipResponse {
  data: Membership[];
  succeeded: boolean;
  errors: null | any;
  code: number;
  message: string;
}

export const MembershipService = {
  getAllMemberships: async (): Promise<Membership[]> => {
    try {
      const response = await axiosInstance.get<MembershipResponse>('/api/AdminMembership');
      if (response.data.succeeded) {
        return response.data.data;
      }
      throw new Error(response.data.message);
    } catch (error) {
      console.error('Error fetching memberships:', error);
      throw error;
    }
  },
}; 