import React from "react";
import HeaderDash from "./_components/header";
import EarningReport from "./_components/earning-report";
import WithdrawlInfo from "./_components/WithdrawlInfo";
import TopPerforming from "./_components/TopPerforming";

function page() {
  return (
    <div className="flex flex-col lgl:flex-row gap-7 mb-20 md:mb-36">
      <div className=" flex-1 flex flex-col gap-4 md:gap-6">
        <HeaderDash />
        <EarningReport />
      </div>

      <div className="w-full lgl:max-w-[540px] flex-1 flex flex-col gap-5">
        <TopPerforming/>
        <WithdrawlInfo/>
      </div>
    </div>
  );
}

export default page;
