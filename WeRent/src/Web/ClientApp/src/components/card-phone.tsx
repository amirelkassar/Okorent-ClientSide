import React from "react";
interface CardPhoneProps {
  children: React.ReactNode;
}
function CardPhone({ children }: CardPhoneProps) {
  return (
    <div className="px-8 pt-4 relative pb-6 rounded-3xl border border-green shadow-md bg-white/50 w-full">
      {children}
    </div>
  );
}

export default CardPhone;
