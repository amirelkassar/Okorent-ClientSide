import Button from "@/src/components/button";
import InputTextarea from "@/src/components/InputTextarea";
import ModalComp from "@/src/components/modal-comp";
import React from "react";

function CancelModal({ opened, close }: any) {
  return (
    <ModalComp opened={opened} close={close} title="Cancel Booking ">
      <div className="w-[660px] max-w-full">
        <InputTextarea placeholder="Write the cancellation reason here" inputClassName="min-h-[144px]" />
        <div className="flex items-center gap-7 mt-5 w-full">
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

export default CancelModal;
