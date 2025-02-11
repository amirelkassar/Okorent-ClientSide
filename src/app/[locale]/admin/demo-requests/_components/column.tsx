"use client";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import ActionMenu from "./action-menu";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import avatarUser from "@/src/assets/images/avatar.png";
import RenderStatus from "./render-status";
import { getDate } from "@/src/lib/utils";

type RequestStatus = 1 | 2 | 3;

interface RentalData {
  id: number;
  name: string;
  userImage: string;
  email: string;
  phoneNumber: string;
  demoStatus: RequestStatus;
  created: string;
  userCreation: string;
}
export const columns: ColumnDef<RentalData>[] = [
  {
    accessorKey: "name",
    header: "Sender",
    cell: ({ getValue, row }) => {
      const sender = getValue<string>();
      const userImage = row.original.userImage;
      const id = row.original.id;
      const userCreation = row.original.userCreation;
      return (
        <Link
          href={ROUTES.ADMIN.ACCOUNTSDETAILS(id)}
          className="flex items-center gap-2"
        >
          <Image
            src={userImage || avatarUser}
            alt={sender}
            width={50}
            height={50}
            className="w-12 h-12 rounded-[50%] object-cover object-top"
          />
          <div>
            <h2 className="text-[16px] font-SemiBold">{sender}</h2>
            <p className="text-[14px] text-grayMedium">
              {getDate(userCreation).fullYear}
            </p>
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
    accessorKey: "phoneNumber",
    header: "Phone No",
    cell({ getValue }) {
      const phoneNumber = getValue<string>();
      return <p className=" max-w-[150px] truncate">{phoneNumber}</p>;
    },
  },
  {
    accessorKey: "demoStatus",
    header: "Status",
    cell({ getValue }) {
      const demoStatus = getValue<RequestStatus>();
      return <RenderStatus status={demoStatus} />;
    },
  },
  {
    accessorKey: "Notes",
    header: "Notes",
    cell({ getValue }) {
      return (
        <p className="text-grayMedium max-w-[150px] truncate">Special prices</p>
      );
    },
  },
  {
    accessorKey: "created",
    header: "",
    cell: ({ getValue, row }) => {
      const date = getValue<string>();
      return (
        <div className="flex items-center gap-5 justify-end">
          <h4 className="text-grayMedium">{getDate(date).fullYear}</h4>
        </div>
      );
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original.id;
      const demoStatus = row.original.demoStatus;
      return (
        <div className="flex items-center gap-3 justify-end">
          <ActionMenu id={id} demoStatus={demoStatus} />
        </div>
      );
    },
  },
];
