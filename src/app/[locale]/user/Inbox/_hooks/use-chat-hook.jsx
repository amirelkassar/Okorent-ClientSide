'use client';
import { api } from '@/src/api/axios';
import { user } from '@/src/api/user';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Toast } from '@/src/components/toast';
import { useRouter } from 'next/navigation';
import ROUTES from '@/src/routes';

// Define query keys
const initialQueryKeyChats = 'user.chats';

// Custom hook to fetch all chats
export const useGetUserChats = (filter = '') => {
  return useQuery({
    queryKey: [initialQueryKeyChats, filter],
    queryFn: async () => {
      const response = await api.get(user.chat.getChats + (filter ? `?filter=${filter}` : ''));
      return response.data;
    },
  });
};

// Custom hook to fetch messages for a specific chat
export const useGetChatMessages = (chatId) => {
  return useQuery({
    queryKey: [initialQueryKeyChats, 'messages', chatId],
    queryFn: async () => {
      if (!chatId) return { data: [] };
      const response = await api.get(user.chat.getChatById(chatId));
      return response.data;
    },
    enabled: !!chatId,
  });
};

// Custom hook to add a message to a chat
export const useAddChatMessage = (chatId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post(user.chat.addMessage(chatId), data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [initialQueryKeyChats, 'messages', chatId] });
      queryClient.invalidateQueries({ queryKey: [initialQueryKeyChats] });
    },
    onError: (error) => {
      Toast.error('Failed to send message');
      console.error(error);
    },
  });
};

// Custom hook to create a new chat
export const useCreateNewChat = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post(user.chat.createChat, data);
      return response.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [initialQueryKeyChats] });
      if (data?.id) {
        router.push(`${ROUTES.USER.INBOX}?chat=${data.id}`);
      }
      Toast.success('New conversation started');
    },
    onError: (error) => {
      Toast.error('Failed to create conversation');
      console.error(error);
    },
  });
};
