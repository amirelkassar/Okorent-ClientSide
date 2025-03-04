"use client";
import CardPhone from "@/src/components/card-phone";
import Image, { StaticImageData } from "next/image";
import React from "react";
import ActionMenu from "./action-menu";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import RowCardPhone from "@/src/components/row-card-phone";
import avatarUser from "@/src/assets/images/avatar.png";
import RenderStatus from "./render-status";

export type TableData = {
  id: number;
  name: string;
  imageUSer: StaticImageData;
  email: string;
  transactions: number;
  totalPayments: string;
  type: "Online" | "Offline";
  tags: string;
};

interface CardDataProps {
  dataCard: TableData;
}

function CardPhoneClients({ dataCard }: CardDataProps) {
  return (
    <CardPhone>
      <div className=" absolute top-4 end-3">
        <ActionMenu id={dataCard?.id} />
      </div>
      <Link
        href={ROUTES.PREMIUM.CLIENTSDETAILS(dataCard.id)}
        className="flex items-center w-fit gap-2 mb-2"
      >
        <Image
          src={dataCard.imageUSer || avatarUser}
          alt={dataCard.name}
          width={50}
          height={50}
          className="w-9 h-9 min-w-9 rounded-[50%] object-cover object-top"
        />
        <h2 className="text-base font-SemiBold">
          {dataCard.name || "User Name"}
        </h2>
      </Link>
      <div className="flex flex-col gap-3 w-full ps-8 sm:ps-11">
        <RowCardPhone title="Email" info={dataCard.email} />

        <RowCardPhone title="Transactions" info={dataCard.transactions || 0} />
        <RowCardPhone title="Total Payments" info={dataCard?.totalPayments} />
        <RowCardPhone title="Type" info={dataCard?.type} />
        <RowCardPhone
          title="Tags"
          cell={() => <RenderStatus status={dataCard.tags} />}
        />
      </div>
    </CardPhone>
  );
}

export default CardPhoneClients;
