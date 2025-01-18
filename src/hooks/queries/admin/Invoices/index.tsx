import { api } from "@/src/api/axios";
import { admin } from "@/src/api/user";
import { useQuery } from "@tanstack/react-query";

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
