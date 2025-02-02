"use client";
import Button from "@/src/components/button";
import OrderStepper from "@/src/components/order-stepper";
import React, { useState } from "react";
import OrderInformation from "./_components/order-information";
import OrderPayment from "./_components/order-payment";
import OrderDetails from "./_components/order-details";
import { GetOrderIDInAdmin } from "@/src/hooks/queries/admin/booking";
import Loading from "@/src/components/loading";
import EditIcon from "@/src/assets/icons/edit";

function Page({ params }: any) {
  const { data, isLoading } = GetOrderIDInAdmin(params.bookingsId);
  const [edit, setEdit] = useState(false);
  const statusOrder = data?.data?.orderTrackers?.at(-1)?.newOrderStatus || 0;
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="mb-section">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h2 className=" text-2xl font-Bold">Order Information</h2>
        {!edit && (statusOrder === 1 || statusOrder === 3) && (
          <Button
            onClick={() => {
              setEdit(true);
            }}
            className={"w-fit !px-6 gap-2 !h-10"}
          >
            <EditIcon fill="white" className="w-4 h-auto" />
            Edit
          </Button>
        )}
      </div>
      <OrderStepper
        active={data?.data?.orderTrackers.at(-1)?.newOrderStatus}
        data={data?.data?.orderTrackers || []}
      />
      <div className="mt-section flex gap-10 lgl:flex-row flex-col ">
        <div className="flex flex-col gap-4  max-w-[930px]">
          <OrderInformation data={data?.data} edit={edit} setEdit={setEdit} />
          <OrderDetails ProductDetails={data?.data?.getOrderItemDtos || []} />
        </div>
        <OrderPayment
          ProductDetailsPayment={data?.data?.paymentRecord[0] || []}
        />
      </div>
    </div>
  );
}

export default Page;
