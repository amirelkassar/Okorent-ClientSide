"use client";

import DeleteIcon from "@/src/assets/icons/delete";
import EditIcon from "@/src/assets/icons/edit";
import FilterIcon from "@/src/assets/icons/filter";
import StarIcon from "@/src/assets/icons/star";
import { ActionIcon } from "@mantine/core";
import { ColumnDef } from "@tanstack/react-table";
import Image, { StaticImageData } from "next/image";
import phoneImg from "@/src/assets/images/phone.png";
import CardStatus from "@/src/components/cardStatus";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type RequestsTableData = {
  id: number;
  name: string;
  phone: string;
  start: string;
  end: string;
  quantity: number;
  status: string;
  payment: number;
  paymentStatus: string;
  img: StaticImageData;
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
    accessorKey: "end",
    header: "Rentals Ending Date",
    cell: ({ getValue }) => {
      const end = getValue<string>();

      return <p className="text-grayMedium text-[16px]">{end}</p>;
    },
  },
  {
    accessorKey: "name",
    header: () => {
      return (
        <div className="flex items-center gap-1 cursor-pointer">
          <p className="text-[18px]">Renter</p>
          <FilterIcon />
        </div>
      );
    },
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
    accessorKey: "payment",
    header: "Payment",
    cell: ({ getValue }) => {
      const payment = getValue<number>();
      return <p className="font-SemiBold text-[16px]">{payment}$</p>;
    },
  },
  {
    accessorKey: "paymentStatus",
    header: "Payment Status",
    cell: ({ getValue }) => {
      const paymentStatus = getValue<string>();
      switch (paymentStatus.toLowerCase()) {
        case "completed":
          return <CardStatus type="blue" title={paymentStatus} />;
        case "canceled":
          return <CardStatus type="gray" title={paymentStatus} />;
        case "pending":
          return <CardStatus type="green" title={paymentStatus} />;
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
