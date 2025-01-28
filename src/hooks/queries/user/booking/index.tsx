import { api } from "@/src/api/axios";
import { user } from "@/src/api/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { initialSiteQueries } from "../../initials";

const initialCustomQueries = null;
export const initialQueries = initialCustomQueries || initialSiteQueries;
export const initialQueryKey = "user.myOrderAll";
export const initialQueryKeyOut = "user.myOrderOutAll";
export const initialQueryKeyCard = "user.myOrderAllCard";
export const initialQueryKeyOutCard = "user.myOrderOutAllCard";

//getMyAllProducts
export const GetMyOrderOutAll = (queries?: any) => {
  return useQuery({
    queryKey: [initialQueryKeyOut, queries],
    queryFn: async () => {
      const response = await api.get(
        user.order.booking.i_rentOut("OrderType=myordersout&" + queries)
      );
      return response.data;
    },
  });
};
//get Orders Card View
export const GetMyOrderOutAllCardView = (queries?: any) => {
  return useQuery({
    queryKey: [initialQueryKeyOutCard, queries],
    queryFn: async () => {
      const response = await api.get(
        user.order.booking.i_rent_card("OrderType=myordersout&" + queries)
      );
      return response.data;
    },
  });
};
//getMyAllProducts
export const GetMyOrderAll = (queries?: any) => {
  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: async () => {
      const response = await api.get(
        user.order.booking.i_rent("OrderType=myorders&" + queries)
      );
      return response.data;
    },
  });
};
//get Orders Card View
export const GetMyOrderAllCardView = (queries?: any) => {
  return useQuery({
    queryKey: [initialQueryKeyCard, queries],
    queryFn: async () => {
      const response = await api.get(
        user.order.booking.i_rent_card("OrderType=myorders&" + queries)
      );
      return response.data;
    },
  });
};

//getMyAllProducts
export const GetMyOrderAllByList = (number?: number) => {
  return useQuery({
    queryKey: ["myOrders", number],
    queryFn: async () => {
      const response = await api.get(
        user.order.booking.i_rent(
          `OrderType=myorders&PageSize=5&OrderStatus=${number}`
        )
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
//getProductByID
export const GetMyProductsByID = (id: any) => {
  return useQuery({
    queryKey: [initialQueryKeyOut, id],
    queryFn: async () => {
      const response = await api.get(user.product.getMyProductsById(id));
      return response.data;
    },
  });
};

//ChangeStautsByID
export const ChangeStautsByID = (id: any) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const response = await api.put(user.order.booking.changeStatusById(id), {
        orderId: id,
      });
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries([initialQueryKeyOut]);
      queryClient.invalidateQueries([initialQueryKeyOutCard]);
      queryClient.invalidateQueries([initialQueryKey]);
      queryClient.invalidateQueries([initialQueryKeyCard]);
      console.log(res);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};
//ChangeStatusByIDs
export const ChangeStatusByIDs = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.put(
        user.order.booking.changeStatusByIds,
        data
      );
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries([initialQueryKeyOut]);
      queryClient.invalidateQueries([initialQueryKeyOutCard]);
      queryClient.invalidateQueries([initialQueryKey]);
      queryClient.invalidateQueries([initialQueryKeyCard]);
      console.log(res);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};

//Delete Product
export const useDeleteOrderOutMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: any) => {
      const response = await api.delete(user.order.getById(id));
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries([initialQueryKeyOut]);
      queryClient.invalidateQueries([initialQueryKeyOutCard]);
      console.log(res);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};
//Cancel Order
export const useCancelOrderMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(user.order.cancel_iRent, data);
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries([initialQueryKey]);
      queryClient.invalidateQueries([initialQueryKeyCard]);
      console.log(res);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};

//Cancel Many Order
export const useCancelManyOrderMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(user.order.cancel_iRent_many, data);
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries([initialQueryKey]);
      queryClient.invalidateQueries([initialQueryKeyCard]);
      console.log(res);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};

//Reject Product
export const useRejectOrderOutMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(user.order.reject_iRent, data);
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries([initialQueryKeyOut]);
      queryClient.invalidateQueries([initialQueryKeyOutCard]);
      console.log(res);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};

//Reject Product
export const useRejectManyOrderOutMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(user.order.rejects_iRent, data);
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries([initialQueryKeyOut]);
      queryClient.invalidateQueries([initialQueryKeyOutCard]);
      console.log(res);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};
//Cancel Order Out
export const useCancelOrderOutMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(user.order.cancel_iRent_out, data);
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries([initialQueryKeyOut]);
      queryClient.invalidateQueries([initialQueryKeyOutCard]);
      console.log(res);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};
//Cancel Order Out
export const useCancelManyOrderOutMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(user.order.cancel_iRent_out, data);
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries([initialQueryKeyOut]);
      queryClient.invalidateQueries([initialQueryKeyOutCard]);
      console.log(res);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};
//Delete Product iRent
export const useDeleteOrderMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: any) => {
      const response = await api.delete(user.order.getById(id));
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries([initialQueryKey]);
      queryClient.invalidateQueries([initialQueryKeyCard]);
      console.log(res);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};
//Refund Product iRent
export const useRefundOrderMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(user.order.refund_iRent, data);
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries([initialQueryKey]);
      queryClient.invalidateQueries([initialQueryKeyCard]);

      console.log(res);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};
//Refund Many Product iRent
export const useRefundManyOrderMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(user.order.refunds_iRent, data);
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries([initialQueryKey]);
      queryClient.invalidateQueries([initialQueryKeyCard]);

      console.log(res);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};
//Refund Product iRent Out
export const useRefundOrderOutMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(user.order.refund_iRent_out, data);
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries([initialQueryKeyOut]);
      queryClient.invalidateQueries([initialQueryKeyOutCard]);
      console.log(res);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};
//Refund Many Products iRent Out
export const useRefundManyOrderOutMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(user.order.refunds_iRent_out, data);
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries([initialQueryKeyOut]);
      queryClient.invalidateQueries([initialQueryKeyOutCard]);

      console.log(res);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};
// ReOrder
export const useReOrderByID = (id: any) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const response = await api.put(user.order.ReOrder, {
        id: id,
      });
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries([initialQueryKey]);
      queryClient.invalidateQueries([initialQueryKeyCard]);
      console.log(res);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};

//ReOrder Many Product
export const useReOrderManyByID = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.put(user.order.ReOrder_many, data);
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries([initialQueryKey]);
      queryClient.invalidateQueries([initialQueryKeyCard]);

      console.log(res);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};

//get QrCode
export const GetQrCodeOrder = () => {
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(user.order.barcode, data, {
        headers: {
          "Content-Type": "application/json",
        },
        responseType: "blob",
      });
      return response;
    },
    onSuccess: (res) => {
      console.log(res);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};
