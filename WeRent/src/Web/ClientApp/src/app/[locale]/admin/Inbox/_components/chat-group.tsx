import ChatListRow from "@/src/components/chat-list-row";
import { ChatsGroupData } from "@/src/lib/dataUser";
import React from "react";
import AddGroup from "./add-group";

function ChatGroup() {
  return (
    <div className="">
      <AddGroup />
      <h4 className=" text-grayMedium px-2 my-3">Groups</h4>
      <div className=" flex flex-col gap-4  max-w-full  ">
        {ChatsGroupData.map((item, i) => {
          return <ChatListRow key={i} data={item} />;
        })}
      </div>
      <h4 className=" text-grayMedium px-2 mt-3">Users</h4>
    </div>
  );
}

export default ChatGroup;
