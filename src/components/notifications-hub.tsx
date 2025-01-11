'use client';

import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import * as signalR from '@microsoft/signalr';
import { Toast } from './toast';
import { useToken } from '../hooks/use-token';

export const NotificationsHub = () => {
  const { token } = useToken();

  const queryClient = useQueryClient();

  useEffect(() => {
    let connection:any = null;
    const audio = new Audio(
      '/notification-received.mp3?v=' + new Date().getTime()
    );

    const connectSignalR = async () => {
      const HUB_URL = `${process.env.NEXT_PUBLIC_SIGNALR_HUB_URL}/notification`;

      connection = new signalR.HubConnectionBuilder()
        .withUrl(HUB_URL, { accessTokenFactory: () => token })
        .configureLogging(signalR.LogLevel.None)
        .build();

      connection.on('Receive', (message:any) => {
        if (!message) return;
        // return console.log(message);
        audio.play();
        Toast.Notification(message?.title);
        queryClient.refetchQueries({
          queryKey: ['notfications'],
        });
      });

      try {
        await connection.start();
        // console.log('SignalR connected successfully!');
      } catch {
        // console.error('SignalR connection failed: ', error);
      }

      connection.onclose(() => {
        console.warn('SignalR Notifications connection closed.');
      });
    };

    connectSignalR();

    return () => {
      if (connection) {
        connection.stop();
      }
    };
  }, [token, queryClient]);
};
