import React from "react";

function DateIcon({ fill = "#006AFF" ,className=''}) {
  return (
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15.2008 7.4H0.800781M11.2008 1V4.2M4.80078 1V4.2M4.64078 17H11.3608C12.7049 17 13.377 17 13.8904 16.7384C14.3419 16.5083 14.7091 16.1412 14.9392 15.6896C15.2008 15.1762 15.2008 14.5041 15.2008 13.16V6.44C15.2008 5.09587 15.2008 4.42381 14.9392 3.91042C14.7091 3.45883 14.3419 3.09168 13.8904 2.86158C13.377 2.6 12.7049 2.6 11.3608 2.6H4.64078C3.29666 2.6 2.62459 2.6 2.1112 2.86158C1.65962 3.09168 1.29246 3.45883 1.06237 3.91042C0.800781 4.42381 0.800781 5.09587 0.800781 6.44V13.16C0.800781 14.5041 0.800781 15.1762 1.06237 15.6896C1.29246 16.1412 1.65962 16.5083 2.1112 16.7384C2.62459 17 3.29665 17 4.64078 17Z"
        stroke={fill}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="3.80078" y="9" width="1" height="1" fill={fill} />
      <rect x="3.80078" y="11" width="1" height="1" fill={fill} />
      <rect x="3.80078" y="13" width="1" height="1" fill={fill} />
      <rect x="5.80078" y="9" width="1" height="1" fill={fill} />
      <rect x="5.80078" y="11" width="1" height="1" fill={fill} />
      <rect x="5.80078" y="13" width="1" height="1" fill={fill} />
      <rect x="7.80078" y="9" width="1" height="1" fill={fill} />
      <rect x="7.80078" y="11" width="1" height="1" fill={fill} />
      <rect x="9.80078" y="9" width="1" height="1" fill={fill} />
      <rect x="9.80078" y="11" width="1" height="1" fill={fill} />
      <rect x="11.8008" y="9" width="1" height="1" fill={fill} />
      <rect x="11.8008" y="11" width="1" height="1" fill={fill} />
    </svg>
  );
}

export default DateIcon;
