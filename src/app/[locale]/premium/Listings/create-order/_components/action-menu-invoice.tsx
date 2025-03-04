"use client";
import DeleteIcon from "@/src/assets/icons/delete";
import DataActions from "@/src/components/DataActions";
import React from "react";
import CloseIcon from "@/src/assets/icons/close";
import TrueIcon from "@/src/assets/icons/true";

function ActionMenuInvoice({ id }: { id: any }) {
  const options = [
    {
      label: "Mark as Accepted",
      icon: <TrueIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: () => {},
    },
    {
      label: "Mark as Rejected",
      icon: <CloseIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: () => {},
    },
    {
      label: "Delete",
      icon: <DeleteIcon className="w-3 h-auto" />,
      type: "btn",
      action: () => {},
    },
  ];

  return (
    <>
      <DataActions data={options} />
    </>
  );
}

export default ActionMenuInvoice;
