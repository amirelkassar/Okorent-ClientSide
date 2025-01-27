"use client";
import StarIcon from "@/src/assets/icons/star";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import avatarUser from "@/src/assets/images/avatar.png";
import { getDate } from "@/src/lib/utils";
import TableFilter from "@/src/components/TableFilterProps";
import DeleteIcon from "@/src/assets/icons/delete";
import NoteType from "@/src/components/note-type";

export type MedicalTeamTableData = {
  id: number;
  name: string;
  email: string;
  noteType: string;
  noteContent: string;
  date: string;
};

export const columns: ColumnDef<MedicalTeamTableData>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ getValue, row }) => {
      const name = getValue<string>();
      const id = row.original.id;
      const date = row.original.date;
      return (
        <Link
          href={ROUTES.ADMIN.ACCOUNTSDETAILS(id)}
          className="flex items-center gap-2"
        >
          <Image
            src={avatarUser}
            alt={name}
            width={50}
            height={50}
            className="w-12 h-12 rounded-[50%] object-cover object-top"
          />
          <div>
            <h2 className="text-[16px] font-SemiBold">{name}</h2>
            <p className="text-[14px] text-grayMedium">
              {getDate(date).fullYear}
            </p>
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
    accessorKey: "noteType",
    header: "Note Type",
    cell({ getValue }) {
      const status = getValue<string>();
      return <NoteType status={status} />;
    },
  },
  {
    accessorKey: "noteContent",
    header: "Note Content",
  },

  {
    accessorKey: "date",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original.id;

      return (
        <div className="flex items-center gap-3 justify-end">
          <button>
            <DeleteIcon className="w-4 h-auto" />
          </button>
        </div>
      );
    },
  },
];
