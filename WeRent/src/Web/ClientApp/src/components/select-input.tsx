import React from "react";
import DownIcon from "../assets/icons/down";
import { Select, SelectProps as MantineSelectProps } from "@mantine/core";
interface SelectInputProps extends Omit<MantineSelectProps, "classNames"> {
  data: string[] | { value: string; label: string }[];
  inputClassName?: string;
  labelClassName?: string;
}
const SelectInput: React.FC<SelectInputProps> = ({
  data,
  label = "Select an option",
  placeholder = "Choose...",
  inputClassName = "",
  labelClassName = "",
  className = "",
  ...props
}) => {
  return (
    <Select
      data={data}
      label={label}
      placeholder={placeholder}
      rightSection={<DownIcon />}
      searchable
      leftSectionPointerEvents="none"
      classNames={{
        input: `text-black rounded-xl h-[54px] h-full text-grayMedium border border-green/30 focus:border-green active:border-green placeholder:text-grayMedium placeholder:opacity-100 ${inputClassName}`,
        wrapper: "h-full",
        label: `text-black mb-2 text-xs lg:text-base ${labelClassName}`,
        dropdown: `bg-white text-black rounded-xl border border-green/50 text-grayDark py-2`,
        option: `hover:bg-green hover:text-white duration-300`,
      }}
      className={`h-[64px]   duration-200 min-h-[64px] bg-white rounded-2xl  text-grayMedium ${className}`}
      {...props}
    />
  );
};

export default SelectInput;
