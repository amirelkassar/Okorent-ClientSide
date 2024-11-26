"use client";
import DownloadIcon from "@/src/assets/icons/download";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { ActionIcon } from "@mantine/core";
import { ColumnDef } from "@tanstack/react-table";
import Image, { StaticImageData } from "next/image";


export type MedicalTeamTableData = {
  id: number;
  Product: string;
  ProductImage: StaticImageData;
  Renter: string;
  img: StaticImageData;
  Payment: string;
  Date: string;
  InvoiceReference: string;
};

export const columns: ColumnDef<MedicalTeamTableData>[] = [
  {
    accessorKey: "Product",
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
    accessorKey: "Renter",
    cell: ({ getValue, row }) => {
      const Renter = getValue<string>();
      const img = row.original.img;
      return (
        <div className="flex items-center gap-2">
          <Image
            src={img}
            alt={Renter}
            width={50}
            height={50}
            className="w-12 h-12 rounded-[50%] object-cover object-top"
          />
          <h2 className="text-[16px] font-SemiBold">{Renter}</h2>
        </div>
      );
    },
  },

  {
    accessorKey: "Payment",
    header: "Payment",
  },

  {
    accessorKey: "Date",
    header: "Date",
  },
  {
    accessorKey: "InvoiceReference",
    header: "Invoice Refrence ",
    cell: ({ getValue }) => {
      const invoice = getValue<number>();
      return (
        <p className="px-2 w-fit rounded-xl py-1 h-11 text-base font-SemiBold bg-blue/15 text-center flex items-center justify-center">
          {invoice}
        </p>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-3 w-fit">
          <ActionIcon variant="transparent">
            <DownloadIcon className="w-5 h-auto" />
          </ActionIcon>
        </div>
      );
    },
  },
];
