"use client";
import DeleteIcon from "@/src/assets/icons/delete";
import DownloadIcon from "@/src/assets/icons/download";
import DataActions from "@/src/components/DataActions";
import React from "react";
import { useRowActionInvoicesInAdmin } from "../_hooks/use-delete-invoice";

function ActionMenu({ id }: { id: any }) {
  const { onSubmitDeleteInvoicesInAdmin } = useRowActionInvoicesInAdmin();

  const options = [
    {
      label: "Download",
      icon: <DownloadIcon className="w-4 h-auto" fill="#0F2A43" />,
      type: "btn",
      action: () => {},
    },
    {
      label: "Delete",
      icon: <DeleteIcon className="w-3 h-auto" />,
      type: "btn",
      action: () => {
        onSubmitDeleteInvoicesInAdmin({
          invoiceIds: [id],
        });
      },
    },
  ];
  return (
    <>
      <DataActions data={options} />
    </>
  );
}

export default ActionMenu;
