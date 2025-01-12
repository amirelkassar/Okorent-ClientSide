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
import EditModal from "./EditModal";
import NoteModal from "@/src/components/NoteModal";
import { useRowActionAccountInAdmin } from "../_hooks/use-row-action";

function ActionMenu({
  id,
  status = "",
  dataUSer,
}: {
  id: any;
  status: any;
  dataUSer: any;
}) {
  const [opened, { open, close }] = useDisclosure(false);
  const [opened2, { open: open2, close: close2 }] = useDisclosure(false);
  const [opened3, { open: open3, close: close3 }] = useDisclosure(false);
  //query
  const { onSubmitDeleteAccount, onSubmitActivateAccount } =
    useRowActionAccountInAdmin(id);

  const options = [
    //0
    {
      label: "Edit Details",
      icon: <EditIcon className="w-3 h-auto" />,
      type: "btn",
      action: open3,
    },
    //1
    {
      label: "View User Profile",
      icon: <ProfileIcon className="w-3 h-auto" />,
      link: ROUTES.ADMIN.ACCOUNTSDETAILS(id),
      type: "link",
    },
    //2
    {
      label: "Export",
      icon: <ExportIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: () => {},
    },
    //3
    {
      label: "Send Note",
      icon: <NoteTableIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: open2,
    },
    //4
    {
      label: "Verify",
      icon: <TrueIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: () => {},
    },
    //5
    {
      label: "UnVerify",
      icon: <UnVerifyIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: () => {},
    },
    //6
    {
      label: "Activate",
      icon: <TrueIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: () => {
        onSubmitActivateAccount();
      },
    },
    //7
    {
      label: "Deactivate",
      icon: <UnVerifyIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: open,
    },
    //8
    {
      label: "Delete",
      icon: <DeleteIcon className="w-3 h-auto" />,
      type: "btn",
      action: () => {
        onSubmitDeleteAccount();
      },
      color: "red",
    },
  ];
  const optionView = () => {
    switch (status.toString()) {
      case "1":
        return [
          options[0],
          options[1],
          options[2],
          options[3],
          options[4],
          options[7],
          options[8],
        ];
      case "2":
        return [
          options[0],
          options[1],
          options[2],
          options[3],
          options[5],
          options[7],
          options[8],
        ];
      case "3":
        return [
          options[0],
          options[1],
          options[2],
          options[3],
          options[6],
          options[8],
        ];
      default:
        return [];
    }
  };
  return (
    <>
      <DataActions data={optionView() || []} />
      {opened && <DeactivateModal id={id} opened={opened} close={close} />}
      {opened2 && <NoteModal id={id} opened={opened2} close={close2} />}
      {opened3 && (
        <EditModal opened={opened3} close={close3} dataUSer={dataUSer} />
      )}
    </>
  );
}

export default ActionMenu;
