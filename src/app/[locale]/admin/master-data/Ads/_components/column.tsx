"use client";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { ColumnDef } from "@tanstack/react-table";
import { StaticImageData } from "next/image";
import ActionMenu from "./action-menu";
import ImgProduct from "@/src/components/img-product";
import avatar from "@/src/assets/images/avatar.png";
import { getDate } from "@/src/lib/utils";
import RenderStatusAds from "./render-status-ads";

interface AdsDataProps {
  id: string;
  productName: string;
  productImage: StaticImageData;
  userName: string;
  userImage: StaticImageData;
  startDate: string;
  endDate: string;
  payment: string;
  advertisementStatus: string;
}
export const columns: ColumnDef<AdsDataProps>[] = [
  {
    header: "Product",
    accessorKey: "productName",
    cell: ({ getValue, row }) => {
      const name = getValue<string>();
      const img = row.original.productImage;
      const id = row.original.id;
      return (
        <Link
          href={ROUTES.ADMIN.ADSDETAILS(id)}
          className="flex items-center gap-2"
        >
          <ImgProduct productName={name} src={img} />
        </Link>
      );
    },
  },
  {
    header: "Owner",
    accessorKey: "userName",
    cell: ({ getValue, row }) => {
      const user = getValue<string>();
      const userImage = row.original.userImage || avatar;
      return <ImgProduct productName={user} src={userImage} />;
    },
  },
  {
    accessorKey: "startDate",
    header: "Starting Date",
    cell({ getValue }) {
      const date = getValue<string>();
      return (
        <p className="text-grayMedium text-[16px]">
          {getDate(date).fullYearWithMonthName}
        </p>
      );
    },
  },
  {
    accessorKey: "endDate",
    header: "Ending date",
    cell({ getValue }) {
      const date = getValue<string>();
      return (
        <p className="text-grayMedium text-[16px]">
          {getDate(date).fullYearWithMonthName}
        </p>
      );
    },
  },
  {
    accessorKey: "payment",
    header: "Payment",
    cell({ getValue }) {
      const payment = getValue<string>();
      return <p className=" text-[16px]">{payment}$</p>;
    },
  },
  {
    accessorKey: "advertisementStatus",
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue<string>();
      return <RenderStatusAds status={status} />;
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original.id;
      const status = row.original.advertisementStatus;
      return (
        <div className="flex items-center gap-3 justify-end">
          <ActionMenu id={id} status={status} />
        </div>
      );
    },
  },
];
