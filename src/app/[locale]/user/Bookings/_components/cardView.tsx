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
  proudcts?: any[];
}
function CardView({
  title,
  first = false,
  haveRentSwitch = false,
  proudcts = [],
}: CardViewProps) {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const handleSwiper = (swiper: any) => {
    console.log(proudcts);

    if (prevRef.current && nextRef.current) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  };
  if (proudcts.length === 0) {
    return null;
  }
  return (
    <div className="swiperList pt-4 lg:pt-14 pb-3 lg:pb-16 lg:border-t border-black first-of-type:border-none first-of-type:pt-0">
      <div className="flex lg:items-center flex-col-reverse lg:flex-row lg:gap-4 gap-8  justify-between mb-6">
        <div className="flex items-center justify-between lg:justify-start gap-5">
          <h2 className="text-2xl lg:text-[32px] font-Bold">{title}</h2>
          {first && (
            <Link
              href={ROUTES.USER.BOOKINGS}
              className="px-3 duration-300 hover:shadow-md w-fit py-2 rounded-xl border border-black flex items-center justify-center gap-2"
            >
              <ListIcon />
              <p className="lg:text-[16px] text-sm">List View</p>
            </Link>
          )}
        </div>
        {first && haveRentSwitch && (
          <div className="mx-auto">
            <RentSwitch typeUser="user" />
          </div>
        )}
        <Link
          href={ROUTES.USER.BOOKINGSID(title.split(" ").join("-"))}
          className={` underline text-sm lg:text-lg min-w-fit ${
            first
              ? "order-first w-full lg:w-fit lg:order-none -mt-5 lg:mt-0  text-end"
              : ""
          }     font-medium`}
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
            {proudcts?.map((item,i) => {
              return (
                <SwiperSlide key={i}>
                  <OneCardView product={item} />
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
