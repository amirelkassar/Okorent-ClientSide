"use client";
import CardRequest from "@/src/components/cardRequest";
import { Pagination } from "@/src/components/pagination";
import { QueryWrapper } from "@/src/components/query-wrapper";
import { GetMyOrderOutAll } from "@/src/hooks/queries/user/booking";
import { useSearchParams } from "next/navigation";
import React from "react";

function PageIRentOutId({ status }: any) {
  const searchParams = useSearchParams();
  const query = GetMyOrderOutAll(
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
                  <CardRequest  data={item} status={+status} />
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

export default PageIRentOutId;
