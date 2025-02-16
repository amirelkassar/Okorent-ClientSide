"use client";
import React, { useState } from "react";
import HeaderDash from "./_components/header";
import ChartsPlatform from "./_components/charts";
import Button from "@/src/components/button";
import TableNewSubscriptions from "./Accounts/_components/table-new-subscriptions";

function Page() {
  const [currentView, setcurrentView] = useState<
    "Yearly" | "Monthly" | "Weekly"
  >("Monthly");

  return (
    <div>
      <HeaderDash />
      <div className=" mb-phone lg:mb-section  pb-11  border-b border-grayLight">
        <div className="flex items-center justify-between gap-4 flex-wrap md:flex-nowrap mb-2 lg:mb-0">
          <div>
            <h2 className=" text-2xl mb-2 lg:text-[32px] font-Medium leading-7">
              Platform Performance
            </h2>
            <p className="text-grayMedium text-base lg:text-[20px]">
              See overview about the website performace
            </p>
          </div>

          <div className="flex items-center gap-3 lg:gap-5 order-3">
            <Button
              className={` text-sm px-2 py-1 h-10 mdl:h-12 ${
                currentView === "Weekly"
                  ? ""
                  : "bg-grayBack text-blue border-grayBack hover:border-grayBack hover:shadow-md"
              }`}
              onClick={() => setcurrentView("Weekly")}
            >
              Weekly
            </Button>
            <Button
              className={` text-sm px-4 py-1 h-10 mdl:h-12 ${
                currentView === "Monthly"
                  ? ""
                  : "bg-grayBack text-blue border-grayBack hover:border-grayBack hover:shadow-md"
              }`}
              onClick={() => setcurrentView("Monthly")}
            >
              Monthly
            </Button>
            <Button
              className={` text-sm px-4 py-1 h-10 mdl:h-12 ${
                currentView === "Yearly"
                  ? ""
                  : "bg-grayBack text-blue border-grayBack hover:border-grayBack hover:shadow-md"
              }`}
              onClick={() => setcurrentView("Yearly")}
            >
              Yearly
            </Button>
          </div>
        </div>
        <ChartsPlatform SelectView={currentView} />
      </div>
      <TableNewSubscriptions />
    </div>
  );
}

export default Page;
