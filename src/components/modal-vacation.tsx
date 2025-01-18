"use client";
import React, { useState } from "react";
import ModalComp from "./modal-comp";
import { DatePicker } from "@mantine/dates";
import Button from "./button";
import Image from "next/image";
import reservesImg from "@/src/assets/images/reserves.png";
import { useDisclosure } from "@mantine/hooks";
function ModalVacation({ opened, close }: { opened: boolean; close: any }) {
  const [opened2, { open: open2, close: close2 }] = useDisclosure(false);

  const [value, setValue] = useState<[Date | null, Date | null]>([
    new Date(),
    new Date(),
  ]);
  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    }).format(date);
  };
  return (
    <div>
      <ModalComp opened={opened} close={close} title={"Select rental period"}>
        <div className="mx-auto max-w-[95%] w-[420px] lg:max-w-[280px]">
          <DatePicker
            classNames={{
              day: "data-[in-range]:bg-green data-[last-in-range]:rounded-e-[14px]  data-[first-in-range]:rounded-s-[14px] p-0 rounded-3 data-[in-range]:text-white",
              monthCell: "px-0",
              levelsGroup: "justify-center mb-3",
              weekday: "text-black",
              calendarHeader: "text-grayMedium",
            }}
            weekendDays={[]}
            type="range"
            value={value}
            onChange={setValue}
            minDate={new Date()}
          />
          <div className="flex gap-6 flex-wrap bg-grayBack  rounded-xl py-2 px-3">
            <div className="flex-1 min-w-[100px]">
              <h3 className="text-[12px] text-grayMedium/50 text-center">
                Pickup
              </h3>
              <p className="text-[12px] text-grayMedium text-center">
                {formatDate(value[0]) || "__"}
              </p>
            </div>
            <div className="flex-1 min-w-[100px]">
              <h3 className="text-[12px] text-grayMedium/50 text-center">
                Return
              </h3>
              <p className="text-[12px] text-grayMedium text-center">
                {formatDate(value[1]) || "__"}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setValue([null, null]);
            }}
            className="text-blue mx-auto text-center flex items-center justify-center py-3 font-Regular w-fit  text-[12px]"
          >
            Remove Dates
          </button>
          <Button className={"w-full"} onClick={() => open2()}>
            Save
          </Button>
        </div>
      </ModalComp>
      <ModalComp title="" opened={opened2} close={close2}>
        <div className="mt-8">
          <div className="w-[200px] h-[200px] mb-2 block mx-auto">
            <Image
              alt="reserves"
              src={reservesImg}
              width={247.69}
              height={233.84}
              className="w-full h-auto"
            />
          </div>

          <h3 className="text-xl text-center mb-1 font-SemiBold">
            Confirm Vacation
          </h3>
          <p className="text-grayMedium text-base text-center mx-auto max-w-[300px] mb-11">
            Your listings will be shown as rented during your vacation period
          </p>
          <div className="flex items-center gap-2 lg:gap-5 ">
            <Button
              onClick={() => close2()}
              className={
                "h-10  flex-1 font-Medium text-green bg-white border-2 hover:bg-green duration-300 hover:text-white"
              }
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                close2();
                close();
              }}
              className={"h-10 font-Medium flex-1"}
            >
              Confirm
            </Button>
          </div>
        </div>
      </ModalComp>
    </div>
  );
}

export default ModalVacation;
