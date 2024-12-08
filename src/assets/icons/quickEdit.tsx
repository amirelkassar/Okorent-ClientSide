import { IconProps } from "@/src/types/type-icon";
import React from "react";

function QuickEditIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.05527 6.05526H6.06286M1.5 3.92947L1.5 7.32657C1.5 7.69797 1.5 7.88366 1.54195 8.05841C1.57915 8.21335 1.6405 8.36146 1.72375 8.49732C1.81766 8.65055 1.94896 8.78186 2.21158 9.04447L8.03368 14.8666C8.93566 15.7686 9.38665 16.2196 9.9067 16.3885C10.3641 16.5372 10.8569 16.5372 11.3144 16.3885C11.8344 16.2196 12.2854 15.7686 13.1874 14.8666L14.8666 13.1874C15.7686 12.2854 16.2196 11.8344 16.3885 11.3144C16.5372 10.8569 16.5372 10.3641 16.3885 9.9067C16.2196 9.38665 15.7686 8.93566 14.8666 8.03368L9.04447 2.21158C8.78186 1.94896 8.65055 1.81766 8.49732 1.72375C8.36146 1.6405 8.21335 1.57915 8.05841 1.54195C7.88366 1.5 7.69797 1.5 7.32658 1.5L3.92948 1.5C3.07908 1.5 2.65388 1.5 2.32907 1.6655C2.04336 1.81107 1.81107 2.04336 1.6655 2.32907C1.5 2.65388 1.5 3.07908 1.5 3.92947ZM6.43487 6.05526C6.43487 6.26492 6.26492 6.43487 6.05527 6.43487C5.84562 6.43487 5.67566 6.26492 5.67566 6.05526C5.67566 5.84561 5.84562 5.67566 6.05527 5.67566C6.26492 5.67566 6.43487 5.84561 6.43487 6.05526Z"
        stroke="#006AFF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default QuickEditIcon;
