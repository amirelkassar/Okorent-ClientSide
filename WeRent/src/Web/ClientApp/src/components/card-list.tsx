import React from "react";
interface CardListProps {
  children: React.ReactNode;
  title: string;
  className?: string;
}
function CardList({ children, title, className = "" }: CardListProps) {
  return (
    <div
      className={`bg-white border-green/30 border shadow-md rounded-2xl py-6 px-5 w-full ${className}`}
    >
      <h3 className=" text-2xl font-SemiBold mb-6">{title}</h3>
      <div className="w-full">{children}</div>
    </div>
  );
}

export default CardList;
