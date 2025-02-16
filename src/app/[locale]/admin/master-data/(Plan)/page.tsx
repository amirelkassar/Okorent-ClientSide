import PricingPlans from "@/src/components/subscription/PricingPlans";
import React from "react";
import TitleMaster from "../_components/title-master";
import LayoutMaster from "../_components/layout-master";
import LinkGreen from "@/src/components/linkGreen";
import ROUTES from "@/src/routes";
import PlusIcon from "@/src/assets/icons/plus";
import AddFeatureModal from "./_components/add-feature-modal";

function page() {
  return (
    <LayoutMaster>
      <div>
        <div className="flex items-center justify-between gap-4 flex-wrap mb-section">
          <TitleMaster title="Plans" num={3} />
          <div className="flex items-center gap-3">
            <AddFeatureModal />

            <LinkGreen
              href={ROUTES.ADMIN.PLANSADD}
              className={"gap-2 h-10 !px-3 mdl:!px-5"}
            >
              <PlusIcon className="md:w-4 w-3 h-auto" />
              <p className="mdl:text-base text-sm font-Regular font-medium">Create Plan</p>
            </LinkGreen>
          </div>
        </div>
        <PricingPlans withBtn={false} />
      </div>
    </LayoutMaster>
  );
}

export default page;
