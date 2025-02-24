"use client";
import React from "react";
import Step from "./step";
import { Radio, Select } from "@mantine/core";
import ModalComp from "@/src/components/modal-comp";
import { useDisclosure } from "@mantine/hooks";
import DownIcon from "@/src/assets/icons/down";
import Button from "@/src/components/button";
import { DatePickerInput } from "@mantine/dates";
import DateIcon from "@/src/assets/icons/date";
import { getDate } from "@/src/lib/utils";
import ErrorMsg from "@/src/components/error-msg";
import GetErrorMsg from "@/src/components/getErrorMsg";
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
  error: any;
  reset: any;
}
function StepAvailability({
  setDataList,
  dataList,
  error,
  reset,
}: StepAvailabilityProps) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Step
      title="Availability"
      active={dataList.Cost}
      stepNum={7}
      dec="Choose when your item will be available for rent"
    >
      <Radio.Group
        name="OptionAvailability"
        onChange={(e) => {
          reset();
          setDataList({
            ...dataList,
            AlwaysAvailable: e === "always" ? true : false,
          });
          if (e === "pick") {
            open();
          }
        }}
      >
        <div className="flex my-6 mdl:items-center flex-col mdl:flex-row justify-between gap-3 flex-wrap">
          {OptionAvailability.map((option, inedx) => {
            return (
              <Radio
                color="#88BA52"
                key={inedx}
                value={option.value}
                label={option.label}
                classNames={{
                  icon: "w-3 h-3 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2",
                  label: " text-xs lg:text-sm",
                }}
                onClick={(e) => {
                  if (e.currentTarget.value === "pick") {
                    open();
                  }
                }}
              />
            );
          })}
        </div>
      </Radio.Group>
      <div>
        {dataList.AlwaysAvailable === true ? (
          <p className="mt-4 text-[12px] md:text-[14px] text-grayMedium font-Regular">
            Your item is Always available for rent
          </p>
        ) : dataList.AlwaysAvailable === false ? (
          <p className="mt-4 text-[12px] md:text-[14px] text-grayMedium font-Regular">
            Your item is available for rent{" "}
            <span
              className="text-blue font-Medium cursor-pointer "
              onClick={open}
            >
              from{" "}
              {getDate(dataList?.AvailableFrom, "en")
                .fullMonthNameWithDayName || "__"}{" "}
              to{" "}
              {getDate(dataList?.AvailableTo, "en").fullMonthNameWithDayName ||
                "__"}
            </span>{" "}
            <br />
            Availability automatically updates to reflect rental periods.
          </p>
        ) : null}
      </div>
      <div className="flex flex-wrap flex-col gap-2">
        <ErrorMsg error={GetErrorMsg(error, "AvailableFrom")} />
        <ErrorMsg error={GetErrorMsg(error, "AvailableTo")} />
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
            minDate={new Date()}
            leftSection={<DateIcon fill="#344050" />}
            placeholder=".. - .."
            defaultValue={[
              dataList.AvailableFrom
                ? new Date(dataList.AvailableFrom)
                : new Date(),
              dataList.AvailableTo
                ? new Date(dataList.AvailableTo)
                : new Date(),
            ]}
            onChange={(e) => {
              console.log(e);
              reset();
              setDataList({
                ...dataList,
                AvailableFrom: getDate(e[0]?.toString(), "en").fullYear,
                AvailableTo: getDate(e[1]?.toString(), "en").fullYear,
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
