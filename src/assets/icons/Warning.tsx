import { IconProps } from "@/src/types/type-icon";
import React from "react";

function Warning({ className = "" }: IconProps) {
  return (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1251_5875)">
        <path
          d="M16.0235 33.0001C24.8601 33.0001 32.0235 25.6128 32.0235 16.5C32.0235 7.38732 24.8601 0 16.0235 0C7.1869 0 0.0234375 7.38732 0.0234375 16.5C0.0234375 25.6128 7.1869 33.0001 16.0235 33.0001Z"
          fill="white"
        />
        <path
          d="M14.308 32.5087C11.5412 32.1876 8.72437 31.0092 6.46407 29.2288C5.80174 28.7073 4.46383 27.3542 3.9057 26.6419C3.17563 25.7099 2.54905 24.6893 2.00365 23.5431C-0.605453 18.0603 0.040262 11.5577 3.68217 6.64066C4.18785 5.95796 5.49977 4.57815 6.1909 4.00218C10.8933 0.0830426 17.3683 -0.693007 22.7989 2.01163C25.9794 3.59572 28.4653 6.15121 30.0419 9.45774C32.6495 14.9277 32.004 21.4513 28.3677 26.3602C27.862 27.0428 26.5508 28.4231 25.8592 28.9986C23.5357 30.9352 20.6362 32.1755 17.6477 32.5127C16.779 32.6109 15.1657 32.6085 14.308 32.5087ZM16.8056 28.5189C17.4596 28.2444 17.8936 27.5522 17.8967 26.7804C17.8982 26.2266 17.7468 25.8137 17.4065 25.4475C16.6502 24.6338 15.4936 24.6096 14.7349 25.392C13.8748 26.2789 14.0364 27.7639 15.0588 28.3829C15.6528 28.7411 16.178 28.7821 16.8056 28.5189ZM16.5183 22.0984C16.9094 21.9543 17.0951 21.7732 17.3207 21.3136C17.4822 20.9852 17.6274 20.0242 18.4102 14.1099C19.0331 9.4022 19.3008 7.15055 19.2735 6.85258C19.2196 6.25898 18.9129 5.65492 18.3985 5.12845C17.0381 3.73673 15.0331 3.74414 13.6805 5.146C13.1302 5.71537 12.8836 6.23935 12.8438 6.92237C12.8227 7.28706 13.0631 9.34747 13.6383 13.7236C14.0918 17.1765 14.5 20.2335 14.546 20.5168C14.6811 21.3571 14.987 21.832 15.5576 22.0871C15.8939 22.2376 16.1328 22.24 16.5183 22.0984Z"
          fill="#FF0000"
        />
      </g>
      <defs>
        <clipPath id="clip0_1251_5875">
          <rect
            width="32"
            height="33"
            fill="white"
            transform="translate(0.0234375)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Warning;
