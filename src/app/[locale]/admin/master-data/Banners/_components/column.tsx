"use client";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { ColumnDef } from "@tanstack/react-table";
import Image, { StaticImageData } from "next/image";
import ActionMenu from "./action-menu";
import RenderStatus from "./render-status";
interface BannerProps {
  id: number;
  title: string;
  link: string;
  status: string;
  bannerImage: StaticImageData;
}

export const columns: ColumnDef<BannerProps>[] = [
  {
    header: "Banner",
    accessorKey: "bannerImage",
    cell: ({ getValue, row }) => {
      const img = getValue<StaticImageData>();
      const id = row.original.id;
      return (
        <Link
          href={ROUTES.ADMIN.LISTINGSDETAILS(id)}
          className="flex items-center gap-2"
        >
          <Image
            src={img}
            alt={"bannerImage"}
            width={300}
            height={80}
            className="w-[230px] h-14 rounded-xl  object-cover "
          />
        </Link>
      );
    },
  },
  {
    accessorKey: "title",
    header: "Title",
  },

  {
    accessorKey: "link",
    header: "Link",
    cell: ({ getValue }) => {
      const link = getValue<string>();
      return (
        <Link
          href={link || "#"}
          className="font-SemiBold text-[16px] underline text-blue"
        >
          {link}
        </Link>
      );
    },
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
