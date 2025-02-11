import { IconProps } from "@/src/types/type-icon";
import React from "react";

function NoteDemoIcon({ className = "", fill = "#6F6B7D" }: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.66008 4.2628L12.2406 5.21605M7.89358 7.1098L9.68308 7.5868M7.98283 12.4745L8.69833 12.6658C10.7233 13.2058 11.7358 13.475 12.5338 13.0168C13.3311 12.5593 13.6026 11.552 14.1448 9.53905L14.9121 6.6913C15.4551 4.67755 15.7258 3.67105 15.2653 2.87755C14.8048 2.08405 13.7931 1.8148 11.7673 1.27555L11.0518 1.0843C9.02683 0.5443 8.01433 0.27505 7.21708 0.7333C6.41908 1.1908 6.14758 2.19805 5.60458 4.21105L4.83808 7.0588C4.29508 9.07255 4.02358 10.079 4.48483 10.8725C4.94533 11.6653 5.95783 11.9353 7.98283 12.4745Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00002 14.7095L7.28602 14.9045C5.26552 15.4542 4.25602 15.7295 3.45952 15.2622C2.66452 14.7957 2.39302 13.7697 1.85227 11.7162L1.08652 8.81225C0.54502 6.7595 0.27427 5.73275 0.73402 4.92425C1.13152 4.2245 2.00002 4.25 3.12502 4.25"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default NoteDemoIcon;
