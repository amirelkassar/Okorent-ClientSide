"use client";

import DeleteIcon from "@/src/assets/icons/delete";
import EditIcon from "@/src/assets/icons/edit";
import FilterIcon from "@/src/assets/icons/filter";
import StarIcon from "@/src/assets/icons/star";
import CardStatus from "@/src/components/cardStatus";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { ActionIcon } from "@mantine/core";
import { ColumnDef } from "@tanstack/react-table";
import Image, { StaticImageData } from "next/image";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type MedicalTeamTableData = {
  id: number;
  name: string;
  package: string;
  period: string;
  payment: number;
  rating: number;
  img: StaticImageData;
  verified: boolean;
  date: string;
};

export const columns: ColumnDef<MedicalTeamTableData>[] = [
  {
    accessorKey: "name",
    header: () => {
      return (
        <div className="flex items-center gap-1 cursor-pointer">
          <p className="text-[18px]">Name</p>
          <FilterIcon />
        </div>
      );
    },
    cell: ({ getValue, row }) => {
      const name = getValue<string>();
      const img = row.original.img;
      const date = row.original.date;
      const id = row.original.id;

      return (
        <Link
          href={ROUTES.ADMIN.ACCOUNTSDETAILS(id)}
          className="flex items-center gap-2"
        >
          <Image
            src={img}
            alt={name}
            width={50}
            height={50}
            className="w-12 h-12 rounded-[50%] object-cover object-top"
          />
          <div>
            <h2 className="text-[16px] font-SemiBold">{name}</h2>
            <p className="text-[14px] text-grayMedium">{date}</p>
          </div>
        </Link>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },

  {
    accessorKey: "package",
    header: () => {
      return (
        <div className="flex items-center gap-1 cursor-pointer">
          <p className="text-[18px]">Package</p>
          <FilterIcon />
        </div>
      );
    },
    cell: ({ getValue }) => {
      const packageVal = getValue<string>();
      return packageVal === "Essential Package" ? (
        <CardStatus circle title={packageVal} type="green" />
      ) : packageVal === "Premium Package" ? (
        <CardStatus circle title={packageVal} type="gray" />
      ) : (
        <CardStatus circle title={packageVal} type="blue" />
      );
    },
  },
  {
    accessorKey: "payment",
    header: "Payment",
    cell: ({ getValue }) => {
      const payment = getValue<number>();
      return <p className=" text-[16px] font-SemiBold">{payment}$</p>;
    },
  },

  {
    accessorKey: "date",
    header: "Ending Date",
  },
  {
    accessorKey: "rating",
    header: "Rating",
    cell: ({ getValue }) => {
      const rating = getValue<number>();
      return (
        <div className="flex items-center gap-1 ">
          <p>{rating}</p>
          <StarIcon />
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original.id;
      return (
        <div className="flex items-center gap-3 w-fit">
          <Link href={ROUTES.ADMIN.ACCOUNTSDETAILS(id)+'?edit=true'}>
            <EditIcon className="w-5 h-auto" />
          </Link>
          <ActionIcon variant="transparent">
            <DeleteIcon className="w-5 h-auto" />
          </ActionIcon>
        </div>
      );
    },
  },
];
