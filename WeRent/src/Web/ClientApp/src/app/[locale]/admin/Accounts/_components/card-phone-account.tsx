"use client";
import CardPhone from "@/src/components/card-phone";
import { StaticImageData } from "next/image";
import React from "react";
import ActionMenu from "./action-menu";
export type MedicalTeamTableData = {
  id: number;
  name: string;
  package: string;
  period: string;
  payment: number;
  rating: number;
  img: StaticImageData;
  verified: boolean;
  date: string;
};

interface CardDataProps {
  dataCard?: MedicalTeamTableData;
}

function CardPhoneAccount({ dataCard }: CardDataProps) {
  console.log(dataCard);

  return (
    <CardPhone>
      <ActionMenu id={dataCard?.id} />
    </CardPhone>
  );
}

export default CardPhoneAccount;
