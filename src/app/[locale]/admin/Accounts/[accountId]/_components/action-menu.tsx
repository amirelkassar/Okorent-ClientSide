"use client";
import DeleteIcon from "@/src/assets/icons/delete";
import DataActions from "@/src/components/DataActions";
import React from "react";

function ActionMenu({ id }: { id: any }) {
  const options = [
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
    </>
  );
}

export default ActionMenu;
