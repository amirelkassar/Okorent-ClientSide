"use client";
import { ColumnDef } from "@tanstack/react-table";
import ImgProduct from "@/src/components/img-product";
import ActionMenu from "./action-menu";
import placeHolderImgProduct from "@/src/assets/images/placTableProduct.png";
import RenderStatus from "./render-status";
import { StaticImageData } from "next/image";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
export type MaintenanceProps = {
  id: number;
  name: string;
  imageUSer: StaticImageData;
  email: string;
  transactions: number;
  totalPayments: string;
  type: "Online" | "Offline";
  tags: string;
};

export const columns: ColumnDef<MaintenanceProps>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ getValue, row }) => {
      const name = getValue<string>();
      const imageUSer = row.original.imageUSer;
      const id = row.original.id;
      return (
        <Link href={ROUTES.PREMIUM.CLIENTSDETAILS(id)}>
          <ImgProduct
            productName={name}
            src={imageUSer || placeHolderImgProduct}
          />
        </Link>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ getValue }) => {
      const email = getValue<number>();
      return <p className="text-grayMedium text-[16px]">{email}</p>;
    },
  },
  {
    accessorKey: "transactions",
    header: "Transactions",
    cell: ({ getValue }) => {
      const transactions = getValue<number>();
      return <p className="text-grayMedium text-[16px]">{transactions || 0}</p>;
    },
  },
  {
    accessorKey: "totalPayments",
    header: "Total Payments",
    cell: ({ getValue }) => {
      const totalPayments = getValue<number>();
      return (
        <p className="text-grayMedium text-[16px]">{totalPayments || 0}</p>
      );
    },
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ getValue }) => {
      const type = getValue<number>();
      return <p className="font-SemiBold text-[16px]">{type}</p>;
    },
  },

  {
    accessorKey: "tags",
    header: "Tags",
    cell: ({ getValue }) => {
      const tags = getValue<string>();
      return <RenderStatus status={tags} />;
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
