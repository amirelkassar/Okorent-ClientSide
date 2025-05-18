import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { api } from '@/src/api/axios';
import { chatEndpoints } from '@/src/api/user/chat';
import { Toast } from '@/src/components/toast';

// Define query keys as constants
const CHAT_QUERY_KEY = 'chat' as const;
const CHATS_QUERY_KEY = 'chats' as const;

interface ChatContextType {
  chats: any[];
  currentChat: any;
  isLoading: boolean;
  error: any;
  sendMessage: (content: string, file?: File) => Promise<void>;
  createChat: (userId: string, message: string, file?: File) => Promise<void>;
  setCurrentChat: (chatId: string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [chats, setChats] = useState<any[]>([]);
  const [currentChat, setCurrentChat] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const queryClient = useQueryClient();

  // Load initial chats
  useEffect(() => {
    fetchChats();
  }, []);

  const fetchChats = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(chatEndpoints.room.getAll);
      setChats(response.data?.data?.items || []);
    } catch (error) {
      setError(error);
      Toast.Notification('Failed to load chats');
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = useCallback(
    async (content: string, file?: File) => {
      if (!currentChat?.id) return;

      const formData = new FormData();
      formData.append('MessageContent', content);
      formData.append('ChatRoomId', currentChat.id);
      if (file) {
        formData.append('MessageDocumentFile', file);
      }

      try {
        await api.post(chatEndpoints.message.create, formData);
        queryClient.invalidateQueries({ queryKey: [CHAT_QUERY_KEY, currentChat.id] });
        queryClient.invalidateQueries({ queryKey: [CHATS_QUERY_KEY] });
      } catch (error) {
        Toast.Notification('Failed to send message');
        throw error;
      }
    },
    [currentChat, queryClient],
  );

  const createChat = useCallback(async (userId: string, message: string, file?: File) => {
    const formData = new FormData();
    formData.append('UserId', userId);
    formData.append('MessageContent', message);
    if (file) {
      formData.append('MessageDocumentFile', file);
    }

    try {
      const response = await api.post(chatEndpoints.room.create, formData);
      await fetchChats();
      return response.data;
    } catch (error) {
      Toast.Notification('Failed to create chat');
      throw error;
    }
  }, []);

  const setActiveChat = useCallback(async (chatId: string) => {
    try {
      const response = await api.get(chatEndpoints.room.getById(chatId));
      setCurrentChat(response.data?.data);
    } catch (error) {
      Toast.Notification('Failed to load chat');
      setError(error);
    }
  }, []);

  const value = {
    chats,
    currentChat,
    isLoading,
    error,
    sendMessage,
    createChat,
    setCurrentChat: setActiveChat,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}
