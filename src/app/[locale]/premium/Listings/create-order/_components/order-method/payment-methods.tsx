"use client";
import React from "react";
import PaymentEditIcon from "@/src/assets/icons/payment-edit";
import AccordionMethodOrder from "../accordion-method-order";
import Button from "@/src/components/button";
import MasterCardIcon from "@/src/assets/icons/MasterCard";
import VisaIcon from "@/src/assets/icons/visa";
import PaymentsIcon from "@/src/assets/icons/payments";
import LinkIcon from "@/src/assets/icons/link";
import ModalCardPayment from "../modal/modal-card-payment";
import { useDisclosure } from "@mantine/hooks";

function PaymentMethods() {
  const [opened, { open, close }] = useDisclosure(false);
  const [opened2, { open: open2, close: close2 }] = useDisclosure(false);
  const [opened3, { open: open3, close: close3 }] = useDisclosure(false);

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
            onClick={open}
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
            onClick={open2}
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
            onClick={open3}
            className={
              "h-[30px] px-5  w-[90px] min-w-[90px] !rounded-lg !text-xs border-2"
            }
          >
            Add
          </Button>
        </div>
        <ModalCardPayment
          opened={opened}
          close={close}
          title="Add Card Payment"
        />
        <ModalCardPayment
          opened={opened2}
          close={close2}
          title="Add Cash Payment"
        />
        <ModalCardPayment
          opened={opened3}
          close={close3}
          title="Generate Payment Link"
        />
      </div>
    </AccordionMethodOrder>
  );
}

export default PaymentMethods;
