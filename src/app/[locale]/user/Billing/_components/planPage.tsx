import React from "react";
import Plan from "./plan";
import BillingInfo from "./BillingInfo";
import { Checkbox } from "@mantine/core";

function PlanPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  w-full justify-between gap-8">
      <Plan />
      <BillingInfo />
      <div className="bg-white/50 self-start flex-1 order-2 lg:order-3  min-w-[calc(50%-16px)] rounded-3xl border-green/70 border shadow-md pt-7 lg:pt-8 pb-6 px-10 lg:px-14">
        <h3 className="text-base text-grayMedium font-Regular">
          Next Billing - October 19-2024
        </h3>
        <p className="text-2xl lg:text-3xl font-Regular">30$</p>
      </div>
      <div className="bg-white/50 flex-1 order-5  min-w-[calc(50%-16px)] rounded-3xl border-green/70 border shadow-md  py-6 md:py-10 px-3 md:px-8  lg:px-14">
        <h3 className=" text-lg md:text-2xl font-Regular mb-3">Notifications</h3>
        <div className="flex lg:items-center flex-col lg:flex-row gap-3">
          <p className="text-base font-Regular text-grayMedium mb-4 w-full lg:w-fit lg:max-w-[310px]">
            Receipts and billing alerts will be sent to 
            ahmed.mostafa@corporate-mg.com
          </p>
          <div className="flex items-start space-x-3">
            <Checkbox
              size="sm"
              color="#88BA52"
              checked
              readOnly
              className="mt-1"
            />
            <div>
              <p className="text-base font-Regular">Bill Estimates</p>
              <p className="text-grayMedium text-sm font-Regular">
                Received 2 weeks before recurring charges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanPage;
