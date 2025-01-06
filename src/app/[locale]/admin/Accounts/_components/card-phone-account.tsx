"use client";
import CardPhone from "@/src/components/card-phone";
import Image, { StaticImageData } from "next/image";
import React from "react";
import ActionMenu from "./action-menu";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import RowCardPhone from "@/src/components/row-card-phone";
import StarIcon from "@/src/assets/icons/star";
import RenderPackage from "../../_components/render-package";
import avatarUser from "@/src/assets/images/avatar.png";
import { getDate } from "@/src/lib/utils";

export type MedicalTeamTableData = {
  id: number;
  name: string;
  email: string;
  package: string;
  period: string;
  payment: number;
  rating: number;
  profileImageDocumentId: string;
  verified: boolean;
  created: string;
  userName: string;
  totalProductsCount: any;
};

interface CardDataProps {
  dataCard: MedicalTeamTableData;
}

function CardPhoneAccount({ dataCard }: CardDataProps) {
  return (
    <CardPhone>
      <div className=" absolute top-4 end-3">
        <ActionMenu status={false}  id={dataCard?.id} />
      </div>
      <Link
        href={ROUTES.ADMIN.ACCOUNTSDETAILS(dataCard.id)}
        className="flex items-center w-fit gap-2 mb-2"
      >
        <Image
          src={dataCard.profileImageDocumentId || avatarUser}
          alt={dataCard.name}
          width={50}
          height={50}
          className="w-9 h-9 min-w-9 rounded-[50%] object-cover object-top"
        />
        <div>
          <h2 className="text-base font-SemiBold">
            {dataCard.name || "User Name"}
          </h2>
          <p className="text-[14px] text-grayMedium">
            {getDate(dataCard.created).fullYear || "2025"}
          </p>
        </div>
      </Link>
      <div className="flex flex-col gap-3 w-full ps-8 sm:ps-11">
        <RowCardPhone title="Email" info={dataCard.userName} />
        <RowCardPhone
          title="Package"
          cell={() => <RenderPackage packageVal={dataCard.name} />}
        />
        <RowCardPhone title="Payment" info={dataCard.totalProductsCount+' $'} />
        <RowCardPhone
          title="Status"
          info={dataCard.verified ? "Verified" : "Un Verified"}
        />
        <RowCardPhone
          title="Rating"
          cell={() => (
            <div className="flex items-center gap-1 ">
              <p>{dataCard.rating}</p>
              <StarIcon />
            </div>
          )}
        />
      </div>
    </CardPhone>
  );
}

export default CardPhoneAccount;
