import { api } from "@/src/api/axios";
import { notifications } from "@/src/api/user";
import {
  InfiniteData,
  useInfiniteQuery,
  UseInfiniteQueryResult,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

export const initialQueryKey = "user.notifications";

interface NotificationResponse {
  data: {
    items: any[]; // Replace `any` with the specific type for a notification
    totalCount: number;
    pageSize: number;
    unReadCount: any;
  };
}

export interface NotificationQueryParams {
  page: number;
  [key: string]: any; // Add any other query parameters if needed
}

export const getNotifications = async (
  queries: any,
  UnReadOnly: boolean
): Promise<NotificationResponse> => {
  const response = await api.get(
    notifications.base(`PageNumber=${queries.page}&UnReadOnly=${UnReadOnly}`)
  );
  return response.data;
};

export const useNotifications = (
  UnReadOnly: boolean = false
): UseInfiniteQueryResult<InfiniteData<NotificationResponse>, Error> => {
  return useInfiniteQuery<NotificationResponse, Error>({
    queryKey: [initialQueryKey, UnReadOnly ? "UnRead" : "Read"],
    queryFn: async ({ pageParam = 1 }) => {
      const params = { page: pageParam };

      return await getNotifications(params, UnReadOnly);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const totalCount = lastPage?.data?.totalCount || 0;
      const pageSize = lastPage?.data?.pageSize || 1;
      const totalPages = Math.ceil(totalCount / pageSize);
      return allPages.length < totalPages ? allPages.length + 1 : undefined;
    },
  });
};

//Read notification
export const useNotificationsMarkAsRead = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.put(notifications.actions.makeItRead, data);
      return response.data;
    },
    onSuccess: async (res) => {
      queryClient.refetchQueries({ queryKey: [initialQueryKey] });
    },
    onError: (res) => {},
  });
};

//Read All notification
export const useNotificationsMarkAsReadAll = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.put(notifications.actions.makeItReadAll, data);
      return response.data;
    },
    onSuccess: async (res) => {
      queryClient.refetchQueries({ queryKey: [initialQueryKey] });
    },
    onError: (res) => {
      console.log(res);
    },
  });
};
