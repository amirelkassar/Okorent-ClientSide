import React from "react";
import SubscribersIcon from "@/src/assets/icons/Subscribers";
import AccountsIcon from "@/src/assets/icons/Accounts";
import EarningsIcon from "@/src/assets/icons/Earnings";
import RenewalsIcon from "@/src/assets/icons/Renewals";
import CardStatistical from "@/src/components/cardStatistical";
import { GetDashboardCount } from "@/src/hooks/queries/admin";
import SkeletonLoading from "@/src/components/skeleton-loading";

function HeaderDash() {
  const { data, isLoading } = GetDashboardCount();
  console.log(data);

  return (
    <div className=" mb-phone lg:mb-section">
      <h2 className="text-grayMedium text-base lg:text-[24px] font-Medium mb-5">
        Welcome Back, Admin 👋{" "}
      </h2>
      <h3 className=" text-2xl lg:text-[32px] font-Bold mb-6 lg:mb-8">
        Here is an overview
      </h3>
      {isLoading ? (
        <div className="flex flex-wrap gap-3 w-full  lg:gap-4 ">
          <SkeletonLoading className="min-w-[190px] lg:min-w-[300px] lg:max-w-[430px] flex-1  !h-24 rounded-xl" />
          <SkeletonLoading className="min-w-[190px] lg:min-w-[300px] lg:max-w-[430px] flex-1  !h-24 rounded-xl" />
          <SkeletonLoading className="min-w-[190px] lg:min-w-[300px] lg:max-w-[430px] flex-1  !h-24 rounded-xl" />
          <SkeletonLoading className="min-w-[190px] lg:min-w-[300px] lg:max-w-[430px] flex-1  !h-24 rounded-xl" />
        </div>
      ) : (
        <div className="flex  justify-between gap-3 lg:gap-4 flex-wrap">
          <CardStatistical
            title={"Total Members"}
            number={data?.data?.totalAccounts || 0}
            percentage={0}
            icon={<AccountsIcon />}
          />
          <CardStatistical
            title={"New Subscriptions"}
            number={data?.data?.newSubscribers || 0}
            percentage={0}
            icon={<SubscribersIcon />}
          />
          <CardStatistical
            title={"One Week Renewals"}
            number={data?.data?.oneWeekRenewals || 0}
            percentage={0}
            icon={<RenewalsIcon />}
          />
          <CardStatistical
            title={"Monthly Earnings"}
            number={data?.data?.monthlyEarnings || 0}
            percentage={0}
            icon={<EarningsIcon />}
          />
        </div>
      )}
    </div>
  );
}

export default HeaderDash;
