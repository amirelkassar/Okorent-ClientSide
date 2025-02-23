import { IconProps } from "@/src/types/type-icon";
import React from "react";

function MasterCardIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="48"
      height="28"
      viewBox="0 0 48 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="14" cy="14" r="14" fill="#CF1928" />
      <circle cx="30" cy="14" r="14" fill="#FFD400" fillOpacity="0.7" />
    </svg>
  );
}

export default MasterCardIcon;
