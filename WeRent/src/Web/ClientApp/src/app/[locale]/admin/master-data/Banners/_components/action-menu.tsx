"use client";
import DeleteIcon from "@/src/assets/icons/delete";
import EditIcon from "@/src/assets/icons/edit";
import DataActions from "@/src/components/DataActions";
import ROUTES from "@/src/routes";
import React from "react";
import PasswordIconHide from "@/src/assets/icons/password";
import PasswordIconShow from "@/src/assets/icons/PasswordIconShow";

function ActionMenu({ id }: { id: any }) {
  const options = [
    {
      label: "Make Visible",
      icon: <PasswordIconShow className="w-3 h-auto" />,
      type: "btn",
      action: () => {},
    },
    {
      label: "Hide",
      icon: <PasswordIconHide className="w-3 h-auto" />,
      type: "btn",
      action: () => {},
    },

    {
      label: "Edit Details",
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
    </>
  );
}

export default ActionMenu;
