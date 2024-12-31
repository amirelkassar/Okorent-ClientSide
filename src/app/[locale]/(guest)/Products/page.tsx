"use client";
import React from "react";
import PageCategoryProducts from "@/src/components/product/page-category-products";
import SearchLocDate from "@/src/components/search-loc-date";

function Page() {
  return (
    <PageCategoryProducts>
      <SearchLocDate guest />
    </PageCategoryProducts>
  );
}

export default Page;
