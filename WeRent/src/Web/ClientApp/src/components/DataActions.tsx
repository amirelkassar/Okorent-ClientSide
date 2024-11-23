"use client";
import DotsIcon from "@/src/assets/icons/dots";
import { Link } from "@/src/navigation";
import { Popover } from "@mantine/core";
import React, { useState } from "react";

function DataActions({ data }: { data: any[] }) {
  const [opened, setOpened] = useState(false); // State to control Popover visibility

  const handleClose = () => {
    setOpened(false); // Close the Popover
  };
  return (
    <Popover
      width={172}
      position="bottom-end"
      onClose={() => setOpened(false)}
      opened={opened}
      shadow="md"
    >
      <Popover.Target>
        <button
          onClick={() => setOpened((o) => !o)}
          className="w-4 bg-/10 flex items-center justify-center h-4"
        >
          <DotsIcon />
        </button>
      </Popover.Target>
      <Popover.Dropdown className="rounded-xl bg-white px-0 border border-grayBack pt-2">
        <div className="flex flex-col gap-1 px-2 ">
          {data.map((item: any, index: number) => {
            return item.type === "link" ? (
              <Link
                key={index}
                href={item.link||'#'}
                className="flex items-center gap-2 py-2 hover:bg-green/20 duration-200 min-h-[30px] h-[30px] rounded-md px-2  "
              >
                <span className=" block size-3">{item.icon}</span>
                <p className="text-black  text-sm font-medium"> {item.label}</p>
              </Link>
            ) : item.type === "btn" ? (
              <button
                key={index}
                onClick={() => {
                  item.action();
                  handleClose();
                }}
                className="flex w-full min-h-[30px] h-[30px] rounded-md items-center gap-2 py-2 hover:bg-green/20 duration-200  px-2  "
              >
                {item.icon}
                <p className={`text-sm text-black font-medium`}>{item.label}</p>
              </button>
            ) : null;
          })}
        </div>
      </Popover.Dropdown>
    </Popover>
  );
}

export default DataActions;
