import { api } from '@/src/api/axios';
import { user } from '@/src/api/user';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Toast } from '@/src/components/toast';

export const initialQueryKey = 'user.myOrderAll';
export const initialQueryTrackerKey = 'user.orderTracker';
export const initialQueryKeyCard = 'user.myOrderAllCard';
export const initialQueryKeyOut = 'user.myOrderOutAll';
export const initialQueryKeyOutCard = 'user.myOrderOutAllCard';

/**
 * Creates a new order
 * @param queries Query parameters to refresh after order creation
 */
export const useCreateOrderMutation = (queries: any) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(user.order.base, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    },
    onSuccess: async (res) => {
      Toast.Notification('Order created successfully');
      queryClient.refetchQueries({ queryKey: [initialQueryKey, queries] });
    },
    onError: (error: any) => {
      Toast.Notification(error?.response?.data?.message || 'Failed to create order');
      console.log(error);
    },
  });
};

/**
 * Fetches an order by ID
 * @param id Order ID
 */
export const GetOrderByID = (id: any) => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () => {
      const response = await api.get(user.order.getById(id));
      return response.data;
    },
    enabled: !!id, // Only run the query if ID is provided
  });
};

/**
 * Fetches order tracking information by ID
 * @param id Order ID
 */
export const GetOrderTrackerByID = (id: any) => {
  return useQuery({
    queryKey: [initialQueryTrackerKey, id],
    queryFn: async () => {
      const response = await api.get(user.order.order_tracker(id));
      return response.data;
    },
    enabled: !!id, // Only run the query if ID is provided
    refetchInterval: 30000, // Refetch every 30 seconds for real-time tracking
  });
};

/**
 * Fetches order data for editing
 * This is currently identical to GetOrderByID but may be extended in the future
 * @param id Order ID
 */
export const EditOrderByID = (id: any) => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () => {
      const response = await api.get(user.order.getById(id));
      return response.data;
    },
    enabled: !!id, // Only run the query if ID is provided
  });
};

/**
 * Updates an order by ID
 * @param id Order ID
 */
export const useEditOrderByIDMutation = (id: any) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.put(user.order.getById(id), data, {});
      return response.data;
    },
    onSuccess: async (res) => {
      Toast.Notification('Order updated successfully');
      queryClient.invalidateQueries({ queryKey: [initialQueryKey] });
      queryClient.invalidateQueries({ queryKey: [initialQueryTrackerKey, id] });
    },
    onError: (error: any) => {
      Toast.Notification(error?.response?.data?.message || 'Failed to update order');
      console.log(error);
    },
  });
};

/**
 * Downloads invoice for an order
 * @param id Order ID
 */
