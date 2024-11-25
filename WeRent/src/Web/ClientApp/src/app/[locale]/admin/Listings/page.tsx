"use client";
import DeleteIcon from "@/src/assets/icons/delete";
import { DataTable } from "@/src/components/data-table";
import { ListingsDataAdmin } from "@/src/lib/dataUser";
import React from "react";
import { columns } from "./_components/column";
import QuickEditIcon from "@/src/assets/icons/quickEdit";
import { useDisclosure } from "@mantine/hooks";
import QuickEditModal from "./_components/QuickEditModal";
import CardPhoneAccount from "./_components/card-phone-account";

function Page() {
  const [opened, { open, close }] = useDisclosure(false);
  const functionSelect = [
    {
      title: "Quick Edit",
      icon: <QuickEditIcon className="max-h-4 w-auto" />,
      onclick: () => {
        open();
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
  return (
    <div className="mb-10 ">
      <DataTable
        title="11054 Listing"
        data={ListingsDataAdmin}
        columns={columns}
        Component={CardPhoneAccount}
        functionSelect={functionSelect}
      ></DataTable>
      <QuickEditModal opened={opened} close={close} />
    </div>
  );
}

export default Page;
