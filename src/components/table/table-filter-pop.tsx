"use client";
import Filter2Icon from "@/src/assets/icons/filter2";
import { cn } from "@/src/lib/utils";
import { Link, usePathname } from "@/src/navigation";
import { Popover } from "@mantine/core";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
export interface FilterData {
  label: string;
  key: string;
  value: any;
}
interface TableFilterProps {
  data: FilterData[];
}
function TableFilterPop({ data }: TableFilterProps) {
  const [opened, setOpened] = useState(false); // State to control Popover visibility
  const path = usePathname();
  const searchParams = useSearchParams();

  const handleClose = () => {
    setOpened(false); // Close the Popover
  };
  const ToggleFilterLink = (newFilterLabel: string, searchBy = "filter") => {
    // Remove filter if the same, otherwise apply the new filter
    if (searchParams.get(searchBy) === newFilterLabel) {
      return path;
    }
    return `${path}?${searchBy}=${newFilterLabel}`;
  };

  return (
    <Popover
      width={180}
      position="bottom-end"
      onClose={() => setOpened(false)}
      opened={opened}
      shadow="md"
    >
      <Popover.Target>
        <button
          onClick={() => setOpened((o) => !o)}
          className="flex items-center justify-around  cursor-pointer duration-200 hover:shadow-md gap-1 justify-center px-2 lg:px-3 py-1 h-9 border rounded-xl border-black min-w-[110px]"
        >
          <p className={"font-Regular text-sm lg:text-base"}>Filters</p>

          <Filter2Icon className=" w-3 lg:w-4 h-auto" />
        </button>
      </Popover.Target>
      <Popover.Dropdown className="rounded-xl bg-[#F0F6FB] px-0 border border-black shadow-md pt-2">
        <div className="flex flex-col gap-1 px-1 ">
          {data.map((item: any, index: number) => {
            return (
              <Link
                href={ToggleFilterLink(
                  item.value?.toString().replace(" ", "_") ||
                  item.label.replace(" ", "_"),
                  item.key || "filter"
                )}
                onClick={() => {
                  handleClose();
                }}
                key={index}
                className={cn(
                  " cursor-pointer duration-300 hover:shadow-md hover:bg-green/15 px-2 py-2 rounded-xl h-8 place-content-center  text-sm ",
                  searchParams.get(item.key || "filter") === (item.value?.toString().replace(" ", "_") ||
                    item.label.replace(" ", "_"))
                    ? "bg-green/25  hover:!bg-green/25"
                    : ""
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </Popover.Dropdown>
    </Popover>
  );
}

export default TableFilterPop;
