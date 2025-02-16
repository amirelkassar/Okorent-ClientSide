"use client";
import { QueryWrapper } from "@/src/components/query-wrapper";
import { GetMyOrderAll } from "@/src/hooks/queries/user/booking";
import React from "react";
import OneCardView from "../../_components/oneCardView";
import { Pagination } from "@/src/components/pagination";
import { useSearchParams } from "next/navigation";

function PageIRentId({ status }: any) {
  const searchParams = useSearchParams();
  const query = GetMyOrderAll(
    `OrderStatus=${status}&PageNumber=${searchParams.get("PageNumber") || 1}`
  );

  return (
    <QueryWrapper query={query}>
      {({ data, totalPages }: { data: any; totalPages?: number }) => {
        return (
          <div className="w-full flex-wrap gap-6 my-4 relative flex items-center">
            {data.map((item: any, index: number) => {
              return (
                <div key={index}>
                  <OneCardView  product={item} status={+status} />
                </div>
              );
            })}
            <div className=" w-full">
              <Pagination totalPages={totalPages} />
            </div>
          </div>
        );
      }}
    </QueryWrapper>
  );
}

export default PageIRentId;
