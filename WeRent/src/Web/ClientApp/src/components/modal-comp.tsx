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
  return (
    <Modal
      opened={opened}
      onClose={close}
      size="auto"
      classNames={{
        header: "p-0 h-0 min-h-0 ",
        body: "min-h-[300px] overflow-y-auto p-0 max-h-[90dvh] min-w-[94%] duration-200  w-full md:min-w-[400px] ",
        content:
          "rounded-3xl border-2 overflow-hidden   shadow-sidebar w-full md:w-fit duration-200   border-main",
        overlay: "bg-black/50",
        close: `${!title && "!top-5"}`,
      }}
      closeButtonProps={{
        icon: <CloseIcon />,
        className:
          "mb-[-40px] size-5 lg:size-6  border-none hover:shadow-md hover:shadow-red/20 duration-300 rounded-full  min-w-5 aspect-square min-h-5  focus-visible:outline-none   outline-none absolute end-4 top-4 lg:top-7",
      }}
      centered
    >
      {title && (
        <div className="w-full mt-3 lg:mt-6 mb-4 pb-3 lg:pb-5 border-b border-1">
          <h2 className="   max-w-[76%] ms-3 lg:ms-5 me-auto text-lg font-medium lg:text-2xl">
            {title}
          </h2>
        </div>
      )}
      <div className="px-4 pb-7">{children}</div>
    </Modal>
  );
}

export default ModalComp;
