import { api } from "@/src/api/axios";
import { user } from "@/src/api/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
export const initialQueryKey = "user.myOrderAll";

export const useCreateOrderMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(user.order.base, data, {});
      return response.data;
    },
    onSuccess: async (res) => {
      console.log(res);
      queryClient.invalidateQueries([initialQueryKey]);
    },
    onError: (res) => {
        console.log(res);
        
    },
  });
};

//getProductByID
export const GetOrderByID = (id: any) => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () => {
      const response = await api.get(user.order.getById(id));
      return response.data;
    },
  });
};