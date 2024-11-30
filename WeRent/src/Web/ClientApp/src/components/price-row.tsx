import React from "react";
interface PriceRowProps {
  label: string;
  value: string;
  currency?: string;
}
function PriceRow({ label = "", value = "", currency = "USD" }: PriceRowProps) {
  return (
    <div
      className={`flex gap-2 mb-2 ${
        label.toLowerCase() === "total" ? "border-b py-1 border-black/20" : ""
      }`}
    >
      <h4
        className={`min-w-[52px] ${
          label.toLowerCase() === "total"
            ? "text-sm font-SemiBold"
            : " text-xs font-Regular"
        }  `}
      >
        {label}
      </h4>
      <p
        className={`font-semibold ${
          label.toLowerCase() === "Discount" ? "text-green" : ""
        }`}
      >
        {currency + " " + value}
      </p>
    </div>
  );
}

export default PriceRow;
