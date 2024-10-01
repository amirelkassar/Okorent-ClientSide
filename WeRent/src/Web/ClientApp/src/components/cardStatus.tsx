import React from "react";
interface CardStatusProps {
  type: "blue" | "green" | "gray" | "red";
  title: string;
  animation?: boolean;
  circle?: boolean;
}
function CardStatus({
  type,
  title,
  animation = false,
  circle = false,
}: CardStatusProps) {
  return (
    <p
      className={` px-2 lg:px-3 w-fit text-nowrap rounded-lg gap-[6px] flex items-center text-[10px] lg:text-[14px] justify-center h-6 min-h-max bg-grayBack ${
        type === "blue"
          ? "text-blue bg-blue/10"
          : type === "green"
          ? "text-green bg-green/10"
          : type === "red"
          ? "text-red bg-red/10"
          : "text-grayMedium bg-grayMedium/10"
      }`}
    >
      {circle && (
        <span
          className={` block size-2 rounded-full ${
            type === "blue"
              ? "bg-blue"
              : type === "green"
              ? "bg-green"
              : type === "red"
              ? "bg-red"
              : "bg-grayMedium"
          } ${animation && "animate-pulse "}`}
        ></span>
      )}

      {title}
    </p>
  );
}

export default CardStatus;
