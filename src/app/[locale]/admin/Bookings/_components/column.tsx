"use client";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { ColumnDef } from "@tanstack/react-table";
import  { StaticImageData } from "next/image";
import ActionMenu from "./action-menu";
import { getDate } from "@/src/lib/utils";
import ImgProduct from "@/src/components/img-product";
import avatar from "@/src/assets/images/avatar.png";
import OrderStatus from "@/src/components/order-status";

interface BookingsAdminData {
  id: number;
  renterName: string;
  lessorName: string;
  productName: string;
  from: string;
  to: string;
  quantity: number;
  status: string;
  amount: string;
  lessorImage: StaticImageData;
  renterImage: StaticImageData;
  productImage: StaticImageData;
}
export const columns: ColumnDef<BookingsAdminData>[] = [
  {
    accessorKey: "renterName",
    header: "Renter",
    cell: ({ getValue, row }) => {
      const renter = getValue<string>();
      const renterImage = row.original.renterImage;
      const id = row.original.id;
      return (
        <Link
          href={ROUTES.ADMIN.BOOKINGSDETAILS(id)}
          className="flex items-center gap-2"
        >
          <ImgProduct productName={renter} src={renterImage || avatar} />
        </Link>
      );
    },
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
    accessorKey: "productName",
    header: "Product",
    cell: ({ getValue, row }) => {
      const productName = getValue<string>();
      const productImage = row.original.productImage;
      return <ImgProduct productName={productName} src={productImage} />;
    },
  },
  {
    accessorKey: "from",
    header: "Start Date",
    cell: ({ getValue }) => {
      const from = getValue<string>();
      return (
        <p className="text-grayMedium text-[16px]">
          {getDate(from).fullYearWithMonthName}
        </p>
      );
    },
  },
  {
    accessorKey: "to",
    header: "Ending Date",
    cell: ({ getValue }) => {
      const to = getValue<string>();

      return (
        <p className="text-grayMedium text-[16px]">
          {getDate(to).fullYearWithMonthName}
        </p>
      );
    },
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue<string>();

      return <OrderStatus status={status} />;
    },
  },
  {
    accessorKey: "amount",
    header: "Payment",
    cell: ({ getValue }) => {
      const amount = getValue<number>();
      return <p className=" text-[16px] font-SemiBold">{amount}$</p>;
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
