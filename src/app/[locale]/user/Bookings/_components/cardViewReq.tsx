import ListIcon from "@/src/assets/icons/list";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ArrowLeftIcon from "@/src/assets/icons/arrowLeft";
import ArrowRightIcon from "@/src/assets/icons/ArrowRight";

import { StaticImageData } from "next/image";
import RentSwitch from "@/src/components/RentSwitch";
import CardRequest from "@/src/components/cardRequest";
interface RequestData {
  id: number;
  name: string;
  phone: string | null;
  memberSince: string;
  statusUser: string;
  status: string;
  quantity: number;
  rating: number;
  rentedItems: number;
  leasedItems: number;
  product: string;
  payment: string;
  paymentStatus: string;
  rentalPeriod: number;
  startDate: string;
  endDate: string;
  country: string;
  action: string;
  imgUser: StaticImageData;
  imgHome: StaticImageData;
}

interface CardViewProps {
  data?: RequestData[];
  filterBy: "accept" | "decline" | "upcoming" | "ongoing";
  title: string;
  first?: boolean;
  haveRentSwitch?: boolean;
}
function CardViewReq({
  title,
  first = false,
  data,
  filterBy,
  haveRentSwitch = false,
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
  return (
    <div className="swiperList pt-4 lg:pt-14 pb-5 lg:pb-16 lg:border-t border-black first-of-type:border-none first-of-type:pt-0">
      <div
        className={`flex  justify-start md:justify-between mb-2 lg:mb-6 gap-7  ${
          first ? "flex-col-reverse lg:items-center lg:flex-row" : " items-center"
        } `}
      >
        <div className="flex items-center gap-5 w-full md:w-fit md:justify-start justify-between">
          <h2 className="text-2xl lg:text-[32px] ">{title}</h2>

          {first && (
            <Link
              href={`${ROUTES.USER.BOOKINGS}?list=true`}
              className="px-3 duration-300 hover:shadow-md w-fit py-2 rounded-xl border border-black flex items-center justify-center gap-2"
            >
              <ListIcon className="w-auto h-4 lg:h-5" />
              <p className="lg:text-[16px] text-sm">List View</p>
            </Link>
          )}
        </div>
        {first && haveRentSwitch && (
          <div className="mx-auto">
            <RentSwitch typeUser='user' />
          </div>
        )}
        <Link
          href={ROUTES.USER.BOOKINGSID(title.split(" ").join("-"))}
          className={` underline text-sm lg:text-lg min-w-fit ${
            first ? "order-first w-full lg:w-fit lg:order-none -mt-5 lg:mt-0  text-end" : ""
          }     font-medium`}
        >
          View all
        </Link>
      </div>
      <div className="w-full relative flex items-center">
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
              740: {
                slidesPerView: 1.7,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 1.7,
                spaceBetween: 20,
              },
              1300: {
                slidesPerView: 1.9,
              },
              1500: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            modules={[Navigation]}
            className={"mySwiper "}
          >
            {data
              ?.filter((item) => item.action.toLocaleLowerCase() === filterBy)
              .map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <CardRequest data={item} declined={filterBy} />
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

export default CardViewReq;
