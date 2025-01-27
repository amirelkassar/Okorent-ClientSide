import AccountsIcon from "@/src/assets/icons/Accounts";
import EarningsIcon from "@/src/assets/icons/Earnings";
import RenewalsIcon from "@/src/assets/icons/Renewals";
import SubscribersIcon from "@/src/assets/icons/Subscribers";
import CardStatistical from "@/src/components/cardStatistical";
import SkeletonLoading from "@/src/components/skeleton-loading";
import { GetAccountDashboardByID } from "@/src/hooks/queries/admin/account/dashboard";
import React from "react";

function ActivityHeader({ accountId = "" }: { accountId: string }) {
  const { data, isLoading } = GetAccountDashboardByID(accountId);
  console.log(data);

  return (
    <div>
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
            title={"Canclation Rate"}
            number={(data?.data?.cancelledOrdersPercentage || 0) + "%"}
            percentage={0}
            icon={<AccountsIcon />}
          />
          <CardStatistical
            title={"Transactions"}
            number={data?.data?.transactions || 0}
            percentage={0}
            icon={<SubscribersIcon />}
          />
          <CardStatistical
            title={"Listed Items"}
            number={data?.data?.listedItems || 0}
            percentage={0}
            icon={<RenewalsIcon />}
          />
          <CardStatistical
            title={"Monthly Earnings"}
            number={"$ " + (data?.data?.monthlyEarnings || 0)}
            percentage={0}
            icon={<EarningsIcon />}
          />
        </div>
      )}
    </div>
  );
}

export default ActivityHeader;
