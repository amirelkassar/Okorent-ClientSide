"use client";
import { DataTable } from "@/src/components/data-table";
import { TableHeader } from "@/src/components/table/table-header";
import React from "react";
import { columns } from "./_components/column";
import CardPhoneDemo from "./_components/card-phone-demo";

const FilterOptionsBooking = [
  {
    label: "New",
    key: "Filter",
    value: "New",
  },
  {
    label: "In Progress",
    key: "Filter",
    value: "InProgress",
  },
  {
    label: "Completed",
    key: "Filter",
    value: "Completed",
  },
];

type RequestStatus = "In Progress" | "New" | "Completed";

interface Request {
  id: number;
  sender: string;
  email: string;
  status: RequestStatus;
  requestDate: string;
  date: string;
}

function Page() {
    
  const requests: Request[] = [
    {
      id: 1,
      sender: "Ahmed Mohamed",
      email: "marchmanx@gmail.com",
      status: "In Progress",
      requestDate: "Today | 05:30",
      date: "15/8/2024",
    },
    {
      id: 2,
      sender: "Ahmed Mohamed",
      email: "marchmanx@gmail.com",
      status: "New",
      requestDate: "5 Feb 2025",
      date: "15/8/2024",
    },
    {
      id: 3,
      sender: "Ahmed Mohamed",
      email: "marchmanx@gmail.com",
      status: "Completed",
      requestDate: "5 Feb 2025",
      date: "15/8/2024",
    },
    {
      id: 4,
      sender: "Ahmed Mohamed",
      email: "marchmanx@gmail.com",
      status: "New",
      requestDate: "5 Feb 2025",
      date: "15/8/2024",
    },
    {
      id: 5,
      sender: "Ahmed Mohamed",
      email: "marchmanx@gmail.com",
      status: "New",
      requestDate: "5 Feb 2025",
      date: "15/8/2024",
    },
    {
      id: 6,
      sender: "Ahmed Mohamed",
      email: "marchmanx@gmail.com",
      status: "New",
      requestDate: "5 Feb 2025",
      date: "15/8/2024",
    },
    {
      id: 7,
      sender: "Ahmed Mohamed",
      email: "marchmanx@gmail.com",
      status: "New",
      requestDate: "5 Feb 2025",
      date: "15/8/2024",
    },
  ];
  return (
    <div>
      <TableHeader>
        <TableHeader.First title={`Demo Reqests - 1105`} />
        <TableHeader.Last options={FilterOptionsBooking} />
      </TableHeader>

      <div>
        <DataTable
          data={requests}
          columns={columns}
          Component={CardPhoneDemo}
          functionSelect={[]}
        />
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  );
}

export default Page;
