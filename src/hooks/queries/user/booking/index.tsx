import { api } from "@/src/api/axios";
import { user } from "@/src/api/user";
import {  useQuery } from "@tanstack/react-query";
import { initialSiteQueries } from "../../initials";

const initialCustomQueries = null;
export const initialQueries = initialCustomQueries || initialSiteQueries;
export const initialQueryKey = "user.myOrderAll";
export const initialQueryKeyOut = "user.myOrderOutAll";

//getMyAllProducts
export const GetMyOrderOutAll = (queries?: any) => {
  return useQuery({
    queryKey: [initialQueryKeyOut, queries],
    queryFn: async () => {
      const response = await api.get(user.order.booking.i_rentOut('OrderType=myordersout&'+queries));
      return response.data;
    },
  });
};
//getMyAllProducts
export const GetMyOrderAll = (queries?: any) => {
    return useQuery({
      queryKey: [initialQueryKey, queries],
      queryFn: async () => {
        const response = await api.get(user.order.booking.i_rent('OrderType=myorders&'+queries));
        return response.data;
      },
    });
  };
//getProductByID
export const GetMyProductsByID = (id: any) => {
  return useQuery({
    queryKey: [initialQueryKeyOut, id],
    queryFn: async () => {
      const response = await api.get(user.product.getMyProductsById(id));
      return response.data;
    },
  });
};

