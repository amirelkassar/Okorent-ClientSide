import React from "react";
import { CloseIcon, Textarea } from "@mantine/core";
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
  return (
    <div
      className={cn(
        "lg:h-auto lg:row-span-2 flex flex-col flex-1 bg-white rounded-3xl border border-green px-11 pt-11 pb-5 gap-5 lg:col-span-3 lg:order-2 h-full"
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
                <h4 className="text-grayMedium min-w-[66px] text-[12px]">Product Name</h4>
                <p className=" text-[14px]">Apple Mobile</p>
              </div>
              <div className="">
                <h4 className="text-grayMedium min-w-[66px] text-[12px]">Payment</h4>
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

      <div className="overflow-y-auto space-y-5 flex-1 pb-10">
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

      <div className="flex items-center gap-5 h-[60px]">
        <button>
          <AttachIcon />
        </button>

        <div className="relative flex-1 flex items-center gap-5 h-full">
          <button className="absolute top-1/2 end-5 -translate-y-1/2 z-50">
            <MicIcon />
          </button>

          <Textarea
            className="flex-1 text-[16px]"
            classNames={{
              input:
                "border-green flex-1  max-h-[60px] text-[16px] h-full rounded-[18px] py-2 px-4  pe-12",
              root: "flex-1",
            }}
            placeholder="Type your message here ..."
          />
        </div>

        <Button className={"w-[130px] h-full"}>
          <SendIcon />
        </Button>
      </div>
    </div>
  );
};

export default Chat;
