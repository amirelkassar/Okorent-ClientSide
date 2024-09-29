import VisaTitleBlack from "@/src/assets/icons/visaTitleBlack";
import Button from "@/src/components/button";
import { Link } from "@/src/navigation";
import React from "react";

function WithdrawlInfo() {
  return (
    <div className=" bg-white/50 rounded-3xl border-green border shadow-md pt-10 pb-6  px-8 row-span-2  order-4 ">
      <div className="flex flex-col lg:flex-row  justify-between flex-wrap xl:flex-nowrap gap-5 mb-6 lg:mb-9">
        <div className="flex-1">
          <h3 className="text-2xl font-Regular mb-10">
          Withdrawl Info
          </h3>
          <div className="flex gap-10 flex-col lg:flex-row justify-between">
            <div>
              <h4 className=" font-Regular text-base">
                Your Available Balance is
              </h4>
              <p className="text-2xl font-Regular">500$ </p>
            </div>
            <div>
              <h4 className=" font-Regular text-base mb-2 ">Payment</h4>
              <div className="flex gap-4 lgl:gap-9">
                <div className="flex  gap-2">
                  <VisaTitleBlack className="mt-1" />
                  <div>
                    <p className="text-grayMedium text-base font-Regular">
                      VISA ending in 0555
                    </p>
                    <p className="text-grayMedium text-base font-Regular">
                      Expires 04/29
                    </p>
                  </div>
                </div>
                <Link href={"#"} className="text-blue font-Regular text-base">
                  Change{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Button className={"h-9 !px-8 rounded-lg w-fit"}>Edit</Button>
      </div>
      <span className="w-full block h-[1px] bg-[#B6BFC6] mb-6"></span>
      <div className="flex justify-between gap-4 flex-col lg:flex-row">
        <div>
          <h4 className="text-base font-Regular">Last Withdrawl</h4>
          <p className="text-base font-Regular text-grayMedium mb-2">210$ On Aug 20, 2024 to Visa ending in 0555</p>
          <Link href={"#"} className="text-blue font-Regular text-base">
            View Withdrawl History
          </Link>
        </div>
        <Button className={"bg-white text-green border h-9 !rounded-lg !px-4"}>
          Schedule Withdrawal
        </Button>
      </div>
    </div>
  );
}

export default WithdrawlInfo;
