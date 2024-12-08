"use client";
import React from "react";
import { Radio, Select } from "@mantine/core";
import ModalComp from "@/src/components/modal-comp";
import { useDisclosure } from "@mantine/hooks";
import DownIcon from "@/src/assets/icons/down";
import Button from "@/src/components/button";
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
  defaultValue:string
}
function StepAvailability({ setDataList, dataList ,defaultValue}: StepAvailabilityProps) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="mt-[7px] pb-12 flex-1">
      <h3 className={"text-[24px] mb-3 "}>Availability</h3>
      <p className="text-grayMedium mb-4 text-base font-Regular">
        Choose when your item will be available for rent
      </p>
      <Radio.Group
        name="OptionAvailability"
        defaultValue={defaultValue}
        onChange={(e) => {
          setDataList({ ...dataList, Availability: e });
          if (e === "pick") {
            open();
          }
        }}
      >
        <div className="flex my-6 items-center  gap-14 flex-wrap">
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
          <div className="flex items-center justify-between gap-5">
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
          <div className="flex items-center justify-between gap-5">
            <Select
              data={OptionTime}
              leftSectionPointerEvents="none"
              rightSection={<DownIcon />}
              placeholder="Select rental duration"
              label={"Available from"}
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
              label={"Available to"}
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
        </div>

        <Button className={"w-full h-[64px] mt-12"} onClick={close}>
          Save and close
        </Button>
      </ModalComp>
    </div>
  );
}

export default StepAvailability;
