"use client";
import DeleteIcon from "@/src/assets/icons/delete";
import EditIcon from "@/src/assets/icons/edit";
import DataActions from "@/src/components/DataActions";
import ROUTES from "@/src/routes";
import React from "react";
import { useDisclosure } from "@mantine/hooks";
import RefundIcon from "@/src/assets/icons/Refund";
import RefundModal from "./refund-modal";

function ActionMenu({ id }: { id: any }) {
  const [opened, { open, close }] = useDisclosure(false);
  const options = [
    {
      label: "Refund Payment",
      icon: <RefundIcon className="w-3 h-auto" />,
      type: "btn",
      action: open,
    },
    {
      label: "Edit ",
      icon: <EditIcon className="w-3 h-auto" />,
      link: ROUTES.ADMIN.LISTINGSDETAILSEdit(id),
      type: "link",
    },
    {
      label: "Delete",
      icon: <DeleteIcon className="w-3 h-auto" />,
      type: "btn",
      action: () => {},
      color: "red",
    },
  ];
  return (
    <>
      <DataActions data={options} />

      {opened && <RefundModal opened={opened} close={close} />}
    </>
  );
}

export default ActionMenu;
