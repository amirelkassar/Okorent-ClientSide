"use client";
import React from "react";
import OneCardView from "../_components/oneCardView";
function Page({ params }: any) {
  console.log(params);

  return (
    <div className="swiperList  pb-3 lg:pb-16  ">
      <div className="flex lg:items-center flex-col-reverse lg:flex-row lg:gap-4 gap-8  justify-between mb-6">
        <div className="flex items-center justify-between lg:justify-start gap-5">
          <h2 className="text-2xl lg:text-[32px] font-Bold">
            {params.BookingID.toString().split("-").join(" ")}
          </h2>
        </div>
      </div>
      <div className="w-full flex-wrap gap-6 my-4 relative flex items-center">
        <OneCardView />
        <OneCardView />
        <OneCardView />
        <OneCardView />
        <OneCardView />
      </div>
    </div>
  );
}

export default Page;
