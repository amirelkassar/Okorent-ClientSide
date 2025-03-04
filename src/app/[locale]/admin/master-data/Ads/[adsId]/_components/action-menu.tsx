import PauseIcon from "@/src/assets/icons/pause";
import Events from "@/src/components/Events";
import React from "react";
import UseChangeStatus from "../../_hooks/use-change-status";
import ResumeIcon from "@/src/assets/icons/Resume";

function ActionMenu({ id, status }: { id: any; status: any }) {
  const { onSubmitResume, onSubmitSuspend } = UseChangeStatus(id);
  console.log(status);

  const functionSelect = [
    status === 1 && {
      title: "Suspend",
      icon: <PauseIcon className="max-h-4 w-auto" />,
      onclick: () => {
        onSubmitSuspend({
          advertisementId: id,
        });
      },
    },
    status === 2 && {
      title: "Resume",
      icon: <ResumeIcon fill="#006AFF" className="max-h-4 w-auto" />,
      onclick: () => {
        onSubmitResume({
          advertisementId: id,
        });
      },
    },
  ];
  return (
    <div className="flex items-center gap-3 flex-wrap mb-section ms-auto w-fit">
      {functionSelect.map((item: any, index: number) => {
        return <Events key={index} item={item} ids={[]} />;
      })}
    </div>
  );
}

export default ActionMenu;
