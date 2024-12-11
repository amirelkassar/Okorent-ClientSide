"use client";
import ProductList from "@/src/components/product/productList";
import { GetProductsAll } from "@/src/hooks/queries/user/home";
import { useToken } from "@/src/hooks/use-token";
import { useSearchParams } from "next/navigation";
import React from "react";

function ProductHome() {
  const searchParams = useSearchParams();
  const { data, isLoading, isFetching } = GetProductsAll(
    searchParams.toString()
  );
  console.log(data);
  const { token } = useToken();
  console.log(token);

  console.log({ isFetching: isFetching, isLoading: isLoading });

  return <ProductList title="Items you may like" data={data?.data || []} />;
}

export default ProductHome;
