import React from "react";
import Message from "./message";
import MessageSend from "./message-send";
const CHAT_DATA = [
  {
    id: 1,
    message: "Hello, how are you Hello, how are youHello, how are you",
    name: "Ahmed Mostafa",
    time: "5:47 pm",
    admin: false,
  },
  {
    id: 2,
    message:
      "Good, Thanks Good, ThanksGood, ThanksGood, ThanksGood, ThanksGood, Thanks",
    time: "5:47 pm",
    admin: true,
  },
  {
    id: 3,
    message: "Hello, how are you",
    name: "Ahmed Mostafa",
    time: "5:47 pm",
    admin: false,
  },
  {
    id: 4,
    message: "Good, Thanks",
    time: "5:47 pm",
    admin: true,
  },
  {
    id: 5,
    message: "Hello, how are you",
    name: "Ahmed Mostafa",
    time: "5:47 pm",
    admin: false,
  },
  {
    id: 6,
    message: "Good, Thanks",
    time: "5:47 pm",
    admin: true,
  },
  {
    id: 7,
    message: "Hello, how are you",
    name: "Ahmed Mostafa",
    time: "5:47 pm",
    admin: false,
  },
];
function ChatSupport() {
  return (
    <div className="bg-[#F6F5F5] rounded-2xl py-2 md:py-3 w-full">
      <div className="py-2 pt- border-b border-blueLight px-6">
        <h3 className="text-base font-Regular">Comments</h3>
      </div>
      <div className=" px-2 md:px-4 pt-4">
        <div className="h-full w-full flex flex-col gap-5 max-h-[500px] overflow-y-auto ">
          {CHAT_DATA.map((item, index) => (
            <Message
              key={index}
              message={item.message}
              name={item.name}
              time={item.time}
              admin={item.admin}
            />
          ))}
        </div>
        <MessageSend />
      </div>
    </div>
  );
}

export default ChatSupport;
