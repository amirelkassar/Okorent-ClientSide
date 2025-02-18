"use client";

import { useCallback } from "react";
import {
  useAddMessageLocally,
  useUserChatAddMessage,
} from "@/src/hooks/queries/user/chat";

export const useAddMessage = (chatId = "") => {
  const { mutate: sendMessage } = useUserChatAddMessage();

  const { mutate: addMessage } = useAddMessageLocally();

  const onSend = useCallback(
    (data: any) => {
      const newMessage = data?.MessageContent;
      if (!newMessage) return;

      const tempMessage = addMessage({
        newMessage,
        chatId,
      });
      const formDataToSend = {
        ChatRoomId: chatId,
        MessageContent: newMessage,
      };

      sendMessage(formDataToSend, {
        onSuccess: (realMessage: any) => {
          console.log(realMessage);
        },
        onError: (error) => {
          console.log("error Msg", error);
        },
      });
    },
    [chatId, addMessage, sendMessage]
  );

  return { onSend };
};
