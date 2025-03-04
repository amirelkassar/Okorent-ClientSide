"use client";

import { useCallback } from "react";
import {
  useAddMessageLocally,
  useCreateNewChat,
  useUserChatAddMessage,
} from "@/src/hooks/queries/user/chat";
import { useRouter } from "@/src/navigation";
import ROUTES from "@/src/routes";

export const useAddMessage = (chatId = "") => {
  const { mutate: sendMessage } = useUserChatAddMessage();

  const { mutate: addMessage } = useAddMessageLocally();
  const { mutate: CreateChat } = useCreateNewChat(chatId);
  const router = useRouter();
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
  const onCreateChat = useCallback(
    (data: any) => {
      const newMessage = data?.MessageContent;
      if (!newMessage) return;

      const formDataToSend = {
        UserId: data.UserId,
        MessageContent: newMessage,
      };

      CreateChat(formDataToSend, {
        onSuccess(data, variables, context) {
          console.log(data);
          router.replace(`${ROUTES.USER.INBOX}?chat=${data?.data}`, {
            scroll: false,
          });
        },
      });
    },
    [CreateChat]
  );

  return { onSend, onCreateChat };
};
