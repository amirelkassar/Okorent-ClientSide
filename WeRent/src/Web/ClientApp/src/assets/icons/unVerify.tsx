import { IconProps } from "@/src/types/type-icon";
import React from "react";

function UnVerifyIcon({ className = "", fill = "#6F6B7D" }: IconProps) {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.1156 10.2614L14.6031 13.7489M14.6031 10.2614L11.1156 13.7489M7.97694 9.91268H4.83826C3.86487 9.91268 3.37817 9.91268 2.98214 10.0328C2.09047 10.3033 1.3927 11.0011 1.12221 11.8927C1.00208 12.2888 1.00208 12.7755 1.00208 13.7489M9.72066 4.33278C9.72066 6.06623 8.31542 7.47147 6.58197 7.47147C4.84852 7.47147 3.44328 6.06623 3.44328 4.33278C3.44328 2.59933 4.84852 1.19409 6.58197 1.19409C8.31542 1.19409 9.72066 2.59933 9.72066 4.33278Z"
        stroke={fill}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default UnVerifyIcon;
