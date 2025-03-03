import React from "react";
import HeaderDash from "./_components/header";
import EarningReport from "./_components/earning-report";
import WithdrawlInfo from "./_components/WithdrawlInfo";
import TopPerforming from "./_components/TopPerforming";
import ModalChangeAccount from "./_components/modal-change-account";

function Page() {
  return (
    <div className=" mb-section">
      <div className="flex items-center justify-between gap-4 mb-7">
        <h2 className=" text-lg font-SemiBold mdl:text-[32px] mdl:ps-8">Wallet</h2>
        <ModalChangeAccount />
      </div>
      <div className="flex flex-col lgl:flex-row gap-7">
        <div className=" flex-1 flex flex-col gap-4 md:gap-6">
          <HeaderDash />
          <EarningReport />
        </div>

        <div className="w-full lgl:max-w-[540px] flex-1 flex flex-col gap-5">
          <TopPerforming />
          <WithdrawlInfo />
        </div>
      </div>
    </div>
  );
}

export default Page;
