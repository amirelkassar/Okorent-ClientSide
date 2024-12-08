import { IconProps } from "@/src/types/type-icon";
import React from "react";

function ViewIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.9764 7.78946V9.0131C10.9764 9.94761 10.9764 10.4149 10.7946 10.7718C10.6346 11.0858 10.3793 11.341 10.0654 11.501C9.70844 11.6829 9.24118 11.6829 8.30668 11.6829H7.08304M4.85824 1.67126H3.6346C2.7001 1.67126 2.23285 1.67126 1.87591 1.85313C1.56195 2.01311 1.30668 2.26837 1.14671 2.58234C0.964844 2.93927 0.964844 3.40652 0.964844 4.34102V5.56466M7.63924 5.00846L10.9764 1.67126M10.9764 1.67126H7.63924M10.9764 1.67126V5.00846M4.30204 8.34566L0.964844 11.6829M0.964844 11.6829H4.30204M0.964844 11.6829L0.964844 8.34566"
        stroke="#6F6B7D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ViewIcon;
