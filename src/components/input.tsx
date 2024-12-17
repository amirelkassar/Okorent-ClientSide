"use client";
import React, { forwardRef } from "react";
import {
  TextInput as MantineTextInput,
  TextInputProps as MantineTextInputProps,
} from "@mantine/core";
import NameIcon from "../assets/icons/name";
import EmailIcon from "../assets/icons/email";

interface InputText extends Omit<MantineTextInputProps, "classNames"> {
  label?: string;
  placeholder?: string;
  type?: string;
  sectionType?: "email" | "user";
  labelClassName?: string;
  inputClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputText>(
  (
    {
      label,
      placeholder,
      type = "text",
      sectionType,
      labelClassName = "",
      inputClassName = "",
      ...props
    },
    ref
  ) => {
    return (
      <MantineTextInput
        {...props}
        ref={ref}
        type={type}
        label={label}
        placeholder={placeholder}
        leftSection={
          sectionType === "user" ? (
            <NameIcon className="w-auto h-4" />
          ) : sectionType === "email" ? (
            <EmailIcon className="w-auto h-4" />
          ) : (
            props.leftSection
          )
        }
        classNames={{
          section: "ms-2 max-w-6 w-auto flex items-center",
          input: `bg-grayLight ${
            sectionType ? "ps-10" : ""
          } border-grayLight h-11 rounded-[8px] placeholder:text-grayMedium duration-300 focus:border-green focus:bg-white ${inputClassName}`,
          label: `text-sm md:text-[16px] mb-2 font-Medium ms-1 ${labelClassName}`,
        }}
      />
    );
  }
);

Input.displayName = "Input"; // For debugging in React DevTools

export default Input;
