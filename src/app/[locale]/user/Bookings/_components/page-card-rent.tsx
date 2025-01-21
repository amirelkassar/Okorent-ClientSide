"use client";
import React from "react";
import CardView from "./cardView";
import RentSwitch from "@/src/components/RentSwitch";
import { GetMyOrderAll, GetMyOrderAllByList } from "@/src/hooks/queries/user/booking";
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

function PageCardRent() {
  const data = statuses.map(({ status }) => GetMyOrderAll(`OrderStatus=${status}&PageSize=5`));
  console.log(data);
  // const { data: New_Order } = GetMyOrderAllByList(1);
  // const { data: Accepted_Order } = GetMyOrderAllByList(3);
  // const { data: OutForDelivery_Order } = GetMyOrderAllByList(4);
  // const { data: Received_Order } = GetMyOrderAllByList(6);
  // const { data: RequestForReturn_Order } = GetMyOrderAllByList(11);
  // const { data: OutForReturn_Order } = GetMyOrderAllByList(12);
  // const { data: Completed_Order } = GetMyOrderAllByList(10);
  // const { data: Returned_Order } = GetMyOrderAllByList(7);
  // const { data: Rejected_Order } = GetMyOrderAllByList(8);
  // const { data: Canceled_Order } = GetMyOrderAllByList(9);

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
          <CardView
            key={status}
            first={index === 0}
            title={title}
            haveRentSwitch={index === 0}
            products={data[index]?.data?.data?.items || []}
            status={status}
          />
        ))}
        {/* <CardView
          first
          title={"New"}
          haveRentSwitch
          products={New_Order?.data?.items || []}
          status={1}
        />
        <CardView
          title={"Accepted"}
          products={Accepted_Order?.data?.items || []}
          status={3}
        />
        <CardView
          title={"Out for Delivery "}
          products={OutForDelivery_Order?.data?.items || []}
          status={4}
        />
        <CardView
          title={"Received"}
          products={Received_Order?.data?.items || []}
          status={6}
        />
        <CardView
          title={"Request for return"}
          products={RequestForReturn_Order?.data?.items || []}
          status={11}
        />
        <CardView
          title={"Out for return"}
          products={OutForReturn_Order?.data?.items || []}
          status={12}
        />
        <CardView
          title={"Completed"}
          products={Completed_Order?.data?.items || []}
          status={10}
        />
        <CardView
          title={"Returned"}
          products={Returned_Order?.data?.items || []}
          status={7}
        />
        <CardView
          title={"Rejected"}
          products={Rejected_Order?.data?.items || []}
          status={8}
        />
        <CardView
          title={"Canceled"}
          products={Canceled_Order?.data?.items || []}
          status={9}
        /> */}
      </div>
    </div>
  );
}

export default PageCardRent;
