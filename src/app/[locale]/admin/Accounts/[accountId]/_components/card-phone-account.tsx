"use client";
import CardPhone from "@/src/components/card-phone";
import Image, { StaticImageData } from "next/image";
import React from "react";
import ActionMenu from "./action-menu";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import RowCardPhone from "@/src/components/row-card-phone";
import StarIcon from "@/src/assets/icons/star";

export type MedicalTeamTableData = {
  id: number;
  Product: string;
  ProductImage: StaticImageData;
  Renter: string;
  img: StaticImageData;
  Payment: string;
  Date: string;
  InvoiceReference: string;
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
              alt={dataCard.Product}
              width={50}
              height={50}
              className="w-auto h-full  object-contain "
            />
          </div>

          <div>
            <h2 className="text-[16px] font-SemiBold">{dataCard.Product}</h2>
          </div>
        </Link>
      </div>
      <div className="flex gap-2 mt-5">
        <Image
          src={dataCard.img}
          alt={dataCard.Renter}
          width={50}
          height={50}
          className="w-auto size-8 h-full  object-contain "
        />
        <div className="flex flex-col gap-3 w-full ">
          <RowCardPhone title={dataCard.Renter} />

          <RowCardPhone title="Payment" info={dataCard.Payment} />
          <RowCardPhone title="Date" info={dataCard.Date} />
          <RowCardPhone
            title="Status"
            cell={() => (
              <p className="px-2 w-fit rounded-xl py-1 h-11 text-base font-SemiBold bg-blue/15 text-center flex items-center justify-center">
                {dataCard.InvoiceReference}
              </p>
            )}
          />
        </div>
      </div>
    </CardPhone>
  );
}

export default CardPhoneAccount;
