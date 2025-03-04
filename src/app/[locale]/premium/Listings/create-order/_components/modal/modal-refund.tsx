"use client";
import Button from "@/src/components/button";
import Input from "@/src/components/input";
import ModalComp from "@/src/components/modal-comp";
import SelectInput from "@/src/components/select-input";
import React from "react";
const OptionQuotation = [
  {
    value: "Cash",
    label: "Cash",
  },
  {
    value: "Visa",
    label: "Visa",
  },
  {
    value: "Link",
    label: "Link",
  },
];
function ModalRefund({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) {
  return (
    <ModalComp opened={opened} close={close} title="Payment Refund">
      <div className="w-[550px] max-w-full">
        <div className="flex flex-col gap-5 w-full">
          <div className="flex gap-4  flex-col md:flex-row">
            <Input
              label="Amount"
              defaultValue="355.00"
              leftSection={<span className="text-lg">USD</span>}
              inputClassName="bg-white h-16 border-green/50 rounded-xl ps-11 "
              
              className="flex-1"
            />
            <SelectInput
              data={OptionQuotation}
              label="Refund Method"
              placeholder="Bank Transfer"
              className="flex-1 h-16"
              inputClassName="!h-16"
            />
          </div>
          <Input
            label="Account Number"
            placeholder="Write account number"
            inputClassName="bg-white h-16 border-green/50 rounded-xl"
          />
          <Input
            label="Recipient Name"
            placeholder="Write account number"
            inputClassName="bg-white h-16 border-green/50 rounded-xl"
          />
        </div>

        <div className="flex items-center gap-7 mt-12 w-full">
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

export default ModalRefund;
