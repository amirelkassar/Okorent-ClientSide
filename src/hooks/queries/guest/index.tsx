import { api } from "@/src/api/axios";
import { user } from "@/src/api/user";
import { useMutation, useQuery } from "@tanstack/react-query";
export const initialQueryKey = "user.review";

//get Review ID
export const GetReviewByIDInGuest = (id: any) => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () => {
      const response = await api.get(user.order.reviewUser.getByID(id));
      return response.data;
    },
  });
};

export const useContactUs = () => {
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(user.contact_us.base, data, {
        headers: {
          Accept: "text/plain",
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
