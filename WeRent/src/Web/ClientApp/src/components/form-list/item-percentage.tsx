import React from "react";
import Input from "../input";
import { DatePickerInput } from "@mantine/dates";
import DateIcon from "@/src/assets/icons/date";

function ItemPercentage() {
  return (
    <div>
      <h3 className="text-base lg:text-xl font-Regular mb-1 ">Discount</h3>
      <p className="text-xs lg:text-base font-Regular text-grayMedium mb-2">
        Write below the percentage of discount you want to apply to this item
      </p>
      <Input
        placeholder="%"
        type="number"
        labelClassName="!text-xl font-Regular"
        inputClassName="bg-white h-16 rounded-xl"
        className="flex-1"
      />
      <DatePickerInput
        placeholder="Select period discount will be applied on"
        popoverProps={{
          position: "top",
          classNames: {
            dropdown:
              "border-2 border-green  rounded-2xl shadow-lg shadow-green/40",
          },
        }}
        leftSection={<DateIcon fill="#6F6B7D" />}
        valueFormat="DD-MM-YYYY"
        classNames={{
          input:
            " text-black rounded-2xl text-grayMedium bg-white   rounded-2xl border border-green h-[64px]  placeholder:text-grayMedium placeholder:opacity-100 ",
          day: "data-[in-range]:bg-green data-[last-in-range]:rounded-e-[14px]  data-[first-in-range]:rounded-s-[14px] p-0 rounded-3 data-[in-range]:text-white",
          monthCell: "px-0",
          levelsGroup: "justify-center mb-3",
          weekday: "text-black",
          calendarHeader: "text-grayMedium ",
        }}
        className="my-5"
      />
      <div>
        <h3 className="text-base lg:text-xl font-Regular mb-1 ">
          Security Deposit
        </h3>
        <p className="text-xs lg:text-base font-Regular text-grayMedium mb-2">
          Write below the percentage of security deposit you want to apply to
          this item
        </p>
        <Input
          placeholder="%"
          type="number"
          labelClassName="!text-xl font-Regular"
          inputClassName="bg-white h-16 rounded-xl"
          className="flex-1"
        />
      </div>
    </div>
  );
}

export default ItemPercentage;
