import React from "react";
import CardStatistical from "./cardStatistical";
import Image from "next/image";
import tom from "@/src/assets/images/tom.png";
import Button from "@/src/components/button";
import SwitchIcon from "@/src/assets/icons/switch";
import ShopIcon from "@/src/assets/icons/shop";
import { link } from "fs";
import ROUTES from "@/src/routes";
import MoneyIcon from "@/src/assets/icons/money";
import ClockIcon from "@/src/assets/icons/clock";
const number = [
  {
    id: 1,
    title: "New Rental Requests",
    number: "+12",

    icon: <ShopIcon />,
    link: ROUTES.USER.HOMEPAGE,
    titleLink: "View rentals",
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
  {
    id: 3,
    title: "Ongoing Rentals",
    number: "22",
    percentage: 65,
    icon: <ClockIcon />,
    link: "",
    titleLink: "",
  },
];
function HeaderDash() {
  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-4 mb-14">
        <div className="flex gap-5 items-end">
          <Image alt="tom" src={tom} priority className="w-[154px] h-auto" />
          <div className="mb-4">
            <h2 className="text-grayMedium text-[24px] font-Medium">
              Welcome Back, Tom 👋{" "}
            </h2>
            <h3 className="text-[32px] font-Bold">Here is an overview</h3>
          </div>
        </div>
        <Button className={"h-10 gap-2"}>
          <SwitchIcon />
          <p className="text-white text-base">Switch to Pro View</p>
        </Button>
      </div>

      <div className="flex  justify-between gap-5 lg:gap-10 flex-wrap">
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
    </div>
  );
}

export default HeaderDash;
