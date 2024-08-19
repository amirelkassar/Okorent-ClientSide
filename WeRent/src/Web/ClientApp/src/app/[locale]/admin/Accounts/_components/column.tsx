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
  accountDetails: string;
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
        <Link href={ROUTES.ADMIN.ACCOUNTSDETAILS(id)} className="flex items-center gap-2">
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
    accessorKey: "verified",
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue<string>();
      return status ? (
        <CardStatus title={'Verified'} type="blue" />
      ) : (
        <CardStatus title={'Not Verified'} type="green" />
      );
    },
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
      return packageVal === "Pro Package" ? (
        <CardStatus title={packageVal} type="blue" />
      ) : packageVal === "Starter Package" ? (
        <CardStatus title={packageVal} type='gray' />
      ) : (
        <CardStatus title={packageVal} type="green" />
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
    accessorKey: "accountDetails",
    header: "Account details",
    cell: ({ getValue }) => {
      const accountDetails = getValue<string>();
      return accountDetails === "Completed" ? (
        <CardStatus title={accountDetails} type="blue" />
      ) : (
        <CardStatus title={accountDetails} type="green" />
      );
    },
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
    cell: ({row}) => {
      const id = row.original.id
      return (
        <div className="flex items-center gap-3 w-fit">
          <Link href={ROUTES.ADMIN.ACCOUNTSDETAILS(id)}   >
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
