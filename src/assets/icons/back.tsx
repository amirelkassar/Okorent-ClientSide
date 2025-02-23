import { IconProps } from "@/src/types/type-icon";
import React from "react";

function BackIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4.78125 11.25L11.7812 18.25L10 20L0 10L10 0L11.7812 1.75L4.78125 8.75H20V11.25H4.78125Z"
        fill="#0F2A43"
      />
    </svg>
  );
}

export default BackIcon;
