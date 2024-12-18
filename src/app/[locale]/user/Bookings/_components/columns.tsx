"use client";

import DeleteIcon from "@/src/assets/icons/delete";
import EditIcon from "@/src/assets/icons/edit";
import FilterIcon from "@/src/assets/icons/filter";
import { ActionIcon } from "@mantine/core";
import { ColumnDef } from "@tanstack/react-table";
import Image, { StaticImageData } from "next/image";
import phoneImg from "@/src/assets/images/phone.png";
import CardStatus from "@/src/components/cardStatus";
import avatar from "@/src/assets/images/avatar.png";
import { getDate } from "@/src/lib/utils";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import ImgProduct from "@/src/components/img-product";
import ActionMenuRent from "./action-menu-rent";
export type RequestsTableData = {
  id: number;
  name: string;
  phone: string;
  start: string;
  end: string;
  quantity: number;
  status: string;
  amount: number;
  paymentStatus: string;
  heroImage: StaticImageData;
  orderId: any;
};

export const columns: ColumnDef<RequestsTableData>[] = [
  {
    accessorKey: "productName",
    header: "Product",
    cell: ({ getValue, row }) => {
      const productName = getValue<string>();
      const id = row.original.orderId;
      const image = row.original.heroImage;
      return (
        <Link
          href={ROUTES.USER.ORDERID(id)}
          className="flex items-center gap-2"
        >
          <ImgProduct productName={productName} src={image} />
        </Link>
      );
    },
  },
  {
    accessorKey: "to",
    header: "Rental Ending Date",
    cell: ({ getValue }) => {
      const to = getValue<string>();

      return (
        <p className="text-grayMedium text-[16px]">
          {getDate(to).fullYearWithMonthName}
        </p>
      );
    },
  },
  {
    accessorKey: "lessorName",
    header: () => {
      return (
        <div className="flex items-center gap-1 cursor-pointer">
          <p className="text-[18px]">Lessor</p>
          <FilterIcon />
        </div>
      );
    },
    cell: ({ getValue, row }) => {
      const lessorName = getValue<string>();
      return (
        <div className="flex items-center gap-2">
          <Image
            src={avatar}
            alt={lessorName}
            width={50}
            height={50}
            className="w-12 h-12 rounded-[50%] object-cover object-top"
          />
          <h2 className="text-[16px] font-SemiBold">{lessorName}</h2>
        </div>
      );
    },
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue<string>();
      switch (status.toString()) {
        case "out for delivery":
          return <CardStatus animation circle type="blue" title={status} />;
        case "1":
          return <CardStatus circle type="blue" title={"pending"} />;
        case "accepted":
          return <CardStatus animation circle type="green" title={status} />;
        case "completed":
          return <CardStatus circle type="gray" title={status} />;
        case "rejected":
          return <CardStatus circle type="red" title={status} />;
        case "received by client":
          return <CardStatus circle type="green" title={status} />;
        default:
          return <CardStatus circle type="gray" title="--" />;
      }
    },
  },
  {
    accessorKey: "amount",
    header: "Payment",
    cell: ({ getValue }) => {
      const amount = getValue<number>();
      return <p className=" text-[16px] font-SemiBold">{amount}$</p>;
    },
  },
  {
    accessorKey: "paymentStatus",
    header: "Payment Status",
    cell: ({ getValue }) => {
      const paymentStatus = getValue<string>();
      switch (paymentStatus.toString()) {
        case "completed":
          return <CardStatus circle type="blue" title={paymentStatus} />;
        case "canceled":
          return <CardStatus circle type="red" title={paymentStatus} />;
        case "1":
          return <CardStatus circle type="green" title={"pending"} />;
        default:
          return <CardStatus circle type="gray" title="--" />;
      }
    },
  },
  {
    id: "actions",
    cell: ({row}) => {
      const orderId =row.original.orderId
      return (
        <div className="flex items-center gap-3 w-fit">
         <ActionMenuRent id={orderId}/>
        </div>
      );
    },
  },
];
