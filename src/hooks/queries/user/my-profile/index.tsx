import { api } from "@/src/api/axios";
import { user } from "@/src/api/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const initialQueryKeyMyProfile = "MyProfile";
export const initialQueryKeyMyProfileReviews = "MyProfile.Reviews";
export const initialQueryKeyRecentActivitiesOrders =
  "MyProfile.RecentActivitiesOrders";

//get user information
export const GetMyProfile = () => {
  return useQuery({
    queryKey: [initialQueryKeyMyProfile],
    queryFn: async () => {
      const response = await api.get(user.MyProfile.base);
      return response.data;
    },
  });
};

//edit My Profile
export const useEditMyProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.put(user.MyProfile.base, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      queryClient.refetchQueries([initialQueryKeyMyProfile]);
    },
    onError: (err) => {
      console.log(err);
    },
  });
};

//get user information
export const GetMyReviewsAboutMe = () => {
  return useQuery({
    queryKey: [initialQueryKeyMyProfileReviews],
    queryFn: async () => {
      const response = await api.get(user.MyProfile.reviews);
      return response.data;
    },
  });
};

//edit Image My Profile
export const useEditImageMyProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.put(user.MyProfile.ImageUpdate, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      queryClient.refetchQueries([initialQueryKeyMyProfile]);
    },
    onError: (err) => {
      console.log(err);
    },
  });
};

//get My Recent Activities
export const GetRecentActivitiesOrders = () => {
  return useQuery({
    queryKey: [initialQueryKeyRecentActivitiesOrders],
    queryFn: async () => {
      const response = await api.get(user.MyProfile.RecentActivities);
      return response.data;
    },
  });
};
