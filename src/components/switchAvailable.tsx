"use client";
import React from "react";
import { useSwitchAvailable } from "../store/rent-slice";
import SwitchControl from "./switch-control";

function SwitchAvailable({ open }: { open: () => void }) {
  const { switchAvailable, setSwitchAvailable } = useSwitchAvailable();
  return (
    <SwitchControl
      options={[
        { label: "Available", value: "Available" },
        { label: "Vacation", value: "Vacation" },
      ]}
      onChange={(e) => {
        if (e === "Vacation") open();
        setSwitchAvailable(e === "Available" ? "Available" : "Vacation");
      }}
    />
  );
}

export default SwitchAvailable;
