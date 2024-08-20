import React from "react";
interface PlusIconProps{
  className?:any,
  fill?:string
}
function PlusIcon({className,fill='white'}:PlusIconProps) {
  return (
    <svg
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.49967 1.83301V18.1663M1.33301 9.99967H17.6663"
        stroke={fill}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default PlusIcon;
