import React from "react";
import successful from "@/src/assets/images/successful.png";
import Image from "next/image";
import Button from "@/src/components/button";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
function page() {
  return (
    <div className="bg-white border border-green/30 rounded-2xl px-11 pt-10 pb-8 shadow-lg max-w-[650px] mx-auto my-20">
      <Image
        src={successful}
        alt="successful"
        width={350}
        height={228}
        className="w-[350px] max-w-[80%] h-auto mx-auto block mb-2 object-contain"
      />
      <h2 className="text-[24px] text-center leading-7 ">Thank you</h2>
      <h3 className="text-[20px] text-center leading-7 font-Regular mb-16 text-grayMedium">
        Your payment was successful
      </h3>
      <ul className="flex flex-col gap-3 mb-14">
        <li className="flex items-center justify-between gap-2 pb-5 border-b border-[#B6BFC64D] last-of-type:border-none">
          <h4 className="text-[20px]">Payment : Essential Package</h4>
          <p className="text-[20px] text-grayMedium font-Regular">35$</p>
        </li>
        <li className="flex items-center justify-between gap-2 pb-5 border-b border-[#B6BFC64D] last-of-type:border-none">
          <h4 className="text-[20px]">Transaction ID</h4>
          <p className="text-[20px] text-grayMedium font-Regular">#1265485</p>
        </li>
        <li className="flex items-center justify-between gap-2 pb-5 border-b border-[#B6BFC64D] last-of-type:border-none">
          <h4 className="text-[20px]">Date</h4>
          <p className="text-[20px] text-grayMedium font-Regular"> 23/8/2024    </p>
        </li>
      </ul>
      <p className="text-[14px] text-center leading-7 font-Regular mb-24 text-grayMedium">
        You will receive a confirmation email
      </p>
      <div className="flex  gap-12">
        <Link
          href={ROUTES.USER.HOMEPAGE}
          className="flex-1 flex w-full items-center justify-center h-[50px] bg-grayBack rounded-xl"
        >
          Back to homepage
        </Link>
        <Button className={"flex-1 w-auto h-[50px] max-w-[calc(50%-20px)]"}>
          Download Invoice
        </Button>
      </div>
    </div>
  );
}

export default page;
