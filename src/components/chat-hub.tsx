"use client";

import { useEffect } from "react";
import * as signalR from "@microsoft/signalr";

import { useAddMessageLocally } from "../hooks/queries/user/chat";
import { useToken } from "../hooks/use-token";
// import { Toast } from '@/components/toast';

const LISTENERS = {
  chatCreated: "ChatCreated",
  chatDeleted: "ChatDeleted",
  messageAdded: "MessageAdded",
  messageRemoved: "MessageRemoved",
  participantAdded: "ParticipantAdded",
  participantRemoved: "ParticipantRemoved",
};

export const ChatHub = () => {
  const { token } = useToken();
  const tokenValue = token?.token || ""; // Destructure `token` correctly
  const { mutate: addMessage } = useAddMessageLocally();

  useEffect(() => {
    let connection: signalR.HubConnection | null = null;
    const audio = new Audio(
      "/message-received.mp3?v=" + new Date().getTime()
    );

    const connectSignalR = async () => {
      console.log("Trying to connect Chat");

      const HUB_URL = `${process.env.NEXT_PUBLIC_SIGNALR_HUB_URL}/chat`;

      connection = new signalR.HubConnectionBuilder()
        .withUrl(HUB_URL, { accessTokenFactory: () => tokenValue })
        .configureLogging(signalR.LogLevel.None)
        .build();

      connection.on("OnNewMessage", (newMessage) => {
        console.log(newMessage);

        const chatId = newMessage?.chatRoomId || "";
        audio.play();
        addMessage({
          newMessage,
          chatId,
        });
      });

      try {
        await connection.start();
        console.log("SignalR CHAT connected successfully!");
      } catch {
        console.error("SignalR CHAT connection failed: ");
      }

      connection.onclose(() => {
        console.warn("SignalR Chat connection closed.");
      });
    };

    connectSignalR();

    return () => {
      if (connection) {
        connection.stop();
      }
    };
  }, [tokenValue, addMessage]);
  return null; // No UI is rendered
};
