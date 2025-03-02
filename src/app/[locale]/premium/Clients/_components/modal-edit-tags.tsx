import Button from "@/src/components/button";
import Input from "@/src/components/input";
import ModalComp from "@/src/components/modal-comp";
import SelectInput from "@/src/components/select-input";
import { Radio } from "@mantine/core";
import React from "react";
const dataNotes = [
  { value: "1", label: "Tag1" },
  { value: "2", label: "Tag2" },
];
const OptionReturn = [
  {
    value: "I want to add the following tags",
    label: "I want to add the following tags",
  },
  {
    value: "I want to replace tags with",
    label: "I want to replace tags with",
  },
  {
    value: "I want to remove the following tags",
    label: "I want to remove the following tags",
  },
  {
    value: "I want to remove all tags",
    label: "I want to remove all tags",
  },
];
function ModalEditTags({ opened, close }: { opened: any; close: any }) {
  return (
    <ModalComp opened={opened} close={close} title={"Edit tags customers"}>
      <div className="lg:w-[580px] w-full flex flex-col gap-4">
        <Radio.Group name="OptionReturn">
          <div className="flex flex-col gap-3 mb-8">
            {OptionReturn.map((item, index) => {
              return (
                <Radio
                  value={item.value}
                  label={item.label}
                  key={index}
                  color="#88BA52"
                  classNames={{
                    icon: "w-3 h-3 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2",
                  }}
                  className="pb-3 "
                  onChange={(e) => {}}
                />
              );
            })}
          </div>
        </Radio.Group>
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <SelectInput
            data={dataNotes}
            label="Available Tags"
            placeholder="Select Tag"
            inputClassName="!h-16 !border-green"
            className="h-auto flex-1"
          />
          <Input
            label={"New Tag"}
            placeholder="Create New Tag"
            onChange={(e) => {
              console.log(e);
            }}
            inputClassName="h-16 bg-white border-green rounded-xl"
            className="flex-1"
          />
        </div>
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

export default ModalEditTags;
