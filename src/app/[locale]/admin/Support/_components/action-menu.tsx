"use client";
import DeleteIcon from "@/src/assets/icons/delete";
import ProfileIcon from "@/src/assets/icons/Profile";
import DataActions from "@/src/components/DataActions";
import React from "react";
import { useDisclosure } from "@mantine/hooks";
import ViewIcon from "@/src/assets/icons/view";
import HourGlassIcon from "@/src/assets/icons/hourglass";
import MarkIcon from "@/src/assets/icons/mark";
import AssignModal from "./assign-modal";

function ActionMenu({ id }: { id: any }) {
  const [opened, { open, close }] = useDisclosure(false);
  const options = [
    {
      label: "Mark as In Progress",
      icon: <HourGlassIcon />,
      type: "btn",
      action: () => {},
    },
    {
      label: "Mark as Solved",
      icon: <MarkIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: () => {},
    },
    {
      label: "Assign",
      icon: <ProfileIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: open,
    },
    {
      label: "View Details",
      icon: <ViewIcon className="w-3 h-auto" />,
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
      {opened && <AssignModal id={id} opened={opened} close={close} />}
    </>
  );
}

export default ActionMenu;