export const useDownloadInvoice = (id: any) => {
  return useMutation({
    mutationFn: async () => {
      const response = await api.post(
        user.order.download_invoice(id),
        {},
        { responseType: 'blob' },
      );
      return response.data;
    },
    onSuccess: async (blob) => {
      // Create a download link for the blob
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `invoice-${id}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();

      Toast.Notification('Invoice downloaded successfully');
    },
    onError: (error) => {
      Toast.Notification('Failed to download invoice');
      console.log(error);
    },
  });
};

/**
 * Fetches all orders with optional filtering
 * @param queries Query string to filter orders
 */
export const GetMyOrderAll = (queries?: any) => {
  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: async () => {
      const response = await api.get(
        user.order.booking.i_rent(queries ? `OrderType=myorders&${queries}` : 'OrderType=myorders'),
      );
      return response.data;
    },
  });
};

/**
 * Fetches orders in card view format with optional filtering
 * @param queries Query string to filter orders
 */
export const GetMyOrderAllCardView = (queries?: any) => {
  return useQuery({
    queryKey: [initialQueryKeyCard, queries],
    queryFn: async () => {
      const response = await api.get(
        user.order.booking.i_rent_card(
          queries ? `OrderType=myorders&${queries}` : 'OrderType=myorders',
        ),
      );
      return response.data;
    },
  });
};

/**
 * Get all outgoing orders (orders where user is the lessor)
 * @param queries Query string for filtering
 */
export const GetMyOrderOutAll = (queries?: any) => {
  return useQuery({
    queryKey: [initialQueryKeyOut, queries],
    queryFn: async () => {
      const response = await api.get(
        user.order.booking.i_rentOut(
          queries ? `OrderType=myordersout&${queries}` : 'OrderType=myordersout',
        ),
      );
      return response.data;
    },
  });
};

/**
 * Get outgoing orders in card view
 * @param queries Query string for filtering
 */
export const GetMyOrderOutAllCardView = (queries?: any) => {
  return useQuery({
    queryKey: [initialQueryKeyOutCard, queries],
    queryFn: async () => {
      const response = await api.get(
        user.order.booking.i_rent_card(
          queries ? `OrderType=myordersout&${queries}` : 'OrderType=myordersout',
        ),
      );
      return response.data;
    },
  });
};

/**
 * Get orders by specific status
 * @param number Status number to filter by
 */
export const GetMyOrderAllByList = (number?: number) => {
  return useQuery({
    queryKey: ['myOrders', number],
    queryFn: async () => {
      const response = await api.get(
        user.order.booking.i_rent(`OrderType=myorders&PageSize=5&OrderStatus=${number}`),
      );
      return response.data;
    },
    enabled: !!number, // Only run if `number` is valid
    staleTime: Infinity, // Cache data indefinitely
    refetchOnWindowFocus: false, // Do not refetch when the window regains focus
    refetchOnMount: false, // Do not refetch when the component remounts
    retry: 0, // Do not retry failed requests
  });
};

/**
 * Get product details by ID
 * @param id Product ID
 */
export const GetMyProductsByID = (id: any) => {
  return useQuery({
    queryKey: [initialQueryKeyOut, id],
    queryFn: async () => {
      const response = await api.get(user.product.getMyProductsById(id));
      return response.data;
    },
    enabled: !!id,
  });
};

/**
 * Change order status by ID
 * @param id Order ID
 */
export const ChangeStautsByID = (id?: any) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      data,
    }: {
      data?: {
        OrderId: any;
        LessorSignatureFile: File | null;
      };
    }) => {
      const response = await api.put(
        user.order.booking.changeStatusById(id),
        data
          ? data
          : {
              orderId: id,
            },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      return response.data;
    },
    onSuccess: (res) => {
      Toast.Notification('Status updated successfully');
      queryClient.invalidateQueries({ queryKey: [initialQueryKeyOut] });
      queryClient.invalidateQueries({ queryKey: [initialQueryKeyOutCard] });
      queryClient.invalidateQueries({ queryKey: [initialQueryKey] });
      queryClient.invalidateQueries({ queryKey: [initialQueryKeyCard] });
    },
    onError: (error: any) => {
      Toast.Notification(error?.response?.data?.message || 'Failed to update status');
      console.log(error);
    },
  });
};

/**
 * Change status for multiple orders
 */
export const ChangeStatusByIDs = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data?: any) => {
      const response = await api.put(user.order.booking.changeStatusByIds, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    },
    onSuccess: (res) => {
      Toast.Notification('Orders status updated successfully');
      queryClient.invalidateQueries({ queryKey: [initialQueryKeyOut] });
      queryClient.invalidateQueries({ queryKey: [initialQueryKeyOutCard] });
      queryClient.invalidateQueries({ queryKey: [initialQueryKey] });
      queryClient.invalidateQueries({ queryKey: [initialQueryKeyCard] });
    },
    onError: (error: any) => {
      Toast.Notification(error?.response?.data?.message || 'Failed to update statuses');
      console.log(error);
    },
  });
};

/**
 * Delete an outgoing order
 */
export const useDeleteOrderOutMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: any) => {
      const response = await api.delete(user.order.getById(id));
      return response.data;
    },
    onSuccess: (res) => {
      Toast.Notification('Order deleted successfully');
      queryClient.invalidateQueries({ queryKey: [initialQueryKeyOut] });
      queryClient.invalidateQueries({ queryKey: [initialQueryKeyOutCard] });
    },
    onError: (error: any) => {
      Toast.Notification(error?.response?.data?.message || 'Failed to delete order');
      console.log(error);
    },
  });
};

/**
 * Cancel an order (as a renter)
 */
export const useCancelOrderMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(user.order.cancel_iRent, data);
      return response.data;
    },
    onSuccess: (res) => {
      Toast.Notification('Order cancelled successfully');
      queryClient.invalidateQueries({ queryKey: [initialQueryKey] });
      queryClient.invalidateQueries({ queryKey: [initialQueryKeyCard] });
    },
    onError: (error: any) => {
      Toast.Notification(error?.response?.data?.message || 'Failed to cancel order');
      console.log(error);
    },
  });
};

/**
 * Cancel multiple orders at once
 */
export const useCancelManyOrderMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(user.order.cancel_iRent_many, data);
      return response.data;
    },
    onSuccess: (res) => {
      Toast.Notification('Orders cancelled successfully');
      queryClient.invalidateQueries({ queryKey: [initialQueryKey] });
      queryClient.invalidateQueries({ queryKey: [initialQueryKeyCard] });
    },
    onError: (error: any) => {
      Toast.Notification(error?.response?.data?.message || 'Failed to cancel orders');
      console.log(error);
    },
  });
};

/**
 * Reject an order (as a lessor)
 */
export const useRejectOrderOutMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(user.order.reject_iRent, data);
      return response.data;
    },
    onSuccess: (res) => {
      Toast.Notification('Order rejected successfully');
      queryClient.invalidateQueries({ queryKey: [initialQueryKeyOut] });
      queryClient.invalidateQueries({ queryKey: [initialQueryKeyOutCard] });
    },
    onError: (error: any) => {
      Toast.Notification(error?.response?.data?.message || 'Failed to reject order');
      console.log(error);
    },
  });
};

/**
 * Reject multiple orders at once (as a lessor)
 */
export const useRejectManyOrderOutMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(user.order.rejects_iRent, data);
      return response.data;
    },
    onSuccess: (res) => {
      Toast.Notification('Orders rejected successfully');
      queryClient.invalidateQueries({ queryKey: [initialQueryKeyOut] });
      queryClient.invalidateQueries({ queryKey: [initialQueryKeyOutCard] });
    },
    onError: (error: any) => {
      Toast.Notification(error?.response?.data?.message || 'Failed to reject orders');
      console.log(error);
    },
  });
};

/**
 * Cancel an outgoing order (as a lessor)
 */
export const useCancelOrderOutMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(user.order.cancel_iRent_out, data);
      return response.data;
    },
    onSuccess: (res) => {
      Toast.Notification('Order cancelled successfully');
      queryClient.invalidateQueries({ queryKey: [initialQueryKeyOut] });
      queryClient.invalidateQueries({ queryKey: [initialQueryKeyOutCard] });
    },
    onError: (error: any) => {
      Toast.Notification(error?.response?.data?.message || 'Failed to cancel order');
      console.log(error);
    },
  });
};

/**
 * Cancel multiple outgoing orders at once (as a lessor)
 */
export const useCancelManyOrderOutMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(user.order.cancel_iRent_out, data);
      return response.data;
    },
    onSuccess: (res) => {
      Toast.Notification('Orders cancelled successfully');
      queryClient.invalidateQueries({ queryKey: [initialQueryKeyOut] });
      queryClient.invalidateQueries({ queryKey: [initialQueryKeyOutCard] });
    },
    onError: (error: any) => {
      Toast.Notification(error?.response?.data?.message || 'Failed to cancel orders');
      console.log(error);
    },
  });
};

/**
 * Delete an incoming order (as a renter)
 */
export const useDeleteOrderMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: any) => {
      const response = await api.delete(user.order.getById(id));
      return response.data;
    },
    onSuccess: (res) => {
      Toast.Notification('Order deleted successfully');
      queryClient.invalidateQueries({ queryKey: [initialQueryKey] });
      queryClient.invalidateQueries({ queryKey: [initialQueryKeyCard] });
    },
    onError: (error: any) => {
      Toast.Notification(error?.response?.data?.message || 'Failed to delete order');
      console.log(error);
    },
  });
};

/**
 * Refund an order (as a renter)
 */
export const useRefundOrderMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(user.order.refund_iRent, data);
      return response.data;
    },
    onSuccess: (res) => {
      Toast.Notification('Refund requested successfully');
      queryClient.invalidateQueries({ queryKey: [initialQueryKey] });
      queryClient.invalidateQueries({ queryKey: [initialQueryKeyCard] });
    },
    onError: (error: any) => {
      Toast.Notification(error?.response?.data?.message || 'Failed to request refund');
      console.log(error);
    },
  });
};

/**
 * Refund multiple orders at once (as a renter)
 */
export const useRefundManyOrderMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(user.order.refunds_iRent, data);
      return response.data;
    },
    onSuccess: (res) => {
      Toast.Notification('Refunds requested successfully');
      queryClient.invalidateQueries({ queryKey: [initialQueryKey] });
      queryClient.invalidateQueries({ queryKey: [initialQueryKeyCard] });
    },
    onError: (error: any) => {
      Toast.Notification(error?.response?.data?.message || 'Failed to request refunds');
      console.log(error);
    },
  });
};

/**
 * Refund an outgoing order (as a lessor)
 */
export const useRefundOrderOutMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(user.order.refund_iRent_out, data);
      return response.data;
    },
    onSuccess: (res) => {
      Toast.Notification('Refund processed successfully');
      queryClient.invalidateQueries({ queryKey: [initialQueryKeyOut] });
      queryClient.invalidateQueries({ queryKey: [initialQueryKeyOutCard] });
    },
    onError: (error: any) => {
      Toast.Notification(error?.response?.data?.message || 'Failed to process refund');
      console.log(error);
    },
  });
};

/**
 * Refund multiple outgoing orders at once (as a lessor)
 */
export const useRefundManyOrderOutMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(user.order.refunds_iRent_out, data);
      return response.data;
    },
    onSuccess: (res) => {
      Toast.Notification('Refunds processed successfully');
      queryClient.invalidateQueries({ queryKey: [initialQueryKeyOut] });
      queryClient.invalidateQueries({ queryKey: [initialQueryKeyOutCard] });
    },
    onError: (error: any) => {
      Toast.Notification(error?.response?.data?.message || 'Failed to process refunds');
      console.log(error);
    },
  });
};

/**
 * Generate a QR code for an order
 */
export const GetQrCodeOrder = () => {
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(user.order.barcode, data, {
        headers: {
          'Content-Type': 'application/json',
        },
        responseType: 'blob',
      });
      return response;
    },
    onSuccess: (res) => {
      // Create a download link for the blob
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `qrcode-order.png`);
      document.body.appendChild(link);
      link.click();
      link.remove();

      Toast.Notification('QR code downloaded successfully');
    },
    onError: (error) => {
      Toast.Notification('Failed to generate QR code');
      console.log(error);
    },
  });
};

/**
 * Generate a shipping label for an order
 */
export const GetShippingLabel = () => {
  return useMutation({
    mutationFn: async (id: any) => {
      const response = await api.post(user.order.shipping_label(id), {}, { responseType: 'blob' });
      return response.data;
    },
    onSuccess: (blob) => {
      // Create a download link for the blob
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `shipping-label.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();

      Toast.Notification('Shipping label downloaded successfully');
    },
    onError: (error) => {
      Toast.Notification('Failed to generate shipping label');
      console.log(error);
    },
  });
};
