'use client'
import React from "react";
import CardViewReq from "./cardViewReq";
import RentSwitch from "@/src/components/RentSwitch";
import { GetMyOrderOutAll } from "@/src/hooks/queries/user/booking";
import Loading from "@/src/components/loading";
import NoDataYet from "@/src/components/noDataYet";

function PageCardRentOut() {

  const { data: New_Order, isLoading } = GetMyOrderOutAll(
    "OrderStatus=1&PageSize=5"
  );
  const { data: Accepted_Order } = GetMyOrderOutAll("OrderStatus=3&PageSize=5");
  const { data: OutForDelivery_Order } = GetMyOrderOutAll(
    "OrderStatus=4&PageSize=5"
  );
  const { data: Received_Order } = GetMyOrderOutAll("OrderStatus=6&PageSize=5");
  const { data: RequestForReturn_Order } = GetMyOrderOutAll(
    "OrderStatus=11&PageSize=5"
  );
  const { data: OutForReturn_Order } = GetMyOrderOutAll(
    "OrderStatus=12&PageSize=5"
  );
  const { data: Completed_Order } = GetMyOrderOutAll(
    "OrderStatus=10&PageSize=5"
  );
  const { data: Returned_Order } = GetMyOrderOutAll("OrderStatus=7&PageSize=5");
  const { data: Rejected_Order } = GetMyOrderOutAll("OrderStatus=8&PageSize=5");
  const { data: Canceled_Order } = GetMyOrderOutAll("OrderStatus=9&PageSize=5");
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
        <CardViewReq
          title="New"
          products={New_Order?.data?.items || []}
          status={1}
        />
        <CardViewReq
          title="Accepted"
          products={Accepted_Order?.data?.items || []}
          status={3}
        />
        <CardViewReq
          title="Out for Delivery "
          products={OutForDelivery_Order?.data?.items || []}
          status={4}
        />
        <CardViewReq
          title="Received by Client"
          products={Received_Order?.data?.items || []}
          status={6}
        />
        <CardViewReq
          title="Out For return"
          products={OutForReturn_Order?.data?.items || []}
          status={12}
        />
        <CardViewReq
          title="Request for return"
          products={RequestForReturn_Order?.data?.items || []}
          status={11}
        />
        <CardViewReq
          title="Completed"
          products={Completed_Order?.data?.items || []}
          status={10}
        />
        <CardViewReq
          title="Returned"
          products={Returned_Order?.data?.items || []}
          status={7}
        />
        <CardViewReq
          title="Canceled"
          products={Canceled_Order?.data?.items || []}
          status={9}
        />
        <CardViewReq
          title="Rejected"
          products={Rejected_Order?.data?.items || []}
          status={8}
        />
      </div>
    </div>
  );
}

export default PageCardRentOut;
