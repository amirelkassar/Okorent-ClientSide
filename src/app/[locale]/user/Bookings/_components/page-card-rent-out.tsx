"use client";
import React from "react";
import CardViewReq from "./cardViewReq";
import RentSwitch from "@/src/components/RentSwitch";
import { GetMyOrderOutAll } from "@/src/hooks/queries/user/booking";
import Loading from "@/src/components/loading";
import NoDataYet from "@/src/components/noDataYet";
const statuses = [
  { title: "New", status: 1 },
  { title: "Accepted", status: 3 },
  { title: "Out for Delivery", status: 4 },
  { title: "Received", status: 6 },
  { title: "Request for Return", status: 11 },
  { title: "Out for Return", status: 12 },
  { title: "Completed", status: 10 },
  { title: "Returned", status: 7 },
  { title: "Rejected", status: 8 },
  { title: "Canceled", status: 9 },
];
function PageCardRentOut() {
  const data = statuses.map(({ status }) =>
    GetMyOrderOutAll(`OrderStatus=${status}&PageSize=5`)
  );
  const isLoading = data.some((hook) => hook.isLoading);
  const allItems = data.flatMap((hook) => hook.data?.data?.items || []);
  if (isLoading) {
    return <Loading />;
  }
  if (allItems.length === 0) {
    return <NoDataYet />;
  }
  return (
    <div className="relative ">
      <div className=" linkView flex items-center mb-6 lgl:-mb-10 justify-center w-full order-first lg:order-none min-w-full lg:min-w-fit">
        <RentSwitch typeUser="user" />
      </div>

      <div>
        {statuses.map(({ title, status }, index) => (
          <CardViewReq
            key={status}
            title={title}
            products={data[index]?.data?.data?.items || []}
            status={status}
          />
        ))}
      </div>
    </div>
  );
}

export default PageCardRentOut;
