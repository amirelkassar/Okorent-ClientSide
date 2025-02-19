"use client";
import React from "react";
import ROUTES from "../routes";
import { Link, usePathname } from "../navigation";
import Image, { StaticImageData } from "next/image";
import TimeIcon from "../assets/icons/time";
import { useSearchParams } from "next/navigation";
import { cn, getDate } from "../lib/utils";
import avatarUser from "@/src/assets/images/avatar.png";

interface ChatsDataProps {
  chatId: number;
  userName: string;
  displayName: string;
  lastMessageDate: string;
  identifier: number;
  userImage: StaticImageData;
  userId:any
}
interface ChatListRowProps {
  data: ChatsDataProps;
}
function ChatListRow({ data }: ChatListRowProps) {
  const searchParams = useSearchParams();
  const path = usePathname();
  const adminView = path.includes(ROUTES.ADMIN.DASHBOARD);
  return (
    <Link
      href={
        (adminView ? ROUTES.ADMIN.INBOX : ROUTES.USER.INBOX) +
        "?chat=" +
        data.chatId
      }
      className={cn(
        "py-1 px-2 flex items-center gap-3 cursor-pointer duration-300 hover:bg-grayBack/50 justify-between  w-full rounded-[18px] ",
        data.identifier > 0 ? "bg-grayBack hover:bg-grayBack" : null,
        data?.chatId?.toString() === searchParams.get("chat")
          ? "bg-green/30 hover:bg-green/50"
          : ""
      )}
    >
      <div className=" flex items-center gap-3 w-full rounded-2xl">
        <Image
          src={data?.userImage || avatarUser}
          alt={data?.userName||'User'}
          width={100}
          height={100}
          priority
          className=" size-11 md:size-[57px] rounded-full object-cover object-top "
        />
        <div>
          <h3 className=" text-sm md:text-[16px] ">{data?.userName||'User'}</h3>
          <div className="flex items-center gap-1">
            <TimeIcon />
            <p className="text-grayMedium text-xs md:text-sm">
              {getDate(data.lastMessageDate).fullMonthNameWithDayName}
            </p>
          </div>
        </div>
      </div>
      {data?.chatId?.toString() ===
      searchParams.get("chat") ? null : data.identifier > 0 ? (
        <p className="p-[2px] text-[14px] h-auto w-fit min-w-[26px] min-h-fit aspect-square flex items-center justify-center text-white font-SemiBold rounded-full bg-green border-2 border-[#a9c788]">
          {data.identifier}
        </p>
      ) : null}
    </Link>
  );
}

export default ChatListRow;
