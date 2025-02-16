"use client";
import ChangeIcon from "@/src/assets/icons/change";
import CloseIcon from "@/src/assets/icons/close";
import HowIcon from "@/src/assets/icons/how";
import NoteTableIcon from "@/src/assets/icons/noteTable";
import DataActions from "@/src/components/DataActions";
import NoteModal from "@/src/components/NoteModal";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import SuspendModal from "./SuspendModal";
import CancelModal from "./cancel-modal";
import ChangePlanModal from "./change-plan-modal";

function ActionMenu({ id }: { id: any }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [opened2, { open: open2, close: close2 }] = useDisclosure(false);
  const [opened3, { open: open3, close: close3 }] = useDisclosure(false);
  const [opened4, { open: open4, close: close4 }] = useDisclosure(false);

  const options = [
    {
      label: "Change Plan",
      icon: <ChangeIcon className="w-3 h-auto" />,
      type: "btn",
      action: open4,
    },
    {
      label: "Suspend Plan",
      icon: <HowIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: open2,
    },
    {
      label: "Send Note ",
      icon: <NoteTableIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: open,
    },
    {
      label: "Cancel Plan ",
      icon: <CloseIcon fill="#E31B1B" className="w-3 h-auto" />,
      type: "btn",
      action: open3,
    },
  ];
  return (
    <>
      <DataActions data={options} />
      {opened && <NoteModal id={id} opened={opened} close={close} />}
      {opened2 && <SuspendModal opened={opened2} close={close2} />}
      {opened3 && <CancelModal opened={opened3} close={close3} />}
      {opened4 && <ChangePlanModal opened={opened4} close={close4} />}
    </>
  );
}

export default ActionMenu;
