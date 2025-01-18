"use client";
import CardPhone from "@/src/components/card-phone";
import React from "react";
import RowCardPhone from "@/src/components/row-card-phone";
import StatusCategory from "./status-category";
import RenderStatus from "./render-status";
import TicketModal from "./ticket-modal";

interface SupportDataProps {
  id: number;
  Category: string;
  Status: string;
  Topic: string;
  date: string;
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
          cell={() => <StatusCategory status={dataCard.Category} />}
        />
      </div>
      <div className="flex gap-2 mt-5">
        <div className="flex flex-col gap-3 w-full ">
          <RowCardPhone
            title="Status"
            cell={() => <RenderStatus status={dataCard.Status} />}
          />
          <RowCardPhone title="Topic" info={dataCard.Topic} />
          <div className="flex  items-center gap-5 justify-between">
            <h4 className="text-grayMedium text-sm  ">{dataCard.date}</h4>
            <TicketModal />
          </div>
        </div>
      </div>
    </CardPhone>
  );
}

export default CardPhoneSupport;
