"use client";
import React from "react";
import LayoutMaster from "../_components/layout-master";
import { DataTable } from "@/src/components/data-table";
import { AdsData } from "@/src/lib/dataUser";
import EditIcon from "@/src/assets/icons/edit";
import DeleteIcon from "@/src/assets/icons/delete";
import ROUTES from "@/src/routes";
import { columns } from "./_components/column";
import VerifyIcon from "@/src/assets/icons/verify";
import PauseIcon from "@/src/assets/icons/pause";
const FilterOptions = [
  {
    label: "Activate",
    type: "filter",
    key: "Activate",
  },
  {
    label: "Suspend",
    type: "filter",
    key: "Suspend",
  },
];
function page() {
  const functionSelect = [
    {
      title: "Activate",
      icon: <VerifyIcon fill="#006AFF" className="max-h-4 w-auto" />,
      onclick: () => {},
    },
    {
      title: "Suspend",
      icon: <PauseIcon className="max-h-4 w-auto" />,
      onclick: () => {},
    },

    {
      title: "Edit",
      icon: <EditIcon fill="#006AFF" className="max-h-4 w-auto" />,
      onclick: () => {},
    },
    {
      title: "Delete",
      icon: <DeleteIcon className="max-h-4 w-auto" />,
      onclick: () => {},
    },
  ];
  return (
    <LayoutMaster>
      <DataTable
        title="Ads Managment - 112 "
        data={AdsData}
        columns={columns}
        functionSelect={functionSelect}
        filterData={FilterOptions}
        filter={"buttons"}
        filterBy="status"
      />
    </LayoutMaster>
  );
}

export default page;
