"use client";
import NoteTableIcon from "@/src/assets/icons/noteTable";
import Button from "@/src/components/button";
import Input from "@/src/components/input";
import ModalComp from "@/src/components/modal-comp";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import ChatSupport from "./chat-support";

function TicketModal({ id }: any) {
  const [opened, { open, close }] = useDisclosure(false);
  const [viewChat, setViewChat] = React.useState(false);

  return (
    <div>
      <button onClick={open}>
        <NoteTableIcon className="w-5 h-auto" fill="#6F6B7D" />
      </button>
      {opened && (
        <ModalComp
          opened={opened}
          close={close}
          title={"Ticket By - Ahmed Mohamed"}
        >
          <div className="flex md:hidden mb-5 gap-9 justify-center items-center">
            <Button
              className={`flex-1 max-w-[160px] h-10 text-sm ${
                viewChat
                  ? "text-blue bg-blueLight border-transparent hover:border-transparent hover:shadow-md"
                  : ""
              }`}
              onClick={() => {
                setViewChat(false);
              }}
            >
              Ticket
            </Button>
            <Button
              className={`flex-1 max-w-[160px] h-10 text-sm ${
                viewChat
                  ? ""
                  : "text-blue bg-blueLight border-transparent hover:border-transparent hover:shadow-md"
              }`}
              onClick={() => {
                setViewChat(true);
              }}
            >
              Comments
            </Button>
          </div>
          <div className="lg:w-[750px] w-full flex gap-10">
            <div
              className={` flex-col gap-6 w-[274px] ${
                viewChat ? "hidden md:flex" : "flex !w-full md:!w-[274px]"
              }`}
            >
              <Input
                placeholder="Write assigned to name here"
                inputClassName="bg-white h-11"
                labelClassName="text-[#4A4651]"
                label="Sender"
                defaultValue={"Ahmed Mohamed"}
              />
              <Input
                placeholder="Write assigned to name here"
                inputClassName="bg-white h-11"
                labelClassName="text-[#4A4651]"
                label="Assigned To"
                defaultValue={"James Cameron"}
              />
              <Input
                placeholder="Write assigned to name here"
                inputClassName="bg-white h-11"
                labelClassName="text-[#4A4651]"
                label="Category"
                defaultValue={"Electronics"}
              />
              <Input
                placeholder="Write assigned to name here"
                inputClassName="bg-white h-11"
                labelClassName="text-[#4A4651]"
                label="Topic"
                defaultValue={"Issue with payment"}
              />
              <Input
                placeholder="Write assigned to name here"
                inputClassName="bg-white h-11"
                labelClassName="text-[#4A4651]"
                label="Status"
                defaultValue={"In Progress"}
              />

              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-7 w-full pt-6 md:pt-12 mt-auto">
                <Button onClick={close} className={" md:flex-1 h-10"}>
                  Issue Solved
                </Button>
                <Button
                  onClick={close}
                  className={" md:flex-1 h-10 text-black bg-grayBack border-none"}
                >
                  Exit
                </Button>
              </div>
            </div>
            <div
              className={`flex-1 ${viewChat ? "block" : " hidden md:block"} `}
            >
              <ChatSupport />
            </div>
          </div>
        </ModalComp>
      )}
    </div>
  );
}

export default TicketModal;
