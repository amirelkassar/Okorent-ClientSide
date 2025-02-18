"use client";
import LoadingChat from "@/src/components/loading-chat";
import {  useUserChatMessages } from "@/src/hooks/queries/user/chat";
import { getDate } from "@/src/lib/utils";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

function ChatMessages({
  idUSer,
  id = "",
}: {
  id: any;
  idUSer: string;
}) {
  const { ref, inView } = useInView();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { data, isFetchingNextPage, fetchNextPage } =
  useUserChatMessages(id);
  const mergedNotifications =
    data?.pages?.flatMap((page: any) => page?.data?.messages).reverse() || [];
  useEffect(() => {
    // Effect to handle scrolling to the bottom initially
    const messagesEndRef = document.getElementById("messagesEnd");
    if (messagesEndRef) {
      messagesEndRef.scrollIntoView({ behavior: "smooth" });
    }
  }, [mergedNotifications.length]);
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <div className="overflow-y-auto    max-h-full space-y-4  md:space-y-5 flex-1 pb-10">
      <div className=" w-full flex flex-col justify-end gap-5  mt-auto  ">
        <div ref={ref}>{isFetchingNextPage && <LoadingChat />}</div>
        {mergedNotifications?.map((item: any, index: number) => {
          return item.senderUserId === idUSer ? (
            <ReceivedChat
              key={index}
              massage={item?.messageContent || item?.MessageContent}
              date={item?.created}
            />
          ) : (
            <SentChat
              key={index}
              massage={item?.messageContent || item?.MessageContent}
              date={item?.created}
            />
          );
        })}
      </div>
      <div ref={messagesEndRef} />
    </div>
  );
}

export default ChatMessages;

const ReceivedChat = ({
  massage = "",
  date = "",
}: {
  massage: string;
  date: any;
}) => {
  return (
    <div className="flex flex-row-reverse items-center gap-3">
      <div className="flex flex-col gap-2">
        <p className="bg-grayLight rounded-[32px] text-black text-[12px] leading-[15px] px-6 max-w-[270px] py-4 rounded-ee-none">
          {massage}
        </p>
        <span className="text-[10px] md:text-[12px] text-[#B6BFC6] text-end">
          {getDate(date).time}
        </span>
      </div>
    </div>
  );
};

const SentChat = ({
  massage = "",
  date = "",
}: {
  massage: string;
  date: any;
}) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col gap-2">
        <p className="bg-grayBack rounded-[32px] text-black text-[12px] leading-[15px] px-6 max-w-[270px] py-4 rounded-es-none">
          {massage}
        </p>
        <span className="text-[10px] md:text-[12px] text-[#B6BFC6] text-start">
          {getDate(date).time}
        </span>
      </div>
    </div>
  );
};
