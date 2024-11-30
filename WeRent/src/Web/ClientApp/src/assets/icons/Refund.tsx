import { IconProps } from "@/src/types/type-icon";
import React from "react";

function RefundIcon({ className = "", fill = "#6F6B7D" }: IconProps) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2.97486 3.17213L4.06092 2.08606M4.06092 2.08606L2.97486 1M4.06092 2.08606H2.97486C1.77523 2.08606 0.802734 3.05856 0.802734 4.25819M9.49124 9.6885L8.40517 10.7746M8.40517 10.7746L9.49124 11.8606M8.40517 10.7746H9.49124C10.6909 10.7746 11.6634 9.80207 11.6634 8.60244M5.24963 3.44364C5.61133 2.03836 6.88699 1 8.40517 1C10.2046 1 11.6634 2.45874 11.6634 4.25819C11.6634 5.77636 10.625 7.05202 9.21975 7.41372M7.31911 8.60244C7.31911 10.4019 5.86037 11.8606 4.06092 11.8606C2.26147 11.8606 0.802734 10.4019 0.802734 8.60244C0.802734 6.80299 2.26147 5.34425 4.06092 5.34425C5.86037 5.34425 7.31911 6.80299 7.31911 8.60244Z"
        stroke={fill}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default RefundIcon;
