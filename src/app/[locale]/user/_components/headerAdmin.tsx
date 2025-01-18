"use client";
import React from "react";
import HeaderAdminIcon from "@/src/assets/icons/headerAdmin";
import SearchLocDate from "@/src/components/search-loc-date";
function HeaderAdmin() {
  return (
    <div className="flex items-center gap-5 mb-2 md:mb-9 lg:mb-10 justify-between">
      <div className="w-full lgl:max-w-[580px] ">
        <h2 className="text-[32px] lg:text-[56px] text-center lg:text-start font-Medium mb-3 lg:mb-5 leading-[36px] lg:leading-[56px]">
          Local <span className="text-blue">Rentals</span> <br />
          Made Easy
        </h2>
        <p className="text-[#565656] mb-5 text-sm lg:text-base text-center lg:text-start lg:px-0 px-4">
          Discover and rent items nearby. Enter what you need, specify your
          location, and choose when you need it.
        </p>
        <SearchLocDate />
      </div>

      <div className="w-[660px] max-w-full h-auto object-contain lg:block hidden">
        <HeaderAdminIcon className={"w-full h-auto"} />
      </div>
    </div>
  );
}

export default HeaderAdmin;
