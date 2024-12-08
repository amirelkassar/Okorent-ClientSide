import Button from "@/src/components/button";
import ModalComp from "@/src/components/modal-comp";
import SelectInput from "@/src/components/select-input";
import React, { useState } from "react";

function QuickEditModal({ opened, close }: any) {
  const [dataList, setDataList] = useState<any>();
  return (
    <ModalComp opened={opened} close={close} title={"Quick Edit"}>
      <div className="lg:w-[580px] w-full flex flex-col gap-4">
        <SelectInput
          data={[
            "Electronics",
            "Electronics2",
            "Electronics3",
            "Electronics4",
            "Electronics5",
          ]}
          label="Item Category"
          placeholder="Select item category to be assigend for all choosen items"
          onChange={(e) => {
            setDataList(e);
          }}
          inputClassName="!h-[54px]"
          className="h-auto"
        />

        <div className="flex items-center gap-7 w-full">
          <Button
            onClick={close}
            className={" flex-1 h-[54px] text-black bg-grayBack border-none"}
          >
            Cancel
          </Button>
          <Button onClick={close} className={" flex-1 h-[54px]"}>
            Confirm
          </Button>
        </div>
      </div>
    </ModalComp>
  );
}

export default QuickEditModal;
