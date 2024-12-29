"use client";
import { DatePicker } from "@mantine/dates";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";

function RentalDuration({
  setDaysNumber,
  setValue,
  value,
}: {
  setDaysNumber: any;
  setValue: any;
  value: any;
}) {
  const isMobile = useMediaQuery("(max-width: 550px)");
  const calculateDuration = (valueDate: [Date | null, Date | null]) => {
    if (valueDate[0] && valueDate[1]) {
      const diffTime = Math.abs(
        valueDate[1].getTime() - valueDate[0].getTime()
      );
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // تحويل الفارق إلى أيام
    }
    return 0;
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl mb-5">Choose rental duration</h3>
      <DatePicker
        type="range"
        size={isMobile ? "xs" : "sm"}
        value={value}
        onChange={(value) => {
          setValue(value), setDaysNumber(calculateDuration(value));
        }}
        numberOfColumns={2}
        classNames={{
          day: "data-[in-range]:bg-green data-[last-in-range]:rounded-e-[14px]  data-[first-in-range]:rounded-s-[14px] p-0 rounded-3 data-[in-range]:text-white",
          monthCell: "px-0",
          levelsGroup:
            " lg:items-start items-center mb-3 flex-col sml:flex-row gap-5",
          weekday: "text-black",
          calendarHeader: "text-grayMedium",
        }}
        minDate={new Date()}
      />
    </div>
  );
}

export default RentalDuration;
