"use client";
import { useCallback } from "react";
import { Toast } from "@/src/components/toast";
import {
  useDeleteManyNotes,
  useDeleteNotesUser,
  useDeleteOneNote,
} from "@/src/hooks/queries/admin/notes";
import { useRouter } from "@/src/navigation";
import { useSelectRowTable } from "../../select-row-table-context";

interface ActionTableIProps {
  onSubmitDeleteNotes: any;
  onSubmitDeleteManyNotes: any;
  onSubmitDeleteManyNotesUser: any;
  onSubmitDeleteNotesFromPageNoteID:any
}
export const useRowActionNotesInAdmin = (): ActionTableIProps => {
  const { mutateAsync: DeleteNote } = useDeleteOneNote();
  const { mutateAsync: DeleteManyNotes } = useDeleteManyNotes();
  const { mutateAsync: DeleteManyNotesUser } = useDeleteNotesUser();
  const router = useRouter();
  const { setSelectRowTable } = useSelectRowTable();
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
        onSuccess(res) {
          setSelectRowTable([]);
        },
      });
    },
    [DeleteManyNotes, setSelectRowTable]
  );

  //delete  Note user
  const onSubmitDeleteManyNotesUser = useCallback(
    async (data: any) => {
      Toast.Promise(DeleteManyNotesUser(data), {
        success: "Deleted Note User Done",
        onSuccess(res) {
          setSelectRowTable([]);
        },
      });
    },
    [DeleteManyNotesUser, setSelectRowTable]
  );
  //delete Note from Page Note ID
  const onSubmitDeleteNotesFromPageNoteID = useCallback(
    async (id: any) => {
      Toast.Promise(DeleteNote(id), {
        success: "Deleted Note Done",
        onSuccess(res) {
          router.back();
        },
      });
    },
    [DeleteNote,router]
  );
  return {
    onSubmitDeleteNotes,
    onSubmitDeleteManyNotes,
    onSubmitDeleteManyNotesUser,
    onSubmitDeleteNotesFromPageNoteID
  };
};
