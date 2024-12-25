import CardRequest from "@/src/components/cardRequest";
import { QueryWrapper } from "@/src/components/query-wrapper";
import { GetMyOrderOutAll } from "@/src/hooks/queries/user/booking";
import React from "react";

function PageIRentOutId({ status }: any) {
  console.log(status);
  const query = GetMyOrderOutAll(`OrderStatus=${status}`);
  return (
    <QueryWrapper query={query}>
      {({ data }: { data: any }) => {
        console.log(data);
        return (
          <div className="w-full flex-wrap gap-6 my-4 relative flex items-center">
            {data.map((item: any, index: number) => {
              return <CardRequest key={index} data={item} status={+status} />;
            })}
          </div>
        );
      }}
    </QueryWrapper>
  );
}

export default PageIRentOutId;
