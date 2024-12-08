'use client'
import { SegmentedControl } from "@mantine/core";
import React from "react";
interface SwitchProps {
  viewChats: string;
  setViewChats: (value: string) => void;
}
function SwitchChat({ viewChats, setViewChats }: SwitchProps) {
  return (
    <SegmentedControl
      value={viewChats}
      onChange={(e) => {
        setViewChats(e);
      }}
      withItemsBorders={false}
      color="#88BA52"
      data={[
        { label: "My Inbox", value: "inbox" },
        { label: "Users Inbox", value: "users" },
      ]}
      classNames={{
        label:
          " data-[active]:text-white h-full py-0 flex items-center rounded-[20px] justify-center text-sm  flex item-center justify-center   text-black",
        root: "!bg-transparent pt-[2px] ps-[2px] w-[200px] lg:w-[220px] items-center h-10  border !border-green",
        control: "h-full items-center bg-transparent",
      }}
      radius="10px"
      size="xs"
      styles={(theme) => ({
        root: {
          backgroundColor: theme.colors.gray[0],
          borderColor: theme.colors.green[4],
        },
      })}
    />
  );
}

export default SwitchChat;
