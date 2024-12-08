"use client";
import React from "react";
import LayoutMaster from "../_components/layout-master";
import { DataTable } from "@/src/components/data-table";
import { BannersData } from "@/src/lib/dataUser";
import { columns } from "./_components/column";
import PasswordIconShow from "@/src/assets/icons/PasswordIconShow";
import EditIcon from "@/src/assets/icons/edit";
import DeleteIcon from "@/src/assets/icons/delete";
import PasswordIconHide from "@/src/assets/icons/password";
import ROUTES from "@/src/routes";
const FilterOptions = [
  {
    label: "Visible",
    type: "filter",
    key: "Visible",
  },
  {
    label: "Hide",
    type: "filter",
    key: "Hide",
  },
];
function page() {
  const functionSelect = [
    {
      title: "Make Visible",
      icon: <PasswordIconShow fill="#006AFF" className="max-h-4 w-auto" />,
      onclick: () => {},
    },
    {
      title: "Hide",
      icon: <PasswordIconHide fill="#006AFF" className="max-h-4 w-auto" />,
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
        title="Banners"
        data={BannersData}
        columns={columns}
        functionSelect={functionSelect}
        filterData={FilterOptions}
        filter={'buttons'}
        filterBy="status"
        cardView={ROUTES.ADMIN.BANNERSADD}
      />
    </LayoutMaster>
  );
}

export default page;
