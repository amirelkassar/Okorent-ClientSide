"use client";
import Button from "@/src/components/button";
import ModalComp from "@/src/components/modal-comp";
import { Radio } from "@mantine/core";
import React from "react";
const OptionQuotation = [
  {
    value: "permOR02245082anently",
    label: "Quotation Template OR02245082",
  },
  {
    value: "OR02245083",
    label: "Quotation Template OR02245083",
  },
  {
    value: "OR02245084",
    label: "Quotation Template OR02245084",
  },
];
function ModalChooseQuotation({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) {
  return (
    <ModalComp opened={opened} close={close} title="Choose Quotation Template">
      <div className="w-[550px] max-w-full">
        <Radio.Group name="Quotation">
          <div className="flex mb-6 gap-3 flex-col md:gap-4 ">
            {OptionQuotation.map((option, index) => {
              return (
                <Radio
                  color="#88BA52"
                  key={index}
                  value={option.value}
                  label={option.label}
                  className="flex-1 pb-5 border-b border-b-black/10"
                  classNames={{
                    icon: "w-3 h-3 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2",
                  }}
                />
              );
            })}
          </div>
        </Radio.Group>
        <Button onClick={close} className={'h-16 w-full mt-11'}>Confirm</Button>
      </div>
    </ModalComp>
  );
}

export default ModalChooseQuotation;
