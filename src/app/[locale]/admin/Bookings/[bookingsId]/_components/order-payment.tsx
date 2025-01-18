import FileIcon from "@/src/assets/icons/file";
import MasterCardIcon from "@/src/assets/icons/MasterCard";
import PaymentsIcon from "@/src/assets/icons/payments";
import CardInfoOrder from "@/src/components/card-info-order";
import React from "react";

function OrderPayment({
  ProductDetailsPayment,
}: {
  ProductDetailsPayment: any;
}) {
  return (
    <div className="flex flex-col gap-4 flex-1  min-w-[300px] items-start justify-start py-6 mdl:py-9 px-3 mdl:px-4 bg-white rounded-xl border border-green/30">
      <CardInfoOrder
        classNameBox="!w-full !flex-none"
        label="Payment Method"
        info={`Card ending with ${ProductDetailsPayment?.handler || "0"}`}
        iconRender={() => <MasterCardIcon className="w-6 h-auto" />}
      />
      <CardInfoOrder
        classNameBox="!w-full !flex-none"
        info={`Invoice ${ProductDetailsPayment?.id}`}
        iconRender={() => (
          <div className=" rounded-full bg-blueLight/50 size-10 p-1">
            <div className="bg-blueLight rounded-full w-full h-full p-1 flex items-center justify-center">
              <FileIcon />
            </div>
          </div>
        )}
      />
      <CardInfoOrder
        classNameBox="!w-full !flex-none"
        iconRender={() => (
          <div className=" rounded-full bg-blueLight/50 size-10 p-1">
            <div className="bg-blueLight rounded-full w-full h-full p-1 flex items-center justify-center">
              <PaymentsIcon />
            </div>
          </div>
        )}
      >
        <div className="flex-1">
          <h4>Payments Received </h4>
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <p className="text-xs text-grayMedium font-Regular">
              USD {ProductDetailsPayment?.amount}
            </p>
            <p className="text-xs text-grayMedium font-Regular">
              Security Deposit
            </p>
          </div>
        </div>
      </CardInfoOrder>
    </div>
  );
}

export default OrderPayment;
