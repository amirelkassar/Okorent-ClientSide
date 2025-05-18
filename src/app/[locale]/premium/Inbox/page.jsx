'use client';
import React, { useState, useEffect } from 'react';
import { Toast } from '@/src/components/toast';
import { useRouter, usePathname } from 'next/navigation';
import ROUTES from '@/src/routes';
import {
  useGetUserChats,
  useGetChatMessages,
  useAddChatMessage,
  useCreateNewChat,
} from './_hooks/use-chat-hook'; // Update this path to where you created the hooks file

function Page() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState('all'); // "all" or "unread"
  const [searchQuery, setSearchQuery] = useState('');
  const [chatId, setChatId] = useState('');

  useEffect(() => {
    // Get the current URL query string
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const chatParam = params.get('chat');

    if (chatParam) {
      setChatId(chatParam);
    }
  }, [pathname]);

  // Toggle between "I rent" and "I rent out" view
  const [viewMode, setViewMode] = useState('out'); // "out" or "in"

  // Get chats filtered by tab and search
  const { data: chatsData, isLoading: isLoadingChats } = useGetUserChats(
    activeTab === 'unread' ? 'unread' : '',
  );

  const chats = chatsData?.data || [];
  const totalChats = chats.length;
  const unreadCount = chats.filter((chat) => chat.unreadCount > 0).length;

  // Get messages for selected chat
  const { data: messagesData, isLoading: isLoadingMessages } = useGetChatMessages(chatId);
  const messages = messagesData?.data || [];

  // Mutations for chat actions
  const { mutate: sendMessage } = useAddChatMessage(chatId);
  const { mutate: createChat } = useCreateNewChat();

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Handle search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search submit
  const handleSearch = (e) => {
    e.preventDefault();
    // Filter chats client-side for now, could be server-side if needed
  };

  // Handle view mode toggle
  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  // Handle sending a message
  const handleSendMessage = (content) => {
    if (!chatId || !content) return;

    sendMessage({
      content,
      chatId,
    });
  };

  // Filter chats based on search query
  const filteredChats = searchQuery
    ? chats.filter(
        (chat) =>
          chat.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          chat.lastMessage?.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : chats;

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      {/* Rest of your component JSX */}
      {/* ... */}

      {/* All the JSX from the original file should be copied here */}
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold py-6">Inbox</h1>

        {/* Tabs and Toggle */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-4 border-b border-gray-200">
            <button
              className={`pb-2 px-1 ${
                activeTab === 'all'
                  ? 'border-b-2 border-blue-500 text-blue-600 font-medium'
                  : 'text-gray-500'
              }`}
              onClick={() => handleTabChange('all')}
            >
              All messages ({totalChats || 0})
            </button>
            <button
              className={`pb-2 px-1 ${
                activeTab === 'unread'
                  ? 'border-b-2 border-blue-500 text-blue-600 font-medium'
                  : 'text-gray-500'
              }`}
              onClick={() => handleTabChange('unread')}
            >
              Unread ({unreadCount || 0})
            </button>
          </div>

          <div className="bg-white rounded-full flex border border-gray-200">
            <button
              className={`py-2 px-4 rounded-l-full ${
                viewMode === 'out' ? 'bg-green-500 text-white' : 'bg-white text-gray-700'
              }`}
              onClick={() => handleViewModeChange('out')}
            >
              I rent out
            </button>
            <button
              className={`py-2 px-4 rounded-r-full ${
                viewMode === 'in' ? 'bg-green-500 text-white' : 'bg-white text-gray-700'
              }`}
              onClick={() => handleViewModeChange('in')}
            >
              I rent
            </button>
          </div>
        </div>

        {/* Search and Chat Container */}
        <div className="flex gap-6">
          {/* Left Column - Chat List */}
          <div className="w-1/3">
            {/* Search Box */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search in chats"
                  className="w-full border border-gray-200 rounded-md py-2 pl-4 pr-10"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 bg-green-500 h-full w-12 flex items-center justify-center rounded-r-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </form>

            {/* Chat List */}
            <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
              {/* Rest of the component... */}
              {/* Continue with the rest of your JSX */}
              {/* ... */}
            </div>
          </div>

          {/* Right Column - Chat Content */}
          <div className="w-2/3 bg-white rounded-md border border-gray-200 flex flex-col">
            {/* Rest of the chat UI */}
            {/* ... */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
