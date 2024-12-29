import Image, { StaticImageData } from "next/image";
import React from "react";
import { cn } from "../lib/utils";
import placholderImg from '../assets/images/placTableProduct.png'
interface ImgProductProps {
  src: StaticImageData| string;
  productName: string;
  classNameBox?: string;
  classNameBImg?: string;
  classNameBTitle?: string;
}
function ImgProduct({
  src,
  productName='Product',
  classNameBox = "",
  classNameBImg = "",
  classNameBTitle = "",
}: ImgProductProps) {
  return (
    <div className="flex w-fit items-center gap-2">
      <div
        className={cn(
          "size-[50px] rounded-[50%] p-[3px] bg-grayBack flex justify-center items-center",
          classNameBox
        )}
      >
        <Image
          src={src||placholderImg}
          alt={productName}
          width={50}
          height={50}
          className={cn("w-full h-full rounded-full  object-cover object-center ", classNameBImg)}
        />
      </div>
      <h2 className={cn("text-[16px] font-SemiBold max-w-[260px] sml:max-w-[220px] truncate", classNameBTitle)}>
        {productName}
      </h2>
    </div>
  );
}

export default ImgProduct;
