import DownIcon from "@/src/assets/icons/down";
import Button from "@/src/components/button";
import ModalComp from "@/src/components/modal-comp";
import SelectInput from "@/src/components/select-input";
import { Select, Textarea } from "@mantine/core";
import React, { useState } from "react";

function NoteModal({ opened, close, id }: any) {
  const [dataList, setDataList] = useState<any>();
  return (
    <ModalComp opened={opened} close={close} title={"Send Note"}>
      <div className="lg:w-[580px] w-full flex flex-col gap-4">
        <SelectInput
          data={[
            "complaint",
            "complaint2",
            "complaint3",
            "complaint4",
            "complaint5",
          ]}
          defaultValue={"complaint"}
          label="Note Type"
          placeholder="complaint"
          onChange={(e) => {
            setDataList(e);
          }}
          inputClassName="!h-[54px]"
          className='h-auto'
        />
        <Textarea
          label={"Note Content"}
          autosize
          placeholder="Write content here "
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
          <Button onClick={close} className={" flex-1 h-[54px]"}>
            Send
          </Button>
        </div>
      </div>
    </ModalComp>
  );
}

export default NoteModal;
