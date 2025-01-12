import { api } from "@/src/api/axios";
import { user } from "@/src/api/user";
import { useQuery } from "@tanstack/react-query";
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

