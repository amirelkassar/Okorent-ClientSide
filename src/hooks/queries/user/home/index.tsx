import { api } from "@/src/api/axios";
import { user } from "@/src/api/user";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
export const initialQueryKey = "user.productsAll";

//getAllProducts
export const GetProductsAll = (queries?: any) => {
  return useQuery({
    queryKey: [initialQueryKey],
    queryFn: async () => {
      const response = await api.get(
        `${user.product.base}`
      );
      return response.data;
    },
  });
};

//getProductByID
export const GetProductsByID = (id: any) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () => {
      const response = await api.get(user.product.getById(id));
      return response.data;
    },
  });
};
