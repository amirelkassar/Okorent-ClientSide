"use client";

import DeleteIcon from "@/src/assets/icons/delete";
import EditIcon from "@/src/assets/icons/edit";
import CardStatus from "@/src/components/cardStatus";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { ActionIcon } from "@mantine/core";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import placholderImg from "@/src/assets/images/placTableProduct.png";
import PaymentStatus from "@/src/components/payment-status";

export type MedicalTeamTableData = {
  id: number;
  productName: string;
  categoryName: string;
  activityType: string;
  user: string;
  paymentStatus: string;
  price: number;
  heroImage: any;
  quantity: number;
};

export const columns: ColumnDef<MedicalTeamTableData>[] = [
  {
    accessorKey: "productName",
    header: "Product",
    cell: ({ getValue, row }) => {
      const productName = getValue<string>();
      const heroImage = row.original.heroImage;
      const categoryName = row.original.categoryName;
      const id = row.original.id;

      return (
        <Link
          href={ROUTES.ADMIN.ACCOUNTSLISTDETAILS(id)}
          className="flex items-center gap-2"
        >
          <div className="bg-grayBack rounded-[50%] size-[50px] p-1 flex items-center justify-center">
            <Image
              src={heroImage || placholderImg}
              alt={productName}
              width={50}
              height={50}
              priority
              className="w-full h-full rounded-full  object-cover object-center"
            />
          </div>
          <div>
            <h2 className="text-[16px] font-SemiBold">{productName}</h2>
            <p className="text-grayMedium font-Regular text-[14px]">
              {categoryName}
            </p>
          </div>
        </Link>
      );
    },
  },

  {
    accessorKey: "activityType",
    header: "Activitie Type",
    cell: ({ getValue }) => {
      const activityType = getValue<string>();
      switch (activityType.toString().toLowerCase()) {
        case "1":
          return <CardStatus animation circle type="green" title={"Rent"} />;
        case "2":
          return <CardStatus circle type="blue" title={"Rent Out"} />;
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
    accessorKey: "name",
    header: "User",
    cell: ({ getValue }) => {
      const user = getValue<string>();
      return (
        <p className={`text-[16px]  text-grayMedium `}>{user || "User"}</p>
      );
    },
  },
  {
    accessorKey: "price",
    header: "Payment",
    cell: ({ getValue }) => {
      const price = getValue<number>();
      return <p className={`text-[16px]  text-grayMedium `}>{price}$</p>;
    },
  },
  {
    accessorKey: "paymentStatus",
    header: "Payment Status",
    cell: ({ getValue }) => {
      const paymentStatus = getValue<string>();

      return <PaymentStatus status={paymentStatus} />;
    },
  },

  {
    id: "actions",
  },
];
