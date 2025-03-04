"use client";
import React from "react";
import RowAds from "./_components/row-ads";
import { GetUserAds } from "@/src/hooks/queries/user/ads";
import { QueryWrapper } from "@/src/components/query-wrapper";

function Page() {
  const query = GetUserAds();

  return (
    <div>
      <QueryWrapper query={query}>
        {({ data }: { data: any }) => {
          console.log(data);

          return (
            <div className="mb-section">
              {data?.map((item: any, index: number) => (
                <RowAds
                  key={index}
                  products={item?.data || []}
                  status={item.statusCode || 0}
                />
              ))}
            </div>
          );
        }}
      </QueryWrapper>
    </div>
  );
}

export default Page;
