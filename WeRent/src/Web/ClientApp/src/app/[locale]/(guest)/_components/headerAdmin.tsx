import React from "react";
import SearchItem from "./searchItem";
import SelectDate from "./selectDate";
import SelectLocation from "./selectLocation";
import ImgDash from "@/src/assets/icons/imgDash";
function HeaderAdmin() {
  return (
    <div className="flex items-center gap-5 mb-12 lg:mb-28 justify-between">
      <div className="w-full lgl:max-w-[650px] ">
        <h2 className="text-[32px] lg:text-[56px] text-center lg:text-start font-Medium mb-3 lg:mb-5 leading-[46px] lg:leading-[66px]">
          Empowering <span className="text-blue">Renting</span> <br />
          for a Sustainable Future
        </h2>
        <p className="text-[#565656] mb-5 text-sm lg:text-base text-center lg:text-start lg:px-0 px-4">
        Forget about old rental process, Here you can rent or expand your rental business with a clicks

        </p>
        <SearchItem />
        <div className="flex items-center justify-center flex-col md:flex-row lg:justify-start gap-2 lg:gap-5  lg:mb-16">
          <SelectLocation />
          <SelectDate />
        </div>
      </div>
      <div className="w-[780px] max-w-full h-auto object-contain lg:block hidden">
        <ImgDash className={"w-full h-auto"} />
      </div>
    </div>
  );
}

export default HeaderAdmin;
