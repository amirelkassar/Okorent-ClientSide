"use client";
import AcceptedIcon from "@/src/assets/icons/accepted";
import CarIcon from "@/src/assets/icons/car";
import CarReturn from "@/src/assets/icons/car-return";
import ReceivedIcon from "@/src/assets/icons/received";
import ReturnedIcon from "@/src/assets/icons/returned";
import Button from "@/src/components/button";
import OrderStepper from "@/src/components/order-stepper";
import React, { useState } from "react";
import OrderInformation from "./_components/order-information";
import OrderPayment from "./_components/order-payment";
import OrderDetails from "./_components/order-details";
import { GetOrderIDInAdmin } from "@/src/hooks/queries/admin/booking";
import Loading from "@/src/components/loading";
import EditIcon from "@/src/assets/icons/edit";

const STEPS_DATA = [
  {
    label: "Accepted request",
    date: "1 Aug",
    icon: <AcceptedIcon className="h-[23px] w-auto" />,
  },
  {
    label: "Out for Delivery",
    date: "18 Aug",
    icon: <CarIcon className="h-[23px] w-auto" />,
  },
  {
    label: "Received by client",
    date: "18 Aug",
    icon: <ReceivedIcon className="h-[23px] w-auto" />,
  },
  {
    label: "Returned",
    date: "25 Aug",
    icon: <ReturnedIcon className="h-[23px] w-auto" />,
  },
];

function Page({ params }: any) {
  const { data, isLoading } = GetOrderIDInAdmin(params.bookingsId);
  console.log(data);
  const [edit, setEdit] = useState(false);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="mb-section">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h2 className=" text-2xl font-Bold">Order Information</h2>
        {!edit && (
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
        data={data.data?.orderTrackers || []}
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
