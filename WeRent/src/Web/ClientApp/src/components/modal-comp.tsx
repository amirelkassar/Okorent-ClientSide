"use client";
import { Modal } from "@mantine/core";
import React from "react";
import CloseIcon from "../assets/icons/close";
interface ModalCompProps {
  title: string;
  opened: boolean;
  children: React.ReactNode;
  close: any;
}
function ModalComp({ opened, close, children, title }: ModalCompProps) {
  console.log("ghghghghghghghghghgh");

  return (
    <Modal
      opened={opened}
      onClose={close}
      size="auto"
      classNames={{
        header: "p-0 h-0 min-h-0 ",
        body: "min-h-[300px] p-0 min-w-[400px] ",
        content:
          "rounded-3xl border-2 overflow-hidden shadow-sidebar   border-green",
        overlay: "bg-black/50",
      }}
      closeButtonProps={{
        icon: <CloseIcon />,
        className:
          "mb-[-40px]  border-none  focus-visible:outline-none   outline-none absolute end-4 top-7",
      }}
      centered
    >
      <div className="w-full mt-7 mb-4 pb-5 border-b border-1">
        <h2 className="text-center    max-w-[76%] mx-auto text-[24px]">
          {title}
        </h2>
      </div>
      <div className="px-4 pb-7">{children}</div>
    </Modal>
  );
}

export default ModalComp;
