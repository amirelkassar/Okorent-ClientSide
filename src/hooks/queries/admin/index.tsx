import { api } from "@/src/api/axios";
import { admin } from "@/src/api/user";
import { useQuery } from "@tanstack/react-query";

export const initialQueryKey = "DashboardCount";
export const initialQueryKeyPerformance = "PerformanceYear";

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


// Get Performance Year
export const GetPerformanceYear = () => {
  return useQuery({
    queryKey: [initialQueryKeyPerformance],
    queryFn: async () => {
      const response = await api.get(admin.Home.performace_year);
      return response.data;
    },
  });
};

// Get Performance week
export const GetPerformanceWeek = () => {
  return useQuery({
    queryKey: [initialQueryKeyPerformance, "week"],
    queryFn: async () => {
      const response = await api.get(admin.Home.performace_weekly);
      return response.data;
    },
  });
}