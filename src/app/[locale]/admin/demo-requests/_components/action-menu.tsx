"use client";
import DeleteIcon from "@/src/assets/icons/delete";
import HourGlassIcon from "@/src/assets/icons/hourglass";
import TrueIcon from "@/src/assets/icons/true";
import DataActions from "@/src/components/DataActions";
import React from "react";

function ActionMenu({ id }: { id: any }) {
  const options = [
    {
      label: "Mark as In Progress",
      icon: <HourGlassIcon className="w-3 h-auto" />,
      type: "btn",
      action: () => {},
    },
    {
      label: "Mark as completed",
      icon: <TrueIcon fill="#6F6B7D" className="w-3 h-auto" />,
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

export default ActionMenu;
