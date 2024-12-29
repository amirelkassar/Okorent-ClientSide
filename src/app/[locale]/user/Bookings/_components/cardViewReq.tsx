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
  title: string;
  products?: RequestData[];
  status: number | any;
}
function CardViewReq({
  title,
  products,
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
  if (products?.length === 0) {
    return null;
  }

  
  return (
    <div className="swiperList swiperListBooking pt-4 lg:pt-10 pb-5 lg:pb-10 lg:border-t border-black first-of-type:border-none first-of-type:pt-0">
      <div
        className={`flex headBooking items-center  justify-start md:justify-between mb-2 lg:mb-6 gap-5 md:gap-7 flex-wrap lg:flex-nowrap   `}
      >
        <div className="flex items-center gap-5 w-fit md:justify-start justify-between">
          <h2 className="text-xl lg:text-[32px] ">{title}</h2>
          <Link
            href={ROUTES.USER.BOOKINGS}
            className="px-3 duration-300 linkView hover:shadow-md w-fit py-2 rounded-xl border border-black flex items-center justify-center gap-2"
          >
            <ListIcon className="w-auto h-4 lg:h-5" />
            <p className="lg:text-[16px] text-sm text-nowrap">List View</p>
          </Link>
        </div>
        <Link
          href={
            ROUTES.USER.BOOKINGSID(status) +
            "?typeUser=IRentOut&statusTitle=" +
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
            {products?.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <CardRequest data={item} status={status} />
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
