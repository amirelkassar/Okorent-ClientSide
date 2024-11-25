"use client";

import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { ColumnDef } from "@tanstack/react-table";
import Image, { StaticImageData } from "next/image";
import ActionMenu from "./action-menu";
import RenderStatus from "./render-status";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type MedicalTeamTableData = {
  id: number;
  phone: string;
  ProductImage: StaticImageData;
  user: string;
  avatar: StaticImageData;
  category: string;
  status: boolean;
  rentalCost: number;
  location: string;
};

export const columns: ColumnDef<MedicalTeamTableData>[] = [
  {
    header: "Product",
    accessorKey: "phone",
    cell: ({ getValue, row }) => {
      const name = getValue<string>();
      const img = row.original.ProductImage;
      const id = row.original.id;
      return (
        <Link
          href={ROUTES.ADMIN.ACCOUNTSDETAILS(id)}
          className="flex items-center gap-2"
        >
          <div className="size-[50px] rounded-[50%] p-[6px] bg-grayBack flex justify-center items-center">
            <Image
              src={img}
              alt={name}
              width={50}
              height={50}
              className="w-auto h-full  object-contain "
            />
          </div>

          <div>
            <h2 className="text-[16px] font-SemiBold">{name}</h2>
          </div>
        </Link>
      );
    },
  },
  {
    header: "Owner",
    accessorKey: "user",
    cell: ({ getValue, row }) => {
      const user = getValue<string>();
      const avatar = row.original.avatar;
      return (
        <div className="flex items-center gap-2">
          <Image
            src={avatar}
            alt={user}
            width={50}
            height={50}
            className="w-12 h-12 rounded-[50%] object-cover object-top"
          />
          <h2 className="text-[16px] font-SemiBold">{user}</h2>
        </div>
      );
    },
  },

  {
    accessorKey: "rentalCost",
    header: "Rental price",
    cell: ({ getValue }) => {
      const rentalCost = getValue<number>();
      return <p className="font-SemiBold text-[16px]">{rentalCost}$</p>;
    },
  },

  {
    accessorKey: "category",
    header: "Category",
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
    accessorKey: "location",
    header: "Stock Location",
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
