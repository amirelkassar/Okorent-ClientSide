"use client";
import React from "react";
import LinkGreen from "../linkGreen";
import ROUTES from "@/src/routes";
import { useParams } from "next/navigation";
interface PricingOptionsProps {
  daysNumber: number;
  priceOptions: { Daily: any; Weekly: any; Monthly: any };
}
function PriceDetails({
  daysNumber,
  priceOptions = { Daily: 0, Weekly: 0, Monthly: 0 },
}: PricingOptionsProps) {
  const params = useParams();
  console.log(params);
  let PriceBYDays =
    daysNumber > 6
      ? priceOptions.Weekly
      : daysNumber > 28
      ? priceOptions.Monthly
      : priceOptions.Daily;
  let TotalPrice = PriceBYDays * daysNumber - 50.82;
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
          ₣ {TotalPrice < 0 ? 0 : TotalPrice}
        </p>
      </div>
      <div className="flex items-center px-5 justify-between gap-4 pb-4 flex-wrap mt-5">
        <LinkGreen
          href={ROUTES.USER.PRODUCTDETAILSCHECKOUT(params.productID || 0)}
          className={"w-full "}
        >
          Request this item
        </LinkGreen>
      </div>
    </div>
  );
}

export default PriceDetails;
