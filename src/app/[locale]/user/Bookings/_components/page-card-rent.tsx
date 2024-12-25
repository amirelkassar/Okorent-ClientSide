import React from "react";
import CardView from "./cardView";
import { QueryWrapper } from "@/src/components/query-wrapper";

function PageCardRent({ query }: { query: any }) {
  return (
    <QueryWrapper query={query}>
      {({ data }: { data: any }) => {
        const getDataByStatus = (status: number) => {
          return data.filter((item: any) => item.status === status);
        };

        return (
          <div>
            <CardView
              first
              title={"New"}
              haveRentSwitch
              products={getDataByStatus(1)}
              status={1}
            />
            <CardView
              title={"Accepted"}
              products={getDataByStatus(1)}
              status={3}
            />
            <CardView
              title={"Out for Delivery "}
              products={getDataByStatus(4)}
              status={4}
            />
            <CardView
              title={"Received"}
              products={getDataByStatus(1)}
              status={6}
            />
            <CardView
              title={"Request for return"}
              products={getDataByStatus(1)}
              status={11}
            />
            <CardView
              title={"Out for return"}
              products={getDataByStatus(1)}
              status={12}
            />
            <CardView
              title={"Completed"}
              products={getDataByStatus(1)}
              status={10}
            />
            <CardView
              title={"Returned"}
              products={getDataByStatus(1)}
              status={7}
            />
            <CardView
              title={"Rejected"}
              products={getDataByStatus(1)}
              status={8}
            />
            <CardView
              title={"Canceled"}
              products={getDataByStatus(1)}
              status={9}
            />
          </div>
        );
      }}
    </QueryWrapper>
  );
}

export default PageCardRent;
