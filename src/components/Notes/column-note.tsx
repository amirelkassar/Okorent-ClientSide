"use client";
import { ColumnDef } from "@tanstack/react-table";
import { getDate } from "@/src/lib/utils";
import NoteType from "@/src/components/note-type";
import DeleteNote from "./delete-note";
import LinkViewDetails from "./link-view-details";

export type MedicalTeamTableData = {
  id: number;
  sentToCount: string;
  noteType: string;
  content: string;
  created: string;
};

export const columns: ColumnDef<MedicalTeamTableData>[] = [
  {
    accessorKey: "noteType",
    header: "Note Type",
    cell({ getValue }) {
      const noteType = getValue<string>();
      return <NoteType status={noteType} />;
    },
  },

  {
    accessorKey: "content",
    header: "Note Content",
    cell({ getValue }) {
      const content = getValue<string>();
      return <p className=" text-base max-w-[260px] truncate">{content}</p>;
    },
  },
  {
    accessorKey: "sentToCount",
    header: "Sent to",
    cell({ getValue }) {
      const sentToCount = getValue<string>();
      return <p className=" text-base ">{sentToCount} users</p>;
    },
  },
  {
    accessorKey: "created",
    header: "Date",
    cell: ({ getValue }) => {
      const created = getValue<string>();
      return (
        <p className="text-grayMedium text-sm">
          {getDate(created).timeFromNow}
        </p>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original.id;
      return (
        <div className="flex items-center gap-3 px-3 justify-end">
          <LinkViewDetails id={id} />
          <DeleteNote id={id} />
        </div>
      );
    },
  },
];
