"use client";
import CardVisaIcon from "@/src/assets/icons/cardVisa";
import { PinInput, TextInput } from "@mantine/core";
import React, { useRef, useState } from "react";

function InputCreditCard() {
  const [value, setValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value.replace(/\D+/g, ""); // Remove non-digit characters

    if (inputValue.length > 16) {
      inputValue = inputValue.slice(0, 16);
    }

    // Insert spaces and hyphens after every 4 digits
    const formattedValue = inputValue.replace(/(\d{4})(?=\d)/g, "$1 - ");
    setValue(formattedValue);
  };
  return (
    <div className="flex flex-1 items-center gap-3 w-full px-5 py-1 border border-green rounded-lg bg-white">
      <div className="min-w-[18px]">
        <CardVisaIcon />
      </div>
      <TextInput
        value={value}
        onChange={handleInputChange}
        classNames={{
          input: "w-full border-none text-black text-[16px] font-SemiBold ",
        }}
        maxLength={25}
      />
    </div>
  );
}

export default InputCreditCard;
