import React from "react";
import DownIcon from "../assets/icons/down";
import { getDate } from "../lib/utils";

function NotificationRow({
  notificationDetails,
}: {
  notificationDetails: any;
}) {
  return (
    <div
      className={`flex items-start gap-3 p-4 cursor-pointer hover:bg-green/20 duration-500 ${
        notificationDetails?.status === 2 ? "bg-accent/10" : ""
      }`}
    >
      <div className="flex bg-blueLight rounded-full items-center justify-center w-10 h-10 text-sm font-medium">
        {notificationDetails.title?.toString().split(" ")[0]}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs">{notificationDetails.content}</p>
        <p className="text-xs text-grayMedium">
          {getDate(notificationDetails.created).fullYear}
        </p>
      </div>
      <div className="bg-blueLight rounded-full p-2 flex items-center justify-center">
        <DownIcon fill="black" className="w-4 h-4 -rotate-90" />
      </div>
    </div>
  );
}

export default NotificationRow;
