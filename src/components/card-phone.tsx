import React from "react";
interface CardPhoneProps {
  children: React.ReactNode;
}
function CardPhone({ children }: CardPhoneProps) {
  return (
    <div className="px-4 pt-4 relative pb-5 rounded-3xl border border-green shadow-md bg-white/50 max-w-[calc(100%-24px)] w-full">
      {children}
    </div>
  );
}

export default CardPhone;
