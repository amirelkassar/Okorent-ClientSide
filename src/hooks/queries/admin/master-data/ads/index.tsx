import { api } from "@/src/api/axios";
import { admin } from "@/src/api/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
export const initialQueryKeyPricing = "Ads.pricing";
//=========================================pricing========================================
// Get Pricing
export const GetPricingInAdmin = (queries?: any) => {
  return useQuery({
    queryKey: [initialQueryKeyPricing],
    queryFn: async () => {
      const response = await api.get(admin.Ads.get_pricing(queries));
      return response.data;
    },
  });
};

// Add Pricing
export const useCreatePricingInAdmin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(admin.Ads.add_pricing, data);
      return response.data;
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [initialQueryKeyPricing] }),
    onError: (res) => console.error(res),
  });
};

// Edit Pricing
export const useEditPricingInAdmin = (id: any) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.put(admin.Ads.edit_pricing(id), data);
      return response.data;
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [initialQueryKeyPricing] }),
    onError: (res) => console.error(res),
  });
};

//=========================================Ads========================================
export const initialQueryKeyAds = "Ads";

export const GetAdsUserInAdmin = (queries?: any) => {
  return useQuery({
    queryKey: [initialQueryKeyAds],
    queryFn: async () => {
      const response = await api.get(admin.Ads.get_ads(queries));
      return response.data;
    },
  });
};
