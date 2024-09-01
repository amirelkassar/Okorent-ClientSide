import ListIcon from "@/src/assets/icons/list";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import React, { useEffect, useRef } from "react";
import OneCardView from "./oneCardView";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ArrowLeftIcon from "@/src/assets/icons/arrowLeft";
import ArrowRightIcon from "@/src/assets/icons/ArrowRight";
interface CardViewProps {
  title: string;
  first?: boolean;
}
function CardView({ title, first = false }: CardViewProps) {
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
    <div className="swiperList pt-14 pb-16border-t border-black first-of-type:border-none first-of-type:pt-0">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-5">
          <h2 className="text-2xl lg:text-[32px] font-Bold">{title}</h2>
          {first && (
            <Link
              href={`${ROUTES.USER.LISTINGS}?list=true`}
              className="px-3 duration-300 hover:shadow-md w-fit py-2 rounded-xl border border-black flex items-center justify-center gap-2"
            >
              <ListIcon />
              <p>List View</p>
            </Link>
          )}
        </div>
        <div className="md:flex hidden gap-4">
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
      <div className="max-w-[1270px] my-4">
        <Swiper
          onSwiper={handleSwiper}
          slidesPerView={1}
          spaceBetween={18}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            450: {
              slidesPerView: 1.5,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 18,
            },
            900: {
              slidesPerView: 2.5,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation]}
          className={"mySwiper "}
        >
          <SwiperSlide>
            <OneCardView />
          </SwiperSlide>
          <SwiperSlide>
            <OneCardView />
          </SwiperSlide>
          <SwiperSlide>
            <OneCardView />
          </SwiperSlide>
          <SwiperSlide>
            <OneCardView />
          </SwiperSlide>
          <SwiperSlide>
            <OneCardView />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default CardView;
