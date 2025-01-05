import { api } from "@/src/api/axios";
import { admin } from "@/src/api/user";
import { useQuery, useQueryClient } from "@tanstack/react-query";
export const initialQueryKey = "Accounts";

// Get Accounts
export const GetAccounts = (queries?: any) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: [initialQueryKey],
    queryFn: async () => {
      const response = await api.get(admin.Accounts.base(queries));
      return response.data;
    },
  });
};
