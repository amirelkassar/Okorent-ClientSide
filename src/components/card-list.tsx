import React from "react";
interface CardListProps {
  children: React.ReactNode;
  title: string;
  className?: string;
}
function CardList({ children, title, className = "" }: CardListProps) {
  return (
    <div
      className={`bg-white border-green/30 border shadow-md rounded-2xl py-3 lg:py-6 px-4 lg:px-5 w-full ${className}`}
    >
      <h3 className=" text-lg lg:text-2xl font-SemiBold mb-3 lg:mb-6">{title}</h3>
      <div className="w-full">{children}</div>
    </div>
  );
}

export default CardList;
