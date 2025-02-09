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

type RequestStatus = "In Progress" | "New" | "Completed";

export type DemoRequestsTableData = {
  id: number;
  sender: string;
  email: string;
  status: RequestStatus;
  requestDate: string;
  date: string;
};

interface CardDataProps {
  dataCard: DemoRequestsTableData;
}

function CardPhoneDemo({ dataCard }: CardDataProps) {
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
          src={avatarUser}
          alt={dataCard.sender}
          width={50}
          height={50}
          className="w-9 h-9 min-w-9 rounded-[50%] object-cover object-top"
        />
        <div>
          <h2 className="text-base font-SemiBold">{dataCard.sender}</h2>
          <p className="text-[14px] text-grayMedium">{dataCard.date}</p>
        </div>
      </Link>
      <div className="flex flex-col gap-3 w-full ps-8 sm:ps-11">
        <RowCardPhone title="Email" info={dataCard.email} />
        <RowCardPhone
          title="Status"
          cell={() => <RenderStatus status={dataCard.status} />}
        />

        <RowCardPhone title="Request Date" info={dataCard.requestDate} />
      </div>
    </CardPhone>
  );
}

export default CardPhoneDemo;
