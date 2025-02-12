"use client";
import DeleteIcon from "@/src/assets/icons/delete";
import HourGlassIcon from "@/src/assets/icons/hourglass";
import NoteDemoIcon from "@/src/assets/icons/noteDemo";
import TrueIcon from "@/src/assets/icons/true";
import DataActions from "@/src/components/DataActions";
import { Toast } from "@/src/components/toast";
import {
  useChangeStatusDemoInAdmin,
  useDeleteDemoInAdmin,
} from "@/src/hooks/queries/admin/demo-req";
import React, { useCallback } from "react";
import ModalNoteDemo from "./modal-note-demo";
import { useDisclosure } from "@mantine/hooks";
type RequestStatus = "2" | "3";
function ActionMenu({ id, demoStatus }: { id: any; demoStatus: 1 | 2 | 3 }) {
  const [opened, { open, close }] = useDisclosure(false);

  const { mutateAsync: ChangeStatusDemoInAdmin } = useChangeStatusDemoInAdmin();
  const { mutateAsync: DeleteDemoInAdmin } = useDeleteDemoInAdmin(id);
  // Change Status Demo
  const onSubmitChangeStatusInAdmin = useCallback(
    async (numStatus: RequestStatus) => {
      Toast.Promise(
        ChangeStatusDemoInAdmin({
          DemoId: id,
          Status: numStatus,
        }),
        {
          success:
            numStatus === "2"
              ? "Request Demo In Progress"
              : numStatus === "3"
              ? "Request Demo Completed"
              : "",
          onSuccess: async (res) => {},
        }
      );
    },
    [ChangeStatusDemoInAdmin, id]
  );
  // Delete demo
  const onSubmitDeleteDemoInAdmin = useCallback(async () => {
    Toast.Promise(DeleteDemoInAdmin(), {
      success: "Request Demo Deleted",
      onSuccess: async (res) => {},
    });
  }, [DeleteDemoInAdmin]);
  const options = [
    {
      label: "Mark as In Progress",
      icon: <HourGlassIcon className="w-3 h-auto" />,
      type: "btn",
      action: () => {
        onSubmitChangeStatusInAdmin("2");
      },
    },
    {
      label: "Mark as completed",
      icon: <TrueIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: () => {
        onSubmitChangeStatusInAdmin("3");
      },
    },
    {
      label: "Note",
      icon: <NoteDemoIcon className="w-4 h-auto" />,
      type: "btn",
      action: () => {
        open();
      },
    },
    {
      label: "Delete",
      icon: <DeleteIcon className="w-3 h-auto" />,
      type: "btn",
      action: () => {
        onSubmitDeleteDemoInAdmin();
      },
    },
  ];
  const Options_View =
    demoStatus === 1
      ? [options[0], options[2]]
      : demoStatus === 2
      ? [options[1], options[2]]
      : demoStatus === 3
      ? [options[2], options[3]]
      : [options[2], options[3]];
  return (
    <>
      <DataActions data={Options_View} />
      {opened && <ModalNoteDemo opened={opened} close={close} id={id} />}
    </>
  );
}

export default ActionMenu;
