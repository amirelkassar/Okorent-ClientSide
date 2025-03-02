'use client';
import React from "react";
import CountMessage from "./countMessage";
import RentSwitch from "@/src/components/RentSwitch";
import { useSearchParams } from "next/navigation";

function TopChat() {
  const searchParams = useSearchParams();

  return (
    <div className={`${searchParams.get("chat") ? "hidden lg:flex" : "flex"}  items-center mb-9 justify-between gap-6 flex-wrap-reverse `}>
      <div className="flex items-center gap-3 flex-wrap ">
        <CountMessage title="All messages" num={112} all />
        <CountMessage title="Unread" num={50} />
      </div>
      <div className="mx-auto md:mx-0 ">
        <RentSwitch typeUser='user' />
      </div>
    </div>
  );
}

export default TopChat;
