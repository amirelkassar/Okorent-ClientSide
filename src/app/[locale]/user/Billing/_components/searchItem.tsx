import SearchIcon from "@/src/assets/icons/search";
import { TextInput } from "@mantine/core";
import React from "react";

function SearchItem() {
  return (
    <div className="flex gap-6 h-[46px]  max-w-[380px] order-2 lg:order-3">
      <div className="flex-1 flex p-[1px] rounded-xl  border-[3px] border-green/30 ps-3 bg-white overflow-hidden">
      <SearchIcon className={'w-[18px] h-auto block'} fill="#0F2A43"/>
        <TextInput
          placeholder="Search by product or renter name"
          type="text"
          classNames={{
            input: "flex-1  bg-white text-black h-full border-none placeholder:text-grayMedium placeholder:text-base placeholder:font-Regular px-3 lg:px-5 text-sm lg:text-[16px] font-Medium",
            wrapper: "h-full",
          }}
          className="flex-1  text-grayMedium h-full text-[16px]"
        />
        <button className="h-full w-[58px] rounded-e-xl border-[3px] bg-green border-[#a9c788] hover:border-green duration-500 flex items-center justify-center">
          <SearchIcon className={'w-[20px] h-auto'} />
        </button>
      </div>
 
    </div>
  );
}

export default SearchItem;
