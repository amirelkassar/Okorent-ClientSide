import ListIcon from "@/src/assets/icons/list";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ArrowLeftIcon from "@/src/assets/icons/arrowLeft";
import ArrowRightIcon from "@/src/assets/icons/ArrowRight";
import CardRequest from "./cardRequest";
import { StaticImageData } from "next/image";
import RentSwitch from "@/src/components/RentSwitch";
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
  filterBy: "accept" | "decline"|'upcoming'|'ongoing';
  title: string;
  first?: boolean;
  haveRentSwitch?: boolean;
}
function CardView({
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
    <div className="swiperList pt-14 pb-16 border-t border-black first-of-type:border-none first-of-type:pt-0">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-5">
          <h2 className="text-[32px] font-Bold">{title}</h2>

          {first && (
            <Link
              href={ROUTES.USER.REQUESTS}
              className="px-3 duration-300 hover:shadow-md w-fit py-2 rounded-xl border border-black flex items-center justify-center gap-2"
            >
              <ListIcon />
              <p>List View</p>
            </Link>
          )}
        </div>
        {first && haveRentSwitch && (
          <div>
            <RentSwitch />
          </div>
        )}

        <div className="flex gap-4">
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
      <div className=" my-4">
        <Swiper
          onSwiper={handleSwiper}
          slidesPerView={2}
          spaceBetween={30}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[Navigation]}
          className={"mySwiper "}
        >
          {data
            ?.filter((item) => item.action.toLocaleLowerCase() === filterBy)
            .map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <CardRequest
                    data={item}
                    declined={filterBy }
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
}

export default CardView;
