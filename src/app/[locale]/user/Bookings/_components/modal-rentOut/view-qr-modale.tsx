import QrIcon from "@/src/assets/icons/qr";
import Button from "@/src/components/button";
import ModalComp from "@/src/components/modal-comp";
import React from "react";

function ViewQrModal({ opened, close }: { opened: boolean; close: any }) {
  return (
    <ModalComp title="View QR code" opened={opened} close={close}>
      <div className="w-[564px] max-w-full">
        <QrIcon
          className={" size-[190px] md:size-[224px] mx-auto block my-7"}
        />
        <div className="flex items-center gap-7 w-full">
          <Button onClick={close} className={" flex-1 h-[54px]"}>
            Print
          </Button>
          <Button
            onClick={close}
            className={" flex-1 h-[54px] text-black bg-grayBack border-none"}
          >
            Cancel
          </Button>
        </div>
      </div>
    </ModalComp>
  );
}

export default ViewQrModal;
