import React from "react";
import CardStatistical from "./cardStatistical";
import Image from "next/image";
import tom from "@/src/assets/images/tom.png";
import ShopIcon from "@/src/assets/icons/shop";
import ROUTES from "@/src/routes";
import MoneyIcon from "@/src/assets/icons/money";
import ClockIcon from "@/src/assets/icons/clock";
import { GetUserHeaderDashboard } from "@/src/hooks/queries/user/home/user-info";
import SkeletonLoading from "@/src/components/skeleton-loading";

function HeaderDash() {
  const { data, isLoading } = GetUserHeaderDashboard();
  console.log(data);

  return (
    <div>
      <div className="flex items-center justify-between flex-col lg:flex-row flex-wrap gap-4 mb-9 lg:mb-14">
        {isLoading ? (
          <div className="flex gap-3 lg:gap-5 lg:items-end items-center flex-col lg:flex-row">
            <SkeletonLoading className="min-w-[96px] lg:min-w-[154px] !w-[96px] lg:w-[154px] !h-[96px] lg:!h-[154px] lg:max-w-[154px] rounded-full" />
            <div className="lg:mb-6  ">
              <SkeletonLoading className="min-w-[190px] lg:min-w-[300px] lg:max-w-[430px] mb-4 flex-1 !h-6 md:!h-8 rounded-xl" />
              <SkeletonLoading className="min-w-[190px] lg:min-w-[300px] lg:max-w-[430px] flex-1 !h-6 md:!h-8 rounded-xl" />
            </div>
          </div>
        ) : (
          <div className="flex gap-3 lg:gap-5 lg:items-end items-center flex-col lg:flex-row">
            {data?.data?.userImage ? (
              <Image
                alt={data?.data?.name || "name"}
                src={data?.data?.userImage}
                priority
                width={200}
                height={200}
                className="w-[96px] lg:w-[154px] h-[96px] lg:h-[154px]  object-cover rounded-full object-top"
              />
            ) : (
              <Image
                alt="tom"
                src={tom}
                priority
                width={200}
                height={200}
                className="w-[96px] lg:w-[154px] h-auto"
              />
            )}

            <div className="lg:mb-6">
              <h2 className="text-grayMedium text-xl lg:text-[24px] text-center lg:text-start font-Medium">
                Welcome Back, {data?.data?.name?.toString().split(" ")[0] || ""}{" "}
                👋{" "}
              </h2>
              <h3 className="lg:text-[32px] text-2xl text-center lg:text-start font-Bold">
                Here is an overview
              </h3>
            </div>
          </div>
        )}
      </div>
      {isLoading ? (
        <div className="flex flex-wrap gap-3 w-full md:justify-between  lg:gap-4 ">
          <SkeletonLoading className="min-w-[190px] lg:min-w-[300px] lg:max-w-[430px] flex-1 !h-28  md:!h-32 rounded-xl" />
          <SkeletonLoading className="min-w-[190px] lg:min-w-[300px] lg:max-w-[430px] flex-1 !h-28  md:!h-32 rounded-xl" />
          <SkeletonLoading className="min-w-[190px] lg:min-w-[300px] lg:max-w-[430px] flex-1 !h-28  md:!h-32 rounded-xl" />
        </div>
      ) : (
        <div className="flex  justify-between gap-5 lg:gap-10 overflow-x-auto hideScroll px-3 pb-3 lg:pb-0 lg:px-0 lg:flex-wrap">
          <CardStatistical
            title={"New Rental Requests"}
            number={data?.data?.pendingOrdersCount || 0}
            icon={<ShopIcon />}
            link={ROUTES.USER.BOOKINGS + "?OrderStatus=1"}
            titleLink={"View rentals"}
          />
          <CardStatistical
            title={"Earnings This Month"}
            number={data?.data?.earningThisMonth || 0 + "$"}
            percentage={65}
            icon={<MoneyIcon />}
          />
          <CardStatistical
            title={"Ongoing Rentals"}
            number={data?.data?.ongoingOrdersCount || 0}
            percentage={65}
            icon={<ClockIcon />}
          />
        </div>
      )}
    </div>
  );
}

export default HeaderDash;
