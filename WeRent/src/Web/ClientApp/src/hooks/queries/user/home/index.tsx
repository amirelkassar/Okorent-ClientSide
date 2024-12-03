import { api } from "@/src/api/axios";
import { user } from "@/src/api/user";
import { useQuery, useQueryClient } from "@tanstack/react-query";
export const initialQueryKey = "user.addListing";

export const GetProductsAll = () => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: [initialQueryKey],
    queryFn: async () => {
      const response = await api.get(user.product.base);
      return response.data;
    },
  });
};
