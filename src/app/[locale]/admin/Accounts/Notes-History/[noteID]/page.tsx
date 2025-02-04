import TableNoteDetails from "@/src/components/Notes/table-note-details";
import React from "react";

function page({ params }: any) {
  return <TableNoteDetails id={params.noteID||''} />;
}

export default page;
