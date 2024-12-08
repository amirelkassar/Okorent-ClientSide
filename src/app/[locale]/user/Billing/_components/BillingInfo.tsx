import VisaTitleBlack from "@/src/assets/icons/visaTitleBlack";
import Button from "@/src/components/button";
import { Link } from "@/src/navigation";
import React from "react";

function BillingInfo() {
  return (
    <div className="flex  justify-between flex-wrap xl:flex-nowrap gap-5 bg-white/50 rounded-3xl border-green border shadow-md py-10  px-8   order-3 lg:order-2 ">
      <div className="flex-1">
        <h3 className="text-2xl font-Regular mb-10">Billing Info & payment</h3>
        <div className="flex gap-10 justify-between">
          <div>
            <h4 className=" font-Regular text-base mb-2 ">Billing</h4>
            <ul className="flex flex-col gap-1">
              <li className="text-grayMedium font-Regular text-base ">
                Mark James
              </li>
              <li className="text-grayMedium font-Regular text-base ">
                mark@gmail.com
              </li>
              <li className="text-grayMedium font-Regular text-base ">
                Essen, Egypt
              </li>
              <li className="text-grayMedium font-Regular text-base ">
                P.O Box 2300
              </li>
            </ul>
          </div>
          <div>
            <h4 className=" font-Regular text-base mb-2 ">Payment</h4>
            <div className="flex gap-4 lgl:gap-9">
              <div className="flex  gap-2">
                <VisaTitleBlack className="mt-1" />
                <div>
                  <p className="text-grayMedium text-base font-Regular">VISA ending in 0555</p>
                  <p className="text-grayMedium text-base font-Regular">Expires 04/29</p>
                </div>
              </div>
              <Link href={"#"} className="text-blue font-Regular text-base">
                Change{" "}
              </Link>
            </div>
          
          </div>
        </div>
      </div>
      <Button className={"h-9 !px-8 rounded-lg "}>Edit</Button>
    </div>
  );
}

export default BillingInfo;
