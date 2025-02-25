import React from "react";
import AccordionMethodOrder from "../accordion-method-order";
import NoteTableIcon from "@/src/assets/icons/noteTable";
import Input from "@/src/components/input";

function Notes() {
  return (
    <AccordionMethodOrder
      title="Notes"
      icon={() => <NoteTableIcon fill="#0F2A43" className="w-full h-auto" />}
    >
      <div>
        <Input placeholder="Add new note..." inputClassName="h-16 w-full bg-white rounded-xl border-green/50" />
      </div>
    </AccordionMethodOrder>
  );
}

export default Notes;
