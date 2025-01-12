"use client";
import { api } from "@/src/api/axios";
import { admin } from "@/src/api/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
export const initialQueryKey = "Accounts";

// Get Accounts
export const GetAccounts = (queries: any) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: async () => {
      const response = await api.get(admin.Accounts.base(queries));
      return response.data;
    },
  });
};

//get Account ByID
export const GetAccountInAdminByID = (id: any) => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () => {
      const response = await api.get(admin.Accounts.AccountsID(id));
      return response.data;
    },
  });
};

//Delete Account
export const useDeleteAccountInAdmin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: any) => {
      const response = await api.delete(admin.Accounts.AccountsID(id));
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

// Create Account
export const useCreateAccountInAdmin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(admin.Accounts.CreateAccounts, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries([initialQueryKey]);
    },
    onError: () => {},
  });
};

// Edit Account
export const useEditAccountInAdmin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.put(admin.Accounts.CreateAccounts, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries([initialQueryKey]);
    },
    onError: () => {},
  });
};

// DeActivate Account In Admin
export const useDeActivateAccountInAdmin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.put(admin.Accounts.DeActivate, data, {});
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries([initialQueryKey]);
    },
    onError: () => {},
  });
};

// Activate Account In Admin
export const useActivateAccountInAdmin = (id: any) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const response = await api.post(
        admin.Accounts.Activate,
        {
          userId: id,
        },
        {}
      );
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries([initialQueryKey]);
    },
    onError: () => {},
  });
};
