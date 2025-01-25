"use client";
import { api } from "@/src/api/axios";
import { Support, SupportAdmin } from "@/src/api/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
export const initialQueryKey = "support";
export const initialQueryKeyAdmin = "support.admin";

//get all
export const GetSupportsMessages = (queries?: any): any => {
  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: async () => {
      const response = await api.get(Support.get_all(queries));
      return response.data;
    },
  });
};

//get one Message Support
export const GetOneMessagesSupport = (id: any): any => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () => {
      const response = await api.get(Support.get_by_id(id));
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
//send Reply
export const useSendReply = (id: any) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(Support.reply_user, data, {
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
      queryClient.refetchQueries([initialQueryKey, id]);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};
//solved Support
export const useSolvedSupport = (id: any) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(Support.solved, data, {
        headers: {
          Accept: "text/plain",
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      queryClient.refetchQueries([initialQueryKey, id]);
      queryClient.refetchQueries([initialQueryKey]);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};

//******************* admin support ************************

//get all in admin
export const GetSupportsMessagesInAdmin = (queries?: any): any => {
  return useQuery({
    queryKey: [initialQueryKeyAdmin, queries],
    queryFn: async () => {
      const response = await api.get(SupportAdmin.get_all(queries));
      return response.data;
    },
  });
};

//get one Message Support in admin
export const GetOneMessagesSupportInAdmin = (id: any): any => {
  return useQuery({
    queryKey: [initialQueryKeyAdmin, id],
    queryFn: async () => {
      const response = await api.get(SupportAdmin.get_by_id(id));
      return response.data;
    },
  });
};

//send ContactUs
export const useReplyAdmin = (id: any) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(SupportAdmin.reply_admin, data, {
        headers: {
          Accept: "text/plain",
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      queryClient.refetchQueries([initialQueryKeyAdmin, id]);
      queryClient.refetchQueries([initialQueryKeyAdmin]);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};

//solved Support in admin
export const useSolvedSupportInAdmin = (id: any) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(SupportAdmin.solved, data, {
        headers: {
          Accept: "text/plain",
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      queryClient.refetchQueries([initialQueryKeyAdmin, id]);
      queryClient.refetchQueries([initialQueryKeyAdmin]);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};

//delete Support in admin
export const useDeleteSupportInAdmin = (id: any) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.delete(SupportAdmin.delete, {
        data,
        headers: {
          Accept: "text/plain",
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      queryClient.refetchQueries([initialQueryKeyAdmin, id]);
      queryClient.refetchQueries([initialQueryKeyAdmin]);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};
