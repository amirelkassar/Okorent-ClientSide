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
// Get New Subscriptions
export const GetNewSubscriptions = () => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: [initialQueryKey, "IsNewUser=true"],
    queryFn: async () => {
      const response = await api.get(admin.Accounts.base("IsNewUser=true"));
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
      queryClient.refetchQueries([initialQueryKey]);
      queryClient.refetchQueries([initialQueryKey, ""]);
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
// DeActivate Many Account In Admin
export const useDeActivateManyAccountInAdmin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.put(admin.Accounts.DeActivateMany, data, {});
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

//Active Many Account In Admin
export const useActiveManyAccountInAdmin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(admin.Accounts.ActiveManyUser, data, {});
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.refetchQueries([initialQueryKey]);
      console.log(res);
    },
    onError: (res) => {
      queryClient.refetchQueries([initialQueryKey]);

      console.log(res);
    },
  });
};

//Delete Many Account In Admin
export const useDeleteManyAccountInAdmin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.delete(admin.Accounts.DeleteManyAccounts, {
        data: data,
      });
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.refetchQueries([initialQueryKey]);
      console.log(res);
    },
    onError: (res) => {
      queryClient.refetchQueries([initialQueryKey]);

      console.log(res);
    },
  });
};

// Edit Account ID In Admin
export const useEditAccountIDInAdmin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.put(admin.Accounts.UpdateUserProfile, data, {
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

//edit Image User Profile
export const useEditImageUserProfileInAdmin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.put(admin.Accounts.UpdateImageUserProfile, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      queryClient.invalidateQueries([initialQueryKey]);
    },
    onError: (err) => {
      console.log(err);
    },
  });
};

// Verification Account In Admin
export const useVerificationAccountInAdmin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.put(admin.Accounts.Verification, data, {});
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries([initialQueryKey]);
    },
    onError: () => {},
  });
};

// Verification Many Account In Admin
export const useVerificationManyAccountInAdmin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.put(
        admin.Accounts.Verification_Many,
        data,
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
