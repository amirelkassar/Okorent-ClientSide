"use client";
import DataActions from "@/src/components/DataActions";
import React from "react";
import PauseIcon from "@/src/assets/icons/pause";
import ResumeIcon from "@/src/assets/icons/Resume";
import UseChangeStatus from "../_hooks/use-change-status";

function ActionMenu({ id, status }: { id: any; status: any }) {
  const { onSubmitResume, onSubmitSuspend } = UseChangeStatus(id);

  const options = [
    status === 1 && {
      label: "Suspend",
      icon: <PauseIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: () => {
        onSubmitSuspend({
          advertisementId: id,
        });
      },
    },
    status === 2 && {
      label: "Resume",
      icon: <ResumeIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: () => {
        onSubmitResume({
          advertisementId: id,
        });
      },
    },
  ];
  return (
    <>
      <DataActions data={options} />
    </>
  );
}

export default ActionMenu;
