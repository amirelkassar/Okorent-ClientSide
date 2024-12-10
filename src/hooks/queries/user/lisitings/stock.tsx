import { api } from "@/src/api/axios";
import { user } from "@/src/api/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const initialQueryKey = "user.myProductsAll";

//getMyAllProducts
export const GetMyStock = () => {
  return useQuery({
    queryKey: [initialQueryKey],
    queryFn: async () => {
      const response = await api.get(user.stock.base);
      return response.data;
    },
  });
};

//Post New Stock
export const useCreateStockMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(user.stock.base, data, {});
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


//Edit New Stock
export const useEditStockMutation = (id: any) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data:any) => {
      const response = await api.put(user.stock.actions.edit(id), data, {});
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
};