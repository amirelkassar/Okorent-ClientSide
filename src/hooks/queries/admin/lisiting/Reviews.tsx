import { api } from "@/src/api/axios";
import { admin } from "@/src/api/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
export const initialQueryKey = "admin_review";
export const initialQueryKeyProducts = "admin_products";

//get Review Product ID
export const GetReviewByIDInAdmin = (id: any) => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () => {
      const response = await api.get(admin.ProductReviews.base(id));
      return response.data;
    },
  });
};

//Edit Review Product In Admin
export const useEditReviewInAdmin = (id: any) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.put(admin.ProductReviews.Update, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      queryClient.refetchQueries([initialQueryKey, id]);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};

//Delete Review Product
export const useDeleteReviewProductInAdmin = (idProduct: any) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: any) => {
      const response = await api.delete(admin.ProductReviews.base(id));
      return response.data;
    },

    onSuccess: (res) => {
      queryClient.invalidateQueries([initialQueryKey, idProduct]);
      console.log(res);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};
