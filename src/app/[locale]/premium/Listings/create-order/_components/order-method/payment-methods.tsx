import React from "react";
import PaymentEditIcon from "@/src/assets/icons/payment-edit";
import AccordionMethodOrder from "../accordion-method-order";
import Button from "@/src/components/button";
import MasterCardIcon from "@/src/assets/icons/MasterCard";
import VisaIcon from "@/src/assets/icons/visa";
import PaymentsIcon from "@/src/assets/icons/payments";
import LinkIcon from "@/src/assets/icons/link";

function PaymentMethods() {
  return (
    <AccordionMethodOrder
      title="Payment Methods"
      icon={() => <PaymentEditIcon className="w-full h-auto" />}
    >
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center justify-between gap-4 p-2 rounded-xl border border-green ">
          <div className="flex gap-3">
            <div className="flex items-center gap-2">
              <MasterCardIcon className="w-6 h-auto" />
              <VisaIcon className="w-8 h-auto" />
            </div>
            <p className="text-base font-SemiBold">Credit or debit card</p>
          </div>
          <Button
            className={
              "h-[30px] px-5  w-[90px] min-w-[90px] !rounded-lg !text-xs border-2"
            }
          >
            Add
          </Button>
        </div>
        <div className="flex items-center justify-between gap-4 p-2 rounded-xl border border-green ">
          <div className="flex gap-3">
            <PaymentsIcon className="w-6 h-auto" />
            <p className="text-base font-SemiBold">Cash</p>
          </div>
          <Button
            className={
              "h-[30px] px-5  w-[90px] min-w-[90px] !rounded-lg !text-xs border-2"
            }
          >
            Add
          </Button>
        </div>
        <div className="flex items-center justify-between gap-4 p-2 rounded-xl border border-green ">
          <div className="flex gap-3">
            <LinkIcon className="w-5 h-auto" />
            <p className="text-base font-SemiBold">Generate Payment Link</p>
          </div>
          <Button
            className={
              "h-[30px] px-5  w-[90px] min-w-[90px] !rounded-lg !text-xs border-2"
            }
          >
            Add
          </Button>
        </div>
      </div>
    </AccordionMethodOrder>
  );
}

export default PaymentMethods;
