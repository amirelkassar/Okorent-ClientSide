"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import avatar1 from "@/src/assets/images/avatar.png";
import { cn } from "@/src/lib/utils";
import UploadAndCropImg from "./comp-make/uploadAndCropImg";
const dataAvatar = [avatar1, avatar1, avatar1, avatar1];
interface MakeHomeProps {
  formData: any;
  setFormData: (e: any) => void;
  children?: React.ReactNode;
}
function MakeHome({ setFormData, formData, children }: MakeHomeProps) {
  const [active, setActive] = useState(0);

  const handleAvatarSelection = async (
    item: StaticImageData,
    index: number
  ) => {
    setActive(index + 1);

    // Simulate the blob URL for static image
    const response = await fetch(item.src);
    const blob = await response.blob();
    const file = new File([blob], `${formData.Name || "user"}.png`, {
      type: blob.type,
    });

    setFormData((prevData: any) => ({
      ...prevData,
      AvatarFile: file, // Store the File object in formData
    }));
  };
  return (
    <div className="flex-1 pt-4 lgl:pt-6    flex  min-h-full justify-center lgl:justify-start">
      <div className="max-w-[450px] w-full flex flex-col gap-4 pb-12">
        <div className="flex-1 content-center">
          <h1 className=" font-Bold text-xLarge">
            Final Step, Make yourself at home
          </h1>
          <p className="text-grayMedium text-medium mb-10">
            Pick your avatar and choose your theme
          </p>
          <div className="mt-2 mb-9">
            <h2 className="font-Medium text-medium">Choose your avatar</h2>
            <div className="flex items-center gap-3 mt-3">
              {dataAvatar.map((item, i) => {
                return (
                  <button
                    key={i}
                    className={cn(
                      " cursor-pointer rounded-full",
                      active === i + 1
                        ? "outline-offset-2 outline outline-2 outline-green"
                        : ""
                    )}
                    onClick={() => handleAvatarSelection(item, i)}
                  >
                    <Image src={item} width={38} height={38} alt="avatar" />
                  </button>
                );
              })}
            </div>
          </div>
          {/* crup */}
          <UploadAndCropImg setFormData={setFormData} formData={formData} />
          <div className="mt-2 mb-9 ">
            <h2 className="font-Medium text-medium">Choose your theme</h2>
            <div className="flex w-full gap-7 mt-2">
              <div
                className="flex-1 cursor-pointer "
                onClick={() => {
                  setFormData({ ...formData, Theme: "light" });
                }}
              >
                <div
                  className={`bg-[#d7dbde] w-full h-[120px] max-w-[210px] rounded-lg pt-[22px] ps-[38px] overflow-hidden relative z-[1] ${
                    formData?.Theme === "light"
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
                  setFormData({ ...formData, Theme: "dark" });
                }}
              >
                <div
                  className={`bg-[#022e2de3] w-full h-[120px] max-w-[210px] rounded-lg pt-[22px] ps-[38px] overflow-hidden relative z-[1] ${
                    formData?.Theme === "dark"
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
          <div className={"w-full mt-10 flex flex-col gap-2"}>{children}</div>
        </div>
      </div>
    
    </div>
  );
}

export default MakeHome;
