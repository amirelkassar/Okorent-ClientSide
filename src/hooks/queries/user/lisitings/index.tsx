import { api } from "@/src/api/axios";
import { user } from "@/src/api/user";
import { getQueries } from "@/src/lib/utils";
import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { initialSiteQueries } from "../../initials";

const initialCustomQueries = null;
export const initialQueries = initialCustomQueries || initialSiteQueries;
export const initialQueryKey = "user.myProductsAll";

//getMyAllProducts
export const GetMyProductsAll = (queries?: any) => {
  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: async () => {
      const response = await api.get(user.product.my_products(queries));
      return response.data;
    },
  });
};
//getProductByID
export const GetMyProductsByID = (id: any) => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () => {
      const response = await api.get(user.product.getMyProductsById(id));
      return response.data;
    },
  });
};

//Delete Product
export const useDeleteMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: any) => {
      const response = await api.delete(user.product.getById(id));
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
}

export const getComplaints = async (queries: any) =>
  (await api.get(user.product.my_products(queries))).data;

export const prefetchComplaints = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [initialQueryKey, initialQueries],
    queryFn: () => getComplaints(initialQueries),
  });

  return queryClient;
};

//getAll
export const useComplaints = (
  params = {
    pageNum: null,
    search: "",
  }
) => {
  const queries = getQueries({ params, initialQueries });

  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: () => getComplaints(queries),
    placeholderData: (previousData: any) => previousData, // Identity function
  });
};
