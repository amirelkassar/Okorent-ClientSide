import React, { memo } from "react";
import DownIcon from "../assets/icons/down";
import { getDate } from "../lib/utils";
import { useNotificationsMarkAsRead } from "../hooks/queries/user/notifications";

function NotificationRow({
  notificationDetails,
}: {
  notificationDetails: any;
}) {
  const { mutateAsync: markAsRead } = useNotificationsMarkAsRead();
  return (
    <div
      onClick={() => {
        if (notificationDetails.status === 2) {
          markAsRead({ norificationId: notificationDetails.id });
        }
      }}
      className={`flex mb-1 border-b border-[#B6BFC6] items-start gap-3 p-4 cursor-pointer hover:shadow-md     duration-500 ${
        notificationDetails?.status === 2 ? "bg-green/10" : ""
      }`}
    >
      <div className="flex bg-blueLight rounded-full items-center justify-center w-10 h-10 text-sm font-medium">
        {notificationDetails.title?.toString().split(" ")[0]}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs">{notificationDetails.content}</p>
        <p className="text-xs text-grayMedium">
          {getDate(notificationDetails.created).timeFromNow}
        </p>
      </div>
      {notificationDetails.objectUrl && (
        <div className="bg-blueLight rounded-full p-2 flex items-center justify-center">
          <DownIcon fill="black" className="w-4 h-4 -rotate-90" />
        </div>
      )}
    </div>
  );
}

export default memo(NotificationRow);
