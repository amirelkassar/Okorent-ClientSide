'use client';
import SearchIcon from '@/src/assets/icons/search';
import { TextInput } from '@mantine/core';
import React, { memo, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ChatListRow from '@/src/components/chat-list-row';
import { useChat } from '@/src/contexts/ChatContext';
import LoadingChat from '@/src/components/loading-chat';

function ListChats() {
  const searchParams = useSearchParams();
  const { chats, isLoading } = useChat();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredChats = chats.filter(
    (chat) =>
      chat.displayName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.lastMessageContent?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div
      className={`lg:max-w-[360px] lg:min-w-[360px] ${
        searchParams.get('chat') ? 'hidden lg:flex' : 'flex'
      } w-full flex-1 h-full min-h-full flex-col gap-6`}
    >
      <div className="flex h-12 md:h-[66px] min-h-12 md:min-h-[66px] w-full rounded-2xl border border-green overflow-hidden">
        <TextInput
          placeholder="Search in chats"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          classNames={{
            input: 'flex-1 bg-white text-black h-full border-none px-5 text-[16px]',
            wrapper: 'h-full',
          }}
          className="flex-1 text-grayMedium h-full text-[16px]"
        />
        <button className="h-full px-3 w-11 md:w-[58px] rounded-e-xl bg-green flex items-center justify-center">
          <SearchIcon />
        </button>
      </div>

      <div className="py-2 md:py-7 md:px-2 md:bg-white md:border md:border-green rounded-3xl flex-1 h-[calc(100%-270px)] md:shadow-sidebar">
        {isLoading ? (
          <LoadingChat />
        ) : filteredChats.length > 0 ? (
          <div className="flex flex-col gap-4 max-w-full overflow-auto h-full max-h-full md:h-[710px]">
            {filteredChats.map((chat, i) => (
              <ChatListRow
                key={chat.chatId}
                data={{
                  chatId: chat.chatId,
                  userName: chat.displayName,
                  displayName: chat.displayName,
                  lastMessageDate: chat.lastMessageDate,
                  identifier: 0, // Could be used for unread count
                  userImage: chat.userImage,
                  userId: chat.userId,
                }}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-4">
            {searchQuery ? 'No chats found' : 'No chats yet'}
          </p>
        )}
      </div>
    </div>
  );
}

export default memo(ListChats);
