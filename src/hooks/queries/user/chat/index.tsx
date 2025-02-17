"use client";
import { api } from "@/src/api/axios";
import { user } from "@/src/api/user";
import {
  UseInfiniteQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useInfiniteQuery } from "@tanstack/react-query";

export const initialQueryKey = "user.myOrderAll";

//get All Chats
export const GetAllChats = async (pageParam: any) => {
  const response = await api.get(
    user.Chat.Get_All_Chats(`&PageNumber=${pageParam.page}`)
  );
  return response.data;
};

export function useRomes() {
  return useInfiniteQuery({
    queryKey: [initialQueryKey],
    queryFn: async ({ pageParam = 1 }) => {
      const params = { page: pageParam };
      return await GetAllChats(params);
    }, // Pass the pageParam to your function
    getNextPageParam: (lastPage, allPages) => {
      const totalPages = lastPage?.data?.totalPages;
      return allPages.length < totalPages ? allPages.length + 1 : undefined;
    },
  });
}

//get Message Chat By Id
export const GetMessageChatById = (id?: any) => {
  return useQuery({
    queryKey: [initialQueryKey, { id }],
    queryFn: async () => {
      const response = await api.get(user.Chat.Get_Messages_By_Id(id, ""));
      return response.data;
    },
    enabled: !!id, // Only run if `id` is valid
  });
};

//Send Message
export const useSendMessage = (id: any) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(user.Chat.Send_Message, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data; // استرجاع البيانات الحقيقية من الاستجابة
    },
    // onMutate: async (newMessage) => {
    //   await queryClient.cancelQueries([initialQueryKey, { id }]);

    //   const previousData = queryClient.getQueryData([initialQueryKey, { id }]);

    //   // إضافة الرسالة المؤقتة فقط
    //   queryClient.setQueryData([initialQueryKey, { id }], (oldData: any) => ({
    //     ...oldData,
    //     data: {
    //       ...oldData?.data,
    //       messages: [
    //         {
    //           messageContent: newMessage.MessageContent,
    //           created: Date.now(),
    //           isPending: true,
    //         },
    //         ...oldData.data.messages,
    //       ],
    //     },
    //   }));

    //   return { previousData };
    // },
    // onSuccess: () => {
    //   // في حالة النجاح، نقوم فقط بتحديث الرسالة المؤقتة
    //   queryClient.setQueryData([initialQueryKey, { id }], (oldData: any) => ({
    //     ...oldData,
    //     data: {
    //       ...oldData?.data,
    //       messages: oldData?.data?.messages.map((msg: any) =>
    //         msg.isPending ? { ...msg, isPending: false } : msg
    //       ),
    //     },
    //   }));
    // },
    // onError: (_, __, context) => {
    //   if (context?.previousData) {
    //     queryClient.setQueryData(
    //       [initialQueryKey, { id }],
    //       context.previousData
    //     );
    //   }
    // },
    onSettled: () => {
      queryClient.invalidateQueries([initialQueryKey, { id }]);
    },
  });
};

//Create New Chat
export const useCreateNewChat = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(user.Chat.Create_New_Chat, data);
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

//get All Chats

export const GetAllMessages = async (
  id: string,
  pageParam: any
): Promise<any> => {
  const response = await api.get(
    user.Chat.Get_Messages_By_Id(id, `PageNumber=${pageParam.page}`)
  );
  return response.data;
};
export function useGetMessages(id: any) {
  return useInfiniteQuery({
    queryKey: [initialQueryKey, { id }],
    queryFn: async ({ pageParam = 1 }) => {
      const params = { page: pageParam };
      return await GetAllMessages(id, params);
    }, // Pass the pageParam to your function
    getNextPageParam: (lastPage, allPages) => {
      const totalPages = lastPage?.data?.totalPages;
      return allPages.length < totalPages ? allPages.length + 1 : undefined;
    },
  });
}
