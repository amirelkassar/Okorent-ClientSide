import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { customerApi, CustomerDTO } from '@/src/api/admin/customers';
import { Toast } from '@/src/components/toast';

export const CUSTOMER_KEYS = {
  all: ['customers'] as const,
  lists: () => [...CUSTOMER_KEYS.all, 'list'] as const,
  list: (filters: any) => [...CUSTOMER_KEYS.lists(), { filters }] as const,
  details: () => [...CUSTOMER_KEYS.all, 'detail'] as const,
  detail: (id: string) => [...CUSTOMER_KEYS.details(), id] as const,
};

export const useCustomers = (params?: { page?: number; limit?: number }) => {
  return useQuery({
    queryKey: CUSTOMER_KEYS.list(params),
    queryFn: () => customerApi.getAll(params),
  });
};

export const useCustomer = (id: string) => {
  return useQuery({
    queryKey: CUSTOMER_KEYS.detail(id),
    queryFn: () => customerApi.getById(id),
    enabled: !!id,
  });
};

export const useCreateCustomer = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Omit<CustomerDTO, 'id'>) => customerApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CUSTOMER_KEYS.lists() });
      Toast.Notification('Customer created successfully');
    },
    onError: (error: any) => {
      Toast.Notification(error?.response?.data?.message || 'Failed to create customer');
    },
  });
};

export const useUpdateCustomer = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<CustomerDTO> }) =>
      customerApi.update(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: CUSTOMER_KEYS.lists() });
      queryClient.invalidateQueries({
        queryKey: CUSTOMER_KEYS.detail(variables.id),
      });
      Toast.Notification('Customer updated successfully');
    },
    onError: (error: any) => {
      Toast.Notification(error.message || 'Failed to update customer');
    },
  });
};

export const useDeleteCustomer = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => customerApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CUSTOMER_KEYS.lists() });
      Toast.Notification('Customer deleted successfully');
    },
    onError: (error: any) => {
      Toast.Notification(error.message || 'Failed to delete customer');
    },
  });
};
