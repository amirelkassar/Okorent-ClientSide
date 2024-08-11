import DownIcon from "@/src/assets/icons/down";
import LocationIcon from "@/src/assets/icons/location";
import SearchIcon from "@/src/assets/icons/search";
import Button from "@/src/components/button";
import { Select, TextInput } from "@mantine/core";
import React from "react";

function SearchItem() {
  return (
    <div className="flex gap-6 h-[66px] mb-4">
      <Select
        data={["German", "Egypt", "Alex", "German5", "Egypt2"]}
        leftSectionPointerEvents="none"
        defaultValue={"German"}
        leftSection={<LocationIcon fill="#344050" />}
        rightSection={<DownIcon />}
        searchable
        classNames={{
          input:
            " bg-white text-black rounded-2xl text-grayMedium  h-full border-none ",
          wrapper: "h-full",
          dropdown:
            "bg-white text-black rounded-2xl border border-green/50 text-grayDark py-2",
          option: "hover:bg-green hover:text-white duration-300 ",
        }}
        className="h-full duration-200 min-h-full rounded-2xl border-2 border-green text-grayMedium"
      />
      <div className="flex-1 flex  rounded-2xl  border-2 border-green overflow-hidden">
        <TextInput
          placeholder="Search anything you want to rent"
          type="text"
          classNames={{
            input: "flex-1 bg-white text-black h-full border-none px-5 text-[16px] font-Medium",
            wrapper: "h-full",
          }}
          className="flex-1  text-grayMedium h-full text-[16px]"
        />
        <button className="h-full w-[78px] rounded-e-xl bg-green flex items-center justify-center">
          <SearchIcon />
        </button>
      </div>
      <Button className={"h-full px-6 rounded-2xl"}>List an item</Button>
    </div>
  );
}

export default SearchItem;
