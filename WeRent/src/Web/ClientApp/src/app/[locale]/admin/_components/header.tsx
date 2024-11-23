import React from "react";
import SubscribersIcon from "@/src/assets/icons/Subscribers";
import AccountsIcon from "@/src/assets/icons/Accounts";
import EarningsIcon from "@/src/assets/icons/Earnings";
import RenewalsIcon from "@/src/assets/icons/Renewals";
import CardStatistical from "@/src/components/cardStatistical";
const number = [
  {
    id: 1,
    title: "Total Members",
    number: "1560",
    percentage: 65,
    icon: <AccountsIcon />,
  },
  {
    id: 2,
    title: "New Subscriptions",
    number: "95",
    percentage: 65,
    icon: <SubscribersIcon />,
  },
  {
    id: 3,
    title: "One Week Renewals",
    number: "15",
    percentage: 65,
    icon: <RenewalsIcon />,
  },
  {
    id: 3,
    title: "Monthly Earnings",
    number: "$1652",
    percentage: 65,
    icon: <EarningsIcon />,
  },
];
function HeaderDash() {
  return (
    <div>
      <h2 className="text-grayMedium text-[24px] font-Medium">
        Welcome Back, Tom 👋{" "}
      </h2>
      <h3 className="text-[32px] font-Bold mb-8">Here is an overview</h3>
      <div className="flex  justify-between gap-3 lg:gap-4 flex-wrap">
        {number.map((item) => {
          return (
            <CardStatistical
              key={item.id}
              title={item.title}
              number={item.number}
              percentage={item.percentage}
              icon={item.icon}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HeaderDash;
