import CardStatus from "@/src/components/cardStatus";
import Image from "next/image";
import React from "react";
const GetStatus = (status: string) => {
  switch (status.toLowerCase()) {
    case "ongoing":
      return <CardStatus animation circle type="green" title={status} />;
    case "declined":
      return <CardStatus circle type="red" title={status} />;
    case "now":
      return <CardStatus animation circle type="blue" title={status} />;
    case "completed":
      return <CardStatus circle type="gray" title={status} />;
    default:
      return <CardStatus circle type="gray" title="--" />;
  }
};
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}
function CardCalender({eventInfo}: any) {
  return (
    <div className="flex items-center justify-between w-full max-w-full min-h-16   overflow-hidden px-4 py-2  gap-4 bg-white border-green border rounded-xl shadow-lg">
      <div className="flex items-center gap-2 flex-1 w-[calc(100%-90px)] ">
        <Image
          alt="event"
          src={eventInfo.event._def.extendedProps.image}
          className=" size-8 rounded-full object-cover"
        />
        <div className="flex-1 max-w-full">
          <h3 className="text-black text-sm font-SemiBold !truncate max-w-full">
            {eventInfo.event._def.title}d
          </h3>
          <p className="text-xs font-Regular text-grayMedium !truncate text-nowrap max-w-full   w-full">
            {formatDate(eventInfo.event._instance.range.start) + " to " + formatDate(eventInfo.event._instance.range.end)}
          </p>
        </div>
      </div>
      {
        GetStatus(eventInfo.event._def.extendedProps.status)
      }
      
    </div>
  );
}

export default CardCalender;
