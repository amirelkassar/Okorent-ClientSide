"use client";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import phoneImg from "@/src/assets/images/phone.png";
import CardStatus from "@/src/components/cardStatus";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import ActionMenu from "./action-menu";
import ImgProduct from "@/src/components/img-product";

export type RequestsTableData = {
  id: number;
  name: string;
  totalQuantity: number;
  isActive: boolean;
  inStock: number;
  rentedQuantity: number;
  dailyPrice: number;
  heroImage:string
};

export const columns: ColumnDef<RequestsTableData>[] = [
  {
    accessorKey: "name",
    header: "Product",
    cell: ({ getValue, row }) => {
      const name = getValue<string>();
      const id = row.original.id;
      const image = row.original.heroImage;
      return (
        <Link
          href={ROUTES.USER.LISTINGSDETAILS(id)}
          className="flex items-center gap-2 w-fit"
        >
          <ImgProduct productName={name} src={image}/>
         
        </Link>
      );
    },
  },

  {
    accessorKey: "totalQuantity",
    header: "Quantity",
    cell: ({ getValue }) => {
      const quantity = getValue<number>();
      return <p className="text-grayMedium text-[16px]">{quantity || 0}</p>;
    },
  },
  {
    accessorKey: "inStock",
    header: "In Stock ",
    cell: ({ getValue, row }) => {
      const inStock = getValue<number>();
      const totalQuantity = row.original.totalQuantity;
      const rentedQuantity = row.original.rentedQuantity;
      return (
        <p className="text-grayMedium text-[16px]">
          {totalQuantity - rentedQuantity || 0}
        </p>
      );
    },
  },
  {
    accessorKey: "rentedQuantity",
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
    accessorKey: "isActive",
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
