"use client";
import { ColumnDef } from "@tanstack/react-table";
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

export const columns: ColumnDef<MedicalTeamTableData>[] = [
  {
    accessorKey: "userName",
    header: "Name",
    cell({ getValue, row }) {
      const userName = getValue<string>();
      const userImage = row.original.userImage;
      return <ImgProduct productName={userName} src={userImage || avatar} />;
    },
  },

  {
    accessorKey: "userEmail",
    header: "Email",
  },
  {
    accessorKey: "isActive",
    header: "Status",
    cell: ({ getValue }) => {
      const isActive = getValue();
      return (
        <p className="text-[16px] font-SemiBold">
          {isActive ? "Activated" : "Deactivated"}
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
          <DeleteNoteUser id={id} />
        </div>
      );
    },
  },
];
