"use client";
import {
  PasswordInput as MantinePasswordInput,
  PasswordInputProps as MantinePasswordInputProps,
} from "@mantine/core";

import React from "react";
import PasswordIconHide from "../assets/icons/password";
import { useDisclosure } from "@mantine/hooks";
import PasswordIconShow from "../assets/icons/PasswordIconShow";
interface PasswordProps
  extends Omit<
    MantinePasswordInputProps,
    "classNames" | "visibilityToggleIcon"
  > {
  label?: string;
  placeholder?: string;
  labelClassName?: string;
  inputClassName?: string;
}

function Password({
  label,
  placeholder,
  labelClassName = "",
  inputClassName = "",
  ...props
}: PasswordProps) {
  const [visible, { toggle }] = useDisclosure(false);
  return (
    <MantinePasswordInput
      {...props}
      label={label}
      placeholder={placeholder}
      classNames={{
        input: `bg-grayLight border-grayLight  h-11 rounded-[8px] opacity-100 !placeholder:!text-red placeholder:opacity-100 placeholder:text-[500px] ${inputClassName}`,
        label: `text-sm md:text-[16px] mb-2 font-Medium ms-1 ${labelClassName}`,
        innerInput: " placeholder:!text-grayMedium  ",
      }}
      visible={visible}
      onVisibilityChange={toggle}
      visibilityToggleIcon={() =>
        visible ? <PasswordIconShow /> : <PasswordIconHide />
      }
    />
  );
}

export default Password;
