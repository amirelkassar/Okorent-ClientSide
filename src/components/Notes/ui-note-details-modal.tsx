"use client";
import ViewIcon from "@/src/assets/icons/view";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import NoteDetailsModal from "./note-details-modal";

function UINoteDetailsModal({ id }: { id: any }) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div>
      <button onClick={open} className="flex items-center justify-center">
        <ViewIcon className="w-4 h-auto" />
      </button>
      {opened && <NoteDetailsModal id={id} opened={opened} close={close} />}
    </div>
  );
}

export default UINoteDetailsModal;
