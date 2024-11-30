import React from "react";

import SwitchPlan from "@/src/components/subscription/switchPlan";
import PricingPlans from "@/src/components/subscription/PricingPlans";
import Included from "@/src/components/subscription/included";
import TryFree from "@/src/components/subscription/tryFree";
import ToDownIcon from "@/src/assets/icons/ToDown";


function page() {
  return (
    <div>
      <h1 className="text-[32px] lg:text-[56px] text-center mb-2 ">Pick a plan</h1>
      <h2 className="text-center text-2xl lg:text-[32px] leading-9">
        Save <br />{" "}
        <span className="text-green relative">
          Up to 49%
          <span className=" absolute animate-bounce start-full rotate-12 -bottom-4">
            <ToDownIcon />
          </span>
        </span>
      </h2>
      <SwitchPlan />
      <PricingPlans />
      <Included />
      <TryFree />
    </div>
  );
}

export default page;