"use client";
import AcceptedIcon from "@/src/assets/icons/accepted";
import CarIcon from "@/src/assets/icons/car";
import CarReturn from "@/src/assets/icons/car-return";
import ReceivedIcon from "@/src/assets/icons/received";
import ReturnedIcon from "@/src/assets/icons/returned";
import Button from "@/src/components/button";
import OrderStepper from "@/src/components/order-stepper";
import React from "react";
import OrderInformation from "./_components/order-information";
import OrderPayment from "./_components/order-payment";
import OrderDetails from "./_components/order-details";
import RentSwitch from "@/src/components/RentSwitch";
import { useSwitchRent } from "@/src/store/rent-slice";
import { GetOrderByID } from "@/src/hooks/queries/user/order";
import Loading from "@/src/components/loading";

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
  const { isRent } = useSwitchRent();
  const { data, isLoading } = GetOrderByID(params.orderId);
  console.log(data);
  
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="mb-section">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h2 className=" text-2xl font-Bold">Order Information</h2>
        <div className=" pointer-events-none opacity-85 flex-1 mx-auto flex items-center justify-center">
          <RentSwitch typeUser="user" />
        </div>
        {isRent === "rent" && (
          <Button className={"w-[340px] max-w-full gap-2"}>
            <CarReturn />
            Request to return
          </Button>
        )}
      </div>
      <OrderStepper
        active={data?.data?.orderTrackers.at(-1)?.newOrderStatus === 1 ? 0 : 1}
        data={STEPS_DATA}
      />
      <div className="mt-section flex gap-10 lgl:flex-row flex-col ">
        <div className="flex flex-col gap-4">
          <OrderInformation data={data?.data} isRent={isRent} />
          <OrderDetails ProductDetails={data?.data?.orderItems || []} />
        </div>
        <OrderPayment
          ProductDetailsPayment={data?.data?.paymentRecord[0] || []}
        />
      </div>
    </div>
  );
}

export default Page;
