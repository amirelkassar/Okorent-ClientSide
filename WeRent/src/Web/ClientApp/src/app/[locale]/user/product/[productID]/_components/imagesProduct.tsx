"use client";
import React from "react";
import product from "@/src/assets/images/item.png";
import product2 from "@/src/assets/images/item.png";
import Image from "next/image";
const images = [product, product2];
function ImagesProduct() {


  return (
    <div className="w-full flex items-start gap-4 hideScroll lg:gap-8 max-w-full overflow-x-auto ">
      <div className="flex-1 min-w-[90%]  sml:min-w-[400px]">
        <Image
          src={images[0]}
          alt={`Image`}
          width={970}
          height={440}
          className="w-full min-w-[90%] sml:min-w-[400px] h-[182px] lg:h-[460px] object-cover rounded-2xl"
        />
      </div>
      <div className="flex  items-start w-[470px] max-w-[90%] sml:min-w-[470px] gap-4 flex-row lg:flex-col  ">
        {images.map((src, index) => (
          <div
            key={index}
            className={` cursor-pointer w-full h-[182px] min-w-[400px]  lg:h-[50%]  rounded-xl overflow-hidden border-2 `}
          >
            <Image
              src={src}
              alt={`Thumbnail ${index + 1}`}
              width={970}
          height={440}
              className="w-full h-full object-cover object-top"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImagesProduct;
