"use client";
import React from "react";
import primum from "@/src/assets/images/primum.png";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

function ImgAddList() {
  const searchparams = useSearchParams();
  if (searchparams.get("preview")==='true') {
    return null;
  } else {
    return (
      <div className="mt-4 hidden lg:block">
        <Image
          alt="primum"
          src={primum}
          priority
          width={486}
          height={956}
          className="w-[956] h-auto max-w-full object-contain"
        />
      </div>
    );
  }
}

export default ImgAddList;
