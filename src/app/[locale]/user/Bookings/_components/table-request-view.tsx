"use client";
import { DataTable } from "@/src/components/data-table";
import ROUTES from "@/src/routes";
import React from "react";
import { TableHeader } from "@/src/components/table/table-header";
import { Link } from "@/src/navigation";
import CardIcon from "@/src/assets/icons/card";
import RentSwitch from "@/src/components/RentSwitch";
import { GetMyOrderOutAll } from "@/src/hooks/queries/user/booking";
import { columnsReq } from "./columnsReq";
import Loading from "@/src/components/loading";
import { useSearchParams } from "next/navigation";
import AcceptedIcon from "@/src/assets/icons/accepted";
import CarReturn from "@/src/assets/icons/car-return";
import CarIcon from "@/src/assets/icons/car";
import ClockIcon from "@/src/assets/icons/clock";
import NoteTableIcon from "@/src/assets/icons/noteTable";
import CancelIcon from "@/src/assets/icons/cancel";
import BarcodeIcon from "@/src/assets/icons/barcode";
import RejectOrderIcon from "@/src/assets/icons/RejectOrder";
const FilterOptionsReq = [
  {
    label: "New",
    key: "OrderStatus",
    value: 1,
  },
  {
    label: "Out for delivery",
    key: "OrderStatus",
    value: 2,
  },
  {
    label: "Received",
    key: "OrderStatus",
    value: 3,
  },
  {
    label: "Out For return",
    key: "OrderStatus",
    value: 4,
  },
  {
    label: "Returned",
    key: "OrderStatus",
    value: 5,
  },
  {
    label: "Rejected",
    key: "OrderStatus",
    value: 6,
  },
  {
    label: "Canceled",
    key: "OrderStatus",
    value: 7,
  },
];
const functionSelect = [
  {
    title: "Accept",
    icon: <AcceptedIcon fill="#006AFF" className="max-h-4 w-auto" />,
    onclick: (ids: any) => {
      console.log([...ids]);
    },
  },
  {
    title: "View QR code",
    icon: <BarcodeIcon fill="#006AFF" className="max-h-4 w-auto" />,
    onclick: (ids: any) => {
      console.log([...ids]);
    },
  },
  {
    title: "Mark as returned",
    icon: <CarReturn fill="#006AFF" className="max-h-4 w-auto" />,
    onclick: (ids: any) => {
      console.log([...ids]);
    },
  },
  {
    title: "Mark as Out for delivery",
    icon: <CarIcon fill="#006AFF" className="max-h-4 w-auto" />,
    onclick: (ids: any) => {
      console.log([...ids]);
    },
  },
  {
    title: "Version History",
    icon: <ClockIcon fill="#006AFF" className="max-h-4 w-auto" />,
    onclick: (ids: any) => {
      console.log([...ids]);
    },
  },
  {
    title: "Message",
    icon: <NoteTableIcon fill="#006AFF" className="max-h-4 w-auto" />,
    onclick: (ids: any) => {
      console.log([...ids]);
    },
  },
  {
    title: "Cancel",
    icon: <CancelIcon className="max-h-4 w-auto" />,
    onclick: (ids: any) => {
      console.log([...ids]);
    },
  },
  {
    title: "Reject",
    icon: <RejectOrderIcon className="max-h-4 w-auto" />,
    onclick: (ids: any) => {
      console.log([...ids]);
    },
  },
];
function TableRequestView() {
  const searchParams = useSearchParams();

  const { data, isLoading } = GetMyOrderOutAll(searchParams.toString());
  console.log(data);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className=" hidden mdl:block">
      <TableHeader>
        <TableHeader.First title="My Requests">
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
        <TableHeader.Last options={FilterOptionsReq} />
      </TableHeader>
      <DataTable title="" data={data?.data || []} columns={columnsReq} functionSelect={functionSelect} />
    </div>
  );
}

export default TableRequestView;
