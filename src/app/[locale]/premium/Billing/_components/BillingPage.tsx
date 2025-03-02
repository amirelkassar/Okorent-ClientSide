"use client";
import React from "react";
import PlanPage from "./planPage";
import { useSwitchBilling } from "@/src/store/rent-slice";
import SwitchBilling from "./switchBilling";
import RentOuts from "./RentOuts";
import SearchItem from "./searchItem";
import FilterBilling from "./filterBilling";

function BillingPage() {
  const { switchBilling } = useSwitchBilling();
  console.log(switchBilling);

  return (
    <div className="mb-16">
      <div
        className={`mx-auto relative min-h-[46px] ${
          switchBilling === "plan"
            ? " justify-center"
            : "justify-between"
        }   mb-8 flex flex-col lg:flex-row gap-7 items-center `}
      >
        {switchBilling !== "plan" && (
         <FilterBilling/>
        )}
        <div
          className={` order-1 lg:order-2 ${
            switchBilling !== "plan"
              ? "xl:absolute xl:top-1/2 xl:left-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2"
              : ""
          }`}
        >
          <SwitchBilling />
        </div>
        {switchBilling !== "plan" && <SearchItem />}
      </div>
      {switchBilling === "plan" ? <PlanPage /> : <RentOuts />}
    </div>
  );
}

export default BillingPage;
