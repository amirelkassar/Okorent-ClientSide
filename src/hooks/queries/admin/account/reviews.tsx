import { api } from "@/src/api/axios";
import { admin, user } from "@/src/api/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const initialQueryKey = "admin.review";



//get Review USer
export const GetReviewsUserInAdmin = (id: any) => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () => {
      const response = await api.get(admin.userReview.base(id));
      return response.data;
    },
  });
};

//Edit Review User In Admin
export const useEditReviewUserInAdmin = (id: any) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.put(admin.userReview.Update, data, {
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

//Delete Review User
export const useDeleteReviewUserInAdmin = (idUser: any) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: any) => {
      const response = await api.delete(admin.userReview.delete(id));
      return response.data;
    },

    onSuccess: (res) => {
      queryClient.invalidateQueries([initialQueryKey, idUser]);
      console.log(res);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};
