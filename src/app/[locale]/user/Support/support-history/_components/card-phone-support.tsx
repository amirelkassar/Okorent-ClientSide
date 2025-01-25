"use client";
import CardPhone from "@/src/components/card-phone";
import React from "react";
import RowCardPhone from "@/src/components/row-card-phone";
import StatusCategory from "./status-category";
import RenderStatus from "./render-status";
import TicketModal from "./ticket-modal";
import { getDate } from "@/src/lib/utils";

interface SupportDataProps {
  id: number;
  ticketType: string;
  contactUsStatus: string;
  title: string;
  created: string;
  userName: string;
}
interface CardDataProps {
  dataCard: SupportDataProps;
}

function CardPhoneSupport({ dataCard }: CardDataProps) {
  return (
    <CardPhone>
      <div className="border-b border-grayLight/50 pb-2">
        <RowCardPhone
          title="Category"
          cell={() => <StatusCategory status={dataCard.ticketType} />}
        />
      </div>
      <div className="flex gap-2 mt-5">
        <div className="flex flex-col gap-3 w-full ">
          <RowCardPhone
            title="Status"
            cell={() => <RenderStatus status={dataCard.contactUsStatus} />}
          />
          <RowCardPhone title="Topic" info={dataCard.title || ""} />
          <div className="flex  items-center gap-5 justify-between">
            <h4 className="text-grayMedium text-sm  ">
              {getDate(dataCard.created).timeFromNow}
            </h4>
            <TicketModal id={dataCard.id} name={dataCard.userName} />
          </div>
        </div>
      </div>
    </CardPhone>
  );
}

export default CardPhoneSupport;
