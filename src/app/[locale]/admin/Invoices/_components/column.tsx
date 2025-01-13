"use client";

import { ColumnDef } from "@tanstack/react-table";
import { StaticImageData } from "next/image";
import ActionMenu from "./action-menu";
import { getDate } from "@/src/lib/utils";
import ImgProduct from "@/src/components/img-product";
import avatar from "@/src/assets/images/avatar.png";
import OrderStatus from "@/src/components/order-status";

interface RentalData {
  id: any;
  invoiceNo: string;
  lessorName: string;
  lessorImage: StaticImageData;
  renterName: string;
  renterImage: StaticImageData;
  productName: string;
  productImage: StaticImageData;
  startDate: string;
  endingDate: string;
  payment: string;
}
export const columns: ColumnDef<RentalData>[] = [
  {
    accessorKey: "invoiceNo",
    header: "Invoice No",
  },
  {
    accessorKey: "lessorName",
    header: "Lessor",
    cell: ({ getValue, row }) => {
      const lessor = getValue<string>();
      const lessorImage = row.original.lessorImage;
      return <ImgProduct productName={lessor} src={lessorImage || avatar} />;
    },
  },
  {
    accessorKey: "renterName",
    header: "Lessor",
    cell: ({ getValue, row }) => {
      const lessor = getValue<string>();
      const renterImage = row.original.renterImage;
      return <ImgProduct productName={lessor} src={renterImage || avatar} />;
    },
  },
  {
    accessorKey: "productName",
    header: "Product",
    cell: ({ getValue, row }) => {
      const productName = getValue<string>();
      const productImage = row.original.productImage;
      return <ImgProduct productName={productName} src={productImage} />;
    },
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
    cell: ({ getValue }) => {
      const from = getValue<string>();
      return <p className="text-grayMedium text-[16px]">{from}</p>;
    },
  },
  {
    accessorKey: "endingDate",
    header: "Ending Date",
    cell: ({ getValue }) => {
      const to = getValue<string>();

      return <p className="text-grayMedium text-[16px]">{to}</p>;
    },
  },

  {
    accessorKey: "payment",
    header: "Payment",
    cell: ({ getValue }) => {
      const amount = getValue<number>();
      return <p className=" text-[16px] font-SemiBold">{amount}</p>;
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
