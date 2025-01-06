"use client";
import React from "react";
import { useParams } from "next/navigation";
interface PricingOptionsProps {
  daysNumber: number;
  PriceBYDays: number;
  TotalPriceOrder: number;
  children?: React.ReactNode;
}
function PriceDetails({
  daysNumber,
  PriceBYDays = 0,
  TotalPriceOrder,
  children,
}: PricingOptionsProps) {
  const params = useParams();

  return (
    <div className=" border rounded-lg bg-white/50 pt-4 pb-2  border-green/30">
      <div className="px-5 mb-3">
        <h4 className="text-[14px] font-Regular text-grayMedium mb-2">
          Price details
        </h4>
        <ul className="flex flex-col gap-2 w-full">
          <li className="flex items-center justify-between gap-3 flex-wrap">
            <h5 className="text-[14px] text-grayMedium font-Regular">
              ${PriceBYDays} x {daysNumber} Days
            </h5>
            <p className="text-[14px] text-grayMedium font-Regular">
              $ {PriceBYDays * daysNumber}
            </p>
          </li>
          <li className="flex items-center justify-between gap-3 flex-wrap">
            <h5 className="text-[14px] text-grayMedium font-Regular">
              Service fee
            </h5>
            <p className="text-[14px] text-grayMedium font-Regular">$50.82</p>
          </li>
        </ul>
      </div>
      <div className="pt-4 border-t flex items-center justify-between gap-3 px-5 border-[#B6BFC64D]/30">
        <h4 className="font-Bold text-[14px]">Total (CHF)</h4>
        <p className="font-Bold text-[14px]">
          ₣ {TotalPriceOrder < 0 ? 0 : TotalPriceOrder}
        </p>
      </div>
      {children}
    </div>
  );
}

export default PriceDetails;
