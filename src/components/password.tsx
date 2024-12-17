"use client";
import React, { forwardRef } from "react";
import {
  PasswordInput as MantinePasswordInput,
  PasswordInputProps as MantinePasswordInputProps,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import PasswordIconHide from "../assets/icons/password";
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

const Password = forwardRef<HTMLInputElement, PasswordProps>(
  (
    {
      label,
      placeholder,
      labelClassName = "",
      inputClassName = "",
      ...props
    },
    ref
  ) => {
    const [visible, { toggle }] = useDisclosure(false);

    return (
      <MantinePasswordInput
        ref={ref}
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
        {...props}
      />
    );
  }
);

Password.displayName = "Password"; // For debugging in React DevTools

export default Password;
