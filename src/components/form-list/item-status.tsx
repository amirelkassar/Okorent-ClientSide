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
    <div>
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
      {selectedCheckbox === "Active" ? (
        <p className="mt-4 text-xs md:text-[14px] text-grayMedium font-Regular">
          Set as &apos;Not Active&apos; to keep the item unavailable for rent
        </p>
      ) : (
        <p className="mt-4 text-xs md:text-[14px] text-grayMedium font-Regular">
          Set as &apos;Active&apos; to make the item available for rent
        </p>
      )}
    </div>
  );
}

export default ItemStatus;
