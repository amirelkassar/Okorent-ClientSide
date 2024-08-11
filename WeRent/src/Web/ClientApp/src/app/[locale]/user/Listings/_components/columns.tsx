"use client";

import DeleteIcon from "@/src/assets/icons/delete";
import EditIcon from "@/src/assets/icons/edit";
import FilterIcon from "@/src/assets/icons/filter";
import { ActionIcon } from "@mantine/core";
import { ColumnDef } from "@tanstack/react-table";
import Image, { StaticImageData } from "next/image";
import phoneImg from "@/src/assets/images/phone.png";
import CardStatus from "@/src/components/cardStatus";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type RequestsTableData = {
  id: number;
  phone: string;
  quantity: number;
  status: string;
  inStock: number;
  rented: number;
  rentalCost: number;
};

export const columns: ColumnDef<RequestsTableData>[] = [
 

  {
    accessorKey: "phone",
    header: "Product",
    cell: ({ getValue, row }) => {
      const phone = getValue<string>();
      return (
        <div className="flex items-center gap-2">
          <div className="size-[50px] rounded-[50%] p-[6px] bg-grayBack flex justify-center items-center">
            <Image
              src={phoneImg}
              alt={phone}
              width={50}
              height={50}
              className="w-auto h-full  object-contain "
            />
          </div>
          <h2 className="text-[16px] font-SemiBold">{phone}</h2>
        </div>
      );
    },
  },

  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ getValue }) => {
      const quantity = getValue<number>();
      return <p className="text-grayMedium text-[16px]">{quantity}</p>;
    },
  },
  {
    accessorKey: "inStock",
    header: "In Stock ",
    cell: ({ getValue }) => {
      const inStock = getValue<number>();
      return <p className="text-grayMedium text-[16px]">{inStock}</p>;
    },
  },
  {
    accessorKey: "rented",
    header: "Rented",
    cell: ({ getValue }) => {
      const rented = getValue<number>();
      return <p className="text-grayMedium text-[16px]">{rented}</p>;
    },
  },

  {
    accessorKey: "rentalCost",
    header: "Rental Cost per day",
    cell: ({ getValue }) => {
      const rentalCost = getValue<number>();
      return <p className="font-SemiBold text-[16px]">{rentalCost}$</p>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue<string>();
      switch (status.toLowerCase()) {
        case "active":
          return <CardStatus type="blue" title={status} />;
        case "not active":
          return <CardStatus type="green" title={status} />;
        default:
          return <CardStatus type="gray" title="--" />;
      }
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
