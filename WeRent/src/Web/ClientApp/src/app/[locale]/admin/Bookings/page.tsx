'use client';
import { DataTable } from "@/src/components/data-table";
import { BOOKINGS_ADMIN } from "@/src/lib/dataUser";
import React from "react";
import { columns } from "./_components/column";
import CardPhoneAccount from "./_components/card-phone-account";
import { useDisclosure } from "@mantine/hooks";
import DeleteIcon from "@/src/assets/icons/delete";
import RefundIcon from "@/src/assets/icons/Refund";
import EditIcon from "@/src/assets/icons/edit";
import RefundModal from "./_components/refund-modal";

function Page() {
  const [opened, { open, close }] = useDisclosure(false);

  const functionSelect = [
    {
      title: "Refund Payment",
      icon: <RefundIcon fill="#006AFF" className="max-h-4 w-auto" />,
      onclick: () => {
        open();
      },
    },
    {
      title: "Edit ",
      icon: <EditIcon fill="#006AFF" className="max-h-4 w-auto" />,
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
  return (
    <div>
      <DataTable
        data={BOOKINGS_ADMIN}
        title=" Booking - 11054"
        columns={columns}
        Component={CardPhoneAccount}
        functionSelect={functionSelect}
      />
      <RefundModal opened={opened} close={close} />
    </div>
  );
}

export default Page;
