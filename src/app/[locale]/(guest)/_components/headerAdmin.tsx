import React from "react";
import SearchLocDate from "@/src/components/search-loc-date";
import imgDash from "@/src/assets/images/imgDash.png";
import Image from "next/image";
import DashImg from "@/src/assets/icons/dashImg";
function HeaderAdmin() {
  return (
    <div className="flex items-center gap-5 mb-9 lg:mb-10 justify-between">
      <div className="w-full lgl:max-w-[650px] ">
        <h2 className="text-[32px] lg:text-[56px] text-center lg:text-start font-Medium mb-3 lg:mb-5 leading-[46px] lg:leading-[66px]">
          Empowering <span className="text-blue">Renting</span> <br />
          for a Sustainable Future
        </h2>
        <p className="text-[#565656] mb-5 text-sm lg:text-base text-center lg:text-start lg:px-0 px-4">
          Forget about old rental process, Here you can rent or expand your
          rental business with a clicks
        </p>
        <SearchLocDate guest />
      </div>
      <div className="w-[780px] max-w-full h-auto object-contain lg:block hidden">
        <Image
          src={imgDash}
          alt={`Image`}
          priority
          className="w-full h-auto max-w-full"
        />
      </div>
    </div>
  );
}

export default HeaderAdmin;
