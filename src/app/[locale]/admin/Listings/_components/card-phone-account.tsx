"use client";
import CardPhone from "@/src/components/card-phone";
import Image from "next/image";
import React from "react";
import ActionMenu from "./action-menu";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import RowCardPhone from "@/src/components/row-card-phone";
import RenderStatus from "./render-status";
import placeholderImg from "@/src/assets/images/placTableProduct.png";
import ImgProduct from "@/src/components/img-product";

export type MedicalTeamTableData = {
  id: number;
  name: string;
  heroImage: string;
  creatorName: string;
  creatorImage: string;
  category: string;
  status: boolean;
  dailyPrice: number;
  address: string;
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
          <ImgProduct
            src={dataCard.heroImage || placeholderImg}
            productName={dataCard.name}
          />
        </Link>
      </div>
      <div className="flex gap-2 mt-5">
        <Image
          src={dataCard.creatorImage || placeholderImg}
          alt={dataCard.creatorName}
          width={50}
          height={50}
          className=" w-12 h-12 min-w-12  object-cover rounded-full object-top "
        />
        <div className="flex flex-col gap-3 w-full max-w-[calc(100%-56px)] ">
          <RowCardPhone title={dataCard.creatorName} />

          <RowCardPhone title="Rental Price" info={dataCard.dailyPrice} />
          <RowCardPhone title="Category" info={dataCard.category} />
          <RowCardPhone
            title="Status"
            cell={() => <RenderStatus status={dataCard.status} />}
          />
          <RowCardPhone
            title="Stock Location"
            cell={() => (
              <div className="flex-1">
                <p className=" text-sm md:text-base font-Medium text-grayMedium max-w-full  truncate">
                  {dataCard.address}
                </p>
              </div>
            )}
          />
        </div>
      </div>
    </CardPhone>
  );
}

export default CardPhoneAccount;
