"use client";
import React from "react";
import CardView from "./cardView";
import RentSwitch from "@/src/components/RentSwitch";
import { GetMyOrderAll } from "@/src/hooks/queries/user/booking";
import Loading from "@/src/components/loading";
import NoDataYet from "@/src/components/noDataYet";

function PageCardRent() {
  const { data: New_Order, isLoading } = GetMyOrderAll(
    "OrderStatus=1&PageSize=5"
  );
  const { data: Accepted_Order } = GetMyOrderAll("OrderStatus=3&PageSize=5");
  const { data: OutForDelivery_Order } = GetMyOrderAll(
    "OrderStatus=4&PageSize=5"
  );
  const { data: Received_Order } = GetMyOrderAll("OrderStatus=6&PageSize=5");
  const { data: RequestForReturn_Order } = GetMyOrderAll(
    "OrderStatus=11&PageSize=5"
  );
  const { data: OutForReturn_Order } = GetMyOrderAll(
    "OrderStatus=12&PageSize=5"
  );
  const { data: Completed_Order } = GetMyOrderAll("OrderStatus=10&PageSize=5");
  const { data: Returned_Order } = GetMyOrderAll("OrderStatus=7&PageSize=5");
  const { data: Rejected_Order } = GetMyOrderAll("OrderStatus=8&PageSize=5");
  const { data: Canceled_Order } = GetMyOrderAll("OrderStatus=9&PageSize=5");
  
  if (isLoading) {
    return <Loading />;
  }
  if (
    New_Order?.data?.items?.length === 0 &&
    Accepted_Order?.data?.items?.length === 0 &&
    OutForDelivery_Order?.data?.items?.length === 0 &&
    Received_Order?.data?.items?.length === 0 &&
    RequestForReturn_Order?.data?.items?.length === 0 &&
    OutForReturn_Order?.data?.items?.length === 0 &&
    Completed_Order?.data?.items?.length === 0 &&
    Returned_Order?.data?.items?.length === 0 &&
    Rejected_Order?.data?.items?.length === 0 &&
    Canceled_Order?.data?.items?.length === 0

  ) {
    return <NoDataYet />;
  }
  return (
    <div className="relative ">
      <div className=" linkView flex items-center mb-6 lgl:-mb-10 justify-center w-full order-first lg:order-none min-w-full lg:min-w-fit">
        <RentSwitch typeUser="user" />
      </div>
      <div>
        <CardView
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
        />
      </div>
    </div>
  );
}

export default PageCardRent;
