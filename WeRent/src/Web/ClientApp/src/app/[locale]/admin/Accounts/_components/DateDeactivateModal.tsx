"use client";
import Button from "@/src/components/button";
import ModalComp from "@/src/components/modal-comp";
import { TextInput } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";

function DateDeactivateModal() {
  const [opened, { open: open2, close: close2 }] = useDisclosure(false);
  const [value, setValue] = useState<Date | null>(new Date());
  const [value2, setValue2] = useState<Date | null>(new Date());
  const [TypeDate, setTypeDate] = useState("from");

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
            setTypeDate("from");
            open2();
          }}
        />
        <TextInput
          type={"button"}
          label={"To"}
          placeholder={"Choose specific starting date"}
          classNames={{
            input:
              "bg-white border-green ps-12 cursor-pointer  h-16  rounded-xl placeholder:text-grayMedium duration-300 focus:border-green focus:bg-white ",
            label: "text-[16px] mb-2 font-Medium ms-1",
            wrapper:
              "relative before:absolute before:content-[''] before:bg-[url('../../assets/icons/Calendar.svg')]  before:bg-[length:22px_22px]   before:bg-center before:bg-no-repeat before:top-1/2 before:-translate-y-1/2 before:start-0     before:w-12 before:h-8 before:place-content-center",
          }}
          className=" cursor-pointer flex-1"
          value={formatDate(value2) || "Choose specific starting date"}
          onClick={() => {
            setTypeDate("to");
            open2();
          }}
        />
        
      </div>
      <ModalComp
        opened={opened}
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
            value={TypeDate === "from" ? value : value2}
            onChange={TypeDate === "from" ? setValue : setValue2}
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

export default DateDeactivateModal;
