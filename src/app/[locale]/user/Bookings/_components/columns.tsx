"use client";
import FilterIcon from "@/src/assets/icons/filter";
import { ColumnDef } from "@tanstack/react-table";
import Image, { StaticImageData } from "next/image";
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
  //heroImage: StaticImageData;
  orderId: any;
};

export const columns: ColumnDef<RequestsTableData>[] = [
  {
    accessorKey: "productName",
    header: "Product",
    cell: ({ getValue, row }) => {
      const productName = getValue<string>();
      const id = row.original.id;
      //const image = row.original.heroImage;
      return (
        <Link
          href={ROUTES.USER.ORDERID(id)}
          className="flex items-center gap-2"
        >
           <Image
            src={avatar}
            alt={productName}
            width={50}
            height={50}
            className="w-12 h-12 rounded-[50%] object-cover object-top"
          />
          <h2 className="text-[16px] font-SemiBold max-w-[260px] sml:max-w-[220px] truncate">{productName}</h2>
          {/* <ImgProduct productName={productName} src={image} /> */}
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
        case "1":
          return <CardStatus circle type="blue" title={"new"} />;
        case "3":
          return <CardStatus circle type="green" title={"Accepted"} />;
        case "4":
          return <CardStatus circle type="blue" title={"Out For Delivery"} />;
        case "6":
          return <CardStatus circle type="green" title={"Received"} />;
        case "7":
          return <CardStatus circle type="gray" title={"Returned"} />;
        case "8":
          return <CardStatus circle type="red" title={"Rejected"} />;
        case "9":
          return <CardStatus circle type="red" title={"Canceled"} />;
        case "10":
          return <CardStatus circle type="green" title={"Compeleted"} />;
        case "11":
          return (
            <CardStatus circle type="gray" title={"Request for returned"} />
          );
        case "12":
          return <CardStatus circle type="gray" title={"out for return"} />;

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
        case "6":
          return <CardStatus circle type="green" title={"Pending"} />;
        case "7":
          return <CardStatus circle type="blue" title={"Completed"} />;
        case "8":
          return <CardStatus circle type="red" title={"Refunded"} />;
        case "2":
          return <CardStatus circle type="gray" title={"Partial Payment"} />;
        default:
          return <CardStatus type="gray" title="--" />;
      }
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original.id;
      const status = row.original.status;
      return (
        <div className="flex items-center gap-3 w-fit">
          <ActionMenuRent id={id} status={status} />
        </div>
      );
    },
  },
];
