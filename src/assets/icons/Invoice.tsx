import { IconProps } from "@/src/types/type-icon";
import React from "react";

function InvoiceIcon({ className = "", fill = "#0F2A43" }: IconProps) {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.30398 7.47843L6.9662 9.14065L10.7062 5.40066M14.4462 16.2051V5.23444C14.4462 3.83805 14.4462 3.13985 14.1744 2.6065C13.9354 2.13735 13.554 1.75592 13.0848 1.51687C12.5514 1.24512 11.8533 1.24512 10.4569 1.24512H5.13776C3.74137 1.24512 3.04317 1.24512 2.50982 1.51687C2.04067 1.75592 1.65924 2.13735 1.42019 2.6065C1.14844 3.13985 1.14844 3.83805 1.14844 5.23444V16.2051L3.43399 14.5429L5.51176 16.2051L7.79731 14.5429L10.0829 16.2051L12.1606 14.5429L14.4462 16.2051Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default InvoiceIcon;
