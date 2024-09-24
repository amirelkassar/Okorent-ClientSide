import SearchIcon from "@/src/assets/icons/search";
import { TextInput } from "@mantine/core";
import React from "react";

function SearchItem() {
  return (
    <div className="flex gap-6 h-[66px] mb-4">
      <div className="flex-1 flex p-[1px] rounded-2xl  border-[3px] border-green/30 lg:ps-6 bg-white overflow-hidden">
        <SearchIcon
          className={"w-[18px] h-auto hidden lg:block"}
          fill="#0F2A43"
        />
        <TextInput
          placeholder="What are you looking to rent today?"
          type="text"
          classNames={{
            input:
              "flex-1  bg-white text-black h-full border-none px-3 lg:px-5 text-sm lg:text-[16px] font-Medium",
            wrapper: "h-full",
          }}
          className="flex-1  text-grayMedium h-full text-[16px]"
        />
        <button className="h-full w-[78px] rounded-e-xl border-[3px] bg-green border-[#a9c788] hover:border-green duration-500 flex items-center justify-center">
          <SearchIcon className={"w-[26px] h-auto"} />
        </button>
      </div>
    </div>
  );
}

export default SearchItem;
