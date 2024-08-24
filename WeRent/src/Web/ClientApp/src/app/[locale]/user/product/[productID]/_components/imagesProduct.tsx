"use client";
import React, { useState } from "react";
import product from "@/src/assets/images/product1.png";
import product2 from "@/src/assets/images/product2.png";
import Image from "next/image";
const images = [product, product2, product];
function ImagesProduct() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="w-[620px] max-w-full">
      <div>
        <Image
          src={images[activeImage]}
          alt={`Image ${activeImage + 1}`}
          width={600}
          height={400}
          className="w-full h-[460px] object-cover rounded-2xl"
        />
      </div>
      <div className="flex items-start w-full gap-4 mt-5 flex-wrap  ">
        {images.map((src, index) => (
          <div
            key={index}
            className={` cursor-pointer  rounded-lg overflow-hidden border-2 ${
              activeImage === index ? "border-green" : "border-transparent "
            } `}
            onClick={() => setActiveImage(index)}
          >
            <Image
              src={src}
              alt={`Thumbnail ${index + 1}`}
              width={190}
              height={190}
              className=" size-[190px] object-cover object-top"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImagesProduct;
