import { IconProps } from "@/src/types/type-icon";
import React from "react";

function CardIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M6.30859 1.16797V18.8318" stroke="#0F2A43" strokeWidth="1.5" />
      <rect
        x="0.75"
        y="1.28711"
        width="17.4255"
        height="17.4255"
        rx="1.25"
        stroke="#0F2A43"
        strokeWidth="1.5"
      />
      <path d="M6.93945 13.7852H18.2948" stroke="#0F2A43" strokeWidth="1.5" />
      <path d="M6.30848 6.21484H0.556641" stroke="#0F2A43" strokeWidth="1.5" />
    </svg>
  );
}

export default CardIcon;
