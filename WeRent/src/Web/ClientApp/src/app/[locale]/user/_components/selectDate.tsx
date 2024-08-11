import DateIcon from "@/src/assets/icons/date";
import React from "react";

function SelectDate() {
  return (
    <div className="flex items-center justify-center mb-16">
      <div className="bg-[#E9F1F8] h-10 min-h-fit px-3 rounded-xl flex items-center border cursor-pointer border-transparent gap-3 duration-300 hover:border-blue hover:shadow-sidebar">
        <DateIcon />
        <h3 className="text-blue text-[16px]">Select a rental period</h3>
      </div>
    </div>
  );
}

export default SelectDate;
