"use client";

import EditIcon from "@/src/assets/icons/edit";
import FilterIcon from "@/src/assets/icons/filter";
import { ColumnDef } from "@tanstack/react-table";
import PaymentStatus from "@/src/components/payment-status";
import ImgProduct from "@/src/components/img-product";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { getDate } from "@/src/lib/utils";
import avatar from "@/src/assets/images/avatar.png";

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
  amount: string;
  paymentStatus: string;
  rentalPeriod: number;
  startDate: string;
  to: string;
  country: string;
  action: string;
  userImage: string;
  heroImage: string;
};

export const columns: ColumnDef<RequestsTableData>[] = [
  {
    accessorKey: "productName",
    header: "Product",
    cell: ({ getValue, row }) => {
      const productName = getValue<string>();
      const image = row.original.heroImage;
      const id = row.original.id;

      return (
        <Link
          href={ROUTES.USER.ORDERID(id)}
          className="flex items-center gap-2"
        >
          {" "}
          <ImgProduct productName={productName} src={image} />{" "}
        </Link>
      );
    },
  },
  {
    accessorKey: "to",
    header: "Rentals Ending Date",
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
      const userImage = row.original.userImage;

      return <ImgProduct productName={name} src={userImage || avatar} />;
    },
  },

  {
    accessorKey: "amount",
    header: "Payment",
    cell: ({ getValue }) => {
      const payment = getValue<number>();
      return <p className="font-SemiBold text-[16px]">{payment}$</p>;
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
