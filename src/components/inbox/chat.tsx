'use client';
import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { ChatHub } from '@/src/components/chat-hub';
import { cn } from '@/src/lib/utils';
import { usePathname } from '@/src/navigation';
import { useChat } from '@/src/contexts/ChatContext';
import Loading from '@/src/components/loading';
import { ChatCard } from './chat-card';

const Chat = () => {
  const searchParams = useSearchParams();
  const chatId = searchParams.get('chat');
  const path = usePathname();
  const { currentChat, sendMessage, setCurrentChat, isLoading } = useChat();

  useEffect(() => {
    if (chatId) {
      setCurrentChat(chatId);
    }
  }, [chatId, setCurrentChat]);

  if (!chatId) return null;
  if (isLoading) return <Loading />;

  return (
    <div
      className={cn(
        'h-full min-h-[calc(100vh-140px)] lg:min-h-64 max-w-full flex flex-col flex-1 md:bg-white rounded-3xl md:border md:border-green md:px-6 xl:ps-4 lg:pe-16 md:pt-6 pb-5 gap-5',
      )}
    >
      <ChatCard id={chatId} NoChat={false} />
      <ChatHub />
    </div>
  );
};

export default Chat;
