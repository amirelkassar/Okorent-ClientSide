import { IconProps } from "@/src/types/type-icon";
import React from "react";

function CloseIcon({ className = "", fill = "#0F2A43" }: IconProps) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19 11.0003L11 19.0003M11 11.0003L19 19.0003M28.3333 15.0003C28.3333 22.3641 22.3638 28.3337 15 28.3337C7.63616 28.3337 1.66663 22.3641 1.66663 15.0003C1.66663 7.63653 7.63616 1.66699 15 1.66699C22.3638 1.66699 28.3333 7.63653 28.3333 15.0003Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CloseIcon;
