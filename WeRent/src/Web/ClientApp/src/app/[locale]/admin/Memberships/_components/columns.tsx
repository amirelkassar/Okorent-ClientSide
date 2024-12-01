"use client";
import FilterIcon from "@/src/assets/icons/filter";
import StarIcon from "@/src/assets/icons/star";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { ColumnDef } from "@tanstack/react-table";
import Image, { StaticImageData } from "next/image";
import RenderPackage from "../../_components/render-package";
import ActionMenu from "./action-menu";
import RenderStatus from "./render-status";

export type MedicalTeamTableData = {
  id: number;
  name: string;
  date: string;
  email: string;
  package: string;
  payment: string;
  endingDate: string;
  status: string;
  image: StaticImageData;
};

export const columns: ColumnDef<MedicalTeamTableData>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ getValue, row }) => {
      const name = getValue<string>();
      const image = row.original.image;
      const date = row.original.date;
      const id = row.original.id;
      return (
        <Link
          href={ROUTES.ADMIN.ACCOUNTSDETAILS(id)}
          className="flex items-center gap-2"
        >
          <Image
            src={image}
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
    cell: ({ getValue }) => {
      const packageVal = getValue<string>();
      return <RenderPackage packageVal={packageVal} />;
    },
  },
  {
    accessorKey: "payment",
    header: "Payment",
    cell: ({ getValue }) => {
      const payment = getValue<number>();
      return <p className=" text-[16px] font-SemiBold">{payment}</p>;
    },
  },
  {
    accessorKey: "endingDate",
    header: "Ending Date",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue<string>();
      return <RenderStatus status={status} />;
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
