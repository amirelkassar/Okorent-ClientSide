"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
;
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import persone1 from "@/src/assets/images/person1.png";
import persone2 from "@/src/assets/images/person2.png";
import LogoWhite from "@/src/assets/icons/logoWhite";
interface SliderAuthProps {}
const dataSwiper = [
  {
    id: 1,
    name: "Ahmed Badr",
    image: persone1,
    title:
      " We Rent is my top choice for renting equipment for my events. The quality and variety are excellent.",
    job: "Founder of profound agency",
    since: "Member Since 2024",
  },
  {
    id: 2,
    name: "Sara John",
    image: persone2,
    title:
      "Using We Rent has been a game-changer for my business. I can easily lease out my tools and equipment with confidence.",
    job: "Owner of Game Store",
    since: "Member Since 2024",
  },
  {
    id: 3,
    name: "Ahmed Badr",
    image: persone1,
    title:
      " We Rent is my top choice for renting equipment for my events. The quality and variety are excellent.",
    job: "Founder of profound agency",
    since: "Member Since 2024",
  },
  {
    id: 4,
    name: "Sara John",
    image: persone2,
    title:
      "Using We Rent has been a game-changer for my business. I can easily lease out my tools and equipment with confidence.",
    job: "Owner of Game Store",
    since: "Member Since 2024",
  },
];
function SliderAuth({}: SliderAuthProps) {
  return (
    <div className="flex-1 max-w-[55%] h-[calc(100vh-60px)] flex items-center ">
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation,Pagination]}
        className="w-full h-full rounded-[30px] swiperAuth"
      >
        {dataSwiper.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="w-full h-full relative rounded-[30px]">
                <div className=" absolute top-12 left-14 z-10">
                  <LogoWhite/>
                </div>
                <div className="w-full h-full relative before:content-[''] before:w-full before:h-full before:absolute before:bg-[#0000001a] before:z-[1]">
                  <Image
                    src={item.image}
                    priority
                    className=" object-cover w-full h-full"
                    alt={item.name}
                  />
                </div>
                <div className=" absolute bottom-7 start-12 z-[2] max-w-[90%] w-[590px]">
                  <h2 className="text-white text-[32px] font-Medium mb-5 leading-[36px]">
                    “ <br />
                    {item.title}
                  </h2>
                  <h3 className="text-white text-xLarge ">{item.name}</h3>
                  <h4 className="text-white text-medium mb-1 font-Light">
                    {item.job}
                  </h4>
                  <p className="text-grayLight text-[12px] mb-1">
                    {item.since}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default SliderAuth;
