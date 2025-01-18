"use client";
import { ColumnDef } from "@tanstack/react-table";
import RenderStatus from "./render-status";
import StatusCategory from "./status-category";
import TicketModal from "./ticket-modal";

interface SupportDataProps {
  id: number;
  Category: string;
  Status: string;
  Topic: string;
  date: string;
}
export const columns: ColumnDef<SupportDataProps>[] = [
  {
    accessorKey: "Category",
    header: "Category",
    cell({ getValue }) {
      const Category = getValue<string>();
      return <StatusCategory status={Category} />;
    },
  },
  {
    accessorKey: "Status",
    header: "Status",
    cell({ getValue }) {
      const status = getValue<string>();
      return <RenderStatus status={status} />;
    },
  },
  {
    accessorKey: "Topic",
    header: "Topic",
    cell: ({ getValue }) => {
      const topic = getValue<string>();
      return <h4 className="max-w-[330px] truncate">{topic}</h4>;
    },
  },
  {
    accessorKey: "date",
    header: "",
    cell: ({ getValue }) => {
      const date = getValue<string>();
      return (
        <div className="flex items-center gap-5 justify-between">
          <h4 className="text-grayMedium">{date}</h4>
          <TicketModal />
        </div>
      );
    },
  },
  {
    id: "actions",
  },
];
