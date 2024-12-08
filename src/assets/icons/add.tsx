import { IconProps } from "@/src/types/type-icon";
import React from "react";

function AddIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6 13.5C6 13.2012 6.11869 12.9147 6.32997 12.7034C6.54124 12.4921 6.82779 12.3734 7.12658 12.3734H12.3734V7.12658C12.3734 6.82779 12.4921 6.54124 12.7034 6.32997C12.9147 6.11869 13.2012 6 13.5 6C13.7988 6 14.0853 6.11869 14.2966 6.32997C14.5079 6.54124 14.6266 6.82779 14.6266 7.12658V12.3734H19.8734C20.1722 12.3734 20.4588 12.4921 20.67 12.7034C20.8813 12.9147 21 13.2012 21 13.5C21 13.7988 20.8813 14.0853 20.67 14.2966C20.4588 14.5079 20.1722 14.6266 19.8734 14.6266H14.6266V19.8734C14.6266 20.1722 14.5079 20.4588 14.2966 20.67C14.0853 20.8813 13.7988 21 13.5 21C13.2012 21 12.9147 20.8813 12.7034 20.67C12.4921 20.4588 12.3734 20.1722 12.3734 19.8734V14.6266H7.12658C6.82779 14.6266 6.54124 14.5079 6.32997 14.2966C6.11869 14.0853 6 13.7988 6 13.5Z"
        fill="#012929"
        stroke="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.59272 1.38101C11.1829 0.872995 15.8153 0.872995 20.4054 1.38101C23.0999 1.68136 25.2751 3.79995 25.5907 6.50451C26.1364 11.1525 26.1364 15.8475 25.5907 20.4955C25.2737 23.2001 23.0984 25.3172 20.4054 25.619C15.8153 26.127 11.1829 26.127 6.59272 25.619C3.89831 25.3172 1.72302 23.2001 1.40742 20.4955C0.864195 15.8476 0.864195 11.1524 1.40742 6.50451C1.72302 3.79995 3.89978 1.68136 6.59272 1.38101ZM20.1606 3.5747C15.7332 3.08476 11.265 3.08476 6.83753 3.5747C6.01792 3.66547 5.25289 4.02944 4.66604 4.60781C4.0792 5.18618 3.70481 5.94517 3.60335 6.76216C3.07882 11.2393 3.07882 15.7622 3.60335 20.2393C3.70511 21.056 4.07964 21.8147 4.66646 22.3928C5.25328 22.9708 6.01814 23.3346 6.83753 23.4253C11.2279 23.9141 15.7702 23.9141 20.1606 23.4253C20.9798 23.3343 21.7443 22.9704 22.3308 22.3923C22.9173 21.8143 23.2916 21.0558 23.3933 20.2393C23.9179 15.7622 23.9179 11.2393 23.3933 6.76216C23.2913 5.94592 22.9169 5.18778 22.3304 4.61003C21.7439 4.03227 20.9795 3.66859 20.1606 3.57764"
        fill="#012929"
      />
      <path
        d="M20.1606 3.5747C15.7332 3.08476 11.265 3.08476 6.83753 3.5747C6.01792 3.66547 5.25289 4.02944 4.66604 4.60781C4.0792 5.18618 3.70481 5.94517 3.60335 6.76216C3.07882 11.2393 3.07882 15.7622 3.60335 20.2393C3.70511 21.056 4.07964 21.8147 4.66646 22.3928C5.25328 22.9708 6.01814 23.3346 6.83753 23.4253C11.2279 23.9141 15.7702 23.9141 20.1606 23.4253C20.9798 23.3343 21.7443 22.9704 22.3308 22.3923C22.9173 21.8143 23.2916 21.0558 23.3933 20.2393C23.9179 15.7622 23.9179 11.2393 23.3933 6.76216C23.2913 5.94592 22.9169 5.18778 22.3304 4.61003C21.7439 4.03227 20.9795 3.66859 20.1606 3.57764M6.59272 1.38101C11.1829 0.872995 15.8153 0.872995 20.4054 1.38101C23.0999 1.68136 25.2751 3.79995 25.5908 6.50451C26.1364 11.1525 26.1364 15.8475 25.5908 20.4955C25.2737 23.2 23.0984 25.3172 20.4054 25.619C15.8153 26.127 11.1829 26.127 6.59272 25.619C3.89831 25.3172 1.72302 23.2 1.40742 20.4955C0.864195 15.8476 0.864195 11.1524 1.40742 6.50451C1.72302 3.79995 3.89978 1.68136 6.59272 1.38101Z"
        stroke="white"
      />
    </svg>
  );
}

export default AddIcon;
