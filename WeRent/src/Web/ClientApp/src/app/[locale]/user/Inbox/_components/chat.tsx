"use client";
import React, { useState } from "react";
import { FileButton, Menu, Textarea } from "@mantine/core";
import Image from "next/image";
import avatar from "@/src/assets/images/avatar.png";
import SendIcon from "@/src/assets/icons/send";
import Button from "@/src/components/button";
import MicIcon from "@/src/assets/icons/mic";
import AttachIcon from "@/src/assets/icons/attach";
import { cn } from "@/src/lib/utils";
import CloseChatIcon from "@/src/assets/icons/closeChat";
import PlayIcon from "@/src/assets/icons/play";
import RecordIcon from "@/src/assets/icons/record";
import phone from "@/src/assets/images/phone.png";
const Chat = () => {
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
  return (
    <div
      className={cn(
        "h-full flex flex-col flex-1 bg-white rounded-3xl border border-green px-11 pt-11 pb-5 gap-5  "
      )}
    >
      <div className="flex items-center justify-between  border-b-2 border-b-black/20 px-1  pb-3">
        <div className="flex gap-5">
          <div className=" flex items-center gap-4">
            <Image
              className="size-10 rounded-full"
              src={avatar}
              alt="user"
              priority
            />
            <div className="text-black">
              <h3 className="text-[14px] leading-5">Ammi Watts</h3>
              <p className=" flex items-center gap-1 text-grayMedium text-[12px] h-fit leading-[18px]">
                {" "}
                <span className=" block size-[5px] rounded-full bg-green animate-pulse "></span>{" "}
                Active
              </p>
            </div>
          </div>
          <span className=" block h-[60px] w-[1px] bg-grayBack"></span>
          <div className="bg-grayBack h-full rounded-xl min-w-[270px] flex items-center gap-4 py-3 px-2">
            <Image
              src={phone}
              alt="phone"
              width={21}
              height={43}
              className="w-auto h-full max-h-[44px]"
            />
            <div className="flex-1 flex items-center gap-4 justify-between flex-wrap">
              <div className="">
                <h4 className="text-grayMedium min-w-[66px] text-[12px]">
                  Product Name
                </h4>
                <p className=" text-[14px]">Apple Mobile</p>
              </div>
              <div className="">
                <h4 className="text-grayMedium min-w-[66px] text-[12px]">
                  Payment
                </h4>
                <p className=" text-[14px]">100$</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className=" size-[34px] rounded-lg bg-grayBack flex items-center justify-center p-3 duration-200  hover:shadow-sm ">
            <CloseChatIcon />
          </button>
        </div>
      </div>

      <div className="overflow-y-auto   max-h-full   space-y-5 flex-1 pb-10">
        {/* RECEIVED MESSAGE */}
        <div className="flex flex-row-reverse items-center gap-3">
          <p className="bg-grayLight rounded-[32px] text-black text-[12px] leading-[15px] px-6 max-w-[344px] py-4 rounded-ee-none">
            <span className="text-black flex items-center gap-2 w">
              <PlayIcon />
              <RecordIcon />
              01:24
            </span>
          </p>
        </div>
        <div className="flex flex-row-reverse items-center gap-3">
          <p className="bg-grayLight rounded-[32px] text-black text-[12px] leading-[15px] px-6 max-w-[270px] py-4 rounded-ee-none">
            Oh, hello! All perfectly. I will check it and get back to you soon
          </p>
        </div>
        <div className="flex flex-row-reverse items-center gap-3">
          <div className="flex flex-col gap-2">
            <p className="bg-grayLight rounded-[32px] text-black text-[12px] leading-[15px] px-6 max-w-[270px] py-4 rounded-ee-none">
              Oh, hello! All perfectly. I will check it and get back to you soon
            </p>
            <span className="text-[12px] text-[#B6BFC6] text-end">
              04:45 PM
            </span>
          </div>
        </div>

        {/* SENT MESSAGE */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-2">
            <p className="bg-grayBack rounded-[32px] text-black text-[12px] leading-[15px] px-6 max-w-[270px] py-4 rounded-es-none">
              Oh, hello! All perfectly. I will check it and get back to you soon
            </p>
          </div>
        </div>
        <div className="flex= items-center gap-3">
          <p className="bg-grayBack rounded-[32px] text-black text-[12px] leading-[15px] px-6 max-w-[344px] py-4 rounded-es-none">
            <span className="text-black flex items-center gap-2 w">
              <PlayIcon />
              <RecordIcon />
              01:24
            </span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-2">
            <p className="bg-grayBack rounded-[32px] text-black text-[12px] leading-[15px] px-6 max-w-[270px] py-4 rounded-es-none">
              Oh, hello! All perfectly. I will check it and get back to you soon
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-2">
            <p className="bg-grayBack rounded-[32px] text-black text-[12px] leading-[15px] px-6 max-w-[270px] py-4 rounded-es-none">
              Oh, hello! All perfectly. I will check it and get back to you soon
            </p>
            <span className="text-[12px] text-[#B6BFC6] text-start">
              04:45 PM
            </span>
          </div>
        </div>

        <div className="flex flex-row-reverse items-center gap-3">
          <p className="bg-grayLight rounded-[32px] text-black text-[12px] leading-[15px] px-6 max-w-[270px] py-4 rounded-ee-none">
            Oh, hello! All perfectly. I will check it and get back to you soon
          </p>
        </div>
        <div className="flex flex-row-reverse items-center gap-3">
          <p className="bg-grayLight rounded-[32px] text-black text-[12px] leading-[15px] px-6 max-w-[270px] py-4 rounded-ee-none">
            Oh, hello! All perfectly. I will check it and get back to you soon
          </p>
        </div>
        <div className="flex flex-row-reverse items-center gap-3">
          <p className="bg-grayLight rounded-[32px] text-black text-[12px] leading-[15px] px-6 max-w-[270px] py-4 rounded-ee-none">
            Oh, hello! All perfectly. I will check it and get back to you soon
          </p>
        </div>
        <div className="flex flex-row-reverse items-center gap-3">
          <p className="bg-grayLight rounded-[32px] text-black text-[12px] leading-[15px] px-6 max-w-[270px] py-4 rounded-ee-none">
            Oh, hello! All perfectly. I will check it and get back to you soon
          </p>
        </div>
        <div className="flex flex-row-reverse items-center gap-3">
          <div className="flex flex-col gap-2">
            <p className="bg-grayLight rounded-[32px] text-black text-[12px] leading-[15px] px-6 max-w-[270px] py-4 rounded-ee-none">
              Oh, hello! All perfectly. I will check it and get back to you soon
            </p>
            <span className="text-[12px] text-[#B6BFC6] text-end">
              04:45 PM
            </span>
          </div>
        </div>
        <div className="flex flex-row-reverse items-center gap-3">
          <p className="bg-grayLight rounded-[32px] text-black text-[12px] leading-[15px] px-6 max-w-[344px] py-4 rounded-ee-none">
            <span className="text-black flex items-center gap-2 w">
              <PlayIcon />
              <RecordIcon />
              01:24
            </span>
          </p>
        </div>
      </div>

      <div className="flex items-center  gap-5 ">
        <FileButton onChange={setSelectedFile} multiple>
          {(props) => (
            <button {...props}>
              <AttachIcon />
            </button>
          )}
        </FileButton>
        <div className="relative flex-1 border-green border rounded-[18px] py-2 px-4  h-auto">
        
          {selectedFile.length > 0 ? (
            <div className=" flex flex-wrap gap-4 border-b border-dashed pb-4 ">
              {selectedFile.map((file, i) => {
                return (
                  <div
                    key={i}
                    className=" w-fit   relative"
                  >
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
            <button className="absolute top-1/2 end-5 -translate-y-1/2 z-50">
              <MicIcon />
            </button>
            <Textarea
              className="flex-1 text-[16px]"
              autosize
              classNames={{
                input:
                  "border-none flex-1  h-fit text-[16px] min-h-[46px]  py-2 ps-1  pe-12",
                root: "flex-1",
              }}
              placeholder="Type your message here ..."
            />
          </div>
        </div>

        <Button className={"w-[130px] h-[60px]"}>
          <SendIcon />
        </Button>
      </div>
      
    </div>
  );
};

export default Chat;
