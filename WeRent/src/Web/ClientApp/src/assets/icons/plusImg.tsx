import React from "react";

function PlusImgIcon({className}:{className?:string}) {
  return (
    <svg
      width="61"
      height="61"
      viewBox="0 0 61 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="25.7383" y="0.864258" width="10" height="60" fill="#0F2A43" />
      <rect
        x="26.2383"
        y="1.36426"
        width="9"
        height="59"
        stroke="#0F2A43"
        strokeOpacity="0.02"
      />
      <rect
        x="60.7383"
        y="25.8643"
        width="10"
        height="60"
        transform="rotate(90 60.7383 25.8643)"
        fill="#0F2A43"
        fillOpacity="0.6"
      />
      <rect
        x="60.2383"
        y="26.3643"
        width="9"
        height="59"
        transform="rotate(90 60.2383 26.3643)"
        stroke="black"
        strokeOpacity="0.02"
      />
    </svg>
  );
}

export default PlusImgIcon;
