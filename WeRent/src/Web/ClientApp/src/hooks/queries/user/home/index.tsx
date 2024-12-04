import { api } from "@/src/api/axios";
import { user } from "@/src/api/user";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
export const initialQueryKey = "user.addListing";

//getAllProducts
export const GetProductsAll = () => {

  return useQuery({
    queryKey: [initialQueryKey],
    queryFn: async () => {
      const response = await api.get(user.product.base);
      return response.data;
    },
  });
};


export const getComplaints = async () =>
  (await api.get(user.product.base))
    .data;

export const prefetchComplaints = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [initialQueryKey],
    queryFn: () => getComplaints(),
  });

  return queryClient;
}






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

