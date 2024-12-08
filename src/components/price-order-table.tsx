import React from "react";
interface PriceOrderTableProps {
  days: string;
  price: number;
  currency?: string;
}
function PriceOrderTable({
  days = "0",
  price = 0,
  currency = "USD",
}: PriceOrderTableProps) {
  return (
    <div className="px-2 w-fit border border-black/25 min-h-6 flex items-center justify-between gap-3 rounded-lg">
      <p className="font-Regular text-xs">{days} Days</p>
      <p className="font-Regular text-xs text-blue">
        {currency} {+price.toFixed(2)}
      </p>
    </div>
  );
}

export default PriceOrderTable;
