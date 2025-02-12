import Button from "@/src/components/button";
import Input from "@/src/components/input";
import ModalComp from "@/src/components/modal-comp";
import React, { useCallback, useState } from "react";
import NoteRow from "./note-row";
import {
  GetDemoRequestByIDInAdmin,
  useAddNoteDemoInAdmin,
} from "@/src/hooks/queries/admin/demo-req";
import { Toast } from "@/src/components/toast";
import GetErrorMsg from "@/src/components/getErrorMsg";
import SkeletonLoading from "@/src/components/skeleton-loading";
import { ScrollArea } from "@mantine/core";

function ModalNoteDemo({
  opened,
  close,
  id,
}: {
  opened: boolean;
  close: any;
  id: string;
}) {
  const [NoteContent, setNoteContent] = useState("");
  const { mutateAsync: AddNoteDemo, error, reset } = useAddNoteDemoInAdmin();
  const { data, isLoading } = GetDemoRequestByIDInAdmin(id);
  console.log(data?.data?.demoNotes);

  // Add Note Demo
  const onSubmitAddNoteDemo = useCallback(async () => {
    reset();
    Toast.Promise(
      AddNoteDemo({
        DemoId: id,
        NoteContent: NoteContent,
      }),
      {
        success: "",
        onSuccess: async (res) => {
          setNoteContent("");
        },
      }
    );
  }, [AddNoteDemo, id, NoteContent, reset]);
  return (
    <ModalComp title="Notes" opened={opened} close={close}>
      <div className="w-[650px] max-w-full">
        <div>
          <Input
            label="Add Note"
            placeholder="Write here ..."
            inputClassName="bg-white border-green"
            value={NoteContent}
            onChange={(e) => {
              setNoteContent(e.target.value);
              reset();
            }}
            error={GetErrorMsg(error, "NoteContent")}
          />
          <Button
            onClick={onSubmitAddNoteDemo}
            className={"w-[300px] max-w-full mx-auto h-14 mt-6 "}
          >
            Save
          </Button>
        </div>
        <div className="bg-blueLight rounded-2xl px-3 py-2 mt-8">
          <h3 className="text-sm mdl:text-base mb-3">Last Notes</h3>
          {isLoading ? (
            <div className="flex flex-col gap-3 w-full py-5 px-5">
              <SkeletonLoading className="md:!w-full w-full !h-8 md:!h-9 rounded-xl" />
              <SkeletonLoading className="md:!w-full w-full !h-8 md:!h-9 rounded-xl" />
            </div>
          ) : (
            <ScrollArea
              h={data?.data?.demoNotes?.length > 0 ? 350 : 100}
              color="#88BA52"
              type="auto"
              classNames={{
                scrollbar: "bg-grayMedium/15 rounded-2xl",
                thumb: "bg-green",
              }}
              className="pe-5"
            >
              <div className="flex flex-col gap-2">
                {data?.data?.demoNotes?.map((item: any, key: number) => {
                  return (
                    <NoteRow
                      key={key}
                      info={item.noteContent}
                      date={item.created}
                    />
                  );
                })}
              </div>
            </ScrollArea>
          )}
        </div>
      </div>
    </ModalComp>
  );
}

export default ModalNoteDemo;
