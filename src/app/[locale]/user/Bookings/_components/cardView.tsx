"use client";
import ListIcon from "@/src/assets/icons/list";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import React, { useRef } from "react";
import OneCardView from "./oneCardView";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ArrowLeftIcon from "@/src/assets/icons/arrowLeft";
import ArrowRightIcon from "@/src/assets/icons/ArrowRight";
import RentSwitch from "@/src/components/RentSwitch";
interface CardViewProps {
  title: string;
  first?: boolean;
  haveRentSwitch?: boolean;
  products?: any[];
  status: number | any;
}
function CardView({
  title,
  first = false,
  haveRentSwitch = false,
  products = [],
  status,
}: CardViewProps) {
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
  if (products.length === 0) {
    return null;
  }
  return (
    <div className="swiperList swiperListBooking pt-4 lg:pt-10 pb-5 lg:pb-10 lg:border-t border-black first-of-type:border-none first-of-type:pt-0">
      <div
        className={`flex headBooking items-center  justify-start md:justify-between mb-2 lg:mb-6 gap-5 md:gap-7 flex-wrap lg:flex-nowrap   `}
      >
        <div className="flex items-center justify-between lg:justify-start gap-5">
          <h2 className="text-xl lg:text-[32px] font-Bold">{title}</h2>

          <Link
            href={ROUTES.USER.BOOKINGS}
            className="px-3 duration-300 linkView hover:shadow-md w-fit py-2 rounded-xl border border-black flex items-center justify-center gap-2"
          >
            <ListIcon />
            <p className="lg:text-[16px] text-sm text-nowrap">List View</p>
          </Link>
        </div>

        <Link
          href={
            ROUTES.USER.BOOKINGSID(status) +
            "?typeUser=IRent&statusTitle=" +
            title.split(" ").join("-")
          }
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
            {products?.map((item: any, i: number) => {
              return (
                <SwiperSlide key={i}>
                  <OneCardView product={item} status={status} />
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

export default CardView;
