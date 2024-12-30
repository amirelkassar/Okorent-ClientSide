"use client";
import SearchIcon from "@/src/assets/icons/search";
import { TextInput } from "@mantine/core";
import { useSearchParams } from "next/navigation";
import React from "react";

function SearchItem({
  setFilter,
  children,
  onClickInput,
}: {
  setFilter?: any;
  children: React.ReactNode;
  onClickInput?: () => void;
}) {
  const searchparams = useSearchParams();

  // Function to handle keydown and trigger input function on Enter
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (onClickInput) onClickInput(); // Trigger onClickInput if it's provided
    }
  };

  return (
    <div className="flex gap-6 h-[66px] mb-4">
      <div className="flex-1 flex p-[1px] rounded-2xl border-[3px] border-green/30 lg:ps-6 bg-white overflow-hidden">
        <SearchIcon
          className={"w-[18px] h-auto hidden lg:block"}
          fill="#0F2A43"
        />
        <TextInput
          onChange={(e) => setFilter(e.target.value)}
          defaultValue={searchparams.get("filter") || ""}
          placeholder="What are you looking to rent today?"
          type="text"
          classNames={{
            input:
              "flex-1 bg-white text-black h-full border-none px-3 lg:px-5 text-sm lg:text-[16px] font-Medium",
            wrapper: "h-full",
          }}
          className="flex-1 text-grayMedium h-full text-[16px]"
          onKeyDown={handleKeyDown} // Call onKeyDown for Enter key
        />

        {children}
      </div>
    </div>
  );
}

export default SearchItem;
