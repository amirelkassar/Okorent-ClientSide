"use client";
import CalendarIcon from "@/src/assets/icons/Calendar";
import DateIcon from "@/src/assets/icons/date";
import Button from "@/src/components/button";
import Input from "@/src/components/input";
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
      <div className="flex lg:items-center flex-col lg:flex-row gap-3 lg:gap-5 mb-5 lg:mb-8">
        <Input
          type={"button"}
          label={"From"}
          leftSection={<DateIcon className="w-5 h-auto" fill="#6F6B7D" />}
          placeholder={"Choose specific starting date"}
          inputClassName="bg-white border-green cursor-pointer  h-16 rounded-xl"
          onClick={() => {
            setTypeDate("from");
            open2();
          }}
          value={formatDate(value) || "Choose specific starting date"}
          className="flex-1"
        />
        <Input
          type={"button"}
          label={"To"}
          leftSection={<DateIcon className="w-5 h-auto" fill="#6F6B7D" />}
          placeholder={"Choose specific starting date"}
          inputClassName="bg-white border-green cursor-pointer  h-16 rounded-xl"
          onClick={() => {
            setTypeDate("to");
            open2();
          }}
          value={formatDate(value2) || "Choose specific starting date"}
          className="flex-1"
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
