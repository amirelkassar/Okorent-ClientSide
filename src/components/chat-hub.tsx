'use client';

import { useEffect } from 'react';
import * as signalR from '@microsoft/signalr';
import { useToken } from '../hooks/use-token';
import { Toast } from '@/src/components/toast';
import { useChat } from '@/src/contexts/ChatContext';

const LISTENERS = {
  chatCreated: 'ChatCreated',
  chatDeleted: 'ChatDeleted',
  messageAdded: 'OnNewMessage',
  messageRemoved: 'MessageRemoved',
  participantAdded: 'ParticipantAdded',
  participantRemoved: 'ParticipantRemoved',
};

export const ChatHub = () => {
  const { token } = useToken();
  const tokenValue = token?.token || '';
  const { currentChat, setCurrentChat } = useChat();

  useEffect(() => {
    let connection: signalR.HubConnection | null = null;
    const audio = new Audio('/message-received.mp3?v=' + new Date().getTime());

    const connectSignalR = async () => {
      console.log('Connecting to Chat Hub');
      const HUB_URL = `${process.env.NEXT_PUBLIC_SIGNALR_HUB_URL}/chat`;

      connection = new signalR.HubConnectionBuilder()
        .withUrl(HUB_URL, { accessTokenFactory: () => tokenValue })
        .configureLogging(signalR.LogLevel.None)
        .withAutomaticReconnect()
        .build();

      connection.on(LISTENERS.messageAdded, (newMessage) => {
        console.log('New message received:', newMessage);

        // Only play sound and show notification if the message is not from current user
        if (newMessage?.senderUserId !== token.userID) {
          audio.play().catch(console.error);
          Toast.Notification('New message received');
        }

        // If the message belongs to the current chat, update it
        if (newMessage?.chatRoomId === currentChat?.id) {
          setCurrentChat(currentChat.id);
        }
      });

      connection.on(LISTENERS.chatCreated, (chat) => {
        console.log('New chat created:', chat);
        // You might want to refresh the chat list here
      });

      connection.on(LISTENERS.chatDeleted, (chatId) => {
        console.log('Chat deleted:', chatId);
        // Handle chat deletion
      });

      try {
        await connection.start();
        console.log('SignalR Chat connected successfully!');
      } catch (error) {
        console.error('SignalR Chat connection failed:', error);
      }

      connection.onclose(() => {
        console.warn('SignalR Chat connection closed.');
      });

      connection.onreconnecting(() => {
        console.log('SignalR Chat reconnecting...');
      });

      connection.onreconnected(() => {
        console.log('SignalR Chat reconnected!');
      });
    };

    if (tokenValue) {
      connectSignalR();
    }

    return () => {
      if (connection) {
        connection.stop();
      }
    };
  }, [tokenValue, currentChat, token.userID, setCurrentChat]);

  return null;
};
