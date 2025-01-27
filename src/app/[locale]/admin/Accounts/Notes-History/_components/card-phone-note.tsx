"use client";
import CardPhone from "@/src/components/card-phone";
import Image from "next/image";
import React from "react";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import RowCardPhone from "@/src/components/row-card-phone";
import avatarUser from "@/src/assets/images/avatar.png";
import NoteType from "@/src/components/note-type";

export type MedicalTeamTableData = {
  id: number;
  name: string;
  email: string;
  noteType: string;
  noteContent: string;
  date: string;
};

interface CardDataProps {
  dataCard: MedicalTeamTableData;
}

function CardPhoneNote({ dataCard }: CardDataProps) {
  return (
    <CardPhone>
      <Link
        href={ROUTES.ADMIN.ACCOUNTSDETAILS(dataCard.id)}
        className="flex items-center w-fit gap-2 mb-2"
      >
        <Image
          src={avatarUser}
          alt={dataCard.name}
          width={50}
          height={50}
          className="w-9 h-9 min-w-9 rounded-[50%] object-cover object-top"
        />
        <div>
          <h2 className="text-base font-SemiBold">
            {dataCard.name || "User Name"}
          </h2>
          <p className="text-[14px] text-grayMedium">{dataCard.date}</p>
        </div>
      </Link>
      <div className="flex flex-col gap-3 w-full ps-8 sm:ps-11">
        <RowCardPhone title="Email" info={dataCard.email} />
        <RowCardPhone
          title="Note Type"
          cell={() => <NoteType status={dataCard.noteType} />}
        />

        <RowCardPhone title="Note Content" info={dataCard?.noteContent} />
        <RowCardPhone title="Date" info={dataCard?.date} />
      </div>
    </CardPhone>
  );
}

export default CardPhoneNote;
