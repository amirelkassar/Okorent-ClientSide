"use client";
import React from "react";
import ROUTES from "../routes";
import { Link } from "../navigation";
import Image, { StaticImageData } from "next/image";
import TimeIcon from "../assets/icons/time";
import { useSearchParams } from "next/navigation";
import { cn } from "../lib/utils";
interface ChatsDataProps {
  id: number;
  name: string;
  date: string;
  time: string;
  identifier: number;
  image: StaticImageData;
}
interface ChatListRowProps {
  data: ChatsDataProps;
}
function ChatListRow({ data }: ChatListRowProps) {
  const searchParams = useSearchParams();

  return (
    <Link
      href={ROUTES.USER.INBOX + "?chat=" + data.id}
      className={cn(
        "py-1 px-2 flex items-center gap-3 cursor-pointer duration-300 hover:bg-grayBack/50 justify-between  w-full rounded-[18px] ",
        data.identifier > 0 ? "bg-grayBack hover:bg-grayBack" : null,
        data.id.toString() === searchParams.get("chat")
          ? "bg-green/30 hover:bg-green/50"
          : ""
      )}
    >
      <div className=" flex items-center gap-3 w-full rounded-2xl">
        <Image
          src={data.image}
          alt={data.name}
          priority
          className=" size-[50px] md:size-[57px] rounded-full object-cover object-top "
        />
        <div>
          <h3 className="text-[16px] ">{data.name}</h3>
          <div className="flex items-center gap-1">
            <TimeIcon />
            <p className="text-grayMedium text-sm">
              {data.date} | {data.time}
            </p>
          </div>
        </div>
      </div>
      {data.id.toString() ===
      searchParams.get("chat") ? null : data.identifier > 0 ? (
        <p className="p-[2px] text-[14px] h-auto w-fit min-w-[26px] min-h-fit aspect-square flex items-center justify-center text-white font-SemiBold rounded-full bg-green border-2 border-[#a9c788]">
          {data.identifier}
        </p>
      ) : null}
    </Link>
  );
}

export default ChatListRow;
