"use client";
import { api } from "@/src/api/axios";
import { Support } from "@/src/api/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
export const initialQueryKey = "support";

//get all
export const GetSupportsMessages = (queries?: any): any => {
  return useQuery({
    queryKey: [initialQueryKey,queries],
    queryFn: async () => {
      const response = await api.get(Support.get_all(queries));
      return response.data;
    },
  });
};

//send ContactUs
export const useContactUs = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(Support.create_guest, data, {
        headers: {
          Accept: "text/plain",
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      queryClient.refetchQueries([initialQueryKey]);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};

// send supportUser
export const useSupportUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(Support.create_user, data, {
        headers: {
          Accept: "text/plain",
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      queryClient.refetchQueries([initialQueryKey]);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};
