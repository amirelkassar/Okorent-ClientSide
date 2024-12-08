import {
  Textarea as MantineTextarea,
  TextareaProps as MantineTextareaProps,
} from "@mantine/core";
import React from "react";

interface InputTextareaProps extends Omit<MantineTextareaProps, "classNames"> {
  label?: string;
  placeholder?: string;
  labelClassName?: string;
  inputClassName?: string;
}

const InputTextarea: React.FC<InputTextareaProps> = ({
  label,
  placeholder,
  labelClassName = "",
  inputClassName = "",
  ...props
}) => {
  return (
    <MantineTextarea
      {...props}
      label={label}
      placeholder={placeholder}
      classNames={{
        input: `text-black rounded-2xl text-grayMedium min-h-[190px] border border-green/30 focus:border-green active:border-green placeholder:text-grayMedium placeholder:opacity-100 ${inputClassName}`,
        wrapper: "h-full",
        label: `text-sm md:text-[16px] mb-2 font-Medium ms-1 ${labelClassName}`,
      }}
      className={` mb-6 duration-200 min-h-[190px]  rounded-2xl  text-grayMedium ${props.className}`}
    />
  );
};

export default InputTextarea;
