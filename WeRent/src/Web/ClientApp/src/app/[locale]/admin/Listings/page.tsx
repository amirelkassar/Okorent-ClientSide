"use client";
import DeleteIcon from "@/src/assets/icons/delete";
import { DataTable } from "@/src/components/data-table";
import { ListingsDataAdmin } from "@/src/lib/dataUser";
import React from "react";
import { columns } from "./_components/column";
import QuickEditIcon from "@/src/assets/icons/quickEdit";
import { useDisclosure } from "@mantine/hooks";
import QuickEditModal from "./_components/QuickEditModal";

function Page() {
  const [opened, { open, close }] = useDisclosure(false);
  const functionSelect = [
    {
      title: "Quick Edit",
      icon: <QuickEditIcon />,
      onclick: () => {
        open();
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
  return (
    <div className="mb-10 ">
      <DataTable
        title="11054 Listing"
        data={ListingsDataAdmin}
        columns={columns}
        functionSelect={functionSelect}
      ></DataTable>
      <QuickEditModal opened={opened} close={close} />
    </div>
  );
}

export default Page;
