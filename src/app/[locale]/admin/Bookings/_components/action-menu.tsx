"use client";
import DeleteIcon from "@/src/assets/icons/delete";
import EditIcon from "@/src/assets/icons/edit";
import DataActions from "@/src/components/DataActions";
import React from "react";
import { useDisclosure } from "@mantine/hooks";
import RefundIcon from "@/src/assets/icons/Refund";
import RefundModal from "./refund-modal";
import NoteModal from "@/src/components/NoteModal";
import CancelModal from "./cancel-modal";

function ActionMenu({ id }: { id: any }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [opened2, { open: open2, close: close2 }] = useDisclosure(false);
  const [opened3, { open: open3, close: close3 }] = useDisclosure(false);

  const options = [
    {
      label: "Refund Payment",
      icon: <RefundIcon className="w-3 h-auto" />,
      type: "btn",
      action: open,
    },
    {
      label: "Send Note",
      icon: <EditIcon className="w-3 h-auto" />,
      type: "btn",
      action: open2,
    },
    {
      label: "Delete",
      icon: <DeleteIcon className="w-3 h-auto" />,
      type: "btn",
      action: open3,
    },
  ];
  return (
    <>
      <DataActions data={options} />

      {opened && <RefundModal opened={opened} close={close} />}
      {opened2 && <NoteModal opened={opened2} close={close2} />}
      {opened3 && <CancelModal opened={opened3} close={close3} id={id} />}
    </>
  );
}

export default ActionMenu;
