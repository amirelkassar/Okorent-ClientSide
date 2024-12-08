import { IconProps } from "@/src/types/type-icon";
import React from "react";

function WishlistIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="25"
      height="22"
      viewBox="0 0 25 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.5816 2.97469C12.3668 2.8978 12.1964 2.74403 12.026 2.59795C10.7889 1.54461 9.38133 0.960274 7.77378 1.02947C5.52174 1.12173 3.75862 2.15201 2.55111 4.12798C1.29175 6.16545 1.20285 8.31057 2.077 10.5249C2.34369 11.2092 2.74372 11.8012 3.23265 12.3394C4.92909 14.2154 6.70702 16.0145 8.46273 17.8367C9.15168 18.5595 9.80358 19.313 10.5073 20.028C10.9296 20.4586 11.4111 20.7738 12.026 20.9122C13.0631 21.1352 13.9447 20.8507 14.6559 20.1203C16.7005 18.0136 18.708 15.8608 20.723 13.7233C21.1083 13.3158 21.4935 12.893 21.8787 12.4778C23.301 10.9478 23.8789 9.13325 23.6863 7.02658C23.427 4.09722 21.3823 1.72145 18.5377 1.12173C16.5745 0.70655 14.7744 1.26013 13.2261 2.59026C13.0335 2.75172 12.8261 2.88242 12.6186 3.01313"
        stroke="#012929"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.7397 4.31934C18.4657 4.45267 19.5066 5.31934 20.1027 6.51934C20.9123 8.14156 20.4586 9.60082 18.955 10.8527C17.9942 11.6453 17.0511 12.4527 16.0547 13.2082"
        stroke="#012929"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default WishlistIcon;
