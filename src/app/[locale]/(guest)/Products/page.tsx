"use client";
import React from "react";
import SearchItem from "./_components/searchItem";
import SelectLocation from "../_components/selectLocation";
import SelectDate from "../_components/selectDate";
import PageCategoryProducts from "@/src/components/product/page-category-products";


function Page() {


  return (
    <PageCategoryProducts>
      <SearchItem />
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 lg:gap-5 mt-7 mb-6 lg:mb-10">
        <SelectLocation />
        <SelectDate />
      </div>
    </PageCategoryProducts>
  );
}

export default Page;
