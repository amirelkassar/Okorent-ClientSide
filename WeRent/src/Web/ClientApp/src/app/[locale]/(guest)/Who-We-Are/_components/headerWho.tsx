import React from "react";
import Button from "@/src/components/button";
import ImgWho from "@/src/assets/icons/imgWho";
function HeaderWho() {
  return (
    <div className="flex items-center gap-5 mb-9 lg:mb-10 justify-between relative lg:mt-32">
      <div className="w-full lgl:max-w-[610px] ">
        <span className="text-grayMedium  font-Regular mb-3 block text-base lg:text-2xl ">
          Who we are
        </span>

        <h2 className="text-[32px] lg:text-[56px]  font-Medium mb-1 lg:mb-2 leading-[36px] lg:leading-[56px]">
          Seamlessly <span className="text-blue">Connecting</span> <br />
          Renters & Lessors
        </h2>
        <p className="text-grayMedium font-Regular mb-6 text-base lg:text-2xl  ">
        Effortless Leasing for Everyone
        </p>
        <Button className={" !px-7 w-fit h-11 "}>
          Let’s Start
        </Button>
      </div>
      <div className="w-[634px] max-w-full h-auto object-contain before:w-[940px] before:h-[720px] lg:block hidden relative mapBefore2 before:absolute before:-start-28 before:top-28 before:bg-no-repeat before:rotate-[26deg]  before:-translate-y-1/2  before:bg-center  ">
        <ImgWho className={"w-full h-auto relative"} />
      </div>
    </div>
  );
}

export default HeaderWho;
