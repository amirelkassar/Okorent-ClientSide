"use client";
import DateIcon from "@/src/assets/icons/date";
import { DatePickerInput } from "@mantine/dates";
import React, { useState } from "react";

function RentalDuration() {
  const [value, setValue] = useState<[Date | null, Date | null]>([
    new Date(),
    new Date(),
  ]);
  return (
    <div className="mb-8">
      <h3 className="text-[24px] mb-5">Choose rental duration</h3>
      <DatePickerInput
        type="range"
      
        placeholder=".. - .."
        leftSection={<DateIcon fill="#344050"/>}
        value={value}
        onChange={setValue}
        popoverProps={{
        
          classNames: {
            dropdown:
              "border border-green/30  rounded-2xl shadow-lg shadow-green/40",
          },
        }}
        classNames={{
          input:
            " text-black rounded-2xl text-grayMedium bg-white/50   rounded-2xl border border-green/30 h-[64px]  placeholder:text-grayMedium placeholder:opacity-100 ",
          day: "data-[in-range]:bg-green data-[last-in-range]:rounded-e-[14px]  data-[first-in-range]:rounded-s-[14px] p-0 rounded-3 data-[in-range]:text-white",
          monthCell: "px-0",
          levelsGroup: "justify-center mb-3",
          weekday: "text-black",
          calendarHeader: "text-grayMedium",
        }}
      />
    </div>
  );
}

export default RentalDuration;
