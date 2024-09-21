import Image from "next/image";
import React from "react";

function CardCalender({eventInfo}: any) {
  return (
    <div className="flex items-center justify-between max-w-fit  overflow-hidden px-4 py-2  gap-4 bg-white border-green border rounded-xl shadow-lg">
      <div className="flex items-center gap-2">
        <Image
          alt="event"
          src={eventInfo.event._def.extendedProps.image}
          className=" size-8 rounded-full object-cover"
        />
        <div>
          <h3 className="text-black text-sm font-SemiBold">
            {eventInfo.event._def.title}
          </h3>
          <p className="text-xs font-Regular text-grayMedium !truncate text-nowrap   w-full">
            {eventInfo.event._instance?.range.start + "to"}
          </p>
        </div>
      </div>
      <p>{eventInfo.event._def.extendedProps.status}</p>
    </div>
  );
}

export default CardCalender;
