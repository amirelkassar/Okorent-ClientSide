import { IconProps } from "@/src/types/type-icon";
import React from "react";

function Filter2Icon({ className = "", fill = "#0F2A43" }: IconProps) {
  return (
    <svg
      width="17"
      height="13"
      viewBox="0 0 17 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.863281 3.21035L10.732 3.21035M10.732 3.21035C10.732 4.57294 11.8366 5.67754 13.1992 5.67754C14.5618 5.67754 15.6664 4.57294 15.6664 3.21035C15.6664 1.84776 14.5618 0.743164 13.1992 0.743164C11.8366 0.743164 10.732 1.84776 10.732 3.21035ZM5.79766 9.78952L15.6664 9.78953M5.79766 9.78952C5.79766 11.1521 4.69306 12.2567 3.33047 12.2567C1.96788 12.2567 0.863281 11.1521 0.863281 9.78952C0.863281 8.42693 1.96788 7.32234 3.33047 7.32234C4.69306 7.32234 5.79766 8.42693 5.79766 9.78952Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Filter2Icon;
