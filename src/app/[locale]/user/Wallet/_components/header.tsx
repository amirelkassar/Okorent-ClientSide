import React from "react";
import ShopIcon from "@/src/assets/icons/shop";
import ROUTES from "@/src/routes";
import MoneyIcon from "@/src/assets/icons/money";
import CardStatistical from "./cardStatistical";
const number = [
  {
    id: 1,
    title: "Total Available Balance",
    number: "$510",

    icon: <ShopIcon />,
    link: ROUTES.USER.HOMEPAGE,
    titleLink: "Withdraw",
  },
  {
    id: 2,
    title: "Earnings This Month",
    number: "420$",
    percentage: 65,
    icon: <MoneyIcon />,
    link: "",
    titleLink: "",
  },
];
function HeaderDash() {
  return (
    <div className="flex  justify-between gap-5 lg:gap-8 overflow-x-auto hideScroll md:px-3 pb-3 lg:pb-0 lg:px-0 flex-col mdl:flex-row flex-wrap">
      {number.map((item) => {
        return (
          <CardStatistical
            key={item.id}
            title={item.title}
            number={item.number}
            percentage={item.percentage}
            icon={item.icon}
            link={item.link}
            titleLink={item.titleLink}
          />
        );
      })}
    </div>
  );
}

export default HeaderDash;
