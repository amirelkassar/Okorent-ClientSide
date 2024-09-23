"use client";
import SearchIcon from "@/src/assets/icons/search";
import { TextInput } from "@mantine/core";
import Image, { StaticImageData } from "next/image";
import React from "react";
import avatar from "@/src/assets/images/avatar.png";
import TimeIcon from "@/src/assets/icons/time";
import { cn } from "@/src/lib/utils";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { useSearchParams } from "next/navigation";
interface ChatsDataProps {
  id: number;
  name: string;
  date: string;
  time: string;
  identifier: number;
  image: StaticImageData;
}

const ChatsData: ChatsDataProps[] = [
  {
    id: 1,
    name: "Ahmed Mohamed Badr",
    date: "Today",
    time: "05:30 PM",
    identifier: 1,
    image: avatar,
  },
  {
    id: 2,
    name: "Ahmed Mohamed Badr",
    date: "Today",
    time: "05:30 PM",
    identifier: 0,
    image: avatar,
  },
  {
    id: 3,
    name: "Ahmed Mohamed Badr",
    date: "Today",
    time: "05:30 PM",
    identifier: 0,
    image: avatar,
  },
  {
    id: 4,
    name: "Ahmed Mohamed Badr",
    date: "Today",
    time: "05:30 PM",
    identifier: 1,
    image: avatar,
  },
  {
    id: 5,
    name: "Ahmed Mohamed Badr",
    date: "Today",
    time: "05:30 PM",
    identifier: 1,
    image: avatar,
  },
  {
    id: 6,
    name: "Ahmed Mohamed Badr",
    date: "Today",
    time: "05:30 PM",
    identifier: 0,
    image: avatar,
  },
  {
    id: 7,
    name: "Ahmed Mohamed Badr",
    date: "Today",
    time: "05:30 PM",
    identifier: 0,
    image: avatar,
  },
  {
    id: 8,
    name: "Ahmed Mohamed Badr",
    date: "Today",
    time: "05:30 PM",
    identifier: 1,
    image: avatar,
  },
  {
    id: 9,
    name: "Ahmed Mohamed Badr",
    date: "Today",
    time: "05:30 PM",
    identifier: 0,
    image: avatar,
  },
  {
    id: 10,
    name: "Ahmed Mohamed Badr",
    date: "Today",
    time: "05:30 PM",
    identifier: 1,
    image: avatar,
  },
  {
    id: 11,
    name: "Ahmed Mohamed Badr",
    date: "Today",
    time: "05:30 PM",
    identifier: 1,
    image: avatar,
  },
];

function ListChats() {
  const searchParams = useSearchParams();
  return (
    <div className={`lg:max-w-[360px] ${searchParams.get("chat") ? "hidden lg:flex" : "flex"}  w-full flex-1 h-full min-h-full  flex-col gap-6`}>
      <div className=" flex h-12 md:h-[66px] min-h-12 md:min-h-[66px] w-full  rounded-2xl  border border-green overflow-hidden">
        <TextInput
          placeholder="Search in chats"
          type="text"
          classNames={{
            input:
              "flex-1 bg-white text-black h-full border-none px-5 text-[16px] ",
            wrapper: "h-full",
          }}
          className="flex-1  text-grayMedium h-full text-[16px]"
        />
        <button className="h-full px-3 w-11 md:w-[58px] rounded-e-xl bg-green flex items-center justify-center">
          <SearchIcon />
        </button>
      </div>
      <div className="py-2 md:py-7 md:px-2 md:bg-white md:border md:border-green rounded-3xl flex-1   h-[calc(100%-270px)]      md:shadow-sidebar  ">
        <div className=" flex flex-col gap-4  max-w-full overflow-auto h-full max-h-full md:h-[710px] ">
          {ChatsData.map((item, i) => {
            return (
              <Link
                href={ROUTES.USER.INBOX + "?chat=" + item.id}
                key={i}
                className={cn(
                  "py-1 px-2 flex items-center gap-3 cursor-pointer duration-300 hover:bg-grayBack/50 justify-between  w-full rounded-[18px] ",
                  item.identifier > 0 ? "bg-grayBack hover:bg-grayBack" : null,
                  item.id.toString() === searchParams.get("chat")
                    ? "bg-green/30 hover:bg-green/50"
                    : ""
                )}
              >
                <div className=" flex items-center gap-3 w-full rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.name}
                    priority
                    className=" size-[50px] md:size-[57px] rounded-full object-cover object-top "
                  />
                  <div>
                    <h3 className="text-[16px] ">{item.name}</h3>
                    <div className="flex items-center gap-1">
                      <TimeIcon />
                      <p className="text-grayMedium text-sm">
                        {item.date} | {item.time}
                      </p>
                    </div>
                  </div>
                </div>
                {item.id.toString() === searchParams.get("chat")
                  ? null
                  : item.identifier > 0 ? (
                      <p className="p-[2px] text-[14px] h-auto w-fit min-w-[26px] min-h-fit aspect-square flex items-center justify-center text-white font-SemiBold rounded-full bg-green border-2 border-[#a9c788]">
                        {item.identifier}
                      </p>
                    ):null}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ListChats;
