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
import { TableHeader } from "@/src/components/table/table-header";
import LinkGreen from "@/src/components/linkGreen";
import PlusIcon from "@/src/assets/icons/plus";
import CardBanner from "./_components/card-banner";
const FilterOptions = [
  {
    label: "Visible",
    key: "filter",
    value: "Visible",
  },
  {
    label: "Hide",
    key: "filter",
    value: "Hide",
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
      <TableHeader>
        <TableHeader.First title="Banners" />
        <TableHeader.Last className="mdl:!flex !hidden" options={FilterOptions}>
          <LinkGreen
            href={ROUTES.ADMIN.BANNERSADD}
            className={"gap-2 px-6 h-10"}
          >
            <PlusIcon className="w-4 h-auto" />
            Add Banner
          </LinkGreen>
        </TableHeader.Last>
      </TableHeader>
      <DataTable
        data={BannersData}
        columns={columns}
        Component={CardBanner}
        functionSelect={functionSelect}
      />
    </LayoutMaster>
  );
}

export default page;
