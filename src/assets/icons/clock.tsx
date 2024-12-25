import { IconProps } from "@/src/types/type-icon";
import React from "react";

function ClockIcon({ className = "", fill = "#0F2A43" }: IconProps) {
  return (
    <svg
      width="39"
      height="36"
      viewBox="0 0 39 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M37 17.1111L33.4477 20.6667L29.8934 17.1111M33.8822 19.7778C33.9467 19.1941 33.9798 18.6009 33.9798 18C33.9798 9.16344 26.8209 2 17.9899 2C9.15892 2 2 9.16344 2 18C2 26.8366 9.15892 34 17.9899 34C23.013 34 27.4951 31.6824 30.4265 28.0575M17.9899 9.11111V18L23.3198 21.5556"
        stroke={fill}
        strokeWidth="3.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ClockIcon;
