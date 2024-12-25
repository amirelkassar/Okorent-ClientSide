import QrIcon from "@/src/assets/icons/qr";
import Button from "@/src/components/button";
import ModalComp from "@/src/components/modal-comp";
import React from "react";

function ScanQrModal({ opened, close }: { opened: boolean; close: any }) {
  return (
    <ModalComp
      title="Scan Feature Not Available on the Website"
      opened={opened}
      close={close}
    >
      <div className="w-[594px] max-w-full">
        <QrIcon
          className={" size-[190px] md:size-[224px] mx-auto block my-7"}
        />
        <p className="text-xs mdl:text-base font-Regular text-center mt-6 mb-6 mdl:mb-12">
          The QR Code scanning feature is only available when accessing the
          website from a mobile device or through the mobile application. Please
          switch to a mobile device to proceed.
        </p>
        <div className="flex items-center gap-7 w-full">
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

export default ScanQrModal;
