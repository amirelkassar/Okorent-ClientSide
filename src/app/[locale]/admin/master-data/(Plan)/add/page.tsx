"use client";
import React from "react";
import TitleMaster from "../../_components/title-master";
import LinkGreen from "@/src/components/linkGreen";
import ROUTES from "@/src/routes";
import Button from "@/src/components/button";
import FormPlanInfo from "../_components/form-plan-info";
import FormFeatures from "../_components/form-features";
import AddFeatureModal from "../_components/add-feature-modal";

function Page() {
  return (
    <div className="mb-section">
      <div className="flex items-center justify-between gap-4 flex-wrap mb-section">
        <TitleMaster title="Create Plan" />
        <div className="flex items-center gap-5 w-fit">
          <LinkGreen
            href={ROUTES.ADMIN.MASTERDATA}
            className={
              " flex-1 h-10 mdl:text-base text-sm hover:shadow-md !px-4 mdl:!px-8 text-black bg-blueLight border-none"
            }
          >
            Discard
          </LinkGreen>
          <Button className={" flex-1 h-10 mdl:text-base text-sm !px-4 mdl:!px-8"}>Save </Button>
        </div>
      </div>
      <div className="flex flex-col mdl:flex-row flex-wrap gap-6 mb-6">
        <FormPlanInfo />
        <FormFeatures />
      </div>
      <AddFeatureModal/>
    </div>
  );
}

export default Page;
