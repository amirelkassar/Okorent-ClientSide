import { IconProps } from "@/src/types/type-icon";
import React from "react";

function ExportIcon({ className = "", fill = "#006AFF" }: IconProps) {
  return (
    <svg
      width="15"
      height="18"
      viewBox="0 0 15 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9 1.70215V4.80005C9 5.22009 9 5.43011 9.08175 5.59055C9.15365 5.73167 9.26839 5.8464 9.40951 5.91831C9.56994 6.00005 9.77996 6.00005 10.2 6.00005H13.2979M5.25 11.25L7.5 13.5M7.5 13.5L9.75 11.25M7.5 13.5L7.5 9M9 1.5H5.1C3.83988 1.5 3.20982 1.5 2.72852 1.74524C2.30516 1.96095 1.96095 2.30516 1.74524 2.72852C1.5 3.20982 1.5 3.83988 1.5 5.1V12.9C1.5 14.1601 1.5 14.7902 1.74524 15.2715C1.96095 15.6948 2.30516 16.039 2.72852 16.2548C3.20982 16.5 3.83988 16.5 5.1 16.5H9.9C11.1601 16.5 11.7902 16.5 12.2715 16.2548C12.6948 16.039 13.039 15.6948 13.2548 15.2715C13.5 14.7902 13.5 14.1601 13.5 12.9V6L9 1.5Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ExportIcon;
