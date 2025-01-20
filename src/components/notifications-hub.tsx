"use client";

import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import * as signalR from "@microsoft/signalr";
import { Toast } from "./toast";
import { useToken } from "../hooks/use-token";

export const NotificationsHub = () => {
  const { token } = useToken();
  const tokenValue = token?.token || ""; // Destructure `token` correctly
  console.log(tokenValue);

  const queryClient = useQueryClient();

  useEffect(() => {
    if (!tokenValue) {
      console.warn(
        "Token is not available. NotificationsHub will not connect."
      );
      return;
    }

    let connection: signalR.HubConnection | null = null;
    const audio = new Audio(
      "/notification-received.mp3?v=" + new Date().getTime()
    );

    const connectSignalR = async () => {
      console.log("Trying to connect");

      const HUB_URL = `${process.env.NEXT_PUBLIC_SIGNALR_HUB_URL}/notification`;

      connection = new signalR.HubConnectionBuilder()
        .withUrl(HUB_URL, { accessTokenFactory: () => tokenValue })
        .configureLogging(signalR.LogLevel.None)
        .build();

      connection.on("Receive", (message: any) => {
        if (!message) return;

        // Play notification sound and show toast
        audio
          .play()
          .then(() => {
            console.log("Audio played successfully.");
          })
          .catch((err) => {
            console.error("Audio playback failed:", err);
          });
        Toast.Notification(message?.title);

        // Refetch notifications query
        queryClient.refetchQueries({
          queryKey: ["notifications"],
        });
      });

      try {
        await connection.start();
        console.log("SignalR connected successfully!");
      } catch (error) {
        console.error("SignalR connection failed: ", error);
      }

      connection.onclose(() => {
        console.warn("SignalR Notifications connection closed.");
      });
    };

    connectSignalR();

    return () => {
      if (connection) {
        connection.stop().catch((err) => {
          console.error("Error stopping SignalR connection:", err);
        });
      }
    };
  }, [tokenValue, queryClient]);

  return null; // No UI is rendered
};
