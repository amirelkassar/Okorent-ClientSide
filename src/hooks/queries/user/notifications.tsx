import { api } from "@/src/api/axios";
import { notifications } from "@/src/api/user";
import {
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
    unReadCount: number;
  };
}

export interface NotificationQueryParams {
  page: number;
  [key: string]: any; // Add any other query parameters if needed
}

export const getNotifications = async (
  queries: NotificationQueryParams,
  UnReadOnly: boolean
): Promise<NotificationResponse> => {
  const response = await api.get(
    notifications.base(`PageNumber=${queries.page}&UnReadOnly=${UnReadOnly}`)
  );
  console.log(response.data);
  return response.data;
};

export const useNotifications = (
  UnReadOnly: boolean = false
): UseInfiniteQueryResult<NotificationResponse, any> => {
  return useInfiniteQuery<NotificationResponse, Error>({
    queryKey: [initialQueryKey, UnReadOnly ? "UnRead" : "Read"],
    queryFn: async ({ pageParam = 1 }) => {
      const params: NotificationQueryParams = { page: pageParam };
      console.log(params);

      return await getNotifications(params, UnReadOnly);
    },
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
      console.log(res);
      queryClient.refetchQueries([initialQueryKey]);
    },
    onError: (res) => {
      console.log(res);
    },
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
      console.log(res);
      queryClient.refetchQueries([initialQueryKey]);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};
