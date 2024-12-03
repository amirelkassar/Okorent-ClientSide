"use client";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { ColumnDef } from "@tanstack/react-table";
import Image, { StaticImageData } from "next/image";
import ActionMenu from "./action-menu";
import RenderStatus from "./render-status";
interface AdsDataProps {
  id: number;
  product: string;
  user: string;
  startDate: string;
  endDate: string;
  price: string;
  status: string;
  userImg: StaticImageData;
  productImg: StaticImageData;
}
export const columns: ColumnDef<AdsDataProps>[] = [
  {
    header: "Product",
    accessorKey: "product",
    cell: ({ getValue, row }) => {
      const name = getValue<string>();
      const img = row.original.productImg;
      const id = row.original.id;
      return (
        <Link
          href={ROUTES.ADMIN.ADSDETAILS(id)}
          className="flex items-center gap-2"
        >
          <div className="size-[50px] rounded-[50%] p-[6px] bg-grayBack flex justify-center items-center">
            <Image
              src={img}
              alt={name}
              width={50}
              height={50}
              className="w-auto h-full  object-contain "
            />
          </div>

          <div>
            <h2 className="text-[16px] font-SemiBold">{name}</h2>
          </div>
        </Link>
      );
    },
  },
  {
    header: "Owner",
    accessorKey: "user",
    cell: ({ getValue, row }) => {
      const user = getValue<string>();
      const avatar = row.original.userImg;
      return (
        <div className="flex items-center gap-2">
          <Image
            src={avatar}
            alt={user}
            width={50}
            height={50}
            className="w-12 h-12 rounded-[50%] object-cover object-top"
          />
          <h2 className="text-[16px] font-SemiBold">{user}</h2>
        </div>
      );
    },
  },
  {
    accessorKey: "startDate",
    header: "Starting Date",
  },
  {
    accessorKey: "endDate",
    header: "Ending date",
  },
  {
    accessorKey: "price",
    header: "Payment",
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
