import React from "react";
import { useRowActionNotesInAdmin } from "./_hooks/use-row-action";
import DeleteIcon from "@/src/assets/icons/delete";

function DeleteNote({ id }: { id: any }) {
  const { onSubmitDeleteNotes } = useRowActionNotesInAdmin();

  return (
    <button onClick={() => onSubmitDeleteNotes(id)}>
      <DeleteIcon className="w-4 h-auto" />
    </button>
  );
}

export default DeleteNote;
