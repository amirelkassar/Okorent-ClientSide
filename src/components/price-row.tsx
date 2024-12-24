import React from "react";
interface PriceRowProps {
  label: string;
  value: string;
  currency?: string;
}
function PriceRow({ label = "", value = "", currency = "USD" }: PriceRowProps) {
  return (
    <div
      className={`flex items-center gap-2 mb-2 ${
        label.toLowerCase() === "total" ? "border-y py-1 md:py-2 border-black/10 md:border-black/20" : ""
      }`}
    >
      <h4
        className={` min-w-[48px] mdl:min-w-[52px] ${
          label.toLowerCase() === "total"
            ? " text-xs mdl:text-sm font-SemiBold"
            : " text-xs font-Regular"
        }  `}
      >
        {label}
      </h4>
      <p
        className={`font-semibold text-sm mdl:text-base ${
          label.toLowerCase() === "discount" ? "text-green" : ""
        }`}
      >
        {currency + " " + value}
      </p>
    </div>
  );
}

export default PriceRow;
