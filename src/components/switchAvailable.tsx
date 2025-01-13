import React from "react";
import { useSwitchAvailable } from "../store/rent-slice";
import SwitchControl from "./switch-control";

function SwitchAvailable() {
  const { switchAvailable, setSwitchAvailable } = useSwitchAvailable();

  return (
    <div>
      <SwitchControl
        options={[
          { label: "Available", value: "Available" },
          { label: "Vacation", value: "Vacation" },
        ]}
        onChange={(e) => {
          setSwitchAvailable(e === "Available" ? "Available" : "Vacation");
        }}
      />
    </div>
  );
}

export default SwitchAvailable;
