"use client";
import { ColumnDef } from "@tanstack/react-table";
import DeleteNote from "./delete-note";
import ImgProduct from "../img-product";
import avatar from "@/src/assets/images/avatar.png";
export type MedicalTeamTableData = {
  id: any;
  userId: number;
  userImage: string;
  userName: string;
  userEmail: string;
  userCreation: string;
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
    id: "actions",
    cell: ({ row }) => {
      const id = row.original.userId;
      return (
        <div className="flex items-center gap-3 px-3 justify-end">
          <DeleteNote id={id} />
        </div>
      );
    },
  },
];
