'use client';

import React, { memo, useCallback, useEffect, useRef } from 'react';
import { ScrollArea } from '@mantine/core';
import SendIcon from '@/src/assets/icons/send';
import { useUserChatMessages } from '@/src/hooks/queries/user/chat';
import Button from '@/src/components/button';
import { cn, getDate } from '@/src/lib/utils';
import Image from 'next/image';
import avatarUser from '@/src/assets/images/avatar.png';
import ChatHeader from './chat-header';
import SendMessages from './send-messages';
import { ChatBody } from './chat-body';
import { ChatWrapper } from './chat-wrapper';

// Define Chat Message Type
interface ChatMessage {
  id: string;
  messageContent: string;
  senderUserId: string;
  senderName?: string;
  senderImage?: string;
  created: string; // Renamed to match `ChatBody`'s `MessageType`
  status?: string;
  messageImage?: string;
}
// Define Props for ChatCard
interface ChatCardProps {
  id?: string;
  NoChat: boolean;
}

export const ChatCard: React.FC<ChatCardProps> = ({ id = '', NoChat = false }) => {
  const query = useUserChatMessages(id);
  console.log(NoChat);

  return (
    <ChatWrapper query={query} NoChat={NoChat}>
      {(props) => <RenderChat {...props} NoChatRoom={NoChat} />}
    </ChatWrapper>
  );
};

// Define Props for RenderChat
interface RenderChatProps {
  chatId: string;
  messages: ChatMessage[];
  totalCount: number;
  userImage: any;
  userName: any;
  totalMessages: number;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
  NoChat: boolean;
  NoChatRoom: boolean;
}

const RenderChat = memo<RenderChatProps>(
  ({ chatId, userImage, userName, NoChatRoom, NoChat, ...props }) => {
    const [message, setMessage] = React.useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = useCallback(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    useEffect(() => {
      scrollToBottom();
    }, [scrollToBottom, props.messages?.length]);

    const handleSendMessage = async () => {
      if (!message.trim() || NoChat) return;

      try {
        await props.fetchNextPage();
        setMessage('');
      } catch (error) {
        console.error('Failed to send message:', error);
      }
    };

    console.log(NoChatRoom);
    return (
      <div className={cn('h-full w-full flex flex-col flex-1   gap-5  ')}>
        <ChatHeader userImage={userImage} userName={userName} />
        <div className="h-full flex flex-col gap-3 ">
          <ChatBody {...props}>
            {({ m, i }: { m: ChatMessage; i: number }) => {
              return m.senderUserId === chatId ? (
                <ReceivedChat
                  key={i}
                  massage={m?.messageContent}
                  date={m?.created} // Matches `ChatBody`'s `MessageType`
                />
              ) : (
                <SentChat
                  key={i}
                  massage={m?.messageContent}
                  date={m?.created} // Matches `ChatBody`'s `MessageType`
                />
              );
            }}
          </ChatBody>
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
          <textarea
            className="flex-1 resize-none border rounded-xl p-3 h-12 focus:outline-none focus:border-green"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <Button
            onClick={handleSendMessage}
            className={`w-11 bg-black h-8 px-2 py-2 lg:h-9 border-none ${
              message && !NoChat ? '' : 'pointer-events-none opacity-50'
            }`}
          >
            <SendIcon className="h-full w-auto" />
          </Button>
        </div>
      </div>
    );
  },
);

RenderChat.displayName = 'RenderChat';

const ReceivedChat = ({ massage = '', date = '' }: { massage: string; date: any }) => {
  return (
    <div className="flex flex-row-reverse items-center gap-3 mx-2">
      <div className="flex flex-col gap-2">
        <p className="bg-grayLight break-words rounded-[32px] text-black text-[12px] leading-[15px] px-6 max-w-[270px] py-4 rounded-ee-none">
          {massage}
        </p>
        <span className="text-[10px] md:text-[12px] text-[#B6BFC6] text-end">
          {getDate(date).time}
        </span>
      </div>
    </div>
  );
};

const SentChat = ({ massage = '', date = '' }: { massage: string; date: any }) => {
  return (
    <div className="flex items-center gap-3 mx-2">
      <div className="flex flex-col gap-2">
        <p className="bg-green break-words rounded-[32px] text-white text-[12px] leading-[15px] px-6 max-w-[270px] py-4 rounded-es-none">
          {massage}
        </p>
        <span className="text-[10px] md:text-[12px] text-[#B6BFC6]">{getDate(date).time}</span>
      </div>
    </div>
  );
};
