import React from "react";
import { QueryWrapper } from "@/src/components/query-wrapper";
import CardViewReq from "./cardViewReq";
import RentSwitch from "@/src/components/RentSwitch";

function PageCardRentOut({ query }: { query: any }) {
  return (
    <div className="relative ">
      <div className=" linkView flex items-center mb-6 lgl:-mb-10 justify-center w-full order-first lg:order-none min-w-full lg:min-w-fit">
        <RentSwitch typeUser="user" />
      </div>
      <QueryWrapper query={query}>
        {({ data }: { data: any }) => {
          const getDataByStatus = (status: number) => {
            return data.filter((item: any) => item.status === status);
          };

          return (
            <div>
              <CardViewReq
                title="New"
                products={getDataByStatus(1)}
                status={1}
              />
              <CardViewReq
                title="Accepted"
                products={getDataByStatus(3)}
                status={3}
              />
              <CardViewReq
                title="Out for Delivery "
                products={getDataByStatus(4)}
                status={4}
              />
              <CardViewReq
                title="Received by Client"
                products={getDataByStatus(4)}
                status={6}
              />
              <CardViewReq
                title="Out For return"
                products={getDataByStatus(1)}
                status={12}
              />
              <CardViewReq
                title="Request for return"
                products={getDataByStatus(1)}
                status={11}
              />
              <CardViewReq
                title="Completed"
                products={getDataByStatus(10)}
                status={10}
              />
              <CardViewReq
                title="Returned"
                products={getDataByStatus(1)}
                status={7}
              />
              <CardViewReq
                title="Canceled"
                products={getDataByStatus(1)}
                status={9}
              />
              <CardViewReq
                title="Rejected"
                products={getDataByStatus(1)}
                status={8}
              />
            </div>
          );
        }}
      </QueryWrapper>
    </div>
  );
}

export default PageCardRentOut;
