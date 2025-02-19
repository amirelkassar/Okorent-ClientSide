"use client";
import React, { useEffect } from "react";
import {
  GetAllMessagesByUserID,
  GetMessageChatById,
} from "@/src/hooks/queries/user/chat";
import Loading from "@/src/components/loading";
import { useSearchParams } from "next/navigation";
import { ChatCard } from "./chat-card";
import { ChatHub } from "@/src/components/chat-hub";
import { cn } from "@/src/lib/utils";
import { useRouter } from "@/src/navigation";
import ROUTES from "@/src/routes";
const Chat = () => {
  const searchParams = useSearchParams();
  const {} = GetMessageChatById(searchParams.get("chat"));
  const { data: messages, isLoading } = GetAllMessagesByUserID(
    searchParams.get("chat") || "",
    searchParams.get("UserID") ? true : false
  );
  console.log(messages);
  console.log(isLoading);

  const router = useRouter();

  useEffect(() => {
    console.log("dd");

    if (!isLoading && searchParams.get("UserID")) {
      if (messages?.data?.id) {
        router.replace(`${ROUTES.USER.INBOX}?chat=${messages?.data?.id}`, {
          scroll: false,
        });
      }
    }
  }, [isLoading, searchParams, messages]);
  if (!searchParams.get("chat")) return null;

  if (isLoading) return <Loading />;
  return (
    <div
      className={cn(
        "h-full min-h-[calc(100vh-140px)] lg:min-h-64 max-w-full flex flex-col flex-1 md:bg-white rounded-3xl md:border md:border-green md:px-6 xl:ps-4 lg:pe-16 md:pt-6 pb-5 gap-5  "
      )}
    >
      <ChatCard
        id={searchParams.get("chat") || ""}
        NoChat={
          (searchParams.get("UserID") ? true : false) && messages?.data === null
        }
      />
      <ChatHub />
    </div>
  );
};

export default Chat;
