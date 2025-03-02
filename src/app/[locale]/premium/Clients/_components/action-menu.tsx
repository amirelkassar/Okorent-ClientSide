"use client";
import DeleteIcon from "@/src/assets/icons/delete";
import EditIcon from "@/src/assets/icons/edit";
import DataActions from "@/src/components/DataActions";
import React from "react";
import ROUTES from "@/src/routes";

function ActionMenu({ id }: { id: any }) {
  const options = [
    {
      label: "Edit",
      icon: <EditIcon className="w-3 h-auto" />,
      link: ROUTES.USER.LISTINGSDETAILS(id) + "/edit",
      type: "link",
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
