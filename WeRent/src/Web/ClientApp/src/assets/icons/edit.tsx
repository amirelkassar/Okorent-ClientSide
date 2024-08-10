import React from "react";
interface iconProps {
  className?:string
}
function EditIcon({className}:iconProps) {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10 3.50023H3C2.46957 3.50023 1.96086 3.71094 1.58579 4.08601C1.21071 4.46109 1 4.96979 1 5.50023V19.5002C1 20.0307 1.21071 20.5394 1.58579 20.9144C1.96086 21.2895 2.46957 21.5002 3 21.5002H17C17.5304 21.5002 18.0391 21.2895 18.4142 20.9144C18.7893 20.5394 19 20.0307 19 19.5002V12.5002M17.5 2.00023C17.8978 1.6024 18.4374 1.37891 19 1.37891C19.5626 1.37891 20.1022 1.6024 20.5 2.00023C20.8978 2.39805 21.1213 2.93762 21.1213 3.50023C21.1213 4.06284 20.8978 4.6024 20.5 5.00023L11 14.5002L7 15.5002L8 11.5002L17.5 2.00023Z"
        stroke="#6F6B7D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default EditIcon;
