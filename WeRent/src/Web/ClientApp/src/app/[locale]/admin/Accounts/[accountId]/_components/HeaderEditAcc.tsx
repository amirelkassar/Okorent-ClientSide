import DeactivateIcon from "@/src/assets/icons/Deactivate";
import DeleteIcon from "@/src/assets/icons/delete";
import ExportIcon from "@/src/assets/icons/export";
import NoteTableIcon from "@/src/assets/icons/noteTable";
import TrueIcon from "@/src/assets/icons/true";
import Events from "@/src/components/Events";
import React, { useState } from "react";
import SwitchViewProfile from "./switchViewProfile";
interface HeaderEditAccProps {
  id: number;
  viewProfile: string;
  setViewProfile: (value: string) => void;
}
const functionSelect = [
  {
    title: "Verify",
    icon: <TrueIcon />,
    onclick: (ids: any) => {
      console.log([...ids]);
    },
  },
  {
    title: "Export",
    icon: <ExportIcon />,
    onclick: (ids: any) => {
      console.log([...ids]);
    },
  },
  {
    title: "Deactivate",
    icon: <DeactivateIcon />,
    onclick: (ids: any) => {
      console.log([...ids]);
    },
  },
  {
    title: "Send Note",
    icon: <NoteTableIcon />,
    onclick: (ids: any) => {
      console.log([...ids]);
    },
  },
  {
    title: "Delete",
    icon: <DeleteIcon />,
    onclick: (ids: any) => {
      console.log([...ids]);
    },
  },
];
function HeaderEditAcc({
  id,
  viewProfile,
  setViewProfile,
}: HeaderEditAccProps) {
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
    </div>
  );
}

export default HeaderEditAcc;
