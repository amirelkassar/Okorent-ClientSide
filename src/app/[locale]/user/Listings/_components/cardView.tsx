import ListIcon from "@/src/assets/icons/list";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import React, { useRef } from "react";
import OneCardView from "./oneCardView";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ArrowLeftIcon from "@/src/assets/icons/arrowLeft";
import ArrowRightIcon from "@/src/assets/icons/ArrowRight";
interface CardViewProps {
  title: string;
  first?: boolean;
  data: any[];
  viewAllLink?: string;
  withStatus?: boolean;
}
function CardView({
  title,
  first = false,
  data = [],
  viewAllLink = "",
  withStatus = false,
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
  if (data?.length === 0) {
    return null;
  }

  return (
    <div className="swiperList mb-4 lg:mb-section">
      <div className="flex items-center justify-between mb-0 lg:mb-6">
        <div className="flex items-center gap-5">
          <h2 className="text-xl lg:text-[32px] font-Bold">{title}</h2>
          {first && (
            <Link
              href={ROUTES.USER.LISTINGS}
              className="px-3 duration-300 hover:shadow-md w-fit py-2 rounded-xl border border-black hidden mdl:flex items-center justify-center gap-2"
            >
              <ListIcon />
              <p className="lg:text-[16px] text-sm">List View</p>
            </Link>
          )}
        </div>
        {viewAllLink && (
          <Link
            href={viewAllLink}
            className=" underline block text-sm mdl:text-lg font-medium"
          >
            View all
          </Link>
        )}
      </div>
      {withStatus ? (
        <div className="w-full flex-wrap gap-6 my-4 relative flex items-center">
          {data?.map((item: any, index: number) => (
            <OneCardView
              key={index}
              data={item}
              offline={title === "Offline"}
            />
          ))}
        </div>
      ) : (
        <div className=" relative w-full flex items-center">
          <div className=" my-4 w-full xl:max-w-[calc(100%-80px)]">
            <Swiper
              onSwiper={handleSwiper}
              slidesPerView={1.1}
              spaceBetween={10}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1.05,
                  spaceBetween: 10,
                },
                450: {
                  slidesPerView: 1.5,
                  spaceBetween: 10,
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
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <OneCardView data={item} offline={title === "Offline"} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="lgl:flex hidden gap-3  absolute top-1/2 -translate-y-1/2 right-0">
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
      )}
    </div>
  );
}

export default CardView;
