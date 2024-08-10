import { TextInput } from "@mantine/core";
import React from "react";
interface InputText {
  label?: string;
  placeholder?: string;
  type?: string;
}

function Input({ label, placeholder, type = "text" }: InputText) {
  return (
    <TextInput
      type={type}
      label={label}
      placeholder={placeholder}
      classNames={{
        input:
          "bg-grayLight border-none h-11 rounded-[8px] placeholder:text-grayMedium ",
        label: "text-[16px] mb-2 font-Medium ms-1",
      }}
    />
  );
}

export default Input;
