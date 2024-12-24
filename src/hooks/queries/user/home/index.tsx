"use client";
import { api } from "@/src/api/axios";
import { user } from "@/src/api/user";
import { useToken } from "@/src/hooks/use-token";
import { getToken } from "@/token";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
export const initialQueryKey = "user.productsAll";
export const initialQueryKeyUser = "user.productsAllUser";
const token = getToken();
//getAllProducts
export const GetProductsAll = (queries?: any) => {
  const { token } = useToken();
  return useQuery({
    queryKey: [token?.userID ? initialQueryKeyUser : initialQueryKey, queries], // إضافة queries إلى queryKey
    queryFn: async () => {
      const response = await api.get(`${user.product.base(queries)}`);
      return response.data;
    },
    refetchInterval: 10000,
  });
};
//getProductByID
export const GetProductsByID = (id: any) => {
  const { token } = useToken();
  return useQuery({
    queryKey: [token?.userID ? initialQueryKeyUser : initialQueryKey, id],
    queryFn: async () => {
      const response = await api.get(user.product.getById(id));
      return response.data;
    },
  });
};

//Favorite Product
export const useFavoriteProductMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(user.product.favoriteProducts, data);
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries([initialQueryKeyUser]);
      console.log(res);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};

//Delete Favorite Product
export const useDeleteFavoriteProductMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: any) => {
      const response = await api.delete(user.product.DeleteFavoriteProducts(id));
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries([initialQueryKeyUser]);
      console.log(res);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};