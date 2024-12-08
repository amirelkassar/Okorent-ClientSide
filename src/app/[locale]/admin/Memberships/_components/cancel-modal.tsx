import DiscardIcon from "@/src/assets/icons/Discard";
import Button from "@/src/components/button";
import ModalComp from "@/src/components/modal-comp";
import React from "react";

function CancelModal({ opened, close, id }: any) {
  return (
    <ModalComp title="" opened={opened} close={close}>
      <div className="mt-7 w-[540px] max-w-full">
        <div className="w-[200px] h-[200px] mb-8 block mx-auto">
          <DiscardIcon />
        </div>
        <h3 className="text-xl text-center mb-1 font-SemiBold">
          Want to cancel?
        </h3>
        <p className="text-grayMedium text-base text-center mx-auto max-w-[300px] mb-11">
          Are you sure you want to cancel this user plan?
        </p>
        <div className="flex items-center gap-2 lg:gap-5 ">
          <Button
            onClick={close}
            className={
              "  flex-1 font-Medium text-green bg-white border-2 hover:bg-green duration-300 hover:text-white"
            }
          >
            No
          </Button>
          <Button className={" font-Medium flex-1"} onClick={close}>
            Yes
          </Button>
        </div>
      </div>
    </ModalComp>
  );
}

export default CancelModal;
