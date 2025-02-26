import Button from "@/src/components/button";
import Input from "@/src/components/input";
import ModalComp from "@/src/components/modal-comp";
import { Checkbox, MultiSelect } from "@mantine/core";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import EditorEmail from "../editor-email";
const OptionSendEmail = [
  {
    value: "Thom1@okorent.com",
    label: "Thom1@okorent.com ",
  },
  {
    value: "Thom2@okorent.com",
    label: "Thom2@okorent.com",
  },
  {
    value: "Thom3@okorent.com",
    label: "Thom3@okorent.com",
  },
];
function ModalSendEmail({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `
          <p>Dear, Badr</p>
          <p>Attached to this email you’ll find your invoice regarding the rental order</p>
          <p>Kind Regards</p>
        `,
  });
  if (!editor) {
    return null;
  }
  return (
    <ModalComp opened={opened} close={close} title="New Email">
      <div className="w-[750px] max-w-full">
        <div className="flex gap-4 flex-col-reverse mdl:flex-row mb-16 pb-8 border-b border-grayBack">
          <div className="flex-1 flex flex-col gap-5">
            <MultiSelect
              label="From"
              data={OptionSendEmail}
              placeholder="Select From"
              searchable
              nothingFoundMessage="No results"
              classNames={{
                input:
                  " bg-white text-black flex items-center text-xs  rounded-xl text-grayMedium  min-h-16 border border-green",
                label: "text-[16px] mb-2 font-Medium ms-1",
                inputField: " h-full placeholder:text-xs ",
                pillsList: "h-full ",
                pill: "bg-grayMedium/20 h-7 text-black rounded-lg text-xs font-Regular flex items-center",

                dropdown:
                  "bg-white text-black rounded-lg border border-green/50 text-grayDark py-2",
                option:
                  "hover:bg-green hover:text-white duration-300  flex items-center ",
              }}
              clearable
            />
            <MultiSelect
              label="To"
              data={OptionSendEmail}
              placeholder="Select To"
              searchable
              nothingFoundMessage="No results"
              classNames={{
                input:
                  " bg-white text-black flex items-center text-xs  rounded-xl text-grayMedium  min-h-16 border border-green",
                label: "text-[16px] mb-2 font-Medium ms-1",
                inputField: " h-full placeholder:text-xs ",
                pillsList: "h-full ",
                pill: "bg-grayMedium/20 h-7 text-black rounded-lg text-xs font-Regular flex items-center",

                dropdown:
                  "bg-white text-black rounded-lg border border-green/50 text-grayDark py-2",
                option:
                  "hover:bg-green hover:text-white duration-300  flex items-center ",
              }}
              clearable
            />
            <Input
              label="Subject"
              placeholder="Rental Invoice"
              className="flex-1"
              inputClassName="h-16 border-green/30 bg-white rounded-xl"
            />
            <EditorEmail />
          </div>
          <div className="w-[200px] border-s border-grayBack ps-3">
            <h3 className="text-base font-SemiBold mb-5">Attach Documents</h3>
            <div className="my-7 flex flex-col gap-4">
              <Checkbox
                color="#88BA52"
                value={"true"}
                label="Invoice OR02245082"
                className="pb-5 border-b border-grayBack"
              />
              <Checkbox
                color="#88BA52"
                value={"true"}
                label="Quotation OR02245082"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-7 w-full">
          <Button
            onClick={close}
            className={"flex-1 h-[54px] text-black bg-grayBack border-none"}
          >
            Cancel
          </Button>
          <Button onClick={close} className={"flex-1 h-[54px]"}>
            Send
          </Button>
        </div>
      </div>
    </ModalComp>
  );
}

export default ModalSendEmail;
