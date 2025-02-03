import Button from "@/src/components/button";
import ModalComp from "@/src/components/modal-comp";
import SelectInput from "@/src/components/select-input";
import { Textarea } from "@mantine/core";
import React, { useCallback, useState } from "react";
import { Toast } from "./toast";
import { useSendNotes } from "../hooks/queries/admin/notes";
import { useSelectRowTable } from "./select-row-table-context";
import GetErrorMsg from "./getErrorMsg";
const dataNotes = [
  { value: "1", label: "Announcement" },
  { value: "2", label: "Complaint" },
];

function NoteModal({
  opened,
  close,
  id,
}: {
  opened: any;
  close: any;
  id: any[];
}) {
  const [dataList, setDataList] = useState({
    Content: "",
    NoteType: "",
  });

  const { setSelectRowTable } = useSelectRowTable();
  const { mutateAsync: SendNotes, error, reset } = useSendNotes();

  //Send Notes
  const onSubmitNotes = useCallback(async () => {
    const formData = {
      ...dataList,
      UserIds: id,
    };
    Toast.Promise(SendNotes(formData), {
      success: "Note sent successfully!",
      onSuccess(res) {
        setSelectRowTable([]);
        close();
      },
      onError(err) {
        setSelectRowTable([]);
      },
    });
  }, [SendNotes, dataList, close, setSelectRowTable, id]);

  return (
    <ModalComp opened={opened} close={close} title={"Send Note"}>
      <div className="lg:w-[580px] w-full flex flex-col gap-4">
        <SelectInput
          data={dataNotes}
          label="Note Type"
          placeholder="Select Note Type"
          onChange={(e) => {
            reset();
            setDataList({ ...dataList, NoteType: e || "" });
          }}
          inputClassName="!h-[54px]"
          className="h-auto"
          error={GetErrorMsg(error, "NoteType")}
        />
        <Textarea
          label={"Note Content"}
          autosize
          placeholder="Write content here "
          error={GetErrorMsg(error, "Content")}
          onChange={(e) => {
            reset();
            setDataList({ ...dataList, Content: e.target.value });
          }}
          classNames={{
            input:
              " bg-white border-green/30 text-base focus:border-green active:border-green   min-h-[90px] rounded-xl placeholder:text-grayMedium placeholder:text-base duration-300 focus:border-green focus:bg-white ",
            wrapper: "h-full",
            label: "text-xs lg:text-base mb-2 text-black font-Medium ms-1",
          }}
          className="w-full mb-4"
        />
        <div className="flex items-center gap-7 w-full">
          <Button
            onClick={close}
            className={" flex-1 h-[54px] text-black bg-grayBack border-none"}
          >
            Cancel
          </Button>
          <Button onClick={onSubmitNotes} className={" flex-1 h-[54px]"}>
            Send
          </Button>
        </div>
      </div>
    </ModalComp>
  );
}

export default NoteModal;
