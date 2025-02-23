"use client";
import StarIcon from "@/src/assets/icons/star";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import ActionMenu from "./action-menu";
import RenderPackage from "../../_components/render-package";
import avatarUser from "@/src/assets/images/avatar.png";
import { getDate } from "@/src/lib/utils";
import TableFilter from "@/src/components/TableFilterProps";

export type MedicalTeamTableData = {
  id: number;
  name: string;
  email: string;
  package: string;
  period: string;
  payment: number;
  rating: number;
  userImage: string;
  isActivated: any;
  isVerified: any;
  created: string;
  userName: string;
  totalProductsCount: any;
  memberShipName: any;
};

export const columns: ColumnDef<MedicalTeamTableData>[] = [
  {
    accessorKey: "name",
    header: () => {
      return <TableFilter title="Name" column="Name" type="search" />;
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
            src={img || avatarUser}
            alt={name}
            width={50}
            height={50}
            className="w-12 h-12 rounded-[50%] object-cover object-top"
          />
          <div>
            <h2 className="text-[16px] font-SemiBold">{name}</h2>
            <p className="text-[14px] text-grayMedium">
              {getDate(created).fullYear}
            </p>
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
    accessorKey: "memberShipName",
    header: () => (
      <TableFilter
        title="Package"
        column="package"
        type="select"
        options={["Pro Package", "Diamond Package"]}
      />
    ),

    cell: ({ getValue }) => {
      const packageVal = getValue<string>();
      return <RenderPackage packageVal={packageVal} />;
    },
  },
  {
    accessorKey: "totalProductsCount",
    header: "Payment",
    cell: ({ getValue }) => {
      const payment = getValue<number>();
      return <p className=" text-[16px] font-SemiBold">{payment || 0} $</p>;
    },
  },
  {
    accessorKey: "isVerified",
    header: "Verify",
    cell: ({ getValue }) => {
      const isVerified = getValue();
      return (
        <p className="text-[16px] font-SemiBold">
          {isVerified ? "Verified" : "Un Verified"}
        </p>
      );
    },
  },
  {
    accessorKey: "isActivated",
    header: "Status",
    cell: ({ getValue }) => {
      const isActivated = getValue();
      return (
        <p className="text-[16px] font-SemiBold">
          {isActivated ? "Activated" : "Deactivated"}
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
      const isActivated = row.original.isActivated;
      const isVerified = row.original.isVerified;
      return (
        <div className="flex items-center gap-3 justify-end">
          <ActionMenu
            id={id}
            isActivated={isActivated}
            isVerified={isVerified}
            dataUSer={row.original}
          />
        </div>
      );
    },
  },
];
