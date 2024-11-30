"use client";
import { Stepper } from "@mantine/core";
interface OrderStepperDataProps {
  label: string;
  date: string;
  icon: JSX.Element;
}
interface OrderStepperProps {
  data: OrderStepperDataProps[];
  active: number;
}
export default function OrderStepper({
  data = [],
  active = 0,
}: OrderStepperProps) {
  return (
    <div className="min-h-[150px]   place-content-center  bg-white rounded-lg px-7 py-3 mt-12">
      <Stepper
        active={active}
        color="#88BA52"
        classNames={{
          separator: "mx-1",
          stepWrapper: "size-11",
          stepIcon:
            "w-full h-full p-2 bg-[#B6BFC6] border-none  data-[completed]:bg-green data-[completed]:border-1",
        }}
      >
        {data.map((step, index) => {
          return (
            <Stepper.Step
              key={index}
              className=" flex-col-reverse -mt-1 pb-8 text-center relative"
              classNames={{
                stepDescription:
                  "absolute bottom-0 text-nowrap left-1/2 -translate-x-1/2",
                stepLabel: "mb-4 text-[#B6BFC6]",
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
    </div>
  );
}
