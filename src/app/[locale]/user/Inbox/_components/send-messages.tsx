"use client";
import AttachIcon from "@/src/assets/icons/attach";
import CloseChatIcon from "@/src/assets/icons/closeChat";
import SendIcon from "@/src/assets/icons/send";
import Button from "@/src/components/button";
import { Toast } from "@/src/components/toast";
import { useSendMessage } from "@/src/hooks/queries/user/chat";
import { FileButton, Textarea } from "@mantine/core";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useCallback, useState } from "react";

function SendMessages() {
  const searchParams = useSearchParams();
  const [Message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState<any[]>([]);
  const handleHeaderInputChange = (e: any) => {
    const files = e.target.files; // Get the selected files
    for (let i = 0; i < files.length; i++) {
      const selectedFile = files[i];
      console.log(selectedFile);
      setSelectedFile((oldArray) => [...oldArray, selectedFile]);
    }
  };

  const { mutateAsync: SendMessages } = useSendMessage(
    searchParams.get("chat")?.toString()
  );

  const onSubmitSendMessage = async () => {
    setMessage("");
    await Toast.Promise(
      SendMessages({
        ChatRoomId: searchParams.get("chat")?.toString(),
        MessageContent: Message,
      }),
      {
        success: "successfully Send Message ",
        error: "not send msg",
        onSuccess: async (res) => {},
      }
    );
  };
  return (
    <div className="flex items-center gap-2  md:gap-5 ">
      <FileButton onChange={setSelectedFile} multiple>
        {(props) => (
          <button {...props}>
            <AttachIcon />
          </button>
        )}
      </FileButton>
      <div className="relative flex-1 border-green overflow-hidden border rounded-[18px] py-[2px] lg:py-2 px-1 lg:px-4  h-auto">
        {selectedFile.length > 0 ? (
          <div className=" flex flex-wrap gap-4 border-b border-dashed pb-4 ">
            {selectedFile.map((file, i) => {
              return (
                <div key={i} className=" w-fit   relative">
                  <Image
                    src={URL.createObjectURL(file)}
                    className="h-20 w-auto object-contain"
                    style={{
                      background: "transparent",
                      maxHeight: "90px",
                      minHeight: "90px",
                      width: "100%",
                      height: "auto",
                    }}
                    alt="person"
                    width={180}
                    height={180}
                  />
                  <div
                    className=" absolute top-1 p-2 start-2 cursor-pointer duration-200 hover:bg-red/20 hover:shadow-sm bg-grayBack rounded-full w-6 h-6 flex items-center justify-center"
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
        <div className="relative flex-1 flex items-center gap-5 ">
          <Textarea
            className="flex-1 text-[16px]"
            autosize
            classNames={{
              input:
                "border-none flex-1 placeholder:text-xs md:placeholder:text-base placeholder:absolute relative  placeholder:text-[#B6BFC6] placeholder:top-[40%] placeholder:-translate-y-1/2 placeholder:start-2   h-fit text-[16px] min-h-[46px] py-[2px] lg:py-2 ps-1  pe-12",
              root: "flex-1",
            }}
            placeholder="Type your message here ..."
            value={Message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </div>
      </div>

      <Button
        onClick={() => {
          onSubmitSendMessage();
        }}
        className={" w-[60px] lg:w-[130px] h-10 px-4 py-1 lg:h-[60px]"}
      >
        <SendIcon />
      </Button>
    </div>
  );
}

export default SendMessages;
