"use client";
import Image from "next/image";
import React from "react";
import EmpoweringImg from "@/src/assets/images/Empowering.png";
import ProductList from "@/src/components/product/productList";
import ViewProfile from "@/src/components/viewProfile";
import { QueryWrapper } from "@/src/components/query-wrapper";
import {
  GetUserInfo,
  GetUserProductsOrderByID,
} from "@/src/hooks/queries/user/home/user-info";
import LoadingProductsRow from "@/src/components/product/loading-products-row";

function page({ params }: any) {
  const query = GetUserInfo(params.profileID);
  const { data: ProductsData, isLoading } = GetUserProductsOrderByID(
    params.profileID
  );
  return (
    <div>
      <QueryWrapper query={query}>
        {({ data }: { data: any }) => {
          console.log(data);
          return (
            <>
              <div className="w-full rounded-3xl overflow-hidden h-[180px] lg:h-[356px]">
                <Image
                  src={EmpoweringImg}
                  alt="Empowering"
                  className="w-full h-full"
                  width={1504.02}
                  height={356}
                />
              </div>
              <ViewProfile data={data} />
              <div className="mt-section">
                {isLoading ? (
                  <LoadingProductsRow number={5} />
                ) : (
                  <ProductList
                    title={`${data.name.split(" ")[0]} Rentals`}
                    data={ProductsData?.data || []}
                    more={false}
                  />
                )}
              </div>
            </>
          );
        }}
      </QueryWrapper>
    </div>
  );
}

export default page;
