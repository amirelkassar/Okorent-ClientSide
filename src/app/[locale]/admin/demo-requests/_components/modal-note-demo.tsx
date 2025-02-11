import Button from "@/src/components/button";
import Input from "@/src/components/input";
import ModalComp from "@/src/components/modal-comp";
import React from "react";
import NoteRow from "./note-row";

function ModalNoteDemo({ opened, close }: { opened: boolean; close: any }) {
  return (
    <ModalComp title="Notes" opened={opened} close={close}>
      <div className="w-[650px] max-w-full">
        <div>
          <Input
            label="Add Note"
            placeholder="Write here ..."
            inputClassName="bg-white border-green"
          />
          <Button className={"w-[300px] max-w-full mx-auto h-14 mt-6 "}>
            Save
          </Button>
        </div>
        <div className="bg-blueLight rounded-2xl px-3 py-2 mt-8">
          <h3 className="text-sm mdl:text-base mb-3">Last Notes</h3>
          <div className="flex flex-col gap-2">
            <NoteRow info="Special Price" date="Today| 05 : 30" />
            <NoteRow info="Special Price" date="Today| 05 : 30" />
          </div>
        </div>
      </div>
    </ModalComp>
  );
}

export default ModalNoteDemo;
