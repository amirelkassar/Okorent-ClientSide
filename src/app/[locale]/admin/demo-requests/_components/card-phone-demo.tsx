"use client";
import CardPhone from "@/src/components/card-phone";
import Image from "next/image";
import React from "react";
import ActionMenu from "./action-menu";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import RowCardPhone from "@/src/components/row-card-phone";
import RenderStatus from "./render-status";
import avatarUser from "@/src/assets/images/avatar.png";
import { getDate } from "@/src/lib/utils";

type RequestStatus = 1 | 2 | 3;

export type DemoRequestsTableData = {
  id: number;
  name: string;
  userImage: string;
  email: string;
  phoneNumber: string;
  demoStatus: RequestStatus;
  created: string;
  userCreation: string;
};

interface CardDataProps {
  dataCard: DemoRequestsTableData;
}

function CardPhoneDemo({ dataCard }: CardDataProps) {
  return (
    <CardPhone>
      <div className=" absolute top-4 end-3">
        <ActionMenu id={dataCard?.id} demoStatus={dataCard?.demoStatus} />
      </div>
      <Link
        href={ROUTES.ADMIN.ACCOUNTSDETAILS(dataCard.id)}
        className="flex items-center w-fit gap-2 mb-2"
      >
        <Image
          src={dataCard?.userImage || avatarUser}
          alt={dataCard?.name}
          width={50}
          height={50}
          className="w-9 h-9 min-w-9 rounded-[50%] object-cover object-top"
        />
        <div>
          <h2 className="text-base font-SemiBold">{dataCard?.name}</h2>
          <p className="text-[14px] text-grayMedium">
            {getDate(dataCard?.userCreation).fullYear}
          </p>
        </div>
      </Link>
      <div className="flex flex-col gap-3 w-full ps-8 sm:ps-11">
        <RowCardPhone title="Email" info={dataCard?.email} />
        <RowCardPhone title="Phone No" info={dataCard?.phoneNumber} />
        <RowCardPhone
          title="Status"
          cell={() => <RenderStatus status={dataCard?.demoStatus} />}
        />
        <RowCardPhone title="Notes" info={"Special prices"} />
        <RowCardPhone
          title="Request Date"
          info={getDate(dataCard?.created).fullYear}
        />
      </div>
    </CardPhone>
  );
}

export default CardPhoneDemo;
