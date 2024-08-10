import React from "react";
import CardStatistical from "./cardStatistical";
const number = [
  {
    id: 1,
    title: "Total Members",
    number: 1560,
    percentage: 65,
  },
  {
    id: 2,
    title: "New Subscriptions",
    number: 95,
    percentage: 65,
  },
  {
    id: 3,
    title: "Support Tickets",
    number: 15,
    percentage: 65,
  },
];
function HeaderDash() {
  return (
    <div>
      <h2 className="text-grayMedium text-[24px] font-Medium">
        Welcome Back, Tom 👋{" "}
      </h2>
      <h3 className="text-[32px] font-Bold">Here is an overview</h3>
      <div className="flex  justify-between gap-5 lg:gap-10 flex-wrap">
        {number.map((item) => {
          return <CardStatistical key={item.id} title={item.title} number={item.number} percentage={item.percentage}/>;
        })}
      </div>
    </div>
  );
}

export default HeaderDash;
