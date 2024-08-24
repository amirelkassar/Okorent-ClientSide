import React from "react";
import SwitchPlan from "./_components/switchPlan";
import PricingPlans from "./_components/PricingPlans";

function page() {
  return (
    <div>
      <h1 className="text-[56px] text-center mb-2 ">Pick a plan</h1>
      <h2 className="text-center text-[32px] leading-9">
        Save <br /> <span className="text-green"> Up to 49%</span>
      </h2>
      <SwitchPlan />
      <PricingPlans />
    </div>
  );
}

export default page;
