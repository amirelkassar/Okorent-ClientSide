"use client";

import React, { forwardRef, memo, useCallback, useMemo, useState } from "react";
import NotificationIcon from "../assets/icons/notfication";
import { Notification, Popover, ScrollArea } from "@mantine/core";
import SwitchControl from "./switch-control";
import { useNotifications } from "../hooks/queries/user/notifications";
import Loading from "./loading";
import Error500 from "./error-500";
import NotificationRow from "./notification-row";
import { Virtuoso } from "react-virtuoso";
import { useRouter } from "next/navigation";

interface NotificationItemProps {
  id: string | number;
  title?: string;
  content?: string;
  created?: string;
  status?: number;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

function Notifications() {
  const router = useRouter();

  const [opened, setOpened] = useState(false);
  const [notifications] = useState<any[]>([
    {
      id: 1,
      name: "MJ",
      des: "Your rental request has been approved by Mark",
      date: "30 mins ago",
      isRead: false,
    },
    {
      id: 2,
      name: "MJ",
      des: "Your rental request has been approved by Mark",
      date: "30 mins ago",
      isRead: true,
    },
    // Add more notifications as needed...
  ]);

  const filteredNotifications = notifications.filter(
    (notification) => notification
  );

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    isLoading,
    refetch,
  } = useNotifications();
  const onNotificationClick = useCallback(
    (notification: any) => {
      if (notification?.objectUrl) {
        router.push(notification.objectUrl);
        setOpened(false);
      }
    },
    [router]
  );
  const loadMore = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const Content = useMemo(() => {
    if (isLoading) return <Loading />;
    if (isError) return <Error500 />;

    const totalCount = data?.pages[0]?.data?.totalCount;

    if (!totalCount) {
      return (
        <div className="w-full my-10 h-full flex justify-center items-center text-grayDark">
          No notifications
        </div>
      );
    }
    const mergedNotifications =
      data?.pages.flatMap((page) => page?.data?.items) || [];

    return (
      <Virtuoso
        data={mergedNotifications}
        endReached={loadMore}
        components={{
          Footer: () => isFetchingNextPage && <Loading />,
        }}
        style={{ height: "350px", maxHeight: "350px",borderRadius:"10px" }}
        itemContent={(index: number, data: any) => {
          return <NotificationRow key={index} notificationDetails={data} />;
        }}
      />
    );
  }, [
    data,
    onNotificationClick,
    isError,
    refetch,
    loadMore,
    isFetchingNextPage,
    isLoading,
    opened,
  ]);

  return (
    <Popover
      opened={opened}
      onChange={(e) => {
        setOpened((o) => !o);
      }}
      position="bottom-end"
      clickOutsideEvents={["mouseup", "touchend"]}
      offset={10}
      classNames={{
        dropdown: "bg-white shadow-md py-0",
      }}
      width={340}
    >
      <Popover.Target>
        <button
          onClick={(e) => {
            if (opened) {
              setOpened(false);
            } else {
              setOpened(true);
              refetch();
            }
          }}
          value={opened.toString()}
          className="w-10 h-10 rounded-full bg-[#E5F1FB] p-2 relative flex items-center justify-center cursor-pointer duration-300 hover:shadow-lg"
        >
          <p className="text-white text-[8px] flex items-center border border-[#E5F1FB] justify-center bg-red min-w-[12px] w-fit h-[12px] aspect-[1/1] rounded-full p-[2px] absolute top-2 right-2">
            1
          </p>
          <NotificationIcon />
        </button>
      </Popover.Target>

      <Popover.Dropdown className="rounded-xl px-0 border-2 border-blueLight">
        <div className="w-full max-w-sm rounded-lg shadow-lg">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold">Notifications</h2>
              <button
                className="text-sm text-blue hover:text-blue-700"
                onClick={() => console.log("Mark all as read")}
              >
                Mark all as read
              </button>
            </div>
            <div className="mt-2 mx-auto flex items-center justify-center">
              <SwitchControl
                options={[
                  { label: "Unread", value: "Unread" },
                  {
                    label: (
                      <div className="flex gap-2 items-center">
                        All
                        <p className="bg-white text-black px-1 text-xs h-5 rounded-md">
                          {filteredNotifications.length}
                        </p>
                      </div>
                    ),
                    value: "All",
                  },
                ]}
                radius="md"
                rootClassName="!h-8 !w-[160px]"
                size="sm"
              />
            </div>
          </div>
          <ScrollArea type="never" className="h-[340px]">
            {Content}
          </ScrollArea>
        </div>
      </Popover.Dropdown>
    </Popover>
  );
}

const NotificationItem = memo(
  forwardRef<HTMLDivElement, NotificationItemProps>(
    (notificationDetails: any) => {
      return (
        <>
          <NotificationRow notificationDetails={notificationDetails} />
        </>
      );
    }
  )
);
NotificationItem.displayName = "NotificationItem";

export default Notifications;
