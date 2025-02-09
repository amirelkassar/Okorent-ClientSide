import Image from "next/image";
import React from "react";
import placeHolderProductImg from "@/src/assets/images/placTableProduct.png";
function OrderCard({ resource }: any) {
  return (
    <div className="flex min-h-[70px] flex-col lgl:flex-row lgl:items-center lgl:justify-between gap-1 lgl:gap-3 px-1 flex-wrap lgl:px-5  py-3">
      <div className="flex items-center gap-3">
        <div className=" size-[50px] min-w-[50px] hidden lgl:flex items-center justify-center bg-grayBack rounded-full p-[6px]">
          <Image
            alt="order"
            src={resource._resource.extendedProps.img || placeHolderProductImg}
            className="h-full w-auto rounded-full object-cover "
            width={20}
            height={40}
          />
        </div>
        <div className="max-w-full">
          <h3 className="text-xs lgl:text-base font-SemiBold  truncate max-w-[calc(100%-100px)] ">
            {resource._resource.title}
          </h3>
          <p className="text-[10px] lgl:text-sm font-Regular text-grayMedium truncate max-w-[calc(100%-100px)]">
            {resource._resource.extendedProps.productType}
          </p>
        </div>
      </div>
      <p className="text-[10px] lgl:text-sm font-Regular text-grayMedium">
        #{resource._resource.extendedProps.code}
      </p>
    </div>
  );
}

export default OrderCard;
