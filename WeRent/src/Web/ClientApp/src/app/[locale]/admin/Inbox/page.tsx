"use client";
import React, { useState } from "react";
import ListChats from "./_components/listChats";
import Chat from "./_components/chat";
import TopChat from "./_components/topChat";

function Page() {
  const [viewChats, setViewChats] = useState<string>("inbox");

  return (
    <div>
      <TopChat viewChats={viewChats} setViewChats={setViewChats} />
      <div className="flex items-start gap-8 min-h-[calc(100vh-270px)] md:min-h-[860px] h-[calc(100vh-270px)] md:h-[860px] mb-5  md:mb-14">
        <ListChats viewChats={viewChats} />
        <Chat />
      </div>
    </div>
  );
}

export default Page;
