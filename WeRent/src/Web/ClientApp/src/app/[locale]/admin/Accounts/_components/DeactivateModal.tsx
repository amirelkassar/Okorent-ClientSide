"use client";
import Button from "@/src/components/button";
import ModalComp from "@/src/components/modal-comp";
import { Radio, Textarea, TextInput } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";
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
function DeactivateModal({ opened, close, id }: any) {
  console.log(id);
  const [opened2, { open: open2, close: close2 }] = useDisclosure(false);
  const [value, setValue] = useState<Date | null>(new Date());
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
      <ModalComp opened={opened} close={close} title={"Deactivate account"}>
        <div className="lg:w-[580px] w-full">
          <Radio.Group
            name="OptionAvailability"
            defaultValue={"always"}
            onChange={(e) => {
              console.log("sdad");
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
                    className="flex-1"
                    classNames={{
                      icon: "w-3 h-3 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2",
                    }}
                  />
                );
              })}
            </div>
          </Radio.Group>
          <div className="flex items-center flex-col md:flex-row gap-5 mb-8">
            <TextInput
              type={"button"}
              label={"From"}
              placeholder={"Choose specific starting date"}
              classNames={{
                input:
                  "bg-white border-green ps-12 cursor-pointer  h-16  rounded-xl placeholder:text-grayMedium duration-300 focus:border-green focus:bg-white ",
                label: "text-[16px] mb-2 font-Medium ms-1",
                wrapper:
                  "relative before:absolute before:content-[''] before:bg-[url('../../assets/icons/Calendar.svg')]  before:bg-[length:22px_22px]   before:bg-center before:bg-no-repeat before:top-1/2 before:-translate-y-1/2 before:start-0     before:w-12 before:h-8 before:place-content-center",
              }}
              className=" cursor-pointer flex-1"
              value={formatDate(value) || "Choose specific starting date"}
              onClick={() => {
                open2();
              }}
            />
            <TextInput
              type={"button"}
              label={"From"}
              placeholder={"Choose specific starting date"}
              classNames={{
                input:
                  "bg-white border-green ps-12 cursor-pointer  h-16  rounded-xl placeholder:text-grayMedium duration-300 focus:border-green focus:bg-white ",
                label: "text-[16px] mb-2 font-Medium ms-1",
                wrapper:
                  "relative before:absolute before:content-[''] before:bg-[url('../../assets/icons/Calendar.svg')]  before:bg-[length:22px_22px]   before:bg-center before:bg-no-repeat before:top-1/2 before:-translate-y-1/2 before:start-0     before:w-12 before:h-8 before:place-content-center",
              }}
              className=" cursor-pointer flex-1"
              value={formatDate(value) || "Choose specific starting date"}
              onClick={() => {
                open2();
              }}
            />
          </div>
          <Textarea
            label={"Add note to be sent to the account"}
            autosize
            placeholder="Write note here "
            classNames={{
              input:
                " bg-white border-green/30 text-base focus:border-green active:border-green   min-h-[90px] rounded-xl placeholder:text-grayMedium placeholder:text-base duration-300 focus:border-green focus:bg-white ",
              wrapper: "h-full",
              label: "text-xs lg:text-base mb-2 font-Medium ms-1",
            }}
            className="w-full mb-4"
          />
        </div>
      </ModalComp>
      <ModalComp
        opened={opened2}
        close={close2}
        title={"Scheudle Starting Date"}
      >
        <div className="mx-auto max-w-[95%] w-[420px] lg:max-w-[280px]">
          <DatePicker
            classNames={{
              day: "data-[selected]:bg-green data-[selected]:rounded-full   p-0 rounded-3 data-[selected]:text-white",
              monthCell: "px-0",
              levelsGroup: "justify-center mb-3",
              weekday: "text-black",
              calendarHeader: "text-grayMedium",
            }}
            weekendDays={[]}
            value={value}
            onChange={setValue}
          />

          <Button
            className={"w-full mt-6"}
            onClick={() => {
              close2();
            }}
          >
            Save
          </Button>
        </div>
      </ModalComp>
    </>
  );
}

export default DeactivateModal;
