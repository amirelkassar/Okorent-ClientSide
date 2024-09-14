import ChipIcon from "@/src/assets/icons/Chip";
import VisaTitleIcon from "@/src/assets/icons/visaTitle";
import WifiIcon from "@/src/assets/icons/wifi";
import React from "react";
import Mask from "@/src/assets/images/Mask.png";

function Visa() {
  return (
    <div className="h-[170px] lg:h-[256px] mb-7 py-4 lg:py-6 px-6 lg:px-8 -mt-20 rounded-[30px]  flex flex-col justify-between bg-blue border-2 border-white/20 bg-cover bg-no-repeat overflow-hidden"
    style={{backgroundImage:`url(${Mask.src})`}}
    >
      <div className="flex items-center justify-between gap-2">
        <WifiIcon className="h-7 w-auto lg:h-10" />
        <VisaTitleIcon className="w-[50px] h-auto lg:w-[70px]" />
      </div>
      <h3 className="text-xl lg:text-[24px] mb-3 lg:mb-5 mt-7 lg:mt-11 text-white/80 drop-shadow-lg">
        3455 4562 7710 3507
      </h3>
      <div className="flex gap-3 justify-between">
        <div>
          <h3 className="text-xs lg:text-[15px] mb-1  text-white">Card holder name</h3>
          <p className="text-[14px] font-sans font-bold text-white">John Carter</p>
        </div>
        <div>
          <h3 className="text-xs lg:text-[15px] mb-1  text-white">Expiry date</h3>
          <p className="text-[14px] font-sans font-bold text-white">02/30</p>
        </div> 
        <ChipIcon className="w-10 h-auto lg:w-[60px]" /> 
      </div>
    </div>
  );
}

export default Visa;
