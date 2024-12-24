import React from "react";
import { cn } from "../lib/utils";
interface CardInfoOrderProps {
  label?: string;
  info?: string;
  children?: React.ReactNode;
  iconRender?: () => React.ReactNode;
  classNameBox?:string
}
function CardInfoOrder({
  label = "",
  info = "",
  iconRender,
  children,
  classNameBox=''
}: CardInfoOrderProps) {
  return (
    <div className={cn(' w-full mdl:w-[50%] min-w-[40%]   flex-1 ${props.className',classNameBox)}>
      {label && (
        <h3 className="text-sm mdl:text-base font-SemiBold mb-2 mdl:mb-4">
          {label}
        </h3>
      )}
      <div className=" border border-green/30 rounded-xl h-16 px-4 py-3 flex items-center gap-2  min-h-14">
        {iconRender&& iconRender()}
        {info && <p className="text-sm mdl:text-base font-SemiBold max-w-full truncate">{info}</p>}
        {children}
      </div>
    </div>
  );
}

export default CardInfoOrder;
