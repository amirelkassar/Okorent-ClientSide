"use client";
import React, { useState } from "react";
import Step from "./step";
import { Radio, Select } from "@mantine/core";
import ModalComp from "@/src/components/modal-comp";
import { useDisclosure } from "@mantine/hooks";
import DownIcon from "@/src/assets/icons/down";
import Button from "@/src/components/button";
import { DatePickerInput } from "@mantine/dates";
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
const OptionTime = [
  { label: "12:00 AM", value: "00:00" },
  { label: "1:00 AM", value: "01:00" },
  { label: "2:00 AM", value: "02:00" },
  { label: "3:00 AM", value: "03:00" },
  { label: "4:00 AM", value: "04:00" },
  { label: "5:00 AM", value: "05:00" },
  { label: "6:00 AM", value: "06:00" },
  { label: "7:00 AM", value: "07:00" },
  { label: "8:00 AM", value: "08:00" },
  { label: "9:00 AM", value: "09:00" },
  { label: "10:00 AM", value: "10:00" },
  { label: "11:00 AM", value: "11:00" },
  { label: "12:00 PM", value: "12:00" },
  { label: "1:00 PM", value: "13:00" },
  { label: "2:00 PM", value: "14:00" },
  { label: "3:00 PM", value: "15:00" },
  { label: "4:00 PM", value: "16:00" },
  { label: "5:00 PM", value: "17:00" },
  { label: "6:00 PM", value: "18:00" },
  { label: "7:00 PM", value: "19:00" },
  { label: "8:00 PM", value: "20:00" },
  { label: "9:00 PM", value: "21:00" },
  { label: "10:00 PM", value: "22:00" },
  { label: "11:00 PM", value: "23:00" },
];
interface StepAvailabilityProps {
  setDataList: React.Dispatch<any>;
  dataList: any;
}
function StepAvailability({ setDataList, dataList }: StepAvailabilityProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<[Date | null, Date | null]>([
    new Date(),
    new Date(),
  ]);
  return (
    <Step
      title="Availability"
      active={dataList.value}
      stepNum={8}
      dec="Choose when your item will be available for rent"
    >
      <Radio.Group
        name="OptionAvailability"
        onChange={(e) => {
          setDataList({ ...dataList, Availability: e });
          if (e === "pick") {
            open();
          }
        }}
      >
        <div className="flex my-6 items-center justify-between gap-3 flex-wrap">
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
        <p className="mt-4 text-[14px] text-grayMedium font-Regular">
          Your item is available for rent{" "}
          <span className="text-blue font-Medium">
            from August 9 to August 24.
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
        <div className="flex flex-col gap-5">
          <Select
            data={["1 Day", "3 Day", "Week"]}
            leftSectionPointerEvents="none"
            rightSection={<DownIcon />}
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
          <div className="flex  items-center justify-between gap-5">
            <Select
              data={OptionTime}
              leftSectionPointerEvents="none"
              rightSection={<DownIcon />}
              placeholder="Select rental duration"
              label={"Deafult pickup time"}
              defaultValue={"08:00"}
              onChange={(e) => {
                console.log(e);
              }}
              classNames={{
                label: "text-black mb-2",
                input:
                  " text-black rounded-2xl text-grayMedium bg-white   rounded-2xl border-2 border-green h-[64px]  placeholder:text-grayMedium placeholder:opacity-100 ",

                wrapper: "h-[64px]",
                dropdown:
                  "bg-white text-black rounded-2xl border border-green/50 text-grayDark py-2",
                option: "hover:bg-green hover:text-white duration-300 ",
              }}
              className="flex-1   duration-200 min-h-[64px]  text-grayMedium"
            />
            <Select
              data={OptionTime}
              leftSectionPointerEvents="none"
              rightSection={<DownIcon />}
              placeholder="Select rental duration"
              label={"Deafult return time"}
              defaultValue={"08:00"}
              classNames={{
                label: "text-black mb-2",
                input:
                  " text-black rounded-2xl text-grayMedium bg-white   rounded-2xl border-2 border-green h-[64px]  placeholder:text-grayMedium placeholder:opacity-100 ",

                wrapper: "h-[64px]",
                dropdown:
                  "bg-white text-black rounded-2xl border border-green/50 text-grayDark py-2",
                option: "hover:bg-green hover:text-white duration-300 ",
              }}
              className=" flex-1   duration-200 min-h-[64px]  text-grayMedium"
            />
          </div>

          <DatePickerInput
            type="range"
            label="Available From - To"
            placeholder=".. - .."
            value={value}
            onChange={setValue}
            popoverProps={{ position: "top" ,classNames:{dropdown:'border-2 border-green  rounded-2xl shadow-lg shadow-green/40'}}}
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

        <Button className={"w-full h-[64px] mt-12"} onClick={close}>
          Save and close
        </Button>
      </ModalComp>
    </Step>
  );
}

export default StepAvailability;
