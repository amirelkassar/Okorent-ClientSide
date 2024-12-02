import { api } from "@/src/api/axios";
import { user } from "@/src/api/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
export const initialQueryKey = "user.addListing";

//getCategory
export const GetCategory = () => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: [initialQueryKey],
    queryFn: async () => {
      const response = await api.get(user.addListing.category);
      return response.data;
    },
  });
};

export const useCreateListingMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(user.addListing.base, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};
