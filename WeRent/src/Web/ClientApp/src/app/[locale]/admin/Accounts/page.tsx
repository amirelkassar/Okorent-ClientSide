"use client";
import React from "react";
import { UserData } from "@/src/lib/dataUser";
import { columns } from "./_components/column";
import { DataTable } from "@/src/components/data-table";
import Button from "@/src/components/button";
import DeleteIcon from "@/src/assets/icons/delete";
import TrueIcon from "@/src/assets/icons/true";
import ExportIcon from "@/src/assets/icons/export";
import NoteTableIcon from "@/src/assets/icons/noteTable";
import DeactivateIcon from "@/src/assets/icons/Deactivate";

const functionSelect = [
  {
    title: "Verify",
    icon: <TrueIcon />,
    onclick: (ids: any) => {
      console.log([...ids]);
    },
  },
  {
    title: "Export",
    icon: <ExportIcon />,
    onclick: (ids: any) => {
      console.log([...ids]);
    },
  },
  {
    title: "Deactivate",
    icon: <DeactivateIcon />,
    onclick: (ids: any) => {
      console.log([...ids]);
    },
  },
  {
    title: "Send Note",
    icon: <NoteTableIcon />,
    onclick: (ids: any) => {
      console.log([...ids]);
    },
  },
  {
    title: "Delete",
    icon: <DeleteIcon />,
    onclick: (ids: any) => {
      console.log([...ids]);
    },
  },
];
function page() {
  return (
    <div className="mb-10 ">
      <DataTable
        title="3665 Account"
        data={UserData}
        columns={columns}
        addUser
        functionSelect={functionSelect}
      ></DataTable>
      <Button className={"w-fit mx-auto"}>Load More</Button>
    </div>
  );
}

export default page;
