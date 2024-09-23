import React from "react";

function ArrowBackIcon({className}:{className?:string}) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.12852 11.167L11.6618 17.7003L9.99935 19.3337L0.666016 10.0003L9.99935 0.666992L11.6618 2.30033L5.12852 8.83366H19.3327V11.167H5.12852Z"
        fill="#0F2A43"
      />
    </svg>
  );
}

export default ArrowBackIcon;
