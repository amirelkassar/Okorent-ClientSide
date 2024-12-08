import { DatePickerInput, DatePickerInputProps } from "@mantine/dates";
import React from "react";
import DateIcon from "../assets/icons/date";
interface InputDateProps<T extends "default" | "range" | "multiple">
  extends Omit<DatePickerInputProps<T>, "classNames" | "popoverProps"> {
  label?: string;
  placeholder?: string;
  labelClassName?: string;
  inputClassName?: string;
  popoverClassName?: string;
  withIcon?: boolean;
}

const InputDate = <T extends "default" | "range" | "multiple">({
  label,
  placeholder = "Select period ",
  labelClassName = "",
  inputClassName = "",
  popoverClassName = "",
  withIcon = false,
  ...props
}: InputDateProps<T>) => {
  return (
    <DatePickerInput
      {...props}
      label={label}
      placeholder={placeholder}
      popoverProps={{
        position: "top",
        classNames: {
          dropdown: `border-2 border-green rounded-2xl shadow-lg shadow-green/40 ${popoverClassName}`,
        },
      }}
      leftSection={withIcon ? <DateIcon fill="#6F6B7D" /> : null}
      valueFormat="DD-MM-YYYY"
      classNames={{
        input: `text-black rounded-2xl text-grayMedium bg-white border border-green h-[64px] placeholder:text-grayMedium placeholder:opacity-100 ${inputClassName}`,
        day: "data-[in-range]:bg-green data-[last-in-range]:rounded-e-[14px] data-[first-in-range]:rounded-s-[14px] p-0 rounded-3 data-[in-range]:text-white",
        monthCell: "px-0",
        levelsGroup: "justify-center mb-3",
        weekday: "text-black",
        calendarHeader: "text-grayMedium",
      }}
      className="my-5"
    />
  );
};

export default InputDate;
