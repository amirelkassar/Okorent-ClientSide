import React from "react";
import SwitchPlan from "./_components/switchPlan";
import PricingPlans from "./_components/PricingPlans";
import Included from "./_components/included";
import TryFree from "./_components/tryFree";
import ToDwonIcon from "@/src/assets/icons/ToDwon";

function page() {
  return (
    <div>
      <h1 className="text-[32px] lg:text-[56px] text-center mb-2 ">Pick a plan</h1>
      <h2 className="text-center text-2xl lg:text-[32px] leading-9">
        Save <br />{" "}
        <span className="text-green relative">
          Up to 49%
          <span className=" absolute animate-bounce start-full rotate-12 -bottom-4">
            <ToDwonIcon />
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
