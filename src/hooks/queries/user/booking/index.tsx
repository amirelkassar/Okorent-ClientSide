import { api } from "@/src/api/axios";
import { user } from "@/src/api/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { initialSiteQueries } from "../../initials";

const initialCustomQueries = null;
export const initialQueries = initialCustomQueries || initialSiteQueries;
export const initialQueryKey = "user.myOrderAll";
export const initialQueryKeyOut = "user.myOrderOutAll";

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
    mutationFn: async (data:any) => {
      const response = await api.post(user.order.cancel_iRent,data);
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries([initialQueryKey]);
      queryClient.invalidateQueries([initialQueryKeyOut]);
      console.log(res);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};