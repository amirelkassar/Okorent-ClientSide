"use client";
import CardPhone from "@/src/components/card-phone";
import Image, { StaticImageData } from "next/image";
import React from "react";
import ActionMenu from "./action-menu";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import RowCardPhone from "@/src/components/row-card-phone";
import avatar from "@/src/assets/images/avatar.png";
import placeHolderImg from "@/src/assets/images/placTableProduct.png";
import RenderStatusAds from "./render-status-ads";
import { getDate } from "@/src/lib/utils";
export type MedicalTeamTableData = {
  id: string;
  productName: string;
  productImage: StaticImageData;
  userName: string;
  userImage: StaticImageData;
  startDate: string;
  endDate: string;
  payment: string;
  advertisementStatus: string;
};

interface CardDataProps {
  dataCard: MedicalTeamTableData;
}

function CardPhoneAds({ dataCard }: CardDataProps) {
  return (
    <CardPhone>
      <div className="border-b border-grayLight/50 pb-2">
        <div className=" absolute top-4 end-3">
          <ActionMenu
            id={dataCard?.id}
            status={dataCard?.advertisementStatus}
          />
        </div>
        <Link
          href={ROUTES.ADMIN.ADSDETAILS(dataCard.id)}
          className="flex items-center gap-2"
        >
          <div className="size-[50px] rounded-[50%] p-1 bg-grayBack flex justify-center items-center">
            <Image
              src={dataCard.productImage || placeHolderImg}
              alt={dataCard.productName}
              width={50}
              height={50}
              className="w-full h-full  object-cover object-top rounded-full "
            />
          </div>

          <div>
            <h2 className="text-[16px] font-SemiBold">
              {dataCard.productName}
            </h2>
          </div>
        </Link>
      </div>
      <div className="flex gap-2 mt-5">
        <Image
          src={dataCard.userImage || avatar}
          alt={dataCard.userName}
          width={50}
          height={50}
          className=" size-12 min-w-12   object-cover object-top rounded-full "
        />
        <div className="flex flex-col gap-3 w-full ">
          <RowCardPhone title={dataCard.userName} />

          <RowCardPhone
            title={"Starting Date"}
            info={getDate(dataCard.startDate).fullYearWithMonthName}
          />
          <RowCardPhone
            title={"Ending Date"}
            info={getDate(dataCard.endDate).fullYearWithMonthName}
          />
          <RowCardPhone title="Payment" info={`${dataCard.payment} $`} />
          <RowCardPhone
            title="Stock location"
            cell={() => (
              <RenderStatusAds status={dataCard.advertisementStatus} />
            )}
          />
        </div>
      </div>
    </CardPhone>
  );
}

export default CardPhoneAds;
