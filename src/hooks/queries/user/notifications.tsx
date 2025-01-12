import { api } from "@/src/api/axios";
import { notifications } from "@/src/api/user";
import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
} from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const initialQueryKey = "user.notifications";

interface NotificationResponse {
  data: {
    items: any[]; // Replace `any` with the specific type for a notification
    totalCount: number;
    pageSize: number;
  };
}

export interface NotificationQueryParams {
  page: number;
  [key: string]: any; // Add any other query parameters if needed
}

export const getNotifications = async (
  queries: NotificationQueryParams
): Promise<NotificationResponse> => {
  const response = await api.get(notifications.base);
  console.log(response.data);
  return response.data;
};

export const useNotifications = (): UseInfiniteQueryResult<
  NotificationResponse,
  any
> => {
  return useInfiniteQuery<NotificationResponse, Error>({
    queryKey: [initialQueryKey],
    queryFn: async ({ pageParam = 1 }) => {
      const params: NotificationQueryParams = { page: pageParam };
      return await getNotifications(params);
    },
    getNextPageParam: (lastPage, allPages) => {
      const totalCount = lastPage?.data?.totalCount || 0;
      const pageSize = lastPage?.data?.pageSize || 1;

      const totalPages = Math.ceil(totalCount / pageSize);

      return allPages.length < totalPages ? allPages.length + 1 : undefined;
    },
  });
};
