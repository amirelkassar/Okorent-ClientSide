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
          "bg-grayLight border-grayLight  h-11 rounded-[8px] placeholder:text-grayMedium duration-300 focus:border-green focus:bg-white ",
        label: "text-[16px] mb-2 font-Medium ms-1",
      }}
    />
  );
}

export default Input;
