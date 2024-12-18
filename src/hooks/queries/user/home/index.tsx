"use client";
import { api } from "@/src/api/axios";
import { user } from "@/src/api/user";
import { useToken } from "@/src/hooks/use-token";
import { getToken } from "@/token";
import { useQuery } from "@tanstack/react-query";
export const initialQueryKey = "user.productsAll";
export const initialQueryKeyUser = "user.productsAllUser";
const token = getToken()
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
