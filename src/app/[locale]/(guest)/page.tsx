"use client";
import React from "react";
import ProductList from "@/src/components/product/productList";
import HeaderAdmin from "./_components/headerAdmin";
import LookingFor from "./_components/lookingFor";
import Categories from "./_components/categories";
import { GetProductsAll } from "@/src/hooks/queries/user/home";
import LoadingProductsRow from "@/src/components/product/loading-products-row";
import { useSearchParams } from "next/navigation";

function Page() {
  const searchParams = useSearchParams();
  const { data, isLoading } = GetProductsAll(
    searchParams.toString()
  );
  return (
    <div>
      <HeaderAdmin />
      <div className="w-full py-10 px-3 mdl:py-14 mb-5 bg-white rounded-t-[50px] lg:rounded-t-[60px]">
        <LookingFor />
      </div>
      <Categories />
      <>
        {isLoading ? (
          <LoadingProductsRow number={5} />
        ) : (
          <ProductList more={false} data={data?.data?.items?.slice(0, 5) || []} />
        )}
      </>
    </div>
  );
}

export default Page;
