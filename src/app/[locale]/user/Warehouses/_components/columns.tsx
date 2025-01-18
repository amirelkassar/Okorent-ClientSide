"use client";
import { ColumnDef } from "@tanstack/react-table";
import CardStatus from "@/src/components/cardStatus";
import ActionMenu from "./action-menu";

export type RequestsTableData = {
  id: number;
  name: string;
  address: string;
  status: boolean;
};

export const columns: ColumnDef<RequestsTableData>[] = [
  {
    accessorKey: "name",
    header: "Location Name",
  },
  {
    accessorKey: "address",
    header: "Locations",
    cell({ getValue }) {
      const address = getValue<string>();
      return (
        <p className="max-w-[400px] truncate text-[16px]">
          {address}
        </p>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue<string>();
      return true ? (
        <CardStatus type="green" circle animation title={"Active"} />
      ) : (
        <CardStatus type="blue" circle title={"Not Acrive"} />
      );
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original.id;
      const status = true;
      return (
        <div className="flex items-center gap-3 w-fit">
          <ActionMenu id={id} status={status} />
        </div>
      );
    },
  },
];
