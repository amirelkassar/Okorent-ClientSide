"use client";

import DeleteIcon from "@/src/assets/icons/delete";
import EditIcon from "@/src/assets/icons/edit";
import FilterIcon from "@/src/assets/icons/filter";
import { ActionIcon } from "@mantine/core";
import { ColumnDef } from "@tanstack/react-table";
import Image, { StaticImageData } from "next/image";
import phoneImg from "@/src/assets/images/phone.png";
import CardStatus from "@/src/components/cardStatus";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type RequestsTableData = {
  id: number;
  name: string;
  phone: string;
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
};

export const columnsReq = (
  openModal: (id: number) => void
): ColumnDef<RequestsTableData>[] => [
  {
    accessorKey: "name",
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
      const img = row.original.imgUser;
      const id = row.original.id;

      return (
        <button
          className="flex items-center gap-2"
          onClick={() => {
            openModal(id);
          }}
        >
          <Image
            src={img}
            alt={name}
            width={50}
            height={50}
            className="w-12 h-12 rounded-[50%] object-cover object-top"
          />
          <h2 className="text-[16px] font-SemiBold">{name}</h2>
        </button>
      );
    },
  },

  {
    accessorKey: "phone",
    header: "Product",
    cell: ({ getValue, row }) => {
      const phone = getValue<string>();
      const id = row.original.id;

      return (
        <button
          onClick={() => {
            openModal(id);
          }}
          className="flex items-center gap-2"
        >
          <div className="size-[50px] rounded-[50%] p-[6px] bg-grayBack flex justify-center items-center">
            <Image
              src={phoneImg}
              alt={phone}
              width={50}
              height={50}
              className="w-auto h-full  object-contain "
            />
          </div>
          <h2 className="text-[16px] font-SemiBold">{phone}</h2>
        </button>
      );
    },
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
    cell: ({ getValue }) => {
      const start = getValue<string>();

      return <p className="text-grayMedium text-[16px]">{start}</p>;
    },
  },
  {
    accessorKey: "endDate",
    header: "Ending Date",
    cell: ({ getValue }) => {
      const end = getValue<string>();

      return <p className="text-grayMedium text-[16px]">{end}</p>;
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
      switch (status.toLowerCase()) {
        case "new":
          return <CardStatus circle type="blue" title={status} />;
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
    accessorKey: "payment",
    header: "Payment",
    cell: ({ getValue }) => {
      const payment = getValue<number>();
      return <p className=" text-[16px] font-semibold">{payment}</p>;
    },
  },
  {
    accessorKey: "paymentStatus",
    header: "Payment Status",
    cell: ({ getValue }) => {
      const paymentStatus = getValue<string>();
      switch (paymentStatus.toLowerCase()) {
        case "completed":
          return <CardStatus circle type="blue" title={paymentStatus} />;
        case "canceled":
          return <CardStatus circle type="red" title={paymentStatus} />;
        case "pending":
          return <CardStatus circle type="green" title={paymentStatus} />;
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
