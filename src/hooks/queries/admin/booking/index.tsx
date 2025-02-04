"use client";
import { api } from "@/src/api/axios";
import { admin, user } from "@/src/api/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const initialQueryKey = "admin.Order";

//get All Orders In Admin
export const GetOrdersInAdmin = (queries?: any) => {
  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: async () => {
      const response = await api.get(admin.Bookings.base(queries));
      return response.data;
    },
  });
};

//get  Orders ID In Admin
export const GetOrderIDInAdmin = (id: any) => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () => {
      const response = await api.get(admin.Bookings.BookingID(id));
      return response.data;
    },
  });
};

//Edit Order By ID In Admin
export const useEditOrderByIDInAdmin = (id: any) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.put(admin.Bookings.UpdateOrder, data, {});
      return response.data;
    },
    onSuccess: async (res) => {
      console.log(res);
      queryClient.invalidateQueries([initialQueryKey]);
      queryClient.invalidateQueries([initialQueryKey, id]);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};

//Delete  Order By ID In Admin
export const useDeleteOrderByIDInAdmin = (id: any) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const response = await api.delete(admin.Bookings.BookingID(id));
      return response.data;
    },
    onSuccess: async (res) => {
      console.log(res);
      queryClient.invalidateQueries([initialQueryKey]);
      queryClient.invalidateQueries([initialQueryKey, id]);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};

//Delete Many Order By ID In Admin
export const useDeleteManyOrderByIDInAdmin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(admin.Bookings.DeleteManyOrders, data);
      return response.data;
    },
    onSuccess: async (res) => {
      console.log(res);
      queryClient.invalidateQueries([initialQueryKey]);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};
