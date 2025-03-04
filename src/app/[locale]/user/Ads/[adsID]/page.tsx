"use client";
import React from "react";
import CardAds from "../_components/card-ads";
import { useSearchParams } from "next/navigation";
import { GetUserAdsByFilter } from "@/src/hooks/queries/user/ads";
import { QueryWrapper } from "@/src/components/query-wrapper";
import { Pagination } from "@/src/components/pagination";

function Page() {
  const searchParams = useSearchParams();
  console.log(searchParams.get("title"));
  const query = GetUserAdsByFilter(searchParams.toString());
  return (
    <div className="mb-section">
      <div className="flex items-center gap-5 mb-10 w-fit md:justify-start justify-between">
        <h2 className="text-xl lg:text-[32px] ">
          {searchParams.get("title")} Ads
        </h2>
      </div>
      <QueryWrapper query={query}>
        {({ data, totalPages }: { data: any; totalPages?: any }) => {
          console.log(data);

          return (
            <div>
              <div className="flex flex-wrap gap-6 mb-section ">
                {data?.map((item: any, index: number) => (
                  <CardAds key={index} product={item} />
                ))}
              </div>
              <Pagination totalPages={totalPages} />
            </div>
          );
        }}
      </QueryWrapper>
    </div>
  );
}

export default Page;
