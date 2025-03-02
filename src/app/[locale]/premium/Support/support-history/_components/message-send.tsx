"use client";
import AttachIcon from "@/src/assets/icons/attach";
import CloseChatIcon from "@/src/assets/icons/closeChat";
import SendIcon from "@/src/assets/icons/send";
import Button from "@/src/components/button";
import { Toast } from "@/src/components/toast";
import { useSendReply } from "@/src/hooks/queries/admin/support";
import { FileButton, Textarea } from "@mantine/core";
import Image from "next/image";
import React, { useCallback, useState } from "react";

function MessageSend({ chatID = "" }: { chatID: string }) {
  const [selectedFile, setSelectedFile] = useState<any[]>([]);
  const [message, setMessage] = useState("");
  const { mutateAsync: SendReplyAdmin } = useSendReply(chatID);

  const onSubmitSend = useCallback(async () => {
    Toast.Promise(
      SendReplyAdmin({
        TicketId: chatID,
        Content: message,
        Attachment: selectedFile[0],
      }),
      {
        success: "Successfully Send Message",
        onSuccess: async (res) => {
          setMessage("");
          setSelectedFile([]);
        },
      }
    );
  }, [SendReplyAdmin, message, selectedFile, chatID]);

  return (
    <div className="flex items-center gap-1 pt-2">
      <div className="relative flex-1  overflow-hidden bg-white rounded-xl border border-[#E5F5FF] py-1 lg:py-2 px-2 lg:px-4  h-auto">
        {selectedFile.length > 0 ? (
          <div className=" flex flex-wrap gap-2 border-b border-dashed pb-2 ">
            {selectedFile.map((file, i) => {
              return (
                <div key={i} className=" w-fit   relative">
                  <Image
                    src={URL.createObjectURL(file)}
                    className=" object-contain bg-transparent max-h-14 max-w-14 w-full h-auto"
                    alt="person"
                    width={180}
                    height={180}
                  />
                  <div
                    className=" absolute top-1 p-1 start-1 cursor-pointer duration-200 hover:bg-red/20 hover:shadow-sm bg-grayBack rounded-full w-4 h-4 flex items-center justify-center"
                    onClick={() => {
                      setSelectedFile(
                        selectedFile.filter((item) => item !== file)
                      );
                    }}
                  >
                    <CloseChatIcon />
                  </div>
                </div>
              );
            })}{" "}
          </div>
        ) : null}
        <div className="relative flex-1 flex items-center gap-2 ">
          <FileButton
            onChange={(files: any) => files && setSelectedFile([files])}
          >
            {(props) => (
              <button {...props}>
                <AttachIcon className="h-4 w-auto" />
              </button>
            )}
          </FileButton>
          <Textarea
            className="flex-1 text-[16px]"
            autosize
            classNames={{
              input:
                "border-none flex-1 placeholder:text-xs  placeholder:absolute relative  placeholder:text-[#B6BFC6] placeholder:top-[40%] placeholder:-translate-y-1/2 placeholder:start-2   h-fit text-xs min-h-7 py-[2px] lg:py-2 ps-1  pe-12",
              root: "flex-1",
            }}
            placeholder="Type your message here ..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>

      <Button
        onClick={onSubmitSend}
        className={` w-11 bg-black h-8 px-2 py-2 lg:h-9 border-none ${
          message ? "" : " pointer-events-none opacity-50"
        } `}
      >
        <SendIcon className="h-full w-auto" />
      </Button>
    </div>
  );
}

export default MessageSend;
