'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import offer from "@/src/assets/images/offer.png";
import Image from "next/image";
interface SliderAuthProps {}
const dataOffer = [
  {
    id: 1,
    image: offer,
  },
  {
    id: 2,
    image: offer,
  },
  {
    id: 3,
    image: offer,
  },
  {
    id: 4,
    image: offer,
  },
];
function OfferSlider({}: SliderAuthProps) {
  return (
    <div className="flex-1 w-full h-[240px] rounded-3xl  mb-12 offerSlider">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="w-full h-full rounded-[30px] "
        
      >
        {dataOffer.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="w-full h-full relative rounded-[30px]">
                <div className="w-full h-full ">
                  <Image
                    src={item.image}
                    priority
                    className=" object-cover w-full h-full"
                    alt={'offer'}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default OfferSlider;
