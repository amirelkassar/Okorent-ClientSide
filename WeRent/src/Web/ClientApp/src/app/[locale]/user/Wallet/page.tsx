import React from "react";
import HeaderDash from "./_components/header";
import EarningReport from "./_components/earning-report";
import WithdrawlInfo from "./_components/WithdrawlInfo";
import TopPerforming from "./_components/TopPerforming";

function page() {
  return (
    <div className="flex gap-7 mb-36">
      <div className=" flex-1 flex flex-col gap-6">
        <HeaderDash />
        <EarningReport />
      </div>

      <div className="max-w-[540px] flex-1 flex flex-col gap-5">
        <TopPerforming/>
        <WithdrawlInfo/>
      </div>
    </div>
  );
}

export default page;
