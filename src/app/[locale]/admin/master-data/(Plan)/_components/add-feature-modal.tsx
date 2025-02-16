"use client";
import Button from "@/src/components/button";
import Input from "@/src/components/input";
import ModalComp from "@/src/components/modal-comp";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

function AddFeatureModal() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <Button
        onClick={open}
        className={
          "gap-2 text-blue bg-blueLight !border-none h-10 !px-3 mdl:!px-8 hover:shadow-md"
        }
      >
        Add Feature
      </Button>
      <ModalComp opened={opened} close={close} title="Add Feature">
        <div className="flex flex-col gap-5 w-[580px] max-w-full">
          <Input
            label="Feature Name"
            placeholder="Extra Feature"
            inputClassName="h-14 bg-white"
          />
          <Input
            label="Feature Items Count"
            placeholder="3"
            type="number"
            inputClassName="h-14 bg-white"
          />
          <div>
            <h3 className="ps-1">Feature Items Content</h3>
            <div className="flex flex-col gap-4">
              <Input
                placeholder="24/7 support"
                inputClassName="h-14 bg-white"
              />
              <Input
                placeholder="24/7 support"
                inputClassName="h-14 bg-white"
              />
            </div>
          </div>
          <div className="flex items-center gap-7 mt-5 w-full">
            <Button
              onClick={close}
              className={" flex-1 h-[54px] text-black bg-grayBack border-none"}
            >
              Cancel
            </Button>
            <Button onClick={close} className={" flex-1 h-[54px]"}>
              Save
            </Button>
          </div>
        </div>
      </ModalComp>
    </div>
  );
}

export default AddFeatureModal;
