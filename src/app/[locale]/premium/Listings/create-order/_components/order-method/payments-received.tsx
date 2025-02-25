import React from "react";
import AccordionMethodOrder from "../accordion-method-order";
import PaymentsIcon from "@/src/assets/icons/payments";
import ActionMenuPaymentsReceived from "../action-menu-payments-received";
import Button from "@/src/components/button";

function PaymentsReceived() {
  return (
    <AccordionMethodOrder
      title="Payments Received"
      icon={() => <PaymentsIcon className="w-full h-auto" />}
    >
      <div>
        <div className="flex flex-col gap-2">
          <RowPaymentReceived />
          <RowPaymentReceived />
          <div className="flex items-center justify-between gap-4  ">
            <p className="text-base font-Bold text-black">USD 385.00</p>

            <p className="font-Bold text-base">Total Received</p>
          </div>
        </div>
        <Button className={"h-8 mt-7 !px-5 border-2  !rounded-lg ms-auto !text-xs"}>
          Refund
        </Button>
      </div>
    </AccordionMethodOrder>
  );
}

export default PaymentsReceived;

const RowPaymentReceived = () => {
  return (
    <div className="flex items-center justify-between gap-4 pb-3 border-b border-black/20 ">
      <p className="text-base font-Regular text-grayMedium">USD 300.00</p>
      <div className="flex items-center gap-2">
        <p className="text-blue font-SemiBold text-base">Cash</p>
        <ActionMenuPaymentsReceived />
      </div>
    </div>
  );
};
