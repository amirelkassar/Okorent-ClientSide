"use client";

import DeleteIcon from "@/src/assets/icons/delete";
import EditIcon from "@/src/assets/icons/edit";
import StarIcon from "@/src/assets/icons/star";
import CardStatus from "@/src/components/cardStatus";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { ActionIcon } from "@mantine/core";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type MedicalTeamTableData = {
  id: number;
  product: string;
  productType: string;
  userType: string;
  user: string;
  paymentStatus: string;
  payment: number;
  img: any;
  quantity: number;
};

export const columns: ColumnDef<MedicalTeamTableData>[] = [
  {
    accessorKey: "product",
    header: "Product",
    cell: ({ getValue, row }) => {
      const name = getValue<string>();
      const img = row.original.img;
      const type = row.original.productType;
      const id = row.original.id;

      return (
        <Link
          href={ROUTES.ADMIN.ACCOUNTSLISTDETAILS(id)}
          className="flex items-center gap-2"
        >
          <div className="bg-grayBack rounded-[50%] size-[50px] p-1 flex items-center justify-center">
            <Image
              src={img}
              alt={name}
              priority
              className="w-auto h-full  object-contain"
            />
          </div>

          <div>
            <h2 className="text-[16px] font-SemiBold">{name}</h2>
            <p className="text-grayMedium font-Regular text-[14px]">{type}</p>
          </div>
        </Link>
      );
    },
  },

  {
    accessorKey: "userType",
    header: "Activitie Type",
    cell: ({ getValue }) => {
      const userType = getValue<string>();
      switch (userType.toLowerCase()) {
        case "rentout":
          return <CardStatus animation circle type="green" title={userType} />;
        case "rent":
          return <CardStatus circle type="blue" title={userType} />;
        default:
          return <CardStatus circle type="gray" title="--" />;
      }
    },
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "user",
    header: "User",
    cell: ({ getValue }) => {
      const user = getValue<string>();
      return <p className={`text-[16px]  text-grayMedium `}>{user}</p>;
    },
  },
  {
    accessorKey: "payment",
    header: "Payment",
  },
  {
    accessorKey: "paymentStatus",
    header: "Payment Status",
    cell: ({ getValue }) => {
      const paymentStatus = getValue<string>();
      switch (paymentStatus.toLowerCase()) {
        case "pending":
          return (
            <CardStatus animation circle type="green" title={paymentStatus} />
          );
        case "canceled":
          return <CardStatus circle type="red" title={paymentStatus} />;
        case "completed":
          return <CardStatus circle type="blue" title={paymentStatus} />;
        default:
          return <CardStatus circle type="gray" title="--" />;
      }
    },
  },

  {
    id: "actions",
    cell: () => {
      return (
        <div className="flex items-center gap-3 w-fit">
          <ActionIcon variant="transparent">
            <EditIcon className="w-5 h-auto" />
          </ActionIcon>
          <ActionIcon variant="transparent">
            <DeleteIcon className="w-5 h-auto" />
          </ActionIcon>
        </div>
      );
    },
  },
];
