import { IconProps } from "@/src/types/type-icon";
import React from "react";

function DiscountIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.2 5.7H5.206M8.8 9.3H8.806M9.4 5.1L4.6 9.9M5.5 5.7C5.5 5.86569 5.36569 6 5.2 6C5.03431 6 4.9 5.86569 4.9 5.7C4.9 5.53431 5.03431 5.4 5.2 5.4C5.36569 5.4 5.5 5.53431 5.5 5.7ZM9.1 9.3C9.1 9.46569 8.96569 9.6 8.8 9.6C8.63431 9.6 8.5 9.46569 8.5 9.3C8.5 9.13431 8.63431 9 8.8 9C8.96569 9 9.1 9.13431 9.1 9.3ZM13 7.5C13 10.8137 10.3137 13.5 7 13.5C3.68629 13.5 1 10.8137 1 7.5C1 4.18629 3.68629 1.5 7 1.5C10.3137 1.5 13 4.18629 13 7.5Z"
        stroke="#006AFF"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default DiscountIcon;
