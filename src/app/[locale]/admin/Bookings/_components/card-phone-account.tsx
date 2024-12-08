"use client";
import CardPhone from "@/src/components/card-phone";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import RowCardPhone from "@/src/components/row-card-phone";
import RenderStatus from "./render-status";
import ActionMenu from "./action-menu";

export type MedicalTeamTableData = {
  id: number;
  renter: string;
  lessor: string;
  product: string;
  startDate: string;
  endingDate: string;
  quantity: number;
  status: string;
  payment: string;
  lessorImg: StaticImageData;
  renterImg: StaticImageData;
  productImg: StaticImageData;
};
interface CardDataProps {
  dataCard: MedicalTeamTableData;
}

function CardPhoneAccount({ dataCard }: CardDataProps) {
  return (
    <CardPhone>
      <div className="border-b border-grayLight/50 pb-2">
        <div className=" absolute top-4 end-3">
          <ActionMenu id={dataCard?.id} />
        </div>
        <Link
          href={ROUTES.ADMIN.BOOKINGSDETAILS(dataCard.id)}
          className="flex items-center w-full gap-3 "
        >
          <div className="flex flex-col justify-center flex-1 items-center ">
            <Image
              src={dataCard.lessorImg}
              alt={dataCard.lessor}
              width={50}
              height={50}
              className=" size-10 h-full  object-contain "
            />

            <h2 className="text-[16px] font-SemiBold text-center">
              {dataCard.lessor}
            </h2>
            <p className="text-sm text-grayMedium ">Lessor</p>
          </div>
          <span className="h-16 w-[1px] block bg-green"></span>
          <div className="flex flex-col justify-center flex-1 items-center ">
            <Image
              src={dataCard.renterImg}
              alt={dataCard.renter}
              width={50}
              height={50}
              className=" size-10 h-full  object-contain "
            />

            <h2 className="text-[16px] font-SemiBold text-center">
              {dataCard.renter}
            </h2>
            <p className="text-sm text-grayMedium ">Renter</p>
          </div>
        </Link>
      </div>
      <div className="flex gap-2 mt-5">
        <div className="size-11 rounded-[50%] p-1 bg-grayBack flex justify-center items-center">
          <Image
            src={dataCard.productImg}
            alt={dataCard.product}
            width={50}
            height={50}
            className=" w-full h-full  object-contain "
          />
        </div>
        <div className="flex flex-col gap-3 w-full ">
          <RowCardPhone title={dataCard.product} />
          <RowCardPhone title="Payment" info={dataCard.payment} />
          <RowCardPhone title="Quantity" info={dataCard.quantity} />
          <RowCardPhone title="Start date" info={dataCard.startDate} />
          <RowCardPhone title="End date" info={dataCard.endingDate} />
          <RowCardPhone
            title="Status"
            cell={() => <RenderStatus status={dataCard.status} />}
          />
        </div>
      </div>
    </CardPhone>
  );
}

export default CardPhoneAccount;
