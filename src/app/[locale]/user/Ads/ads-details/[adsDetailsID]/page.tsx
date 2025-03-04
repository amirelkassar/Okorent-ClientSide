"use client";
import { GetUserAdsByID } from "@/src/hooks/queries/user/ads";
import React from "react";
import RowBottomAds from "../../_components/row-bottom-ads";
import AdsDetails from "./_components/ads-details";
import Card from "@/src/components/card";
import Image from "next/image";
import placCardProduct from "@/src/assets/images/placCardProduct.png";
import Loading from "@/src/components/loading";
import ShopIcon from "@/src/assets/icons/shop";
import MoneyIcon from "@/src/assets/icons/money";
import ClockIcon from "@/src/assets/icons/clock";
import StatsCardUser from "@/src/components/stats-card-user";
import ViewIcon from "@/src/assets/icons/view";
import EyeIcon from "@/src/assets/icons/eye";
import ClickIcon from "@/src/assets/icons/click";

function page({ params }: any) {
  const { data, isLoading } = GetUserAdsByID(params.adsDetailsID);
  console.log(data);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="flex items-center justify-between gap-5 flex-wrap mdl:flex-nowrap mb-section">
        <h2 className="text-lg mdl:text-[32px] font-SemiBold">Ad Details</h2>
        <RowBottomAds
          id={params.adsDetailsID}
          Status={data?.data?.advertisementStatus}
          detailsPage
        />
      </div>

      <div className="flex  justify-between gap-2 lg:gap-10  px-3 pb-3 lg:pb-0 lg:px-0 flex-wrap lg:flex-nowrap mb-section">
        <StatsCardUser
          title={"Views"}
          number={data?.data?.views || 0}
          icon={<EyeIcon className="max-w-full h-auto" />}
          percentage={65}
        />
        <StatsCardUser
          title={"Clicks"}
          number={data?.data?.clicks || 0}
          percentage={65}
          icon={<ClickIcon className="max-w-full h-auto" />}
        />
        <StatsCardUser
          title={"Spent"}
          percentage={65}
          icon={<MoneyIcon className="max-w-full h-auto" />}
          cell={() => (
            <div className="flex items-end leading-6 lg:leading-9 ps-2 gap-1">
              <p className="text-lg lg:text-[32px] font-Bold lg:mb-[2px] ">
                ${data?.data?.spent || 0}
              </p>
              <p className="text-xs lg:text-lg text-grayMedium mb-[2px] lg:mb-0 lg:mt-1">
                / ${data?.data?.payment || 0}
              </p>
            </div>
          )}
        />
      </div>

      <div className="flex gap-4 flex-wrap flex-col mdl:flex-row">
        <Card className=" p-4 md:p-9 flex-1 ">
          <h3 className=" text-lg md:text-2xl font-SemiBold mb-5 md:mb-7">
            Product Details
          </h3>
          <div className=" flex items-center gap-9 w-full flex-wrap lgl:flex-nowrap ">
            <Image
              alt="home"
              priority
              src={data?.data?.productImage || placCardProduct}
              width={370}
              height={166}
              className="w-[210px] h-[168px] rounded-2xl object-cover object-center "
            />

            <div className="flex  flex-wrap w-full gap-y-5 mdl:gap-y-10 min-w-[300px] flex-1">
              <InfoUser
                title="Product Name"
                info={data?.data?.productName || "product name"}
              />
              <InfoUser
                title="Category"
                info={data?.data?.productCategoryName || "category"}
              />
              <InfoUser
                title="Amount"
                info={`${data?.data?.productPrice || 0} $`}
              />
            </div>
          </div>
        </Card>
        <AdsDetails data={data?.data} />
      </div>
    </div>
  );
}

export default page;
const InfoUser = ({
  title = "",
  info = "",
  cell,
}: {
  title: string;
  info?: string;
  cell?: () => React.ReactNode;
}) => {
  return (
    <div className=" pe-2 md:pe-3 min-w-[50%] flex-1 ">
      <h3 className="mb-1 font-SemiBold text-base md:text-xl">{title}</h3>
      {info && <p className=" text-grayMedium text-base md:text-xl">{info}</p>}
      {cell && cell()}
    </div>
  );
};
