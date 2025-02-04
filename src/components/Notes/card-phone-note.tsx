"use client";
import CardPhone from "@/src/components/card-phone";
import React from "react";
import RowCardPhone from "@/src/components/row-card-phone";
import NoteType from "@/src/components/note-type";
import { getDate } from "@/src/lib/utils";
import ActionMenu from "./_hooks/action-menu";

export type MedicalTeamTableData = {
  id: number;
  sentToCount: string;
  noteType: string;
  content: string;
  created: string;
};

interface CardDataProps {
  dataCard: MedicalTeamTableData;
}

function CardPhoneNote({ dataCard }: CardDataProps) {
  return (
    <CardPhone>
      <div className="flex flex-col gap-3 w-full ps-1 sm:ps-3">
        <div className="flex items-start justify-between gap-2">
          <RowCardPhone
            title="Note Type"
            cell={() => (
              <div className="flex-1 flex  justify-start mx-2">
                {" "}
                <NoteType status={dataCard?.noteType} />
              </div>
            )}
          />
          <ActionMenu id={dataCard?.id} />
        </div>
        <RowCardPhone title="Note Content" info={dataCard?.content} />
        <RowCardPhone
          title="Sent to"
          cell={() => <p>{dataCard?.sentToCount} User</p>}
        />
        <RowCardPhone
          title="Date"
          info={getDate(dataCard?.created).timeFromNow}
        />
      </div>
    </CardPhone>
  );
}

export default CardPhoneNote;
