"use client";
import ArrowDownIcon from "@/src/assets/icons/arrowDown";
import { cn } from "@/src/lib/utils";
import { Popover } from "@mantine/core";
import React, { useState } from "react";
const states = ["Pending", "Completed", "Canaled", "Rejected"];
function StateOrder() {
  const [selectState, setSelectState] = useState("Pending");
  return (
    <Popover width={112} position="bottom-end" shadow="md">
      <Popover.Target>
        <button className="flex bg-green items-center  cursor-pointer duration-200 hover:shadow-md gap-1 justify-between px-2 lg:px-3 py-1 h-9 rounded-xl  min-w-[110px]">
          <p className={"font-Regular text-white text-xs"}>{selectState}</p>

          <ArrowDownIcon fill="white" className=" w-3 h-auto" />
        </button>
      </Popover.Target>
      <Popover.Dropdown className="rounded-xl bg-white px-0 border border-black/10 shadow-md pt-1">
        <div className="flex flex-col gap-1 px-1 ">
          {states.map((state: string) => (
            <button
              key={state}
              onClick={() => setSelectState(state)}
              className={cn(
                " cursor-pointer duration-300 hover:shadow-md hover:bg-green/15 px-2 py-1 rounded-lg h-7 text-start  text-xs ",
                selectState === state ? "bg-green/10" : ""
              )}
            >
              {state}
            </button>
          ))}
        </div>
      </Popover.Dropdown>
    </Popover>
  );
}

export default StateOrder;
