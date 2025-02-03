"use client";
import { useCallback } from "react";
import { Toast } from "@/src/components/toast";
import {
  useDeleteManyNotes,
  useDeleteOneNote,
} from "@/src/hooks/queries/admin/notes";

interface ActionTableIProps {
  onSubmitDeleteNotes: any;
  onSubmitDeleteManyNotes: any;
}
export const useRowActionNotesInAdmin = (): ActionTableIProps => {
  const { mutateAsync: DeleteNote } = useDeleteOneNote();
  const { mutateAsync: DeleteManyNotes } = useDeleteManyNotes();
  //delete Note
  const onSubmitDeleteNotes = useCallback(
    async (id: any) => {
      Toast.Promise(DeleteNote(id), {
        success: "Deleted Note Done",
      });
    },
    [DeleteNote]
  );

  //delete Many Note
  const onSubmitDeleteManyNotes = useCallback(
    async (data: any) => {
      Toast.Promise(DeleteManyNotes(data), {
        success: "Deleted Notes Done",
      });
    },
    [DeleteManyNotes]
  );

  return {
    onSubmitDeleteNotes,
    onSubmitDeleteManyNotes,
  };
};
