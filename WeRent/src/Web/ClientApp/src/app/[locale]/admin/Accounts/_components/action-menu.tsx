"use client";
import DeleteIcon from "@/src/assets/icons/delete";
import EditIcon from "@/src/assets/icons/edit";
import ExportIcon from "@/src/assets/icons/export";
import NoteTableIcon from "@/src/assets/icons/noteTable";
import ProfileIcon from "@/src/assets/icons/Profile";
import TrueIcon from "@/src/assets/icons/true";
import UnVerifyIcon from "@/src/assets/icons/unVerify";
import DataActions from "@/src/components/DataActions";
import ROUTES from "@/src/routes";
import React from "react";
import DeactivateModal from "./DeactivateModal";
import { useDisclosure } from "@mantine/hooks";

function ActionMenu({ id }: { id: any }) {
  const [opened, { open, close }] = useDisclosure(false);
  const options = [
    {
      label: "Edit Details",
      icon: <EditIcon className="w-3 h-auto" />,
      link: ROUTES.ADMIN.ACCOUNTSDETAILS(id),
      type: "link",
    },
    {
      label: "View User Profile",
      icon: <ProfileIcon className="w-3 h-auto" />,
      link: ROUTES.ADMIN.ACCOUNTSDETAILS(id),
      type: "link",
    },
    {
      label: "Export",
      icon: <ExportIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: () => {},
    },
    {
      label: "Verify",
      icon: <TrueIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: () => {},
    },
    {
      label: "Deactivate",
      icon: <UnVerifyIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: open,
    },
    {
      label: "Send Note",
      icon: <NoteTableIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: () => {},
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
      {opened && <DeactivateModal id={id} opened={opened} close={close} />}
    </>
  );
}

export default ActionMenu;
