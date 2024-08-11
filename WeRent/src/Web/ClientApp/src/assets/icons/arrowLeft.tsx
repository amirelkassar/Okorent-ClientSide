import React from "react";

function ArrowLeftIcon({fill="white"}) {
  return (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.311 10.1865L10.1865 16.311M10.1865 16.311L16.311 22.4354M10.1865 16.311L22.4354 16.311M0.999849 16.311C0.99985 7.85486 7.85487 0.999846 16.311 0.999847C24.7671 0.999847 31.6221 7.85486 31.6221 16.311C31.6221 24.7671 24.7671 31.6221 16.311 31.6221C7.85486 31.6221 0.999848 24.767 0.999849 16.311Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowLeftIcon;
