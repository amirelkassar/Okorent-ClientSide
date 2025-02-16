"use client";
import SearchIcon from "@/src/assets/icons/search";
import { TextInput } from "@mantine/core";
import React from "react";
import { useSearchParams } from "next/navigation";
import { ChatsData } from "@/src/lib/dataUser";
import ChatListRow from "@/src/components/chat-list-row";
import { GetAllChats } from "@/src/hooks/queries/user/chat";
import SkeletonLoading from "@/src/components/skeleton-loading";
function ListChats() {
  const searchParams = useSearchParams();
  const { data, isLoading } = GetAllChats(searchParams.toString());
  console.log(data?.data);

  return (
    <div
      className={`lg:max-w-[360px] ${
        searchParams.get("chat") ? "hidden lg:flex" : "flex"
      }  w-full flex-1 h-full min-h-full  flex-col gap-6`}
    >
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
        {isLoading ? (
          <div className="flex flex-col gap-3 w-full p-1">
            <SkeletonLoading className="md:!w-full w-full !h-12 md:!h-14 rounded-xl" />
            <SkeletonLoading className="md:!w-full w-full !h-12 md:!h-14 rounded-xl" />
          </div>
        ) : (
          <div className=" flex flex-col gap-4  max-w-full overflow-auto h-full max-h-full md:h-[710px] ">
            {ChatsData.map((item, i) => {
              return <ChatListRow key={i} data={item} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default ListChats;
