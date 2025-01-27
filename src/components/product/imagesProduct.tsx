"use client";
import React from "react";
import product from "@/src/assets/images/item.png";
import Image from "next/image";
function ImagesProduct({ dataImages = [] }: { dataImages: any[] }) {
  return (
    <div className="w-full flex items-start gap-4 pb-2 hideScroll lg:gap-8 max-w-full overflow-x-auto ">
      {dataImages.length > 3 ? (
        <>
          {dataImages.map((src, index) => (
            <div key={index} className="flex-1 min-w-[90%] mdl:min-w-[70%]  ">
              <Image
                src={src?.path || product}
                alt={`Image`}
                width={970}
                height={440}
                priority
                className="w-full min-w-[90%] bg-blueLight sml:min-w-[400px] h-[182px] lg:h-[460px] object-contain object-center rounded-2xl"
              />
            </div>
          ))}
        </>
      ) : (
        <>
          <div className="flex-1 min-w-[90%]  sml:min-w-[400px]">
            <Image
              src={dataImages[0]?.path || product}
              alt={`Image`}
              width={970}
              height={440}
              priority
              className="w-full min-w-[90%] bg-blueLight sml:min-w-[400px] h-[182px] lg:h-[460px] object-contain object-center rounded-2xl"
            />
          </div>
          {dataImages.slice(1).length > 0 ? (
            <div
              className={`flex  items-start w-[470px] max-w-[90%] sml:min-w-[470px] gap-4 flex-row lg:flex-col  `}
            >
              {dataImages.slice(1).map((src, index) => (
                <div
                  key={index}
                  className={` cursor-pointer w-full h-[182px] min-w-[400px]  lg:h-[220px]  rounded-xl overflow-hidden border-2 `}
                >
                  <Image
                    src={src.path || product}
                    alt={`Thumbnail ${index + 1}`}
                    width={970}
                    height={440}
                    priority
                    className="w-full h-full bg-blueLight object-contain object-center"
                  />
                </div>
              ))}
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}

export default ImagesProduct;
