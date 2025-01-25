"use client";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import ActionMenu from "./action-menu";
import RenderStatus from "./render-status";
import RenderCategory from "./render-category";
import TicketModal from "./ticket-modal";
import { getDate } from "@/src/lib/utils";
import avatar from "@/src/assets/images/avatar.png";
interface Ticket {
  id: number;
  userName: string;
  ticketType: string;
  contactUsStatus: string | any;
  title: string;
  date: string;
}
export const columns: ColumnDef<Ticket>[] = [
  {
    accessorKey: "userName",
    header: "Sender",
    cell: ({ getValue, row }) => {
      const name = getValue<string>();
      return (
        <div className="flex items-center gap-2">
          <Image
            src={avatar}
            alt={name}
            width={50}
            height={50}
            className="w-12 h-12 rounded-[50%] object-cover object-top"
          />

          <h2 className="text-[16px] font-SemiBold">{name}</h2>
        </div>
      );
    },
  },

  {
    accessorKey: "ticketType",
    header: "Category",
    cell: ({ getValue }) => {
      const Category = getValue<string>();
      return <RenderCategory status={Category} />;
    },
  },
  {
    accessorKey: "contactUsStatus",
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue<string>();
      return <RenderStatus status={status} />;
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
    cell: ({ row }) => {
      const id = row.original.id;
      const solved = row.original.contactUsStatus === 4;
      return (
        <div className="flex items-center gap-3 w-fit">
          <ActionMenu id={id} solved={solved} />
        </div>
      );
    },
  },
];
