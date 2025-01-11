"use client";

import React, { forwardRef, memo, useCallback, useMemo, useState } from "react";
import NotificationIcon from "../assets/icons/notfication";
import {
  Divider,
  Notification,
  Popover,
  ScrollArea,
} from "@mantine/core";
import ErrorIcon from "../assets/icons/error";
import DownIcon from "../assets/icons/down";
import SwitchControl from "./switch-control";
import { useNotifications } from "../hooks/queries/user/notifications";
import Loading from "./loading";
import Error500 from "./error-500";
import { getDate } from "../lib/utils";

interface NotificationItemProps {
  id: string | number;
  title?: string;
  content?: string;
  created?: string;
  status?: number;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

function Notifications() {
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



  const Content = useMemo(() => {
    if (isLoading) return <Loading />;
    if (isError) return <Error500 />;

    const totalCount = data?.pages[0]?.data?.totalCount;

    if (!totalCount) {
      return (
        <div className="w-full h-full flex justify-center items-center text-grayDark">
          No notifications
        </div>
      );
    }

    return data.pages.flatMap((page:any) =>
      page.data?.map((notification: NotificationItemProps, index: number) => (
        <NotificationItem
          key={notification.id || index}
          {...notification}
          onClick={() => console.log(`Notification clicked: ${notification.id}`)}
        />
      ))
    );
  }, [data, isLoading, isError]);

  return (
    <Popover
      opened={opened}
      onChange={setOpened}
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
          onClick={() => setOpened((o) => !o)}
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
          <ScrollArea className="h-[340px]">
            {filteredNotifications.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full p-4 text-center text-muted-foreground">
                <ErrorIcon className="w-8 h-8 mb-2 opacity-50" />
                <p>No notifications to show</p>
              </div>
            ) : (
              <div className="divide-y">
                {filteredNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`flex items-start gap-3 p-4 cursor-pointer hover:bg-green/20 duration-500 ${
                      !notification.isRead ? "bg-accent/10" : ""
                    }`}
                  >
                    <div className="flex bg-blueLight rounded-full items-center justify-center w-10 h-10 text-sm font-medium">
                      {notification.name}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs">{notification.des}</p>
                      <p className="text-xs text-grayMedium">
                        {notification.date}
                      </p>
                    </div>
                    <div className="bg-blueLight rounded-full p-2 flex items-center justify-center">
                      <DownIcon fill="black" className="w-4 h-4 -rotate-90" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>
        </div>
      </Popover.Dropdown>
    </Popover>
  );
}

const NotificationItem = memo(
  forwardRef<HTMLDivElement, NotificationItemProps>(
    ({ title = "", content = "", created = "", status = 2, onClick = () => {} }, ref) => {
      const { timeFromNow } = getDate(created);
      const isNew = status === 2;

      return (
        <>
          <Notification
            ref={ref}
            radius={3}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onClick(e);
            }}
            classNames={{
              root: "shadow-none cursor-pointer transition hover:bg-blueLighter",
              description: "flex items-center gap-4",
            }}
            withCloseButton={false}
            color={isNew ? "#10B0C1" : "#939393"}
          >
            <div className="flex-1">
              <h4 className="font-bold text-sm">{title}</h4>
              <p className="text-xs text-grayDark">{content}</p>
            </div>
            <time>{timeFromNow}</time>
          </Notification>
          <Divider my="sm" className="border-grayLight border-2 last:border-none" />
        </>
      );
    }
  )
);
NotificationItem.displayName = "NotificationItem";

export default Notifications;
