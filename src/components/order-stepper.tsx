"use client";
import { Stepper } from "@mantine/core";
import AcceptedIcon from "../assets/icons/accepted";
import CarIcon from "../assets/icons/car";
import ReceivedIcon from "../assets/icons/received";
import ReturnedIcon from "../assets/icons/returned";
import { getDate } from "../lib/utils";
import CancelIcon from "../assets/icons/cancel";
import RejectOrderIcon from "../assets/icons/RejectOrder";

interface OrderStepperProps {
  active: number;
  data: any[];
}
export default function OrderStepper({
  active = 0,
  data = [],
}: OrderStepperProps) {
  const getDateChane = (num: number) => {
    return getDate(
      data?.find((item) => item.newOrderStatus === num)?.changeDate
    ).fullMonthNameWithDayName;
  };
  const Is_Cancel_Rejected = active === 8 || active === 9;
  const numTracker =
    active === 3
      ? 1
      : active === 4
      ? 2
      : active === 6 || active === 11 || active === 12
      ? 3
      : active === 10 || active === 7
      ? 4
      : 0;
  const STEPS_DATA = [
    {
      label: "Accepted request",
      date: getDateChane(3),
      icon: <AcceptedIcon className=" h-4 mdl:h-[23px] w-auto" />,
    },
    {
      label: "Out for Delivery",
      date: getDateChane(4),
      icon: <CarIcon className=" h-4 mdl:h-[23px] w-auto" />,
    },
    {
      label: "Received by client",
      date: getDateChane(6),
      icon: <ReceivedIcon className=" h-4 mdl:h-[23px] w-auto" />,
    },
    {
      label: "Returned",
      date: getDateChane(10) || getDateChane(11),
      icon: <ReturnedIcon className=" h-4 mdl:h-[23px] w-auto" />,
    },
  ];
  const STEPS_DATA_Cancel = [
    {
      label: "",
      icon: <AcceptedIcon className=" h-4 mdl:h-5 w-auto" />,
    },
    {
      label: "",
      icon: <CarIcon className=" h-4 mdl:h-5 w-auto" />,
    },
    {
      label: "",
      icon: <ReceivedIcon className=" h-4 mdl:h-5 w-auto" />,
    },
    {
      label: "",
      icon: <ReturnedIcon className=" h-4 mdl:h-5 w-auto" />,
    },
  ];

  return (
    <div className="min-h-[150px]   place-content-center  bg-white rounded-lg px-3 mdl:px-7 py-3 mt-6">
      {Is_Cancel_Rejected ? (
        <div>
          <div className="flex items-center gap-2 mb-6">
            {active === 9 ? (
              <CancelIcon className=" w-4 mdl:w-5 h-auto" />
            ) : (
              <RejectOrderIcon className="h-auto w-4 mdl:w-5" />
            )}

            <h4 className="text-red text-sm mdl:text-base font-Bold">
              {active === 9 ? " Canceled Order" : "Reject"}
            </h4>
          </div>
          <Stepper
            active={4}
            color="#E31B1BB2"
            classNames={{
              separator: "mx-1",
              stepWrapper: " size-8  ",
              stepIcon:
                "w-full h-full p-2  border-none   min-w-full min-h-full",
            }}
          >
            {STEPS_DATA_Cancel.map((step, index) => {
              return (
                <Stepper.Step
                  key={index}
                  className=" flex-col-reverse  text-center relative"
                  color="#E31B1BB2"
                  label={step.label}
                  completedIcon={step.icon}
                  icon={step.icon}
                />
              );
            })}
          </Stepper>
        </div>
      ) : (
        <Stepper
          active={numTracker}
          color="#88BA52"
          classNames={{
            separator: "mx-1",
            stepWrapper: " size-8  md:size-11",
            stepIcon:
              "w-full h-full p-2 bg-[#B6BFC6] border-none  data-[completed]:bg-green data-[completed]:border-1 min-w-full min-h-full",
          }}
        >
          {STEPS_DATA.map((step, index) => {
            return (
              <Stepper.Step
                key={index}
                className=" flex-col-reverse -mt-1 pb-6 mdl:pb-8 text-center relative"
                classNames={{
                  stepDescription:
                    "absolute bottom-0 text-xs mdl:text-sm text-nowrap left-1/2 -translate-x-1/2",
                  stepLabel:
                    " mb-2 md:mb-4 text-[#B6BFC6] text-xs lg:text-base",
                }}
                color="red"
                label={step.label}
                description={step.date}
                completedIcon={step.icon}
                icon={step.icon}
              />
            );
          })}
        </Stepper>
      )}
    </div>
  );
}
