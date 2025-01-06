import Button from "@/src/components/button";
import Input from "@/src/components/input";
import ModalComp from "@/src/components/modal-comp";
import React from "react";
interface ModalEditBillingProps {
    opened: boolean;
    close: () => void;
}
function ModalEditBilling({opened,close}:ModalEditBillingProps) {
  return (
    <ModalComp title="Edit Billing information" opened={opened} close={close}>
      <div className="w-[764px] max-w-full">
        <div className="flex flex-wrap gap-3 md:gap-5 mb-10 ">
          <Input
            label="Owner Name"
            inputClassName="h-12 bg-white "
            className="flex-1 w-full min-w-full md:min-w-[calc(50%-10px)]"
          />
          <Input
            label="Email Address"
            inputClassName="h-12 bg-white "
            className="flex-1 w-full min-w-full md:min-w-[calc(50%-10px)]"
          />
          <Input
            label="Billing Address"
            inputClassName="h-12 bg-white "
            className="flex-1 w-full min-w-full md:min-w-[calc(50%-10px)]"
          />
          <Input
            label="P.O box"
            inputClassName="h-12 bg-white "
            className="flex-1 w-full min-w-full md:min-w-[calc(50%-10px)]"
          />
          <Input
            label="Country"
            inputClassName="h-12 bg-white "
            className="flex-1 w-full min-w-full md:min-w-[calc(50%-10px)]"
          />
          <Input
            label="City"
            inputClassName="h-12 bg-white "
            className="flex-1 w-full min-w-full md:min-w-[calc(50%-10px)]"
          />
        </div>
        <div className="flex items-center gap-7 w-full">
          <Button
            onClick={close}
            className={
              " flex-1 h-16 text-black hover:shadow-md bg-grayBack border-none"
            }
          >
            Cancel
          </Button>
          <Button onClick={close} className={" flex-1 h-16"}>
            Save
          </Button>
        </div>
      </div>
    </ModalComp>
  );
}

export default ModalEditBilling;
