"use client";
import DeleteIcon from "@/src/assets/icons/delete";
import EditIcon from "@/src/assets/icons/edit";
import NoteTableIcon from "@/src/assets/icons/noteTable";
import Button from "@/src/components/button";
import Events from "@/src/components/Events";
import React from "react";
const functionSelect = [
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
function HeaderProduct() {
  return (
    <div className="flex items-center gap-3 mb-8">
      <Button className={"h-10 px-5 gap-1"}>
        <EditIcon fill="white" className="w-3 h-auto" />
        <p className="text-sm">Edit</p>
      </Button>
      {functionSelect.map((item, index) => {
        return <Events key={index} item={item} ids={[1]} />;
      })}
    </div>
  );
}

export default HeaderProduct;
