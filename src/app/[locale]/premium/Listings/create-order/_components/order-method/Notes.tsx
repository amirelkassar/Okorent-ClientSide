import React from "react";
import NoteTableIcon from "@/src/assets/icons/noteTable";
import Input from "@/src/components/input";
import AccordionRow from "@/src/components/accordion-row";

function Notes() {
  return (
    <AccordionRow
      title="Notes"
      icon={() => <NoteTableIcon fill="#0F2A43" className="w-full h-auto" />}
    >
      <div>
        <Input placeholder="Add new note..." inputClassName="h-16 w-full bg-white rounded-xl border-green/50" />
      </div>
    </AccordionRow>
  );
}

export default Notes;
