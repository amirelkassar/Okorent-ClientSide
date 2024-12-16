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
export type RequestsTableData = {
  id: number;
  renterName: string;
  productName: string;
  memberSince: string;
  statusUser: string;
  status: string;
  quantity: number;
  rating: number;
  rentedItems: number;
  leasedItems: number;
  product: string;
  payment: string;
  paymentStatus: string;
  rentalPeriod: number;
  startDate: string;
  endDate: string;
  country: string;
  action: string;
  imgUser: StaticImageData;
  imgHome: StaticImageData;
  orderId: any;
};

export const columnsReq: ColumnDef<RequestsTableData>[] = [
  {
    accessorKey: "renterName",
    header: () => {
      return (
        <div className="flex items-center gap-1 cursor-pointer">
          <p className="text-[18px]">Renter</p>
          <FilterIcon />
        </div>
      );
    },
    cell: ({ getValue, row }) => {
      const name = getValue<string>();
      const id = row.original.orderId;
      return (
        <Link href={ROUTES.USER.ORDERID(id)} className="flex items-center gap-2">
          
          <Image
            src={avatar}
            alt={name}
            width={50}
            height={50}
            className="w-12 h-12 rounded-[50%] object-cover object-top"
          />
          <h2 className="text-[16px] font-SemiBold">{name}</h2>
        </Link>
      );
    },
  },

  {
    accessorKey: "productName",
    header: "Product",
    cell: ({ getValue, row }) => {
      const productName = getValue<string>();
      const id = row.original.id;

      return (
        <button className="flex items-center gap-2">
          <div className="size-[50px] rounded-[50%] p-[6px] bg-grayBack flex justify-center items-center">
            <Image
              src={phoneImg}
              alt={productName}
              width={50}
              height={50}
              className="w-auto h-full  object-contain "
            />
          </div>
          <h2 className="text-[16px] font-SemiBold max-w-[200px] truncate">
            {productName}
          </h2>
        </button>
      );
    },
  },
  {
    accessorKey: "from",
    header: "Start Date",
    cell: ({ getValue }) => {
      const from = getValue<string>();

      return (
        <p className="text-grayMedium text-[16px]">
          {getDate(from).fullYearWithMonthName}
        </p>
      );
    },
  },
  {
    accessorKey: "to",
    header: "Ending Date",
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
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ getValue }) => {
      const quantity = getValue<number>();
      return <p className="text-grayMedium text-[16px]">{quantity}</p>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue<string>();
      switch (status.toString()) {
        case "1":
          return <CardStatus circle type="blue" title={"new"} />;
        case "completed":
          return <CardStatus circle type="blue" title={status} />;
        case "ongoing":
          return <CardStatus circle type="green" title={status} />;
        case "declined":
          return <CardStatus circle type="red" title={status} />;
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
      return <p className=" text-[16px] font-semibold">{amount} $</p>;
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
