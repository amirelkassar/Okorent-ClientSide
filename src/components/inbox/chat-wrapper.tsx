"use client";
import { memo } from "react";
import Loading from "@/src/components/loading";
import Error500 from "@/src/components/error-500";

export const ChatWrapper = memo(
  ({
    query,
    children,
    NoChat = false,
  }: {
    query: any;
    children: (args: any) => React.ReactNode;
    NoChat: boolean;
  }) => {
    if (!query) throw new Error("query is required");

    const {
      data,
      isPending,
      isError,
      hasNextPage,
      fetchNextPage,
      isFetchingNextPage,
    } = query;
    console.log(data?.pages[0].data);

    if (isPending) return <Loading />;

    if (isError && !NoChat) return <Error500 />;
    // const NoChat = data?.pages[0].data === null && !isPending;

    const generalData = data?.pages[0]?.data || {};

    const { userId, userImage, userName } = generalData;

    const totalCount = data?.pages[0]?.data?.totalCount;

    const mergedMessages =
      data?.pages?.flatMap((page: any) => page?.data?.messages).reverse() || [];

    const totalMessages =
      data?.pages?.reduce(
        (total: any, page: any) => total + page?.data?.messages.length,
        0
      ) || 0;

    return children({
      chatId: userId,
      userImage,
      userName,
      messages: mergedMessages,
      totalMessages,
      totalCount,
      hasNextPage,
      fetchNextPage,
      isFetchingNextPage,
      NoChat,
    });
  }
);

ChatWrapper.displayName = "ChatWrapper";
