import { QueryWrapper } from "@/src/components/query-wrapper";
import { GetMyOrderAll } from "@/src/hooks/queries/user/booking";
import React from "react";
import OneCardView from "../../_components/oneCardView";

function PageIRentId({ status }: any) {
  console.log(status);
  const query = GetMyOrderAll(`OrderStatus=${status}`);

  return (
    <QueryWrapper query={query}>
      {({ data }: { data: any }) => {
        console.log(data);
        return (
          <div className="w-full flex-wrap gap-6 my-4 relative flex items-center">
            {data.map((item: any, index: number) => {
              return <OneCardView key={index} product={item} status={status} />;
            })}
          </div>
        );
      }}
    </QueryWrapper>
  );
}

export default PageIRentId;
