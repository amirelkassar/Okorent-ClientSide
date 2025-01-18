"use client";
import CardPhone from "@/src/components/card-phone";
import React from "react";
import RowCardPhone from "@/src/components/row-card-phone";
import CardStatus from "@/src/components/cardStatus";
import ActionMenu from "./action-menu";

interface SupportDataProps {
  id: number;
  name: string;
  address: string;
  status: boolean;
}
interface CardDataProps {
  dataCard: SupportDataProps;
}

function CardPhoneWarehouse({ dataCard }: CardDataProps) {
  return (
    <CardPhone>
      <div className="border-b border-grayLight/50 pb-2">
        <div className="flex items-center justify-between gap-3">
          <RowCardPhone title={dataCard.name} />
          <ActionMenu id={dataCard.id} status={true} />
        </div>
      </div>
      <div className="flex gap-2 mt-5">
        <div className="flex flex-col gap-3 w-full ">
          <RowCardPhone title="Location" info={dataCard.address} />
          <RowCardPhone
            title="Status"
            cell={() =>
              true ? (
                <CardStatus type="green" circle animation title={"Active"} />
              ) : (
                <CardStatus type="blue" circle title={"Not Acrive"} />
              )
            }
          />
        </div>
      </div>
    </CardPhone>
  );
}

export default CardPhoneWarehouse;
