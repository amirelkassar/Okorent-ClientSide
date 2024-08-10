"use client";

import DeleteIcon from "@/src/assets/icons/delete";
import EditIcon from "@/src/assets/icons/edit";
import StarIcon from "@/src/assets/icons/star";
import { ActionIcon } from "@mantine/core";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type MedicalTeamTableData = {
  id: number;
  name: string;
  email: string;
  package: string;
  period: string;
  payment: number;
  rating: number;
  img: any;
};

export const columns: ColumnDef<MedicalTeamTableData>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ getValue, row }) => {
      const name = getValue<string>();
      const img = row.original.img;

      return (
        <div className="flex items-center gap-2">
          <Image
            src={img}
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
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "package",
    header: "Package",
    cell: ({ getValue }) => {
      const packageVal = getValue<string>();
      return (
        <p
          className={`bg-grayBack px-3 rounded-lg !h-6 w-fit  text-center text-blue ${
            packageVal === "Pro Plus Package"
              ? "text-green"
              : packageVal === "Starter Package"
              ? "text-grayMedium"
              : ""
          } `}
        >
          {packageVal}
        </p>
      );
    },
  },
  {
    accessorKey: "rentedItems",
    header: "Rented Items",
    cell: ({ getValue }: any) => {
      const countItem = getValue();
      return (
        <div className="flex items-center gap-1 text-grayMedium">
          <span>{countItem}</span>
          <span> Item</span>
        </div>
      );
    },
  },
  {
    accessorKey: "leasedItems",
    header: "Leased Items",
    cell: ({ getValue }: any) => {
      const countItem = getValue();
      return (
        <div className="flex items-center gap-1 text-grayMedium">
          <span>{countItem}</span>
          <span> Item</span>
        </div>
      );
    },
  },
  {
    accessorKey: "rating",
    header: "Rating",
    cell: ({ getValue }) => {
      const rating = getValue<number>();
      return (
        <div className="flex items-center gap-1 ">
          <p>{rating}</p>
          <StarIcon />
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: () => {
      return (
        <div className="flex items-center gap-3 w-fit">
          <ActionIcon variant="transparent">
            <EditIcon className="w-5 h-auto" />
          </ActionIcon>
          <ActionIcon variant="transparent">
            <DeleteIcon className="w-5 h-auto" />
          </ActionIcon>
        </div>
      );
    },
  },
];
