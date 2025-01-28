"use client";
import FilterIcon from "@/src/assets/icons/filter";
import { ColumnDef } from "@tanstack/react-table";
import { StaticImageData } from "next/image";
import avatar from "@/src/assets/images/avatar.png";
import { getDate } from "@/src/lib/utils";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import ImgProduct from "@/src/components/img-product";
import ActionMenuRent from "./action-menu-rent";
import OrderStatus from "@/src/components/order-status";
import PaymentStatus from "@/src/components/payment-status";
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
  prodId: any;
  productName: any;
  userImage: any;
  lessorId: any;
  lessorName: any;
};

export const columns: ColumnDef<RequestsTableData>[] = [
  {
    accessorKey: "productName",
    header: "Product",
    cell: ({ getValue, row }) => {
      const productName = getValue<string>();
      const id = row.original.id;
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
      const userImage = row.original.userImage;
      return (
        <div className="flex items-center gap-2">
          <ImgProduct productName={lessorName} src={userImage || avatar} />
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue<string>();

      return <OrderStatus status={status} />;
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
      return <PaymentStatus status={paymentStatus} />;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original.id;
      const ProdId = row.original.prodId;
      const status = row.original.status;
      const dataForReview = {
        ProdId: ProdId,
        imageProduct: row.original.heroImage,
        productName: row.original.productName,
      };
      const dataForReviewUser = {
        userId: row.original.lessorId,
        imageUser: row.original.userImage,
        UserName: row.original.lessorName,
      };
      return (
        <div className="flex items-center gap-3 w-fit">
          <ActionMenuRent
            id={id}
            ProdId={ProdId}
            status={status}
            dataForReview={dataForReview}
            dataForReviewUser={dataForReviewUser}
          />
        </div>
      );
    },
  },
];
