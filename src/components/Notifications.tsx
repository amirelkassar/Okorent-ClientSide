"use client";
import React, { useState } from "react";
import NotificationIcon from "../assets/icons/notfication";
import { Popover, ScrollArea, Tabs } from "@mantine/core";
import ErrorIcon from "../assets/icons/error";
import DownIcon from "../assets/icons/down";
import SwitchControl from "./switch-control";

function Notifications() {
  const [opened, setOpened] = useState(false);
  const [notifications] = useState<any[]>([
    {
      name: "MJ",
      des: "Your rental request has been approved By Mark",
      date: "30 mins ago",
    },
    {
      name: "MJ",
      des: "Your rental request has been approved By Mark",
      date: "30 mins ago",
    },
    {
      name: "MJ",
      des: "Your rental request has been approved By Mark",
      date: "30 mins ago",
    },
    {
      name: "MJ",
      des: "Your rental request has been approved By Mark",
      date: "30 mins ago",
    },
    {
      name: "MJ",
      des: "Your rental request has been approved By Mark",
      date: "30 mins ago",
    },
    {
      name: "MJ",
      des: "Your rental request has been approved By Mark",
      date: "30 mins ago",
    },
    {
      name: "MJ",
      des: "Your rental request has been approved By Mark",
      date: "30 mins ago",
    },
  ]);
  const filteredNotifications = notifications.filter(
    (notification) => notification
  );
  return (
    <>
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
            className="w-10 h-10 rounded-[50%] bg-[#E5F1FB] p-2 relative flex items-center justify-center  cursor-pointer duration-300 hover:shadow-lg"
          >
            <p className="text-white text-[8px] flex items-center border border-[#E5F1FB] justify-center bg-red min-w-[12px] w-fit h-[12px] aspect-[1/1] rounded-[50%] p-[2px] absolute top-2 right-2">
              1
            </p>
            <NotificationIcon />
          </button>
        </Popover.Target>

        <Popover.Dropdown className="rounded-xl   px-0 border-2 border-blueLight ">
          <div className="w-full max-w-sm  rounded-lg shadow-lg">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-SemiBold">Notifications</h2>
                <button
                  className="text-sm text-blue font-Regular hover:text-blue-700"
                  //onClick={markAllAsRead}
                >
                  Mark all as read
                </button>
              </div>
              {/* <Tabs
                defaultValue="unread"
                className="mt-4"
                onValueChange={(value) => setFilter(value as "all" | "unread")}
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="unread">Unread</TabsTrigger>
                  <TabsTrigger value="all">
                    All{" "}
                    <span className="ml-1 text-xs">
                      ({notifications.length})
                    </span>
                  </TabsTrigger>
                </TabsList>
              </Tabs> */}
              <div className="mt-2 mx-auto flex items-center justify-center">
                <SwitchControl
                  options={[
                    { label: "Unread", value: "Unread" },
                    {
                      label: (
                        <div className="flex gap-2 items-center">
                          All
                          <p
                            className={
                              "bg-white text-black w-fit min-w-5 px-1 flex items-center justify-center my-1 text-xs font-Regular h-5 rounded-md"
                            }
                          >
                            5
                          </p>
                        </div>
                      ),
                      value: "All",
                    },
                  ]}
                  radius={"md"}
                  rootClassName="!h-8 !w-[160px] "
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
                  {filteredNotifications.map((notification, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-3 p-4  cursor-pointer  hover:bg-green/20 duration-500 ${
                        !notification.isRead ? "bg-accent/10" : ""
                      }`}
                      // onClick={() => markAsRead(notification.id)}
                    >
                      <div className="flex bg-blueLight rounded-full items-center justify-center w-10 h-10 text-sm font-medium ">
                        {notification.name}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-Regular">
                          {notification.des}
                        </p>
                        <p className=" text-xs text-grayMedium">
                          {notification.date}
                        </p>
                      </div>
                      <div className="bg-blueLight rounded-full p-2 size-8 flex items-center justify-center">
                        <DownIcon
                          fill="black"
                          className="w-4 h-4 text-muted-foreground -rotate-90"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ScrollArea>
          </div>
        </Popover.Dropdown>
      </Popover>
    </>
  );
}

export default Notifications;
