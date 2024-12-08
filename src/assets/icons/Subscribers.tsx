import { IconProps } from "@/src/types/type-icon";
import React from "react";

function SubscribersIcon({ className='', fill }: IconProps) {
  return (
    <svg
      width="32"
      height="30"
      viewBox="0 0 32 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M21.6563 6.37239L25.9715 2.05725M25.9715 2.05725L30.2866 6.37239M25.9715 2.05725V10.6875M21.6563 27.9481V26.222C21.6563 23.8053 21.6563 22.597 21.186 21.6739C20.7723 20.862 20.1122 20.2018 19.3002 19.7881C18.3772 19.3178 17.1688 19.3178 14.7521 19.3178H8.42326C6.00656 19.3178 4.79821 19.3178 3.87515 19.7881C3.0632 20.2018 2.40307 20.862 1.98936 21.6739C1.51904 22.597 1.51904 23.8053 1.51904 26.222V27.9481M16.622 8.52996C16.622 11.3103 14.3681 13.5643 11.5877 13.5643C8.80731 13.5643 6.55337 11.3103 6.55337 8.52996C6.55337 5.74957 8.80731 3.49563 11.5877 3.49563C14.3681 3.49563 16.622 5.74957 16.622 8.52996Z"
        stroke="#0F2A43"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SubscribersIcon;
