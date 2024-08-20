"use client";
import React from "react";
import offer from "@/src/assets/images/offer.png";
import Image from "next/image";

function OfferSlider() {
  return (
    <div className="flex-1 w-full h-[204px]   mb-12 offerSlider">
      <Image
        src={offer}
        priority
        width={1475}
        height={204}
        className=" object-cover w-full h-full rounded-3xl"
        alt={"offer"}
      />
    </div>
  );
}

export default OfferSlider;
