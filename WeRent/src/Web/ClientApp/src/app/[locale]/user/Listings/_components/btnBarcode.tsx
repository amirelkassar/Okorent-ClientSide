import BarcodeIcon from "@/src/assets/icons/barcode";
import DownIcon from "@/src/assets/icons/down";
import QrIcon from "@/src/assets/icons/qr";
import Button from "@/src/components/button";
import ModalComp from "@/src/components/modal-comp";
import { ActionIcon, Select } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

function BtnBarcode() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <ActionIcon variant="transparent" onClick={open}>
        <BarcodeIcon className="w-5 h-auto" />
      </ActionIcon>
      {opened && (
        <ModalComp title="Add barcode" opened={opened} close={close}>
          <div className="w-[564px] max-w-full">
            <h3 className="text-base mb-2"> Select barcode type</h3>
            <Select
              data={["QR Code", "QR1", "QR2", "QR3", "QR4"]}
              leftSectionPointerEvents="none"
              defaultValue={"QR Code"}
              rightSection={<DownIcon />}
              classNames={{
                input:
                  " bg-white text-black rounded-xl text-grayMedium  h-[60px] border-none ",
                wrapper: "h-full",
                dropdown:
                  "bg-white text-black rounded-2xl border border-green/50 text-grayDark py-2",
                option: "hover:bg-green hover:text-white duration-300 ",
              }}
              className="h-full duration-200 min-h-full rounded-2xl border-2 border-green text-grayMedium"
            />
            <QrIcon className={" size-[224px] mx-auto block my-7"} />
            <Button className={"w-full h-[60px]"}>Generate</Button>
          </div>
        </ModalComp>
      )}
    </>
  );
}

export default BtnBarcode;
