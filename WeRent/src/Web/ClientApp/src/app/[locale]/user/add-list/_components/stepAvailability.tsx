"use client";
import React, { useState } from "react";
import Step from "./step";
import { Radio, Select } from "@mantine/core";
import ModalComp from "@/src/components/modal-comp";
import { useDisclosure } from "@mantine/hooks";
import DownIcon from "@/src/assets/icons/down";
import Button from "@/src/components/button";
import { DatePickerInput } from "@mantine/dates";
import DateIcon from "@/src/assets/icons/date";
import { formatDate, getDate } from "@/src/lib/utils";
const OptionAvailability = [
  {
    value: "always",
    label: "Always available",
  },
  {
    value: "pick",
    label: "Pick a specific dates",
    title: "",
  },
];

interface StepAvailabilityProps {
  setDataList: React.Dispatch<any>;
  dataList: any;
}
function StepAvailability({ setDataList, dataList }: StepAvailabilityProps) {
  const [opened, { open, close }] = useDisclosure(false);
  console.log(getDate(dataList?.AvailableFrom, "en").fullMonthNameWithDayName);

  return (
    <Step
      title="Availability"
      active={dataList.value}
      stepNum={7}
      dec="Choose when your item will be available for rent"
    >
      <Radio.Group
        name="OptionAvailability"
        onChange={(e) => {
          setDataList({
            ...dataList,
            IsAvailable: e === "always" ? true : false,
          });
          if (e === "pick") {
            open();
          }
        }}
      >
        <div className="flex my-6 items-center justify-between gap-1 lg:gap-3 flex-wrap">
          {OptionAvailability.map((option, inedx) => {
            return (
              <Radio
                color="#88BA52"
                key={inedx}
                value={option.value}
                label={option.label}
                classNames={{
                  icon: "w-3 h-3 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2",
                }}
              />
            );
          })}
        </div>
      </Radio.Group>
      <div>
        <p className="mt-4 text-[12px] md:text-[14px] text-grayMedium font-Regular">
          Your item is available for rent{" "}
          <span className="text-blue font-Medium">
            from{" "}
            {getDate(dataList?.AvailableFrom, "en").fullMonthNameWithDayName} to{" "}
            {getDate(dataList?.AvailableTo, "en").fullMonthNameWithDayName}
          </span>{" "}
          <br />
          Availability automatically updates to reflect rental periods.
        </p>
      </div>
      <ModalComp
        title="Choose available date and time "
        opened={opened}
        close={close}
      >
        <div className="flex flex-col gap-5 w-[560px] max-w-full">
          <Select
            data={["1 Day", "3 Day", "Week"]}
            leftSectionPointerEvents="none"
            rightSection={<DownIcon className="w-5 h-auto" />}
            placeholder="Select rental duration"
            label={"Minimum rental duration"}
            classNames={{
              label: "text-black mb-2",
              input:
                " text-black rounded-2xl text-grayMedium bg-white   rounded-2xl border-2 border-green h-[64px]  placeholder:text-grayMedium placeholder:opacity-100 ",

              wrapper: "h-[64px]",
              dropdown:
                "bg-white text-black rounded-2xl border border-green/50 text-grayDark py-2",
              option: "hover:bg-green hover:text-white duration-300 ",
            }}
            className="   duration-200 min-h-[64px]  text-grayMedium"
          />

          <DatePickerInput
            type="range"
            label="Availability"
            leftSection={<DateIcon fill="#344050" />}
            placeholder=".. - .."
            defaultValue={[dataList.AvailableFrom, dataList.AvailableTo]}
            onChange={(e) => {
              console.log(e);
              setDataList({
                ...dataList,
                AvailableFrom: e[0],
                AvailableTo: e[1],
              });
            }}
            popoverProps={{
              position: "top",
              classNames: {
                dropdown:
                  "border-2 border-green  rounded-2xl shadow-lg shadow-green/40",
              },
            }}
            valueFormat="DD-MM-YYYY"
            classNames={{
              input:
                " text-black rounded-2xl text-grayMedium bg-white   rounded-2xl border-2 border-green h-[64px]  placeholder:text-grayMedium placeholder:opacity-100 ",
              day: "data-[in-range]:bg-green data-[last-in-range]:rounded-e-[14px]  data-[first-in-range]:rounded-s-[14px] p-0 rounded-3 data-[in-range]:text-white",
              monthCell: "px-0",
              levelsGroup: "justify-center mb-3",
              weekday: "text-black",
              calendarHeader: "text-grayMedium",
            }}
          />
        </div>

        <Button className={"w-full h-[64px] mt-8 lg:mt-12"} onClick={close}>
          Save and close
        </Button>
      </ModalComp>
    </Step>
  );
}

export default StepAvailability;
