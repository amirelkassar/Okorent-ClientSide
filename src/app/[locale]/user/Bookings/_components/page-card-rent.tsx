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
        console.log(data);

        return (
          <div>
            <CardView
              first
              title={"Pending Approval"}
              haveRentSwitch
              proudcts={getDataByStatus(1)}
            />
            <CardView title={"Accepted"} proudcts={getDataByStatus(3)} />
            <CardView
              title={"Out for Delivery "}
              proudcts={getDataByStatus(4)}
            />
            <CardView title={"Completed"} proudcts={getDataByStatus(10)} />
          </div>
        );
      }}
    </QueryWrapper>
  );
}

export default PageCardRent;
