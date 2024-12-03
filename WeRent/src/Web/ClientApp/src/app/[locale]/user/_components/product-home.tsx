'use client';
import ProductList from "@/src/components/product/productList";
import { GetProductsAll } from "@/src/hooks/queries/user/home";
import React from "react";

function ProductHome() {
  const { data } = GetProductsAll();
  console.log(data);


  return <ProductList title="Items you may like" data={data?.data||[]}    />;
}

export default ProductHome;
