import PricingPlans from "@/src/components/subscription/PricingPlans";
import React from "react";
import TitleMaster from "../_components/title-master";
import LayoutMaster from "../_components/layout-master";

function page() {
  return (
    <LayoutMaster>
      <div>
        <div className="flex items-center justify-between gap-4 flex-wrap mb-section">
          <TitleMaster title="Plans" num={3} />
        </div>
        <PricingPlans />
      </div>
    </LayoutMaster>
  );
}

export default page;
