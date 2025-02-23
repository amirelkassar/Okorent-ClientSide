import { IconProps } from "@/src/types/type-icon";
import React from "react";

function LangIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="10" cy="10" r="9.25" stroke="#0F2A43" strokeWidth="1.5" />
      <path
        d="M13 10C13 12.6953 12.589 15.102 11.9494 16.8077C11.6285 17.6633 11.2646 18.3037 10.8985 18.7166C10.5316 19.1304 10.2263 19.25 10 19.25C9.77374 19.25 9.46841 19.1304 9.10153 18.7166C8.73542 18.3037 8.37145 17.6633 8.0506 16.8077C7.41096 15.102 7 12.6953 7 10C7 7.3047 7.41096 4.89798 8.0506 3.19227C8.37145 2.33666 8.73542 1.69634 9.10153 1.2834C9.46841 0.869596 9.77374 0.75 10 0.75C10.2263 0.75 10.5316 0.869596 10.8985 1.2834C11.2646 1.69634 11.6285 2.33666 11.9494 3.19227C12.589 4.89798 13 7.3047 13 10Z"
        stroke="#0F2A43"
        strokeWidth="1.5"
      />
      <path
        d="M0.833008 10H19.1663"
        stroke="#0F2A43"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default LangIcon;
