"use client";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CardAds from "./card-ads";
import ArrowLeftIcon from "@/src/assets/icons/arrowLeft";
import ArrowRightIcon from "@/src/assets/icons/ArrowRight";
import { Navigation } from "swiper/modules";
interface RowAdsProps {
  title: string;
  products: any[];
}
function RowAds({ title = "", products = [] }: RowAdsProps) {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const handleSwiper = (swiper: any) => {
    if (prevRef.current && nextRef.current) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  };
  return (
    <div className="swiperList swiperListBooking pt-4 lg:pt-10 pb-5 lg:pb-10 lg:border-t border-black first-of-type:border-none first-of-type:pt-0">
      <div
        className={`flex headBooking items-center  justify-start md:justify-between mb-2 lg:mb-6 gap-5 md:gap-7 flex-wrap lg:flex-nowrap   `}
      >
        <div className="flex items-center gap-5 w-fit md:justify-start justify-between">
          <h2 className="text-xl lg:text-[32px] ">{title}</h2>
        </div>
        <Link
          href={ROUTES.USER.ADSID("55")}
          className={` underline text-sm lg:text-lg min-w-fit text-end ms-auto   font-medium`}
        >
          View all
        </Link>
      </div>
      <div className="w-full relative flex items-center">
        <div className=" my-4 w-full xl:max-w-[calc(100%-80px)]">
          <Swiper
            onSwiper={handleSwiper}
            slidesPerView={1.4}
            spaceBetween={10}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            modules={[Navigation]}
            className={"mySwiper "}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              650: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {products?.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <CardAds product={{}} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="xl:flex hidden gap-3  absolute top-1/2 -translate-y-1/2 -right-10">
          <div
            ref={prevRef}
            className={`cursor-pointer duration-200 swiper-button-prev-${title}`}
          >
            <ArrowLeftIcon fill="#0F2A43" />
          </div>

          <div
            ref={nextRef}
            className={`cursor-pointer duration-200 swiper-button-next-${title}`}
          >
            <ArrowRightIcon fill="#0F2A43" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RowAds;
