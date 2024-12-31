import BestIcon from "@/src/assets/icons/best";
import DiscountIcon from "@/src/assets/icons/Discount";
import ElectronicsWhiteIcon from "@/src/assets/icons/ElectronicsWhite";
import FreeIcon from "@/src/assets/icons/free";
import { Rating } from "@mantine/core";
import React from "react";

function FeaturesProduct({ numRates = 0 }: { numRates?: any }) {
  return (
    <div className="flex items-center gap-3 flex-wrap ">
      <div className="bg-black px-3  rounded-lg flex items-center gap-[6px]">
        <ElectronicsWhiteIcon />
        <p className="text-sm lg:text-base text-white font-Regular]">
          Electronics
        </p>
      </div>
      <div className="bg-blue/10 px-3  rounded-lg flex items-center gap-[6px]">
        <BestIcon />
        <p className="text-sm lg:text-base font-Regular]">Best Selling</p>
      </div>
      <div className="bg-blue/10 px-3  rounded-lg flex items-center gap-[6px]">
        <FreeIcon />
        <p className="text-sm lg:text-base font-Regular]">Free Delivery</p>
      </div>
      <div className="bg-blue/10 px-3  rounded-lg flex items-center gap-[6px]">
        <DiscountIcon />
        <p className="text-sm lg:text-base font-Regular]">20% Discount</p>
      </div>
      <div className="flex items-center gap-2 ">
        <p className="text-sm lg:text-base font-Regular">
          {parseFloat(numRates.toFixed(1)) || 0}
        </p>
        <Rating
          color="#88BA52"
          count={5}
          value={numRates}
          fractions={10}
          readOnly
        />
      </div>
    </div>
  );
}

export default FeaturesProduct;
