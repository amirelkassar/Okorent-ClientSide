import React from "react";
interface SearchIconProps {
  className?: string;
  fill?: string;
}
function SearchIcon({ className, fill = "#E9F1F8" }: SearchIconProps) {
  return (
    <svg
      width="23"
      height="24"
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.3332 1.5C7.85785 1.5 5.48393 2.48331 3.73362 4.23362C1.98331 5.98393 1 8.35785 1 10.8332C1 13.3085 1.98331 15.6824 3.73362 17.4327C5.48393 19.183 7.85785 20.1663 10.3332 20.1663C12.8085 20.1663 15.1824 19.183 16.9327 17.4327C18.683 15.6824 19.6663 13.3085 19.6663 10.8332C19.6663 8.35785 18.683 5.98393 16.9327 4.23362C15.1824 2.48331 12.8085 1.5 10.3332 1.5Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.9997 22.4997L16.9248 17.4248"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SearchIcon;
