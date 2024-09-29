"use client";
import DownIcon from "@/src/assets/icons/down";
import { Select } from "@mantine/core";
import React, { useState } from "react";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function TopPerforming() {
  const [selectedDate, setSelectedDate] = useState<string | null>(
    "September"
  );
  return (
    <div className="border bg-white/50 rounded-3xl pt-8 px-6 pb-4">
      <div className="flex gap-6 justify-between">
        <div>
          <h4 className="font-Regular  text-base lg:text-[24px] mb-3">
            Top Performing Product
          </h4>
          <div className="flex items-center gap-4 flex-wrap">
            <p className=" text-xl lg:text-[32px] font-Bold leading-9 px-2 lg:px-0  ">
              $80
            </p>
            <span className="bg-[#ECF4FA] w-fit px-3 min-h-6 flex items-center justify-center text-blue text-[14px] rounded-lg">
              Mercedes Benz C197
            </span>
          </div>
        </div>
        <Select
          value={selectedDate}
          onChange={setSelectedDate}
          data={months}
          leftSectionPointerEvents="none"
          rightSection={<DownIcon />}
          placeholder="Select category"
          searchable
          classNames={{
            input:
              " text-black rounded-xl font-semibold h-full border-none placeholder:text-grayMedium placeholder:opacity-100 ",

            wrapper: "h-full",
            dropdown:
              "bg-white text-black rounded-xl border border-green/50  py-2",
            option: "hover:bg-green hover:text-white duration-300 ",
          }}
          className="h-10 w-[124px]  duration-200 min-h-10  bg-white rounded-xl border border-black text-grayMedium"
        />
      </div>
    </div>
  );
}

export default TopPerforming;
