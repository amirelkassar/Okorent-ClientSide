"use client";
import DateIcon from "@/src/assets/icons/date";
import Button from "@/src/components/button";
import Input from "@/src/components/input";
import ModalComp from "@/src/components/modal-comp";
import { DateInput } from "@mantine/dates";
import React from "react";

function ModalCardPayment({
  opened,
  close,
  title=''
}: {
  opened: boolean;
  close: () => void;
  title: string;
}) {
  return (
    <ModalComp opened={opened} close={close} title={title}>
      <div className="w-[550px] max-w-full">
        <div className="flex gap-4  flex-col md:flex-row">
          <Input
            label="Amount"
            defaultValue="355.00"
            leftSection={<span className="text-lg">USD</span>}
            inputClassName="bg-white h-16 border-green/50 rounded-xl ps-11 "
            className="flex-1"
          />
          <DateInput
            label="Date"
            placeholder="Date input"
            valueFormat="YYYY MMM DD"
            leftSection={<DateIcon fill="#6F6B7D" className="w-5 h-auto" />}
            className="flex-1 h-16"
            classNames={{
              input: "bg-white h-16 border-green/50 rounded-xl  ",
              day: "data-[selected]:bg-green data-[selected]:rounded-full   p-0 rounded-3 data-[selected]:text-white",
              monthCell: "px-0",
              levelsGroup: "justify-center mb-3",
              weekday: "text-black",
              calendarHeader: "text-grayMedium",
            }}
          />
        </div>
        <div className="flex items-center gap-7 mt-12 w-full">
          <Button
            onClick={close}
            className={" flex-1 h-[54px] text-black bg-grayBack border-none"}
          >
            Cancel
          </Button>
          <Button onClick={close} className={" flex-1 h-[54px]"}>
            Confirm
          </Button>
        </div>
      </div>
    </ModalComp>
  );
}

export default ModalCardPayment;
