import DownIcon from "@/src/assets/icons/down";
import QrIcon from "@/src/assets/icons/qr";
import Button from "@/src/components/button";
import ModalComp from "@/src/components/modal-comp";
import { Select } from "@mantine/core";
import React from "react";

function ModalBarcode({ opened, close }: { opened: boolean; close: any }) {
  return (
    <ModalComp title="View Barcode" opened={opened} close={close}>
      <div className="w-[564px] max-w-full">
        <h3 className="text-sm font-medium lg:text-base mb-2">
          {" "}
          Select barcode type
        </h3>
        <Select
          data={["QR Code", "QR1", "QR2", "QR3", "QR4"]}
          leftSectionPointerEvents="none"
          defaultValue={"QR Code"}
          rightSection={<DownIcon />}
          classNames={{
            input:
              " bg-white text-black rounded-xl text-grayMedium  h-[50px] lg:h-[60px] border-none ",
            wrapper: "h-full",
            dropdown:
              "bg-white text-black rounded-2xl border border-green/50 text-grayDark py-2",
            option: "hover:bg-green hover:text-white duration-300 ",
          }}
          className="h-full duration-200 min-h-full rounded-2xl border-2 border-green text-grayMedium"
        />
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

export default ModalBarcode;
