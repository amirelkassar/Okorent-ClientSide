import OrderStatus from "@/src/components/order-status";
import { getDate } from "@/src/lib/utils";
import Image from "next/image";
import React, { memo } from "react";

function CardCalender({ eventInfo }: any) {

  return (
    <div className="flex min-h-[70px] flex-col lgl:flex-row my-3  lgl:items-center lgl:justify-between w-full max-w-[calc(100%-32px)]  mx-auto   overflow-hidden px-2 lgl:px-4 py-2 gap-1  lgl:gap-4 bg-white lgl:border-green border rounded-xl shadow-lg">
      <div className="flex items-center gap-2 flex-1 lgl:w-[calc(100%-90px)] ">
        <Image
          width={40}
          height={40}
          alt="event"
          src={eventInfo.event._def.extendedProps.image}
          className=" size-8 rounded-full object-cover min-w-8 object-top"
        />
        <div className="flex-1 max-w-full">
          <h3 className="text-black text-[10px] mb-1 lgl:text-sm font-SemiBold !truncate max-w-full">
            {eventInfo.event._def.title}
          </h3>
          <div className=" block lgl:hidden">
            <OrderStatus status={eventInfo.event._def.extendedProps.status} />
          </div>
          <p className=" hidden lgl:block text-xs font-Regular text-grayMedium !truncate text-nowrap max-w-full   w-full">
            {getDate(eventInfo.event._def.extendedProps.from)
              .fullYearWithMonthName +
              " to " +
              getDate(eventInfo.event._def.extendedProps.to)
                .fullYearWithMonthName}
          </p>
        </div>
      </div>
      <div className=" lgl:block hidden">
        <OrderStatus status={eventInfo.event._def.extendedProps.status} />
      </div>
    </div>
  );
}

export default memo(CardCalender);
