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
  phone: string;
  ProductImage: StaticImageData;
  user: string;
  avatar: StaticImageData;
  category: string;
  status: boolean;
  rentalCost: number;
  location: string;
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
          href={ROUTES.ADMIN.ACCOUNTSDETAILS(dataCard.id)}
          className="flex items-center w-fit gap-2"
        >
          <div className="size-11 rounded-[50%] p-1 bg-grayBack flex justify-center items-center">
            <Image
              src={dataCard.ProductImage}
              alt={dataCard.phone}
              width={50}
              height={50}
              className="w-auto h-full  object-contain "
            />
          </div>

          <div>
            <h2 className="text-[16px] font-SemiBold">{dataCard.phone}</h2>
          </div>
        </Link>
      </div>
      <div className="flex gap-2 mt-5">
        <Image
          src={dataCard.avatar}
          alt={dataCard.user}
          width={50}
          height={50}
          className="w-auto size-8 h-full  object-contain "
        />
        <div className="flex flex-col gap-3 w-full ">
          <RowCardPhone title={dataCard.user} />

          <RowCardPhone title="Rental Price" info={dataCard.rentalCost} />
          <RowCardPhone title="Category" info={dataCard.category} />
          <RowCardPhone
            title="Status"
            cell={() => <RenderStatus status={dataCard.status} />}
          />
          <RowCardPhone title="Stock Location" info={dataCard.location} />
        </div>
      </div>
    </CardPhone>
  );
}

export default CardPhoneAccount;
