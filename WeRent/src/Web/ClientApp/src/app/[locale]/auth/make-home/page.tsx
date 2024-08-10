"use client";
import Button from "@/src/components/button";
import Logo from "@/src/components/logo";
import { useRouter } from "@/src/navigation";
import Image from "next/image";
import React, { useState } from "react";
import avatar1 from "@/src/assets/images/1.png";
import { FileButton } from "@mantine/core";
import UpLoadIcon from "@/src/assets/icons/upLoad";
import DoneAuth from "./_components/doneAuth";

function Page() {
  const [files, setFiles] = useState<File | null>();
  const [selectedTheme, setSelectedTheme] = useState("");
  const [Done, setDone] = useState(false);
  console.log(files);

  const router = useRouter();
  return (
    <div className="flex-1 pt-20 pb-16  flex  min-h-full justify-start">
      <div className="max-w-[450px] w-full flex flex-col gap-4">
        <Logo theme="green" />
        <div className="flex-1 content-center">
          <h1 className=" font-Bold text-xLarge">Make yourself at home</h1>
          <p className="text-grayMedium text-medium mb-10">
            Pick your avatar and choose your theme
          </p>
          <div className="mt-2 mb-9">
            <h2 className="font-Medium text-medium">Choose your avatar</h2>
            <div className="flex items-center gap-3 mt-3">
              <div>
                <Image src={avatar1} width={38} height={38} alt="avatar" />
              </div>
              <div>
                <Image src={avatar1} width={38} height={38} alt="avatar" />
              </div>
              <div>
                <Image src={avatar1} width={38} height={38} alt="avatar" />
              </div>
              <div>
                <Image src={avatar1} width={38} height={38} alt="avatar" />
              </div>
              <div>
                <Image src={avatar1} width={38} height={38} alt="avatar" />
              </div>
            </div>
          </div>
          <div className="mt-2 mb-9">
            <h2 className="font-Medium text-medium">
              Upload your profile picture
            </h2>
            <FileButton onChange={setFiles} accept="image/png,image/jpeg">
              {(props) => (
                <div
                  {...props}
                  className="bg-[#c0c8cf] h-10 w-[154px] rounded-[8px] flex items-center mt-2 justify-center px-3"
                >
                  <UpLoadIcon />
                </div>
              )}
            </FileButton>
          </div>
          <div className="mt-2 mb-9 ">
            <h2 className="font-Medium text-medium">Choose your theme</h2>
            <div className="flex w-full gap-7 mt-2">
              <div
                className="flex-1 cursor-pointer "
                onClick={() => {
                  setSelectedTheme("light");
                }}
              >
                <div
                  className={`bg-[#d7dbde] w-full h-[120px] max-w-[210px] rounded-lg pt-[22px] ps-[38px] overflow-hidden relative z-[1] ${
                    selectedTheme === "light"
                      ? "outline-offset-2 outline outline-2 outline-green"
                      : ""
                  } `}
                >
                  <div className="bg-[#FFFFFF] h-full w-full  relative z-[2] ps-[33px] rounded-ss-lg">
                    <div className="h-full w-full bg-[#eaeaea80] ps-[33px] relative z-[3]"></div>
                  </div>
                </div>
                <h2 className="font-Medium text-medium mt-2">Light </h2>
              </div>
              <div
                className="flex-1 cursor-pointer"
                onClick={() => {
                  setSelectedTheme("dark");
                }}
              >
                <div
                  className={`bg-[#022e2de3] w-full h-[120px] max-w-[210px] rounded-lg pt-[22px] ps-[38px] overflow-hidden relative z-[1] ${
                    selectedTheme === "dark"
                      ? "outline-offset-2 outline outline-2 outline-green"
                      : ""
                  } `}
                >
                  <div className="bg-[#012928] h-full w-full  relative z-[2] ps-[33px] rounded-ss-lg">
                    <div className="h-full w-full bg-[#0d302f] ps-[33px] relative z-[3]"></div>
                  </div>
                </div>
                <h2 className="font-Medium text-medium mt-2">Dark </h2>
              </div>
            </div>
          </div>
          <div className={"w-full mt-10 flex flex-col gap-2"}>
            <Button
              className={"w-full "}
              onClick={() => {
                setDone(true);
              }}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
      {Done ? <DoneAuth done={Done}/> : null}
    </div>
  );
}

export default Page;
