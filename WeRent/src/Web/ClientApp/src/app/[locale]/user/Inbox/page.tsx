import React from "react";
import ListChats from "./_components/listChats";
import Chat from "./_components/chat";
import TopChat from "./_components/topChat";

function page() {
  return (
    <div>
      <TopChat />
      <div className="flex items-start gap-8 min-h-[calc(100vh-270px)] md:min-h-[860px] h-[calc(100vh-270px)] md:h-[860px] mb-5  md:mb-14">
        <ListChats />
        <Chat />
      </div>
    </div>
  );
}

export default page;
