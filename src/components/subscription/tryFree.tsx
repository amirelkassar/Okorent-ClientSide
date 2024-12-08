import ArrowWhiteIcon from "@/src/assets/icons/arrowWhite";
import SadIcon from "@/src/assets/icons/sad";
import TrueGreenIcon from "@/src/assets/icons/trueGreen";
import Button from "@/src/components/button";
import React from "react";
import backFree from "@/src/assets/images/backFree.png";
import TwoLineIcon from "@/src/assets/icons/twoLine";

function TryFree() {
  return (
    <div className="mb-20">
      <div className="p-2 lg:p-3 size-[52px] lg:size-[70px] mx-auto rounded-full bg-green/20 flex items-center justify-center">
        <SadIcon />
      </div>
      <h2 className="text-center  mb-10 text-2xl lg:text-[32px]">Still Confused?</h2>
      <div
        className="w-full rounded-3xl pt-5 lg:pt-[60px] px-6 pb-8 lg:pb-12 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${backFree.src})` }}
      >
        <h3 className="text-2xl lg:text-[56px] text-center mb-4 lg:leading-[58px]">
          Try essential package for{" "}
          <span className=" inline-block relative">
            free
            <span className=" absolute w-full left-1/2 -translate-x-1/2 -bottom-3">
              <TwoLineIcon className="w-full" />
            </span>
          </span>
        </h3>
        <p className="text-center text-sm lg:text-xl font-Regular mb-9">
          Get started and see the benefits of our premium packages.
        </p>
        <Button className={" gap-2 mx-auto min-w-[270px] mb-7 lg:mb-10"}>
          <p>Start free trial</p>
          <ArrowWhiteIcon />
        </Button>
        <ul className="flex items-center justify-center gap-10 flex-wrap">
          <li className="flex items-center gap-1">
            <TrueGreenIcon fill="#006AFF" className=" size-6 lg:size-7" />
            <p className="text-base lg:text-xl font-Regular">Free 14-day trial</p>
          </li>
          <li className="flex items-center gap-1">
            <TrueGreenIcon fill="#006AFF" className=" size-6 lg:size-7" />
            <p className="text-base lg:text-xl font-Regular">Free 14-day trial</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TryFree;
