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
import NoteModal from "./NoteModal";
import EditModal from "./EditModal";

function ActionMenu({ id }: { id: any }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [opened2, { open: open2, close: close2 }] = useDisclosure(false);
  const [opened3, { open: open3, close: close3 }] = useDisclosure(false);
  const options = [
    {
      label: "Edit Details",
      icon: <EditIcon className="w-3 h-auto" />,
      type: "btn",
      action: open3,
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
      action: open2,
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
      {opened2 && <NoteModal id={id} opened={opened2} close={close2} />}
      {opened3 && <EditModal id={id} opened={opened3} close={close3} />}
    </>
  );
}

export default ActionMenu;
