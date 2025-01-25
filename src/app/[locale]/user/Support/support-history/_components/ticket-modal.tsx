"use client";
import NoteTableIcon from "@/src/assets/icons/noteTable";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import ModalTicket from "./modal-ticket";

function TicketModal({ id, name = "" }: { id: any; name: any }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <button onClick={open}>
        <NoteTableIcon className="w-5 h-auto" fill="#6F6B7D" />
      </button>
      {opened && (
        <ModalTicket name={name} id={id} opened={opened} close={close} />
      )}
    </div>
  );
}

export default TicketModal;
