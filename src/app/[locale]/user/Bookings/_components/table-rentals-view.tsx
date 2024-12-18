"use client";
import { DataTable } from "@/src/components/data-table";
import ROUTES from "@/src/routes";
import React from "react";
import { TableHeader } from "@/src/components/table/table-header";
import { Link } from "@/src/navigation";
import CardIcon from "@/src/assets/icons/card";
import RentSwitch from "@/src/components/RentSwitch";
import { columns } from "./columns";
import DeleteIcon from "@/src/assets/icons/delete";
import ReorderIcon from "@/src/assets/icons/reorder";
import RentAgainIcon from "@/src/assets/icons/rentAgain";
import ReviewIcon from "@/src/assets/icons/review";
import CarReturn from "@/src/assets/icons/car-return";
import BarcodeIcon from "@/src/assets/icons/barcode";
import { GetMyOrderAll } from "@/src/hooks/queries/user/booking";
import Loading from "@/src/components/loading";
import { useSearchParams } from "next/navigation";
const FilterOptions = [
  {
    label: "Pending Approval",
    key: "OrderStatus",
    value: 1,
  },
  {
    label: "Accepted",
    key: "OrderStatus",
    value: 2,
  },
  {
    label: "Out for delivery",
    key: "OrderStatus",
    value: 3
  },
  {
    label: "Completed",
    key: "OrderStatus",
    value: 4,
  },
  {
    label: "Rejected",
    key: "OrderStatus",
    value: 5,
  },
];
const functionSelect = [
  {
    title: "Scan For Return",
    icon: <BarcodeIcon fill="#006AFF" className="max-h-4 w-auto" />,
    onclick: (ids: any) => {
      console.log([...ids]);
    },
  },
  {
    title: "Request to return",
    icon: <CarReturn fill="#006AFF" className="max-h-4 w-auto" />,
    onclick: (ids: any) => {
      console.log([...ids]);
    },
  },
  {
    title: "Review",
    icon: <ReviewIcon fill="#006AFF" className="max-h-4 w-auto" />,
    onclick: (ids: any) => {
      console.log([...ids]);
    },
  },
  {
    title: "Rent again",
    icon: <RentAgainIcon fill="#006AFF" className="max-h-4 w-auto" />,
    onclick: (ids: any) => {
      console.log([...ids]);
    },
  },
  {
    title: "Reorder",
    icon: <ReorderIcon fill="#006AFF" className="max-h-4 w-auto" />,
    onclick: (ids: any) => {
      console.log([...ids]);
    },
  },
  {
    title: "Delete",
    icon: <DeleteIcon className="max-h-4 w-auto" />,
    onclick: (ids: any) => {
      console.log([...ids]);
    },
  },
];
function TableRentalsView() {
  const searchParams = useSearchParams();

  const { data, isLoading } = GetMyOrderAll(searchParams.toString());
  console.log(data);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className=" hidden mdl:block">
      <TableHeader>
        <TableHeader.First title="Bookings">
          <Link
            href={ROUTES.USER.BOOKINGS + "?card=true"}
            className="px-3 duration-300 hover:shadow-md w-fit py-2 rounded-xl border border-black flex items-center justify-center gap-2"
          >
            <CardIcon />
            <p>Card View</p>
          </Link>
        </TableHeader.First>
        <TableHeader.Middle>
          <RentSwitch typeUser="user" />
        </TableHeader.Middle>
        <TableHeader.Last options={FilterOptions} />
      </TableHeader>
      <DataTable
        title=""
        data={data?.data || []}
        columns={columns}
        functionSelect={functionSelect}
      />
    </div>
  );
}

export default TableRentalsView;
