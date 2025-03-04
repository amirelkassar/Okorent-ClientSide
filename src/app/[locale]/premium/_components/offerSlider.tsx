"use client";
import React, { memo } from "react";
import offer from "@/src/assets/images/offer.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
const ImageSlider = [offer, offer, offer];

function OfferSlider() {
  return (
    <div className="flex-1 w-full h-auto  mb-6 lg:mb-8 offerSlider">
      <div className={"w-full "}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="OfferSwiper pb-6 md:pb-8 relative"
        >
          {ImageSlider.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className={
                    "w-full h-[58px] sml:h-16 md:h-[100px] lgl:h-[150px] xl:h-[204px]"
                  }
                >
                  <Image
                    src={item}
                    priority
                    width={1475}
                    height={204}
                    className=" object-cover w-full h-full rounded-xl lg:rounded-3xl"
                    alt={"offer"}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default memo(OfferSlider);
