import { api } from "@/src/api/axios";
import { user } from "@/src/api/user";
import { getQueries } from "@/src/lib/utils";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import { initialSiteQueries } from "../../initials";

const initialCustomQueries = null;
export const initialQueries = initialCustomQueries || initialSiteQueries;
export const initialQueryKey = "user.myProductsAll";

//getMyAllProducts
export const GetMyProductsAll = () => {
  return useQuery({
    queryKey: [initialQueryKey],
    queryFn: async () => {
      const response = await api.get(user.product.my_products());
      return response.data;
    },
  });
};

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
