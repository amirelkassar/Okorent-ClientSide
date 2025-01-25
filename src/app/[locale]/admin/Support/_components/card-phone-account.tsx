"use client";
import CardPhone from "@/src/components/card-phone";
import Image from "next/image";
import React from "react";
import ActionMenu from "./action-menu";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import RowCardPhone from "@/src/components/row-card-phone";
import RenderStatus from "./render-status";
import RenderCategory from "./render-category";
import TicketModal from "./ticket-modal";
import avatar from "@/src/assets/images/avatar.png";

export type MedicalTeamTableData = {
  id: number;
  userName: string;
  ticketType: string;
  contactUsStatus: string | any;
  title: string;
  date: string;
};
interface CardDataProps {
  dataCard: MedicalTeamTableData;
}

function CardPhoneAccount({ dataCard }: CardDataProps) {
  return (
    <CardPhone>
      <div className="border-b border-grayLight/50 pb-2">
        <div className=" absolute top-4 end-3">
          <ActionMenu
            id={dataCard?.id}
            solved={dataCard.contactUsStatus === 4}
          />
        </div>
        <Link
          href={ROUTES.ADMIN.ACCOUNTSDETAILS(dataCard.id)}
          className="flex items-center w-fit gap-2"
        >
          <Image
            src={avatar}
            alt={dataCard.userName}
            width={50}
            height={50}
            className=" size-10 h-full  object-contain "
          />

          <h2 className="text-[16px] font-SemiBold">{dataCard.userName}</h2>
        </Link>
      </div>
      <div className="flex gap-2 mt-5">
        <div className="flex flex-col gap-3 w-full ">
          <RowCardPhone
            title="Category"
            cell={() => <RenderCategory status={dataCard.ticketType} />}
          />
          <RowCardPhone
            title="Status"
            cell={() => <RenderStatus status={dataCard.contactUsStatus} />}
          />
          <RowCardPhone title="Topic" info={dataCard.title || ""} />
          <div className="flex  items-center gap-5 justify-between">
            <h4 className="text-grayMedium text-sm  ">{dataCard.date}</h4>
            <TicketModal id={dataCard.id} name={dataCard.userName} />
          </div>
        </div>
      </div>
    </CardPhone>
  );
}

export default CardPhoneAccount;
