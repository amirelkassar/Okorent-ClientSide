"use client";
import { api } from "@/src/api/axios";
import { user } from "@/src/api/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
export const initialQueryKey = "Ads.User";

// Get ads
export const GetUserAds = () => {
  return useQuery({
    queryKey: [initialQueryKey],
    queryFn: async () => {
      const response = await api.get(user.ads.get_ads_cart);
      return response.data;
    },
  });
};
// Get ads by ID
export const GetUserAdsByID = (id: any) => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () => {
      const response = await api.get(user.ads.get_ads_by_id(id));
      return response.data;
    },
  });
};
// get ads by filter
export const GetUserAdsByFilter = (queries?: any) => {
  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: async () => {
      const response = await api.get(user.ads.get_ads(queries));
      return response.data;
    },
    enabled: !!queries,
  });
};

// Cancel ads
export const useCancelAds = (id: any) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.put(user.ads.cancel_ads(id), data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: [initialQueryKey],
      });
      queryClient.refetchQueries({
        queryKey: [initialQueryKey, id],
      });
    },

    onError: (res) => console.error(res),
  });
};

// Resume ads
export const useResumeAds = (id: any) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.put(user.ads.resume_ads(id), data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [initialQueryKey] });
      queryClient.refetchQueries({ queryKey: [initialQueryKey, id] });
    },

    onError: (res) => console.error(res),
  });
};

// Pause ads
export const usePauseAds = (id: any) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.put(user.ads.pause_ads(id), data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [initialQueryKey] });
      queryClient.refetchQueries({ queryKey: [initialQueryKey, id] });
    },

    onError: (res) => console.error(res),
  });
};

// Delete ads
export const useDeleteAds = (id: any) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.put(user.ads.delete_ads(id), data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [initialQueryKey] });
      queryClient.refetchQueries({ queryKey: [initialQueryKey, id] });
    },

    onError: (res) => console.error(res),
  });
};

//========================================= create Ads &  pricing ==============================
export const initialQueryKeyPricing = "Ads.User.Pricing";

// Get Pricing
export const GetUserPricing = () => {
  return useQuery({
    queryKey: [initialQueryKeyPricing],
    queryFn: async () => {
      const response = await api.get(user.ads.get_pricing);
      return response.data;
    },
  });
};

export const useCreateAds = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(user.ads.create_ads, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [initialQueryKey] });
    },
    onError: (res) => console.error(res),
  });
};
