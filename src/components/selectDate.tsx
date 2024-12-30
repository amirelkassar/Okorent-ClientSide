"use client";
import DateIcon from "@/src/assets/icons/date";
import Button from "@/src/components/button";
import ModalComp from "@/src/components/modal-comp";
import { getDate } from "@/src/lib/utils";
import { DatePicker } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

function SelectDate({
  setAvailableFromAndToParams,
}: {
  setAvailableFromAndToParams: any;
}) {
  const searchparams = useSearchParams();
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<[Date | null, Date | null]>([
    searchparams.get("AvailableFrom")
      ? new Date(searchparams.get("AvailableFrom")!)
      : null,
    searchparams.get("AvailableTo")
      ? new Date(searchparams.get("AvailableTo")!)
      : null,
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
    <>
      <div className="flex items-center justify-center gap-2 " onClick={open}>
        <div className=" h-10 min-h-fit px-3 rounded-xl flex items-center border bg-blue/10 cursor-pointer border-transparent gap-1 lg:gap-3 duration-300 hover:border-blue hover:shadow-sidebar">
          <DateIcon />
          <h3 className="text-blue text-sm lg:text-[16px]">
            {getDate(value[0]?.toISOString()).fullYear ||
            getDate(value[1]?.toISOString()).fullYear
              ? formatDate(value[0]) + " - " + formatDate(value[1])
              : "Choose Rental Duration"}
          </h3>
        </div>
        {value.length > 0 && (
          <p
            onClick={open}
            className="text-green cursor-pointer text-base font-Regular"
          >
            (Change)
          </p>
        )}
      </div>
      {opened && (
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
            <Button
              className={"w-full"}
              onClick={() => {
                setAvailableFromAndToParams({
                  AvailableFrom: getDate(value[0]?.toISOString()).fullYear,
                  AvailableTo: getDate(value[1]?.toISOString()).fullYear,
                });
                close();
              }}
            >
              Save
            </Button>
          </div>
        </ModalComp>
      )}
    </>
  );
}

export default SelectDate;
