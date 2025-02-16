import React, { useCallback, useEffect, useRef } from "react";
import SupportMessageRow from "./support-message-row";
import { ScrollArea } from "@mantine/core";

function SupportChat({
  chat,
  children,
}: {
  chat?: any[];
  children?: React.ReactNode;
}) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [scrollToBottom, chat?.length]); // Scroll when messages update

  return (
    <div className="bg-[#F6F5F5] rounded-2xl py-2 md:py-3 w-full min-h-full flex flex-col">
      <div className="py-2 pt- border-b border-blueLight px-6">
        <h3 className="text-base font-Regular">Comments</h3>
      </div>
      <div className=" px-2 md:px-4 pt-4 h-full flex flex-col">
        <ScrollArea
          h={500}
          color="#88BA52"
          type="auto"
          classNames={{
            scrollbar: "bg-grayMedium/15 rounded-2xl",
            thumb: "bg-green",
          }}
          className="pe-5"
        >
          <div className=" w-full flex flex-col justify-end gap-5  mt-auto chatShow ">
            {chat?.map((item: any, index: number) => (
              <SupportMessageRow key={index} messageDetails={item} />
            ))}
          </div>
          <div ref={messagesEndRef} />
        </ScrollArea>

        {children}
      </div>
    </div>
  );
}

export default SupportChat;
