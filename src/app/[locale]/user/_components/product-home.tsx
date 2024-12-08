"use client";
import ProductList from "@/src/components/product/productList";
import { GetProductsAll } from "@/src/hooks/queries/user/home";
import React from "react";

function ProductHome() {
  const { data, isLoading, isFetching } = GetProductsAll();
  console.log(data);

  console.log({ isFetching: isFetching, isLoading: isLoading });

  return <ProductList title="Items you may like" data={data?.data || []} />;
}

export default ProductHome;
