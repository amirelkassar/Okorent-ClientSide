import { api } from "@/src/api/axios";
import { admin } from "@/src/api/user";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const initialQueryKey = "DashboardCount";

// Get DashboardCount
export const GetDashboardCount = () => {
  return useQuery({
    queryKey: [initialQueryKey],
    queryFn: async () => {
      const response = await api.get(admin.Home.DashboardCount);
      return response.data;
    },
  });
};
