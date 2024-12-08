import Button from "@/src/components/button";
import Input from "@/src/components/input";
import ModalComp from "@/src/components/modal-comp";
import React from "react";

function RefundModal({ opened, close }: any) {
  return (
    <ModalComp opened={opened} close={close} title="Refund Payment ">
      <div className="w-[660px] max-w-full flex flex-col md:flex-row ">
        <div className="border-e border-[#B6BFC6] pb-4 min-w-[210px]">
          <h4 className="font-Bold mb-2">Payment Summary</h4>
          <ul className="pe-2">
            <li className="py-2 border-b border-black/20 flex items-center justify-between gap-2 flex-wrap">
              <p className="text-base font-Regular text-grayMedium">
                USD 300.00
              </p>
              <span className="text-base font-Regular text-blue">Received</span>
            </li>
            <li className="py-2 border-b border-black/20 flex items-center justify-between gap-2 flex-wrap">
              <p className="text-base font-Regular text-grayMedium">
                USD 160.00
              </p>
              <span className="text-base font-Regular text-grayMedium">
                On Hold
              </span>
            </li>
            <li className="py-2 border-b border-black/20 flex items-center justify-between gap-2 flex-wrap">
              <p className="text-base font-Regular text-grayMedium">
                USD 85.00
              </p>
              <span className="text-base font-Regular text-green">
                Security
              </span>
            </li>
          </ul>
        </div>
        <div className="flex-1 px-2">
          <Input
            label="Refund Amount"
            defaultValue="0.0"
            leftSection={<span className="text-xs">USD</span>}
            inputClassName="bg-white h-16"
            labelClassName="!font-Bold"
          />
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
      </div>
    </ModalComp>
  );
}

export default RefundModal;
