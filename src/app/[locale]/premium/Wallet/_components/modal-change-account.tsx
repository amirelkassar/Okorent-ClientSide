"use client";
import PlusIcon from "@/src/assets/icons/plus";
import Button from "@/src/components/button";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import ModalAddAccount from "./modal-add-account";

function ModalChangeAccount() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <Button onClick={open} className={"px-5 h-10 gap-2"}>
        <PlusIcon className="w-4 h-auto" />
        Add Account
      </Button>
      <ModalAddAccount opened={opened} close={close} />
    </div>
  );
}

export default ModalChangeAccount;
