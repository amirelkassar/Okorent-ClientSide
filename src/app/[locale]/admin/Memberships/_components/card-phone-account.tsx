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
import RenderStatus from "./render-status";
export type MedicalTeamTableData = {
  id: number;
  name: string;
  date: string;
  email: string;
  package: string;
  payment: string;
  endingDate: string;
  status: string;
  image: StaticImageData;
};

interface CardDataProps {
  dataCard: MedicalTeamTableData;
}

function CardPhoneMemberships({ dataCard }: CardDataProps) {
  return (
    <CardPhone>
      <div className=" absolute top-4 end-3">
        <ActionMenu id={dataCard?.id} />
      </div>
      <Link
        href={ROUTES.ADMIN.ACCOUNTSDETAILS(dataCard.id)}
        className="flex items-center w-fit gap-2 mb-2"
      >
        <Image
          src={dataCard.image}
          alt={dataCard.name}
          width={50}
          height={50}
          className="w-9 h-9 min-w-9 rounded-[50%] object-cover object-top"
        />
        <div>
          <h2 className="text-base font-SemiBold">{dataCard.name}</h2>
          <p className="text-[14px] text-grayMedium">{dataCard.date}</p>
        </div>
      </Link>
      <div className="flex flex-col gap-3 w-full ps-8 sm:ps-11">
        <RowCardPhone title="Email" info={dataCard.email} />
        <RowCardPhone
          title="Package"
          cell={() => <RenderPackage packageVal={dataCard.package} />}
        />
        <RowCardPhone title="Payment" info={dataCard.payment} />
        <RowCardPhone title="Ending date" info={dataCard.endingDate} />

        <RowCardPhone
          title="Status"
          cell={() => <RenderStatus status={dataCard.status} />}
        />
      </div>
    </CardPhone>
  );
}

export default CardPhoneMemberships;
