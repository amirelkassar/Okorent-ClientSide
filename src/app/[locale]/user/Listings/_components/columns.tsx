"use client";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import phoneImg from "@/src/assets/images/phone.png";
import CardStatus from "@/src/components/cardStatus";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import ActionMenu from "./action-menu";

export type RequestsTableData = {
  id: number;
  name: string;
  quantity: number;
  status: boolean;
  inStock: number;
  rented: number;
  dailyPrice: number;
};

export const columns: ColumnDef<RequestsTableData>[] = [
  {
    accessorKey: "name",
    header: "Product",
    cell: ({ getValue, row }) => {
      const name = getValue<string>();
      const id = row.original.id;
      return (
        <Link
          href={ROUTES.USER.LISTINGSDETAILS(id)}
          className="flex items-center gap-2 w-fit"
        >
          <div className="size-[50px] rounded-[50%] p-[6px] bg-grayBack flex justify-center items-center">
            <Image
              src={phoneImg}
              alt={name}
              width={50}
              height={50}
              className="w-auto h-full  object-contain "
            />
          </div>
          <h2 className="text-[16px] font-SemiBold max-w-[220px] truncate">
            {name}
          </h2>
        </Link>
      );
    },
  },

  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ getValue }) => {
      const quantity = getValue<number>();
      return <p className="text-grayMedium text-[16px]">{quantity || 0}</p>;
    },
  },
  {
    accessorKey: "inStock",
    header: "In Stock ",
    cell: ({ getValue }) => {
      const inStock = getValue<number>();
      return <p className="text-grayMedium text-[16px]">{inStock || 0}</p>;
    },
  },
  {
    accessorKey: "rented",
    header: "Rented",
    cell: ({ getValue }) => {
      const rented = getValue<number>();
      return <p className="text-grayMedium text-[16px]">{rented || 0}</p>;
    },
  },

  {
    accessorKey: "dailyPrice",
    header: "Rental Cost per day",
    cell: ({ getValue }) => {
      const dailyPrice = getValue<number>();
      return <p className="font-SemiBold text-[16px]">{dailyPrice}$</p>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue<string>();
      return status ? (
        <CardStatus type="blue" circle animation title={"online"} />
      ) : (
        <CardStatus type="green" circle title={"offline"} />
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original.id;
      return (
        <div className="flex items-center gap-3 w-fit">
          <ActionMenu id={id} />
        </div>
      );
    },
  },
];
