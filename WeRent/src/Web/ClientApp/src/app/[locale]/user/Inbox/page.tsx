import React from "react";
import CountMessage from "./_components/countMessage";
import ListChats from "./_components/listChats";
import Chat from "./_components/chat";
import RentSwitch from "@/src/components/RentSwitch";

function page() {
  return (
    <div>
      <div className="flex items-center mb-9 justify-between gap-6 flex-wrap">
        <div className="flex items-center gap-3 flex-wrap ">
          <CountMessage title="All messages" num={112} all />
          <CountMessage title="Unread" num={50} />
        </div>
        <RentSwitch />
      </div>

      <div className="flex items-start gap-8 min-h-[860px] h-[860px]  mb-14">
        <ListChats />
        <Chat />
      </div>
    </div>
  );
}

export default page;
