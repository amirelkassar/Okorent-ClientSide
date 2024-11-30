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
function page() {
  return (
    <div className="mb-20">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h2 className=" text-2xl font-Bold">Order Information</h2>
        <Button className={"w-[340px] max-w-full gap-2"}>
          <CarReturn />
          Request to return
        </Button>
      </div>
      <OrderStepper active={2} data={STEPS_DATA} />
      <div className="mt-11 flex gap-10 lgl:flex-row flex-col ">
        <div className="flex flex-col gap-4">
          <OrderInformation />
          <OrderDetails />
        </div>
        <OrderPayment />
      </div>
    </div>
  );
}

export default page;
