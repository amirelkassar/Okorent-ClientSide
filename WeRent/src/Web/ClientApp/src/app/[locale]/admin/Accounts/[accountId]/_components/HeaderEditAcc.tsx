"use client";
import DeactivateIcon from "@/src/assets/icons/Deactivate";
import DeleteIcon from "@/src/assets/icons/delete";
import ExportIcon from "@/src/assets/icons/export";
import NoteTableIcon from "@/src/assets/icons/noteTable";
import TrueIcon from "@/src/assets/icons/true";
import Events from "@/src/components/Events";
import React, { useState } from "react";
import SwitchViewProfile from "./switchViewProfile";
import NoteModal from "@/src/components/NoteModal";
import { useDisclosure } from "@mantine/hooks";
import DeactivateModal from "../../_components/DeactivateModal";
interface HeaderEditAccProps {
  id: number;
  viewProfile: string;
  setViewProfile: (value: string) => void;
}

function HeaderEditAcc({
  id,
  viewProfile,
  setViewProfile,
}: HeaderEditAccProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const [opened2, { open: open2, close: close2 }] = useDisclosure(false);

  const functionSelect = [
    {
      title: "Verify",
      icon: <TrueIcon className="max-h-4 w-auto" />,
      onclick: (ids: any) => {
        console.log([...ids]);
      },
    },
    {
      title: "Export",
      icon: <ExportIcon className="max-h-4 w-auto" />,
      onclick: (ids: any) => {
        console.log([...ids]);
      },
    },
    {
      title: "Deactivate",
      icon: <DeactivateIcon className="max-h-4 w-auto" />,
      onclick: open2,
    },
    {
      title: "Send Note",
      icon: <NoteTableIcon className="max-h-4 w-auto" />,
      onclick: open,
    },
    {
      title: "Delete",
      icon: <DeleteIcon className="max-h-4 w-auto" />,
      onclick: (ids: any) => {
        console.log([...ids]);
      },
    },
  ];
  return (
    <div className="flex items-center justify-between gap-7 flex-wrap mb-8">
      <div className="flex items-center gap-5">
        <h2 className="text-lg lg:text-[32px] font-SemiBold">Profile</h2>
        <div className="flex items-center gap-3 flex-wrap">
          {functionSelect.map((item, index) => {
            return <Events key={index} item={item} ids={id} />;
          })}
        </div>
      </div>
      <SwitchViewProfile
        viewProfile={viewProfile}
        setViewProfile={setViewProfile}
      />
      {opened2 && <DeactivateModal id={id} opened={opened2} close={close2} />}
      <NoteModal opened={opened} close={close} />
    </div>
  );
}

export default HeaderEditAcc;
