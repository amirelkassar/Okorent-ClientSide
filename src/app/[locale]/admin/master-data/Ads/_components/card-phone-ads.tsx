"use client";
import CardPhone from "@/src/components/card-phone";
import Image, { StaticImageData } from "next/image";
import React from "react";
import ActionMenu from "./action-menu";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import RowCardPhone from "@/src/components/row-card-phone";
import RenderStatus from "./render-status";

export type MedicalTeamTableData = {
  id: number;
  product: string;
  user: string;
  startDate: string;
  endDate: string;
  price: string;
  status: string;
  userImg: StaticImageData;
  productImg: StaticImageData;
};
interface CardDataProps {
  dataCard: MedicalTeamTableData;
}

function CardPhoneAds({ dataCard }: CardDataProps) {
  return (
    <CardPhone>
      <div className="border-b border-grayLight/50 pb-2">
        <div className=" absolute top-4 end-3">
          <ActionMenu id={dataCard?.id} />
        </div>
        <Link
          href={ROUTES.ADMIN.ADSDETAILS(dataCard.id)}
          className="flex items-center gap-2"
        >
          <div className="size-[50px] rounded-[50%] p-[6px] bg-grayBack flex justify-center items-center">
            <Image
              src={dataCard.productImg}
              alt={dataCard.product}
              width={50}
              height={50}
              className="w-auto h-full  object-contain "
            />
          </div>

          <div>
            <h2 className="text-[16px] font-SemiBold">{dataCard.product}</h2>
          </div>
        </Link>
      </div>
      <div className="flex gap-2 mt-5">
        <Image
          src={dataCard.userImg}
          alt={dataCard.user}
          width={50}
          height={50}
          className=" size-12 h-full  object-contain "
        />
        <div className="flex flex-col gap-3 w-full ">
          <RowCardPhone title={dataCard.user} />

          <RowCardPhone title={"Starting Date"} info={dataCard.startDate} />
          <RowCardPhone title={"Ending Date"} info={dataCard.endDate} />
          <RowCardPhone title="Payment" info={dataCard.price} />
          <RowCardPhone
            title="Stock location"
            cell={() => <RenderStatus status={dataCard.status} />}
          />
        </div>
      </div>
    </CardPhone>
  );
}

export default CardPhoneAds;
