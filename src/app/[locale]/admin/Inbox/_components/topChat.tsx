'use client';
import React from "react";
import CountMessage from "./countMessage";
import { useSearchParams } from "next/navigation";
import SwitchChat from "./switch-chat";
interface SwitchProps {
  viewChats: string;
  setViewChats: (value: string) => void;
}
function TopChat({ viewChats, setViewChats }: SwitchProps) {
  const searchParams = useSearchParams();

  return (
    <div className={`${searchParams.get("chat") ? "hidden lg:flex" : "flex"}  items-center mb-9 justify-between gap-6 flex-wrap-reverse `}>
      <div className="flex items-center gap-3 flex-wrap ">
        <CountMessage title="All messages" num={112} all />
        <CountMessage title="Unread" num={50} />
      </div>
      <div className="mx-auto ">
       <SwitchChat viewChats={viewChats} setViewChats={setViewChats}/>
      </div>
    </div>
  );
}

export default TopChat;
