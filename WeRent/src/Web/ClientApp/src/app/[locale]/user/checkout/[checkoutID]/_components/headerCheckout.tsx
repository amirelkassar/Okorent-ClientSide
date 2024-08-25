"use client";
import BackIcon from "@/src/assets/icons/back";
import { useRouter } from "next/navigation";
import React from "react";

function HeaderCheckout() {
    const router = useRouter();
  return (
    <div className="flex mb-11  items-center gap-3">
      <button
        className=" size-5"
        onClick={() => {
          router.back();
        }}
      >
        <BackIcon className={"w-full h-full"} />
      </button>
      <h1 className="text-[32px] font-Bold">Checkout</h1>
    </div>
  );
}

export default HeaderCheckout;
