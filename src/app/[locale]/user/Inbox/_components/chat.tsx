"use client";
import React from "react";
import { GetMessageChatById } from "@/src/hooks/queries/user/chat";
import Loading from "@/src/components/loading";
import { useSearchParams } from "next/navigation";
import { ChatCard } from "./chat-card";
import { ChatHub } from "@/src/components/chat-hub";
import { cn } from "@/src/lib/utils";
const Chat = () => {
  const searchParams = useSearchParams();
  const { data, isLoading } = GetMessageChatById(searchParams.get("chat"));

  if (!searchParams.get("chat")) return null;
  if (isLoading) return <Loading />;
  return (
    <div
      className={cn(
        "h-full min-h-[calc(100vh-140px)] lg:min-h-64 max-w-full flex flex-col flex-1 md:bg-white rounded-3xl md:border md:border-green md:px-6 xl:ps-4 lg:pe-16 md:pt-6 pb-5 gap-5  "
      )}
    >
      <ChatCard id={searchParams.get("chat") || ""} />
      <ChatHub />
    </div>
  );
};

export default Chat;
