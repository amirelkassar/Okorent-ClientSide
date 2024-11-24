"use client";
import DeleteIcon from "@/src/assets/icons/delete";
import EditIcon from "@/src/assets/icons/edit";
import NoteTableIcon from "@/src/assets/icons/noteTable";
import DataActions from "@/src/components/DataActions";
import ROUTES from "@/src/routes";
import React from "react";
import { useDisclosure } from "@mantine/hooks";
import BagIcon from "@/src/assets/icons/bag";
import NoteModal from "@/src/components/NoteModal";

function ActionMenu({ id }: { id: any }) {
  const [opened, { open, close }] = useDisclosure(false);
  const options = [
    {
      label: "Edit Details",
      icon: <EditIcon className="w-3 h-auto" />,
      link: ROUTES.ADMIN.LISTINGSDETAILSEdit(id),
      type: "link",
    },
    {
      label: "View Listing",
      icon: <BagIcon className="w-3 h-auto" />,
      link: ROUTES.ADMIN.LISTINGSDETAILS(id),
      type: "link",
    },
    {
      label: "Send Note",
      icon: <NoteTableIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: open,
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
      {opened && <NoteModal id={id} opened={opened} close={close} />}
    </>
  );
}

export default ActionMenu;
