import { IconProps } from "@/src/types/type-icon";
import React from "react";

function TransactionsIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="37"
      height="29"
      viewBox="0 0 37 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M24.8359 23.9277L28.1797 27.2715L34.8672 20.584M34.8672 10.5527H1.42969M34.8672 13.8965V7.54336C34.8672 5.67069 34.8672 4.73435 34.5027 4.01908C34.1822 3.38991 33.6706 2.87839 33.0415 2.55781C32.3262 2.19336 31.3899 2.19336 29.5172 2.19336H6.77969C4.90701 2.19336 3.97067 2.19336 3.25541 2.55781C2.62624 2.87838 2.11471 3.38991 1.79413 4.01908C1.42969 4.73435 1.42969 5.67068 1.42969 7.54336V20.2496C1.42969 22.1223 1.42969 23.0586 1.79413 23.7739C2.11471 24.4031 2.62624 24.9146 3.25541 25.2352C3.97067 25.5996 4.90701 25.5996 6.77969 25.5996H18.1484"
        stroke="#0F2A43"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default TransactionsIcon;
