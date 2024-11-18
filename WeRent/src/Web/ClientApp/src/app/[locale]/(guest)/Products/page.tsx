"use client";
import React, { useState } from "react";
import CloseIcon from "@/src/assets/icons/close";
import { Rentals } from "@/src/lib/dataUser";
import { MultiSelect } from "@mantine/core";
import CantFind from "./_components/CantFind";
import SearchItem from "./_components/searchItem";

import ProductList from "@/src/components/product/productList";
import SelectLocation from "../_components/selectLocation";
import SelectDate from "../_components/selectDate";

const subcategories: string[] = [
  "TV",
  "DVD",
  "Home Audio",
  "Satellite",
  "Computers",
  "Laptops",
  "Spare Parts",
  "Video Game",
  "Console",
  "Cameras",
  "Refrigerators",
  "Dishwashers",
  "Cooking Tools",
  "Oven",
  "Water Coolers",
  "Heater",
  "Air Conditioner",
];

const sortingOptions: string[] = [
  "Lowest Price",
  "Highest Price",
  "Verified Accounts",
  "Newly Added",
];

function Page() {
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>(
    []
  );
  const [selectedSort, setSelectedSort] = useState<string | null>(null);

  const handleRemoveClick = (subcategory: string) => {
    setSelectedSubcategories(
      selectedSubcategories.filter((item) => item !== subcategory)
    );
  };

  const handleSortClick = (sortOption: string) => {
    setSelectedSort(sortOption);
  };

  return (
    <div className="mb-20">
      <SearchItem />
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 lg:gap-5 mt-7 mb-6 lg:mb-10">
        <SelectLocation />
        <SelectDate />
      </div>
      <div className="pt-8 border-t flex flex-col lgl:flex-row lgl:items-start gap-4 border-grayMedium/30">
        <MultiSelect
          data={subcategories}
          value={selectedSubcategories}
          onChange={setSelectedSubcategories}
          placeholder="Subcategories"
          searchable
          size="md"
          classNames={{
            input:
              " bg-white text-black flex items-center   rounded-lg text-grayMedium  min-h-[50px] border border-green",

            inputField:
              "placeholder:text-xl h-full placeholder:text-black placeholder:opacity-100   placeholder:font-SemiBold",
            pillsList: "h-full",
            dropdown:
              "bg-white text-black rounded-lg border border-green/50 text-grayDark py-2",
            option:
              "hover:bg-green hover:text-white duration-300  flex items-center ",
          }}
          clearable
          className="block lgl:hidden" // Visible on mobile, hidden on larger screens
        />
        <div className="border border-green hidden lgl:block px-2 py-8 rounded-2xl bg-white shadow-md max-w-[330px] min-w-[330px] w-full">
          <h2 className="text-3xl font-SemiBold  mb-4 px-3">Subcategories</h2>

          {/* MultiSelect for mobile */}

          {/* List for larger screens */}
          <ul className=" flex-col flex gap-5">
            {subcategories.map((subcategory) => (
              <li
                key={subcategory}
                className={`${
                  selectedSubcategories.includes(subcategory)
                    ? "bg-green/15"
                    : ""
                } cursor-pointer px-4 py-1 rounded-lg`}
                onClick={() =>
                  setSelectedSubcategories((prev) =>
                    prev.includes(subcategory)
                      ? prev.filter((item) => item !== subcategory)
                      : [...prev, subcategory]
                  )
                }
              >
                {subcategory}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1">
          <div className="flex lgl:items-center flex-col lgl:flex-row justify-between mb-4 gap-8 flex-wrap">
            <div className="flex items-center gap-3">
              <h3 className="text-xs lg:text-sm font-Regular text-nowrap block lg:hidden text-grayMedium">
                Sort By
              </h3>
              <div className="flex items-center gap-2 lg:gap-3 flex-wrap">
                {sortingOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSortClick(option)}
                    className={`${
                      selectedSort === option
                        ? "bg-green text-white"
                        : "bg-grayBack text-blue"
                    } px-3 py-2 gap-2 flex items-center duration-200 hover:shadow-md text-xs lg:text-sm justify-center w-fit rounded-xl`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            {selectedSubcategories.length > 0 && (
              <div className="flex items-center gap-3">
                <h3 className="text-xs lg:text-sm text-nowrap font-Regular text-grayMedium">
                  Filtered By
                </h3>
                <div className="flex items-center gap-3 flex-wrap">
                  {selectedSubcategories.map((subcategory) => (
                    <div
                      key={subcategory}
                      className="bg-green duration-200 hover:shadow-md px-3 py-2 gap-2 flex items-center justify-center w-fit rounded-xl"
                    >
                      <p className="text-white text-xs lg:text-sm font-Medium">
                        {subcategory}
                      </p>
                      <button
                        onClick={() => handleRemoveClick(subcategory)}
                        className="remove-button"
                      >
                        <CloseIcon fill="white" className="w-4 h-auto" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <ProductList data={Rentals} />
          <div>
            <CantFind/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
