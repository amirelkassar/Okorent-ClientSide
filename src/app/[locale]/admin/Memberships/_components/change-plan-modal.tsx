import Button from "@/src/components/button";
import InputTextarea from "@/src/components/InputTextarea";
import ModalComp from "@/src/components/modal-comp";
import SelectInput from "@/src/components/select-input";
import { Checkbox } from "@mantine/core";
import React, { useState } from "react";

function ChangePlanModal({ opened, close, id }: any) {
  const [dataList, setDataList] = useState<any>();

  return (
    <ModalComp opened={opened} close={close} title={"Change Plan"}>
      <div className="lg:w-[580px] w-full ">
        <SelectInput
          data={["Premium Plan", "Plan2", "Plan3", "Plan4", "Plan5"]}
          defaultValue={"Premium Plan"}
          label="Choose Plan You Want to Change for"
          placeholder="Premium Plan"
          onChange={(e) => {
            setDataList(e);
          }}
          inputClassName="!h-[54px]"
          className="h-auto mb-4"
        />
        <InputTextarea
          label={"Reason"}
          autosize
          placeholder="Write change reason here here "
          inputClassName="bg-white  min-h-[90px]"
          className="min-h-[90px]"
        />
        <Checkbox
          color="#88BA52"
          value="Notify"
          size="xs"
          label="Notify the user "
          classNames={{
            label: "text-grayMedium text-base",
            body: "items-center",
          }}
        />
        <div className="flex items-center gap-7 mt-9 w-full">
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

export default ChangePlanModal;
