"use client";
import DeleteIcon from "@/src/assets/icons/delete";
import DotsIcon from "@/src/assets/icons/dots";
import EditIcon from "@/src/assets/icons/edit";
import { Popover } from "@mantine/core";
import React, { useState } from "react";
interface MenuActionsProps {
  setIsEdit: any;
}
function MenuActions({ setIsEdit }: MenuActionsProps) {
  const [opened, setOpened] = useState(false); // State to control Popover visibility

  const handleClose = () => {
    setOpened(false); // Close the Popover
  };
  return (
    <Popover
      width={110}
      position="bottom-end"
      shadow="md"
      onClose={() => setOpened(false)}
      opened={opened}
    >
      <Popover.Target>
        <button
          onClick={() => setOpened((o) => !o)}
          className="w-4 bg-/10 flex items-center justify-center h-4"
        >
          <DotsIcon />
        </button>
      </Popover.Target>
      <Popover.Dropdown className="rounded-xl bg-white px-0 border border-grayBack">
        <div className="flex flex-col gap-1">
          <button
            onClick={() => {
              handleClose();
            }}
            className="flex items-center gap-2 py-1 px-2 border-b border-grayBack "
          >
            <DeleteIcon className="w-4 h-auto" />
            <p className="text-[#E31B1B] text-[12px]  font-medium">Delete</p>
          </button>
          <button
            onClick={() => {
              setIsEdit(true);
              handleClose();
            }}
            className="flex items-center gap-2 py-1 px-2  "
          >
            <EditIcon className="w-4 h-auto" />
            <p className="text-grayMedium  text-[12px] font-medium">Edit</p>
          </button>
        </div>
      </Popover.Dropdown>
    </Popover>
  );
}

export default MenuActions;
