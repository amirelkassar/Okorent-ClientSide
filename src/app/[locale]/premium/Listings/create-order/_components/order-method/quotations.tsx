"use client";
import React from "react";
import QuotationsIcon from "@/src/assets/icons/Quotations";
import Button from "@/src/components/button";
import FileIcon from "@/src/assets/icons/file";
import CardStatus from "@/src/components/cardStatus";
import ActionMenu from "../action-menu";
import { useDisclosure } from "@mantine/hooks";
import ModalChooseQuotation from "../modal/modal-choose-quotation";
import AccordionRow from "@/src/components/accordion-row";

function Quotations() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <AccordionRow
      title="Quotations"
      icon={() => <QuotationsIcon className="w-full h-auto" />}
    >
      <div>
        <div className="flex flex-col gap-2">
          <RowQuotation status={1} quotationId="OR02245082" />
          <RowQuotation status={2} quotationId="OR02245082" />
        </div>
        <p className="text-center p-2 my-4">No Quotation was found</p>
        <Button
          onClick={open}
          className={"h-9 px-3 !rounded-lg ms-auto !text-xs"}
        >
          Generate Quotation
        </Button>
        <ModalChooseQuotation opened={opened} close={close} />
      </div>
    </AccordionRow>
  );
}

export default Quotations;

const RowQuotation = ({
  status,
  quotationId,
}: {
  status: 1 | 2;
  quotationId: string;
}) => {
  return (
    <div className="px-4 py-3 rounded-xl bg-green/10 flex items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <FileIcon />
        <p className="text-base font-SemiBold">Quotation {quotationId}</p>
      </div>
      <div className="flex items-center gap-2">
        <CardStatus
          circle
          title={status === 1 ? "Accepted" : "Rejected"}
          type={status === 1 ? "blue" : "red"}
        />
        <ActionMenu id={quotationId} />
      </div>
    </div>
  );
};
