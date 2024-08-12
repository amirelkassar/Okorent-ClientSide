import React from "react";
import CountMessage from "./_components/countMessage";
import ListChats from "./_components/listChats";
import Chat from "./_components/chat";

function page() {
  return (
    <div>
      <div className="flex items-center gap-3 flex-wrap mb-9">
        <CountMessage title="All messages" num={112} all />
        <CountMessage title="Renters" num={50} />
        <CountMessage title="lessors" num={62} />
      </div>
      <div className="flex gap-8 h-[860px] mb-14">
        <ListChats />
        <Chat/>
      </div>
    </div>
  );
}

export default page;
