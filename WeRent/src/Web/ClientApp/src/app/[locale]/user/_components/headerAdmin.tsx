import React from "react";
import SearchItem from "./searchItem";
import DateIcon from "@/src/assets/icons/date";
import LocationIcon from "@/src/assets/icons/location";
import HeaderAdminIcon from "@/src/assets/icons/headerAdmin";
import SelectDate from "./selectDate";
import SelectLocation from "./selectLocation";
function HeaderAdmin() {
  return (
    <div className="flex items-center gap-5 mb-28 justify-between">
      <div className="max-w-[580px] ">
        <h2 className="text-[56px] font-Medium mb-5 leading-[56px]">
          Local <span className="text-blue">Rentals</span> <br />
          Made Easy
        </h2>
        <p className="text-[#565656] mb-5">
          Discover and rent items nearby. Enter what you need, specify your
          location, and choose when you need it.
        </p>
        <SearchItem />
        <div className="flex items-center gap-5 flex-wrap">
          <SelectLocation />
          <SelectDate  />
        </div>
      </div>

      <div className="w-[660px] max-w-full h-auto object-contain">
        <HeaderAdminIcon className={"w-full h-auto"} />
      </div>
    </div>
  );
}

export default HeaderAdmin;
