"use client";

import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { ColumnDef } from "@tanstack/react-table";
import Image, { StaticImageData } from "next/image";
import RenderStatus from "./render-status";



interface BookingsAdminData {
  id: number;
  renter: string;
  lessor: string;
  product: string;
  startDate: string;
  endingDate: string;
  quantity: number;
  status: string;
  payment: string;
  lessorImg: StaticImageData;
  renterImg: StaticImageData;
  productImg: StaticImageData;
}
export const columns: ColumnDef<BookingsAdminData>[] = [
  {
    accessorKey: "renter",
    header: "Renter",
    cell: ({ getValue, row }) => {
      const renter = getValue<string>();
      const renterImg = row.original.renterImg;
      const id = row.original.id;
      return (
        <Link
          href={ROUTES.ADMIN.ACCOUNTSDETAILS(id)}
          className="flex items-center gap-2"
        >
          <Image
            src={renterImg}
            alt={renter}
            width={50}
            height={50}
            className="w-12 h-12 rounded-[50%] object-cover object-top"
          />
          <h2 className="text-[16px] font-SemiBold">{renter}</h2>
        </Link>
      );
    },
  },
  {
    accessorKey: "lessor",
    header: "Lessor",
    cell: ({ getValue, row }) => {
      const lessor = getValue<string>();
      const lessorImg = row.original.lessorImg;

      return (
        <div className="flex items-center gap-2">
          <Image
            src={lessorImg}
            alt={lessor}
            width={50}
            height={50}
            className="w-12 h-12 rounded-[50%] object-cover object-top"
          />
          <h2 className="text-[16px] font-SemiBold">{lessor}</h2>
        </div>
      );
    },
  },
  {
    accessorKey: "product",
    header: "Product",
    cell: ({ getValue, row }) => {
      const product = getValue<string>();
      const productImg = row.original.productImg;
      return (
        <div className="flex items-center gap-2">
          <div className="size-[50px] rounded-[50%] p-[6px] bg-grayBack flex justify-center items-center">
            <Image
              src={productImg}
              alt={product}
              width={50}
              height={50}
              className="w-auto h-full  object-contain "
            />
          </div>
          <h2 className="text-[16px] font-SemiBold">{product}</h2>
        </div>
      );
    },
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
  },
  {
    accessorKey: "endingDate",
    header: "Ending Date",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell({ getValue }) {
      const status = getValue<string>();
      return <RenderStatus status={status} />;
    },
  },
  {
    accessorKey: "payment",
    header: "Payment",
  },
];
