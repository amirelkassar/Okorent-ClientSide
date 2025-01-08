"use client";
import FilterIcon from "@/src/assets/icons/filter";
import StarIcon from "@/src/assets/icons/star";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import ActionMenu from "./action-menu";
import RenderPackage from "../../_components/render-package";
import avatarUser from "@/src/assets/images/avatar.png";
import { getDate } from "@/src/lib/utils";


export type MedicalTeamTableData = {
  id: number;
  name: string;
  email: string;
  package: string;
  period: string;
  payment: number;
  rating: number;
  userImage: string;
  isVerified: boolean;
  created: string;
  userName: string
  totalProductsCount:any
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
      const img = row.original.userImage;
      const created = row.original.created;
      const id = row.original.id;

      return (
        <Link
          href={ROUTES.ADMIN.ACCOUNTSDETAILS(id)}
          className="flex items-center gap-2"
        >
          <Image
            src={img||avatarUser}
            alt={name}
            width={50}
            height={50}
            className="w-12 h-12 rounded-[50%] object-cover object-top"
          />
          <div>
            <h2 className="text-[16px] font-SemiBold">{name}</h2>
            <p className="text-[14px] text-grayMedium">{getDate(created).fullYear}</p>
          </div>
        </Link>
      );
    },
  },
  {
    accessorKey: "userName",
    header: "Email",
  },
  {
    accessorKey: "created",
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
      return <RenderPackage packageVal={'packageVal'} />;
    },
  },
  {
    accessorKey: "totalProductsCount",
    header: "Payment",
    cell: ({ getValue }) => {
      const payment = getValue<number>();
      return <p className=" text-[16px] font-SemiBold">{payment}$</p>;
    },
  },
  {
    accessorKey: "isVerified",
    header: "Status",
    cell: ({ getValue }) => {
      const verified = getValue();
      return (
        <p className="text-[16px] font-SemiBold">
          {verified ? "Verified" : "Un Verified"}
        </p>
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
    cell: ({ row }) => {
      const id = row.original.id;
      const verified = row.original.isVerified;
      return (
        <div className="flex items-center gap-3 justify-end">
          <ActionMenu id={id} status={verified} />
        </div>
      );
    },
  },
];
