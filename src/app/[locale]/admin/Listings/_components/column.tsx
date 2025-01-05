"use client";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { ColumnDef } from "@tanstack/react-table";
import ActionMenu from "./action-menu";
import RenderStatus from "./render-status";
import ImgProduct from "@/src/components/img-product";
import placeholderImg from "@/src/assets/images/placTableProduct.png";
import avatar from "@/src/assets/images/avatar.png";
export type MedicalTeamTableData = {
  id: number;
  name: string;
  heroImage: string;
  creatorName: string;
  creatorImage: string;
  category: string;
  status: boolean;
  dailyPrice: number;
  address: string;
};

export const columns: ColumnDef<MedicalTeamTableData>[] = [
  {
    header: "Product",
    accessorKey: "name",
    cell: ({ getValue, row }) => {
      const name = getValue<string>();
      const img = row.original.heroImage||placeholderImg;
      const id = row.original.id;
      return (
        <Link
          href={ROUTES.ADMIN.LISTINGSDETAILS(id)}
          className="flex items-center gap-2"
        >
          <ImgProduct src={img} productName={name} />
        </Link>
      );
    },
  },
  {
    header: "Owner",
    accessorKey: "creatorName",
    cell: ({ getValue, row }) => {
      const creatorName = getValue<string>();
      const creatorImage = row.original.creatorImage||avatar;
      return <ImgProduct src={creatorImage} productName={creatorName} />;
    },
  },

  {
    accessorKey: "dailyPrice",
    header: "Rental price",
    cell: ({ getValue }) => {
      const dailyPrice = getValue<number>();
      return <p className="font-SemiBold text-[16px]">{dailyPrice}$</p>;
    },
  },

  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "alwaysAvailable",
    header: "Status",
    cell: ({ getValue }) => {
      const alwaysAvailable = getValue<string>();
      return <RenderStatus status={alwaysAvailable} />;
    },
  },
  {
    accessorKey: "address",
    header: "Stock Location",
    cell: ({ getValue }) => {
      const address = getValue<number>();
      return <p className="font-SemiBold text-[16px] max-w-[200px] truncate">{address}</p>;
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
