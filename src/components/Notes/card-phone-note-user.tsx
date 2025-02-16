"use client";
import CardPhone from "@/src/components/card-phone";
import React from "react";
import RowCardPhone from "@/src/components/row-card-phone";
import ImgProduct from "../img-product";
import avatar from "@/src/assets/images/avatar.png";
import DeleteNoteUser from "./delete-note-user";
export type MedicalTeamTableData = {
  id: any;
  userImage: string;
  userName: string;
  userEmail: string;
  userCreation: string;
  isActive: any;
};

interface CardDataProps {
  dataCard: MedicalTeamTableData;
}

function CardPhoneNoteUser({ dataCard }: CardDataProps) {
  return (
    <CardPhone>
      <div className="flex flex-col gap-3 w-full ps-1 sm:ps-3">
        <div className="flex items-start justify-between gap-2">
          <ImgProduct
            productName={dataCard?.userName}
            src={dataCard?.userImage || avatar}
          />
          <DeleteNoteUser id={dataCard?.id} />
        </div>
        <RowCardPhone title="Email" info={dataCard?.userEmail || ""} />
        <RowCardPhone
          title="Status"
          info={dataCard?.isActive ? "Activated" : "Deactivated"}
        />
      </div>
    </CardPhone>
  );
}

export default CardPhoneNoteUser;
