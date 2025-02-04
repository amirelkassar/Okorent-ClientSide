"use client";
import DeleteIcon from "@/src/assets/icons/delete";
import ViewIcon from "@/src/assets/icons/view";
import DataActions from "@/src/components/DataActions";
import { usePathname } from "@/src/navigation";
import ROUTES from "@/src/routes";
import React from "react";
import { useRowActionNotesInAdmin } from "./use-row-action";

function ActionMenu({ id }: { id: any }) {
  const path = usePathname();
  const { onSubmitDeleteNotes } = useRowActionNotesInAdmin();

  const options = [
    {
      label: "View Details",
      icon: <ViewIcon className="w-3 h-auto" />,
      type: "link",
      link: path.includes(ROUTES.ADMIN.NOTESBOOKINGS)
        ? ROUTES.ADMIN.NOTESBOOKINGSDETAILS(id)
        : ROUTES.ADMIN.NOTESACCOUNTSDETAILS(id),
    },
    {
      label: "Delete",
      icon: <DeleteIcon className="w-3 h-auto" />,
      type: "btn",
      action: () => {
        onSubmitDeleteNotes(id);
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
