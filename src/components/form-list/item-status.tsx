"use client";
import { Checkbox } from "@mantine/core";
import React, { useState } from "react";
interface ItemStatusProps {
  selectedCheckbox: string | null;
  setSelectedCheckbox: React.Dispatch<React.SetStateAction<string | null>>;
  handleCheckboxChange: (
    value: string,
    setState: React.Dispatch<React.SetStateAction<string | null>>
  ) => void;
}
function ItemStatus({
  selectedCheckbox,
  setSelectedCheckbox,
  handleCheckboxChange,
}: ItemStatusProps) {
  return (
    <div >
      <div className="flex flex-col gap-4">
        <Checkbox
          checked={selectedCheckbox === "Active"}
          onChange={(e) => {
            handleCheckboxChange(e.target.value, setSelectedCheckbox);
          }}
          color="#88BA52"
          value="Active"
          label="Active"
        />
        <Checkbox
          checked={selectedCheckbox === "Not"}
          onChange={(e) => {
            handleCheckboxChange(e.target.value, setSelectedCheckbox);
          }}
          color="#88BA52"
          value="Not"
          label="Not Active"
        />
      </div>

      <p className="mt-4 text-[14px] text-grayMedium font-Regular ">
        Set as Active to make the item available for rent Set <br /> as Not
        Active to keep the item unavailable for rent
      </p>
    </div>
  );
}

export default ItemStatus;
