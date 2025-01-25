"use client";
import { ColumnDef } from "@tanstack/react-table";
import RenderStatus from "./render-status";
import StatusCategory from "./status-category";
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
export const columns: ColumnDef<SupportDataProps>[] = [
  {
    accessorKey: "ticketType",
    header: "Category",
    cell({ getValue }) {
      const Category = getValue<string>();
      return <StatusCategory status={Category} />;
    },
  },
  {
    accessorKey: "contactUsStatus",
    header: "Status",
    cell({ getValue }) {
      const contactUsStatus = getValue<string>();
      return <RenderStatus status={contactUsStatus} />;
    },
  },
  {
    accessorKey: "title",
    header: "Topic",
    cell: ({ row }) => {
      const title = row.original.title;
      return <h4 className="max-w-[330px] truncate">{title || ""}</h4>;
    },
  },
  {
    accessorKey: "created",
    header: "",
    cell: ({ getValue, row }) => {
      const date = getValue<string>();
      const id = row.original.id;
      const name = row.original.userName;
      return (
        <div className="flex items-center gap-5 justify-between">
          <h4 className="text-grayMedium">{getDate(date).timeFromNow}</h4>
          <TicketModal id={id} name={name} />
        </div>
      );
    },
  },
  {
    id: "actions",
  },
];
