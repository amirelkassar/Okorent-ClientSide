"use client";
import LoadingProductsRow from "@/src/components/product/loading-products-row";
import ProductList from "@/src/components/product/productList";
import { GetProductsAll } from "@/src/hooks/queries/user/home";
import { useSearchParams } from "next/navigation";
import React from "react";

function ProductHome() {
  const searchParams = useSearchParams();
  const { data, isLoading, isFetching } = GetProductsAll(
    searchParams.toString()
  );
  return (
    <>
      {isLoading ? (
        <LoadingProductsRow number={5} />
      ) : (
        <ProductList
          title="Items you may like"
          data={data?.data?.items || []}
        />
      )}
    </>
  );
}

export default ProductHome;
