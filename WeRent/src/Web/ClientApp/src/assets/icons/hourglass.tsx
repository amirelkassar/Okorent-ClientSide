import React from "react";
interface iconProps {
  className?: string;
  fill?: string;
}
function HourGlassIcon({ className }: iconProps) {
  return (
    <svg
      width="10"
      height="14"
      viewBox="0 0 10 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.35826 10.909H6.94838M1.92221 1.03613H8.38443C8.71954 1.03613 8.8871 1.03613 9.01509 1.10135C9.12768 1.15872 9.21921 1.25025 9.27658 1.36284C9.3418 1.49083 9.3418 1.65839 9.3418 1.9935V3.23479C9.3418 3.5275 9.3418 3.67385 9.30873 3.81158C9.27942 3.93368 9.23106 4.05042 9.16545 4.15749C9.09144 4.27825 8.98796 4.38174 8.78099 4.58871L7.02699 6.34271C6.79003 6.57967 6.67155 6.69815 6.62716 6.83477C6.58811 6.95494 6.58811 7.0844 6.62716 7.20457C6.67155 7.34119 6.79003 7.45967 7.02699 7.69663L8.78098 9.45063C8.98796 9.6576 9.09144 9.76109 9.16545 9.88185C9.23106 9.98893 9.27942 10.1057 9.30873 10.2278C9.3418 10.3655 9.3418 10.5118 9.3418 10.8045V12.0458C9.3418 12.381 9.3418 12.5485 9.27658 12.6765C9.21921 12.7891 9.12768 12.8806 9.01509 12.938C8.8871 13.0032 8.71954 13.0032 8.38443 13.0032H1.92221C1.5871 13.0032 1.41955 13.0032 1.29155 12.938C1.17896 12.8806 1.08743 12.7891 1.03006 12.6765C0.964844 12.5485 0.964844 12.381 0.964844 12.0458V10.8045C0.964844 10.5118 0.964844 10.3655 0.997909 10.2278C1.02722 10.1057 1.07558 9.98893 1.14119 9.88185C1.2152 9.76109 1.31868 9.6576 1.52566 9.45063L3.27965 7.69663C3.51661 7.45967 3.63509 7.34119 3.67948 7.20457C3.71853 7.0844 3.71853 6.95494 3.67948 6.83477C3.63509 6.69815 3.51661 6.57967 3.27965 6.34271L1.52566 4.58871C1.31868 4.38174 1.2152 4.27825 1.14119 4.15749C1.07558 4.05042 1.02722 3.93368 0.997909 3.81158C0.964844 3.67385 0.964844 3.5275 0.964844 3.23479V1.9935C0.964844 1.65839 0.964844 1.49083 1.03006 1.36284C1.08743 1.25025 1.17896 1.15872 1.29155 1.10135C1.41955 1.03613 1.5871 1.03613 1.92221 1.03613Z"
        stroke="#6F6B7D"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default HourGlassIcon;
