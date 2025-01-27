"use client";
import { TableHeader } from "@/src/components/table/table-header";
import React from "react";
import { DataTable } from "@/src/components/data-table";
import { columns } from "./_components/column";
import DeleteIcon from "@/src/assets/icons/delete";
import CardPhoneNote from "./_components/card-phone-note";
const functionSelect = [
  {
    title: "Delete",
    icon: <DeleteIcon className="max-h-4 w-auto " />,
    onclick: (ids: any) => {
      console.log(ids);
    },
  },
];
const data = [
  {
    id: 1,
    name: "Ahmed Mohamed",
    email: "marchmanx@gmail.com",
    noteType: "Announcement",
    noteContent: "I want help in adjusting my listings",
    date: "15/8/2024 | Today | 05:30 PM",
  },
  {
    id: 2,
    name: "Ahmed Mohamed",
    email: "marchmanx@gmail.com",
    noteType: "Warning",
    noteContent: "I want help in adjusting my listings",
    date: "15/8/2024 | Today | 05:30 PM",
  },
  {
    id: 3,
    name: "Ahmed Mohamed",
    email: "marchmanx@gmail.com",
    noteType: "Announcement",
    noteContent: "I want help in adjusting my listings",
    date: "15/8/2024 | Today | 05:30 PM",
  },
  {
    id: 4,
    name: "Ahmed Mohamed",
    email: "marchmanx@gmail.com",
    noteType: "Warning",
    noteContent: "I want help in adjusting my listings",
    date: "15/8/2024 | Today | 05:30 PM",
  },
  {
    id: 5,
    name: "Ahmed Mohamed",
    email: "marchmanx@gmail.com",
    noteType: "Announcement",
    noteContent: "I want help in adjusting my listings",
    date: "15/8/2024 | Today | 05:30 PM",
  },
  {
    id: 6,
    name: "Ahmed Mohamed",
    email: "marchmanx@gmail.com",
    noteType: "Warning",
    noteContent: "I want help in adjusting my listings",
    date: "15/8/2024 | Today | 05:30 PM",
  },
];

function page() {
  return (
    <div className="mb-10 ">
      <TableHeader>
        <TableHeader.First title={`Notes History`}></TableHeader.First>
      </TableHeader>

      <div>
        <DataTable
          title=""
          data={data}
          columns={columns}
          Component={CardPhoneNote}
          functionSelect={functionSelect}
        ></DataTable>
      </div>
    </div>
  );
}

export default page;
