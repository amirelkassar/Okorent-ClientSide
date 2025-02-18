"use client";

import { forwardRef, useCallback, useMemo, useState } from "react";
import { Virtuoso, VirtuosoHandle } from "react-virtuoso";
import { cn } from "@/src/lib/utils";

interface MessageType {
  id: string;
  messageContent: string;
  senderUserId: string;
  senderName?: string;
  senderImage?: string;
  created: string; // Renamed to match `ChatBody`'s `MessageType`
  status?: string;
}

interface ChatBodyProps {
  messages: MessageType[];
  totalCount: number;
  totalMessages: number;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
  children: (props: { m: MessageType; i: number }) => React.ReactNode;
}

export const ChatBody = forwardRef<VirtuosoHandle, ChatBodyProps>(
  (
    {
      messages = [],
      totalCount = 0,
      totalMessages = 0,
      hasNextPage = false,
      isFetchingNextPage = false,
      fetchNextPage = () => {},
      children,
    },
    ref
  ) => {
    const [isAtBottom, setIsAtBottom] = useState(true);

    // HANDLE FETCH NEXT PAGE
    const onFetchNextPage = useCallback(() => {
      if (hasNextPage && !isFetchingNextPage) fetchNextPage();
    }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

    const statusMsg = useMemo(() => {
      return (
        <div
          className={cn(
            "w-fit mx-auto capitalize text-xs pt-2",
            !hasNextPage && "text-grayDark"
          )}
        >
          {isFetchingNextPage
            ? "loading"
            : !hasNextPage
            ? "no_more_messages"
            : ""}
        </div>
      );
    }, [hasNextPage, isFetchingNextPage]);

    const firstItemIndex = useMemo(() => {
      return Math.max(0, totalCount - totalMessages);
    }, [totalCount, totalMessages]);

    if (!children) {
      console.error("ChatBody must have a children prop");
      return null;
    }

    if (!totalCount) return <div>No Messages</div>;

    return (
      <Virtuoso
        ref={ref}
        data={messages}
        firstItemIndex={firstItemIndex}
        initialTopMostItemIndex={messages.length - 1}
        startReached={onFetchNextPage}
        followOutput={isAtBottom}
        atBottomStateChange={setIsAtBottom}
        components={{ Header: () => statusMsg }}
        itemContent={(i, m) => children({ m, i })}
        className="virtuoso-container"
      />
    );
  }
);

ChatBody.displayName = "ChatBody";
