import React from "react";
import InvoiceIcon from "@/src/assets/icons/Invoice";
import Button from "@/src/components/button";
import FileIcon from "@/src/assets/icons/file";
import ActionMenuInvoice from "../action-menu-invoice";
import CardStatus from "@/src/components/cardStatus";
import AccordionRow from "@/src/components/accordion-row";

function Invoice() {
  return (
    <AccordionRow
      title="Invoice"
      icon={() => <InvoiceIcon className="w-full h-auto" />}
    >
      <div>
        <div className="flex flex-col gap-2">
          <RowInvoice status={1} InvoiceId="OR02245082" />
          <RowInvoice InvoiceId="OR02245082" />
        </div>
        <p className="text-center p-2 my-4">No Invoices was found</p>
        <Button className={"h-9 px-3 !rounded-lg ms-auto !text-xs"}>
          Generate Invoice
        </Button>
      </div>
    </AccordionRow>
  );
}

export default Invoice;

const RowInvoice = ({
  InvoiceId,
  status,
}: {
  InvoiceId: string;
  status?: 1 | 2;
}) => {
  return (
    <div className="px-4 py-3 rounded-xl bg-green/10 flex items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <FileIcon />
        <p className="text-base font-SemiBold">Invoice {InvoiceId}</p>
      </div>
      <div className="flex items-center gap-2">
        {status && (
          <CardStatus
            circle
            title={status === 1 ? "Accepted" : "Rejected"}
            type={status === 1 ? "blue" : "red"}
          />
        )}
        <ActionMenuInvoice id={InvoiceId} />
      </div>
    </div>
  );
};
