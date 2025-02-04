import React from "react";
import { useRowActionNotesInAdmin } from "./_hooks/use-row-action";
import DeleteIcon from "@/src/assets/icons/delete";
import { useParams } from "next/navigation";

function DeleteNoteUser({ id }: { id: any }) {
  const { onSubmitDeleteManyNotesUser } = useRowActionNotesInAdmin();
  const params = useParams();
  return (
    <button
      onClick={() =>
        onSubmitDeleteManyNotesUser({
          noteId: params.noteID,
          userIds: [id],
        })
      }
    >
      <DeleteIcon className="mdl:w-4 w-3 h-auto" />
    </button>
  );
}

export default DeleteNoteUser;
