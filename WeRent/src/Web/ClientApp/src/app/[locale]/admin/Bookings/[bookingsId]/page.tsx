import AcceptedIcon from "@/src/assets/icons/accepted";
import CarIcon from "@/src/assets/icons/car";
import CarReturn from "@/src/assets/icons/car-return";
import DateIcon from "@/src/assets/icons/date";
import MoneyIcon from "@/src/assets/icons/money";
import ReceivedIcon from "@/src/assets/icons/received";
import ReturnedIcon from "@/src/assets/icons/returned";
import VisaIcon from "@/src/assets/icons/visa";
import Button from "@/src/components/button";
import CardInfoOrder from "@/src/components/card-info-order";
import OrderStepper from "@/src/components/order-stepper";
import React from "react";
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
        <h2>Order Information</h2>
        <Button className={"w-[340px] max-w-full gap-2"}>
          <CarReturn />
          Request to return
        </Button>
      </div>
      <OrderStepper active={2} data={STEPS_DATA} />
      <div className="mt-11 flex gap-10 lgl:flex-row flex-col ">
        <div className="flex mdl:min-w-[560px] flex-1 flex-wrap gap-8 py-6 mdl:py-9 px-3 mdl:px-4 bg-white rounded-xl border border-green/30">
          <CardInfoOrder
            label="Rental Type"
            iconRender={() => (
              <div className="bg-blueLight rounded-full size-10 p-1 flex items-center justify-center">
                JC
              </div>
            )}
          >
            <div>
              <h4>James Cameron</h4>
              <p className="text-xs text-grayMedium font-Regular">
                james@okorent.com
              </p>
            </div>
          </CardInfoOrder>
          <CardInfoOrder label="Rental Type" info="Delivery" />
          <CardInfoOrder
            label="Rental Date"
            info="18 Aug to 25 Aug"
            iconRender={() => (
              <DateIcon className="w-5 h-auto" fill="#0F2A43" />
            )}
          />
          <CardInfoOrder
            label="Delivery Adressee"
            info="731 N. Overlook Ave. Poughkeepsie"
          />
        </div>
        <div className="flex flex-col gap-4 max-w-[520px] w-full py-6 mdl:py-9 px-3 mdl:px-4 bg-white rounded-xl border border-green/30">
          <CardInfoOrder
            classNameBox="!w-full flex-1"
            label="Payment Method"
            info="Card ending with 0566"
            iconRender={() => <VisaIcon />}
          />
          <CardInfoOrder
            classNameBox="!w-full flex-1"
            info="Invoice OR02245082"
            iconRender={() => (
              <div className="bg-blueLight rounded-full size-10 p-1 flex items-center justify-center">
                <MoneyIcon />
              </div>
            )}
          />
          <CardInfoOrder
            classNameBox="!w-full flex-1"
            iconRender={() => (
              <div className="bg-blueLight rounded-full size-10 p-1 flex items-center justify-center">
                <MoneyIcon />
              </div>
            )}
          >
            <div className="flex-1">
              <h4>Payments Received </h4>
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <p className="text-xs text-grayMedium font-Regular">
                  USD 100.00
                </p>
                <p className="text-xs text-grayMedium font-Regular">
                  Security Deposit
                </p>
              </div>
            </div>
          </CardInfoOrder>
        </div>
      </div>
    </div>
  );
}

export default page;
