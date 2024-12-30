"use client";
import React from "react";
import PageCategoryProducts from "@/src/components/product/page-category-products";
import SearchLocDate from "../_components/search-loc-date";

function Page() {
  return (
    <PageCategoryProducts>
      <SearchLocDate />
    </PageCategoryProducts>
  );
}

export default Page;
