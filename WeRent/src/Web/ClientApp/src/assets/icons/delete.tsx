import React from "react";
interface iconProps {
  className?: string;
}
function DeleteIcon({ className }: iconProps) {
  return (
    <svg
      width="21"
      height="23"
      viewBox="0 0 21 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4.45801 22.375C3.79342 22.375 3.2245 22.1384 2.75124 21.6651C2.27797 21.1918 2.04134 20.6229 2.04134 19.9583V4.25H0.833008V1.83333H6.87467V0.625H14.1247V1.83333H20.1663V4.25H18.958V19.9583C18.958 20.6229 18.7214 21.1918 18.2481 21.6651C17.7748 22.1384 17.2059 22.375 16.5413 22.375H4.45801ZM16.5413 4.25H4.45801V19.9583H16.5413V4.25ZM6.87467 17.5417H9.29134V6.66667H6.87467V17.5417ZM11.708 17.5417H14.1247V6.66667H11.708V17.5417Z"
        fill="#E31B1B"
      />
    </svg>
  );
}

export default DeleteIcon;
