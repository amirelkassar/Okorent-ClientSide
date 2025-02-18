"use client";

import { memo } from "react";
import { ChatWrapper } from "./chat-wrapper";
import { ChatBody } from "./chat-body";
import { useUserChatMessages } from "@/src/hooks/queries/user/chat";
import { getDate } from "@/src/lib/utils";

// Define Chat Message Type
interface ChatMessage {
  id: string;
  messageContent: string;
  senderUserId: string;
  senderName?: string;
  senderImage?: string;
  created: string; // Renamed to match `ChatBody`'s `MessageType`
  status?: string;
}

// Define Props for ChatCard
interface ChatCardProps {
  id?: string;
}

export const ChatCard: React.FC<ChatCardProps> = ({ id = "" }) => {
  const query = useUserChatMessages(id);

  return (
    <ChatWrapper query={query}>
      {(props) => <RenderChat {...props} />}
    </ChatWrapper>
  );
};

// Define Props for RenderChat
interface RenderChatProps {
  chatId: string;
  messages: ChatMessage[];
  totalCount: number;
  totalMessages: number;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
}

const RenderChat = memo<RenderChatProps>(({ chatId, ...props }) => {
  return (
    <div className="h-full flex flex-col gap-3 ">
      <ChatBody {...props}>
        {({ m, i }: { m: ChatMessage; i: number }) => {
          return m.senderUserId === chatId ? (
            <ReceivedChat
              key={i}
              massage={m?.messageContent}
              date={m?.created} // Matches `ChatBody`'s `MessageType`
            />
          ) : (
            <SentChat
              key={i}
              massage={m?.messageContent}
              date={m?.created} // Matches `ChatBody`'s `MessageType`
            />
          );
        }}
      </ChatBody>
    </div>
  );
});

RenderChat.displayName = "RenderChat";

const ReceivedChat = ({
  massage = "",
  date = "",
}: {
  massage: string;
  date: any;
}) => {
  return (
    <div className="flex flex-row-reverse items-center gap-3 mx-2">
      <div className="flex flex-col gap-2">
        <p className="bg-grayLight break-words rounded-[32px] text-black text-[12px] leading-[15px] px-6 max-w-[270px] py-4 rounded-ee-none">
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
    <div className="flex items-center gap-3 mx-2">
      <div className="flex flex-col gap-2">
        <p className="bg-grayBack break-words rounded-[32px] text-black text-[12px] leading-[15px] px-6 max-w-[270px] py-4 rounded-es-none">
          {massage}
        </p>
        <span className="text-[10px] md:text-[12px] text-[#B6BFC6] text-start">
          {getDate(date).time}
        </span>
      </div>
    </div>
  );
};
