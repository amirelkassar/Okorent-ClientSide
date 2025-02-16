"use client";
import DownloadIcon from "@/src/assets/icons/download";
import ImgProduct from "@/src/components/img-product";
import { ActionIcon } from "@mantine/core";
import { ColumnDef } from "@tanstack/react-table";
import avatar from "@/src/assets/images/avatar.png";
import { getDate } from "@/src/lib/utils";
import { StaticImageData } from "next/image";

export type MedicalTeamTableData = {
  id: number;
  productName: string;
  productImage: StaticImageData;
  renterName: string;
  renterImage: StaticImageData;
  lessorName: string;
  lessorImage: StaticImageData;
  paymentTotal: string;
  created: string;
  invoiceId: string;
};

export const columns: ColumnDef<MedicalTeamTableData>[] = [
  {
    accessorKey: "productName",
    header: "Product",
    cell: ({ getValue, row }) => {
      const name = getValue<string>();
      const img = row.original.productImage;
      return <ImgProduct productName={name} src={img} classNameBox="" />;
    },
  },
  {
    accessorKey: "renterName",
    header: "Renter",
    cell: ({ getValue, row }) => {
      const renterName = getValue<string>();
      const renterImage = row.original.renterImage;
      return (
        <ImgProduct
          productName={renterName}
          src={renterImage || avatar}
          classNameBox=""
        />
      );
    },
  },

  {
    accessorKey: "paymentTotal",
    header: "Payment",
    cell: ({ getValue }) => {
      const paymentTotal = getValue<string>();
      return <p className="font-SemiBold text-[16px]">{paymentTotal}$</p>;
    },
  },
  {
    accessorKey: "created",
    header: "Date",
    cell: ({ getValue }) => {
      const created = getValue<string>();
      return (
        <p className="font-SemiBold text-[16px]">{getDate(created).fullYear}</p>
      );
    },
  },
  {
    accessorKey: "invoiceId",
    header: "Invoice Reference ",
    cell: ({ getValue }) => {
      const invoice = getValue<number>();
      return (
        <p className="px-2 w-fit rounded-xl max-w-[120px] truncate py-2   text-base font-SemiBold bg-blue/15 ">
          # {invoice.toString().slice(0, 6)}
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
