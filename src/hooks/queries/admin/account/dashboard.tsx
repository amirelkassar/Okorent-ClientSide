import { api } from "@/src/api/axios";
import { admin } from "@/src/api/user";
import { useQuery, useQueryClient } from "@tanstack/react-query";
export const initialQueryKey = "Accounts.dashboard";
export const initialQueryKeyTransactions = "Accounts.dashboard.Transactions";

// Get Accounts Dashboard By ID In Admin
export const GetAccountDashboardByID = (id: any) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () => {
      const response = await api.get(admin.Account_Dashboard.base(id));
      return response.data;
    },
  });
};

// Get Accounts Transactions  Dashboard By ID In Admin
export const GetAccountTransactionsDashboardByID = (id: any) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: [initialQueryKeyTransactions, id],
    queryFn: async () => {
      const response = await api.get(admin.Account_Dashboard.Transactions(id));
      return response.data;
    },
  });
};
