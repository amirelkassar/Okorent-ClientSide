"use client";
import DateIcon from "@/src/assets/icons/date";
import { DatePicker, DatePickerInput } from "@mantine/dates";
import { useMediaQuery } from "@mantine/hooks";
import React, { useState } from "react";

function RentalDuration() {
  const [value, setValue] = useState<[Date | null, Date | null]>([
    new Date(),
    new Date(),
  ]);
  const isMobile = useMediaQuery("(max-width: 550px)");
  return (
    <div className="mb-8">
      <h3 className="text-xl mb-5">Choose rental duration</h3>
      <DatePicker
        type="range"
        size={isMobile?"xs":'sm'}
        value={value}
        onChange={setValue}
        numberOfColumns={2}
        classNames={{
          day: "data-[in-range]:bg-green data-[last-in-range]:rounded-e-[14px]  data-[first-in-range]:rounded-s-[14px] p-0 rounded-3 data-[in-range]:text-white",
          monthCell: "px-0",
          levelsGroup: " lg:items-start items-center mb-3 flex-col sml:flex-row gap-5",
          weekday: "text-black",
          calendarHeader: "text-grayMedium",
          
        }}
      />
    </div>
  );
}

export default RentalDuration;
