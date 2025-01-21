"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import NotificationIcon from "../assets/icons/notfication";
import { Popover, ScrollArea } from "@mantine/core";
import SwitchControl from "./switch-control";
import { useNotifications } from "../hooks/queries/user/notifications";
import Error500 from "./error-500";
import NotificationRow from "./notification-row";
import { Virtuoso } from "react-virtuoso";
import LoadingNotifications from "./loading-notifications";

function Notifications() {
  const [opened, setOpened] = useState(false);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    isLoading,
    refetch,
  } = useNotifications();

  const loadMore = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const Content = useMemo(() => {
    if (isLoading) return <LoadingNotifications />;
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
        className="virtuoso-container"
        endReached={loadMore}
        components={{
          Footer: () => isFetchingNextPage && <LoadingNotifications />,
        }}
        style={{ height: "332px", maxHeight: "332px", maxWidth: "99%" }}
        itemContent={(index: number, data: any) => {
          return <NotificationRow key={index} notificationDetails={data} />;
        }}
      />
    );
  }, [data, isError, loadMore, isFetchingNextPage, isLoading]);
  const handlePopoverToggle = () => {
    if (opened) {
      setOpened(false);
    } else {
      setOpened(true);
      refetch(); // Only call refetch if mounted
    }
  };
  useEffect(() => {
    // Ensure we only call `refetch` when the component is mounted
    if (opened) {
      refetch();
    }
  }, [opened, refetch]);
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
          onClick={handlePopoverToggle}
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
                          2
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

export default Notifications;
