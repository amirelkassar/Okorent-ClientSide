import React from "react";
interface ThemeUIProps {
  color1: string;
  color2: string;
  color3: string;
}
function ThemeUI({ color1, color2, color3 }: ThemeUIProps) {
  return (
    <div className={`bg-[${color2}] min-w-[210px] w-[210px] h-[120px] rounded-lg pt-[22px] ps-[38px] overflow-hidden relative z-[1]`}>
      <div className={` bg-[${color1}] h-full w-full  relative z-[2] ps-[33px]`}>
        <div className={`h-full w-full bg-[${color3}] ps-[33px] relative z-[3]`}></div>
      </div>
    </div>
  );
}

export default ThemeUI;
