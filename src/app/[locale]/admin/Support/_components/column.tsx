"use client";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { ColumnDef } from "@tanstack/react-table";
import Image, { StaticImageData } from "next/image";
import ActionMenu from "./action-menu";
import RenderStatus from "./render-status";
import RenderCategory from "./render-category";
import TicketModal from "./ticket-modal";



interface Ticket {
  id: number;
  name: string;
  avatar: StaticImageData;
  assignee: string;
  avatarAssignee: StaticImageData;
  category: string;
  status: string;
  description: string;
  date: string;
}
export const columns: ColumnDef<Ticket>[] = [
  {
    accessorKey: "name",
    header: "Sender",
    cell: ({ getValue, row }) => {
      const name = getValue<string>();
      const avatar = row.original.avatar;
      const id = row.original.id;
      return (
        <Link
          href={ROUTES.ADMIN.ACCOUNTSDETAILS(id)}
          className="flex items-center gap-2"
        >
          <Image
            src={avatar}
            alt={name}
            width={50}
            height={50}
            className="w-12 h-12 rounded-[50%] object-cover object-top"
          />

          <h2 className="text-[16px] font-SemiBold">{name}</h2>
        </Link>
      );
    },
  },
  {
    accessorKey: "assignee",
    header: "Assigned To",
    cell: ({ getValue, row }) => {
      const assignee = getValue<string>();
      const avatarAssignee = row.original.avatarAssignee;
      const id = row.original.id;
      return (
        <Link
          href={ROUTES.ADMIN.ACCOUNTSDETAILS(id)}
          className="flex items-center gap-2"
        >
          <Image
            src={avatarAssignee}
            alt={assignee}
            width={50}
            height={50}
            className="w-12 h-12 rounded-[50%] object-cover object-top"
          />

          <h2 className="text-[16px] font-SemiBold">{assignee}</h2>
        </Link>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ getValue }) => {
      const category = getValue<string>();
      return <RenderCategory category={category} />;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue<string>();
      return <RenderStatus status={status} />;
    },
  },
  {
    accessorKey: "description",
    header: "Topic",
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
    cell: ({ row }) => {
      const id = row.original.id;
      return (
        <div className="flex items-center gap-3 w-fit">
          <ActionMenu id={id} />
        </div>
      );
    },
  },
];
