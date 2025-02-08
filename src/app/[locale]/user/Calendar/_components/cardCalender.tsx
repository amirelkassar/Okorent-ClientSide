import CardStatus from "@/src/components/cardStatus";
import Image from "next/image";
import React from "react";
const GetStatus = (status: string) => {
  switch (status.toLowerCase()) {
    case "ongoing":
      return <CardStatus animation circle type="green" title={status} />;
    case "declined":
      return <CardStatus circle type="red" title={status} />;
    case "new":
      return <CardStatus animation circle type="blue" title={status} />;
    case "completed":
      return <CardStatus circle type="gray" title={status} />;
    default:
      return <CardStatus circle type="gray" title="--" />;
  }
};
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};
function CardCalender({ eventInfo }: any) {
  return (
    <div className="flex min-h-[80px] flex-col lgl:flex-row my-3  lgl:items-center lgl:justify-between w-full max-w-[calc(100%-32px)]  mx-auto   overflow-hidden px-2 lgl:px-4 py-2 gap-1  lgl:gap-4 bg-white lgl:border-green border rounded-xl shadow-lg">
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
            {GetStatus(eventInfo.event._def.extendedProps.status)}
          </div>
          <p className=" hidden lgl:block text-xs font-Regular text-grayMedium !truncate text-nowrap max-w-full   w-full">
            {formatDate(eventInfo.event._instance.range.start) +
              " to " +
              formatDate(eventInfo.event._instance.range.end)}
          </p>
        </div>
      </div>
      <div className=" lgl:block hidden">
        {GetStatus(eventInfo.event._def.extendedProps.status)}
      </div>
    </div>
  );
}

export default CardCalender;
