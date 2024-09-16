import React from "react";

function ArrowDownIcon({ className }:{ className?: string }) {
  return (
    <svg
      width="15"
      height="9"
      viewBox="0 0 15 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.69133 8.26961C7.08186 8.66013 7.71502 8.66013 8.10554 8.26961L14.4695 1.90565C14.86 1.51512 14.86 0.881956 14.4695 0.491432C14.079 0.100908 13.4458 0.100908 13.0553 0.491432L7.39844 6.14829L1.74158 0.491432C1.35106 0.100908 0.717894 0.100908 0.327369 0.491432C-0.0631549 0.881957 -0.0631549 1.51512 0.327369 1.90565L6.69133 8.26961ZM6.39844 6.5625L6.39844 7.5625L8.39844 7.5625L8.39844 6.5625L6.39844 6.5625Z"
        fill="#344050"
      />
    </svg>
  );
}

export default ArrowDownIcon;
