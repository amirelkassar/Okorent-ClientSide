"use client";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import ActionMenu from "./action-menu";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import avatarUser from "@/src/assets/images/avatar.png";
import { getDate } from "@/src/lib/utils";
import RenderStatus from "./render-status";
import NoteTableIcon from "@/src/assets/icons/noteTable";

type RequestStatus = "In Progress" | "New" | "Completed";

interface RentalData {
  id: number;
  sender: string;
  email: string;
  status: RequestStatus;
  requestDate: string;
  date: string;
}
export const columns: ColumnDef<RentalData>[] = [
  {
    accessorKey: "sender",
    header: "Sender",
    cell: ({ getValue, row }) => {
      const sender = getValue<string>();
      const id = row.original.id;
      const created = row.original.date;
      return (
        <Link
          href={ROUTES.ADMIN.ACCOUNTSDETAILS(id)}
          className="flex items-center gap-2"
        >
          <Image
            src={avatarUser}
            alt={sender}
            width={50}
            height={50}
            className="w-12 h-12 rounded-[50%] object-cover object-top"
          />
          <div>
            <h2 className="text-[16px] font-SemiBold">{sender}</h2>
            <p className="text-[14px] text-grayMedium">{created}</p>
          </div>
        </Link>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell({ getValue }) {
      const status = getValue<RequestStatus>();
      return <RenderStatus status={status} />;
    },
  },

  {
    accessorKey: "requestDate",
    header: "Request Date",
    cell: ({ getValue, row }) => {
      const date = getValue<string>();
      const id = row.original.id;
      return (
        <div className="flex items-center gap-5 justify-between">
          <h4 className="text-grayMedium">{date}</h4>
          <button>
            <NoteTableIcon className="w-5 h-auto" fill="#6F6B7D" />
          </button>
        </div>
      );
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original.id;
      return (
        <div className="flex items-center gap-3 justify-end">
          <ActionMenu id={id} />
        </div>
      );
    },
  },
];
