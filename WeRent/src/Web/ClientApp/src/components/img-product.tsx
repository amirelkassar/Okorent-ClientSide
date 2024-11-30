import Image, { StaticImageData } from "next/image";
import React from "react";
import { cn } from "../lib/utils";
interface ImgProductProps {
  src: StaticImageData;
  productName: string;
  classNameBox?: string;
  classNameBImg?: string;
  classNameBTitle?: string;
}
function ImgProduct({
  src,
  productName,
  classNameBox = "",
  classNameBImg = "",
  classNameBTitle = "",
}: ImgProductProps) {
  return (
    <div className="flex w-fit items-center gap-2">
      <div
        className={cn(
          "size-[50px] rounded-[50%] p-[6px] bg-grayBack flex justify-center items-center",
          classNameBox
        )}
      >
        <Image
          src={src}
          alt={productName}
          width={50}
          height={50}
          className={cn("w-auto h-full  object-contain ", classNameBImg)}
        />
      </div>
      <h2 className={cn("text-[16px] font-SemiBold", classNameBTitle)}>
        {productName}
      </h2>
    </div>
  );
}

export default ImgProduct;
