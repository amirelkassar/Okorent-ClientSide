import { api } from "@/src/api/axios";
import { admin } from "@/src/api/user";
import { useQuery } from "@tanstack/react-query";
export const initialQueryKey = "Accounts.dashboard";
export const initialQueryKeyTransactions = "Accounts.dashboard.Transactions";
export const initialQueryKeyRentals = "Accounts.dashboard.Rentals";
export const initialQueryKeyInventory = "Accounts.dashboard.Inventory";

// Get Accounts Dashboard By ID In Admin
export const GetAccountDashboardByID = (id: any) => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () => {
      const response = await api.get(admin.Account_Dashboard.base(id));
      return response.data;
    },
  });
};

// Get Accounts Transactions  Dashboard By ID In Admin
export const GetAccountTransactionsDashboardByID = (id: any, queries: any) => {
  return useQuery({
    queryKey: [initialQueryKeyTransactions, queries, id],
    queryFn: async () => {
      const response = await api.get(
        admin.Account_Dashboard.Transactions(id, queries)
      );
      return response.data;
    },
  });
};

// Get Accounts Transactions  Dashboard By ID In Admin
export const GetAccountRentalsPerformanceByID = (id: any) => {
  return useQuery({
    queryKey: [initialQueryKeyRentals, id],
    queryFn: async () => {
      const response = await api.get(admin.Account_Dashboard.Rentals(id));
      return response.data;
    },
  });
};

// Get Accounts Transactions  Dashboard By ID In Admin
export const GetAccountInventoryByID = (id: any) => {
  return useQuery({
    queryKey: [initialQueryKeyInventory, id],
    queryFn: async () => {
      const response = await api.get(admin.Account_Dashboard.Inventory(id));
      return response.data;
    },
  });
};
