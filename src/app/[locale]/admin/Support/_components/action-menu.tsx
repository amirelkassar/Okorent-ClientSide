"use client";
import DeleteIcon from "@/src/assets/icons/delete";
import DataActions from "@/src/components/DataActions";
import React, { useCallback } from "react";
import MarkIcon from "@/src/assets/icons/mark";
import {
  useDeleteSupportInAdmin,
  useSolvedSupportInAdmin,
} from "@/src/hooks/queries/admin/support";
import { Toast } from "@/src/components/toast";

function ActionMenu({ id, solved = false }: { id: any; solved: boolean }) {
  const { mutateAsync: DeleteSupport } = useDeleteSupportInAdmin(id);
  const { mutateAsync: SolvedSupport } = useSolvedSupportInAdmin(id);

  const onSubmitDeleteSupport = useCallback(async () => {
    Toast.Promise(DeleteSupport(), {
      success: "Deleted Support Done",
      onSuccess: async (res) => {},
    });
  }, [DeleteSupport]);
  const onSubmitSolvedSupport = useCallback(async () => {
    Toast.Promise(
      SolvedSupport({
        TicketId: id,
      }),
      {
        success: "Solved Support Done",
        onSuccess: async (res) => {},
      }
    );
  }, [SolvedSupport, id]);
  const options = [
    ...(solved
      ? []
      : [
          {
            label: "Mark as Solved",
            icon: <MarkIcon fill="#6F6B7D" className="w-3 h-auto" />,
            type: "btn",
            action: () => {
              onSubmitSolvedSupport();
            },
          },
        ]),
    {
      label: "Delete",
      icon: <DeleteIcon className="w-3 h-auto" />,
      type: "btn",
      action: () => {
        onSubmitDeleteSupport();
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
