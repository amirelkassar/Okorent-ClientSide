import Image from "next/image";
import React from "react";
import homeImg from "@/src/assets/images/house1.png";
import Button from "@/src/components/button";

function OneCardView() {
  return (
    <div className="bg-white border border-green/50 rounded-3xl px-5 py-4 max-w-[400px] mb-3 w-full min-w-[280px] lg:min-w-[320px] shadow-sidebar">
      <Image
        alt="home"
        priority
        src={homeImg}
        className="w-full rounded-xl h-40 object-cover object-top"
      />
      <div className="flex items-end justify-between gap-3 mt-5">
        <div>
          <h3 className="text-grayMedium mb-1 font-Regular">Product Name</h3>
          <p className="text-[16px] font-SemiBold">Apple Laptop</p>
        </div>
        <span className=" block h-[34px] w-[1px] bg-green"></span>
        <div>
          <h3 className="text-grayMedium text-center mb-1 font-Regular">
            Payment
          </h3>
          <p className="text-[16px] text-center font-SemiBold">100$</p>
        </div>
        <span className=" block h-[34px] w-[1px] bg-green"></span>
        <div>
          <h3 className="text-grayMedium mb-1 font-Regular">Quantity</h3>
          <p className="text-[16px] font-SemiBold">14</p>
        </div>
      </div>
      <div className="flex items-center gap-5 mt-4">
        <Button className={'h-10 bg-grayBack flex-1 text-black border-none'}>Edit</Button>
        <Button className={'h-10 flex-1'}>View Details</Button>
      </div>
    </div>
  );
}

export default OneCardView;
