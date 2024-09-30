"use client";
import { PasswordInput } from "@mantine/core";
import React from "react";
import PasswordIconHide from "../assets/icons/password";
import { useDisclosure } from "@mantine/hooks";
import PasswordIconShow from "../assets/icons/PasswordIconShow";
interface PasswordProps {
  label?: string;
  placeholder?: string;
}

function Password({ label, placeholder }: PasswordProps) {
  const [visible, { toggle }] = useDisclosure(false);
  return (
    <PasswordInput
      label={label}
      placeholder={placeholder}
      classNames={{
        input:
          "bg-grayLight border-none h-11 rounded-[8px] opacity-100 !placeholder:!text-red placeholder:opacity-100 placeholder:text-[500px] ",
        label: "text-sm md:text-[16px] mb-2 font-Medium ms-1",
        innerInput:" placeholder:!text-grayMedium  ",
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
