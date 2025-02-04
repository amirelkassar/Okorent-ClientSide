"use client";
import { api } from "@/src/api/axios";
import { admin } from "@/src/api/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const initialQueryKey = "admin.Invoices";

// Get InvoicesInAdmin
export const GetInvoicesInAdmin = (queries?: any) => {
  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: async () => {
      const response = await api.get(admin.Invoices.base(queries));
      return response.data;
    },
  });
};

//Delete InvoicesInAdmin
export const useDeleteInvoicesInAdmin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(admin.Invoices.delete, data);
      return response.data;
    },

    onSuccess: (res) => {
      queryClient.invalidateQueries([initialQueryKey]);
      console.log(res);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};
