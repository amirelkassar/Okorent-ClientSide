"use client";
import { DataTable } from "@/src/components/data-table";
import { BOOKINGS_ADMIN } from "@/src/lib/dataUser";
import React from "react";
import { columns } from "./_components/column";
import CardPhoneAccount from "./_components/card-phone-account";
import { useDisclosure } from "@mantine/hooks";
import DeleteIcon from "@/src/assets/icons/delete";
import RefundIcon from "@/src/assets/icons/Refund";
import RefundModal from "./_components/refund-modal";
import NoteTableIcon from "@/src/assets/icons/noteTable";
import NoteModal from "@/src/components/NoteModal";
import CancelModal from "./_components/cancel-modal";

function Page() {
  const [opened, { open, close }] = useDisclosure(false);
  const [opened2, { open: open2, close: close2 }] = useDisclosure(false);
  const [opened3, { open: open3, close: close3 }] = useDisclosure(false);

  const functionSelect = [
    {
      title: "Refund Payment",
      icon: <RefundIcon fill="#006AFF" className="max-h-4 w-auto" />,
      onclick: () => {
        open();
      },
    },
    {
      title: "Send Note",
      icon: <NoteTableIcon className="max-h-4 w-auto" />,
      onclick: open2,
    },
    {
      title: "Cancel",
      icon: <DeleteIcon className="max-h-4 w-auto" />,
      onclick:open3,
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
      <NoteModal opened={opened2} close={close2} />
      <CancelModal opened={opened3} close={close3} />
    </div>
  );
}

export default Page;
