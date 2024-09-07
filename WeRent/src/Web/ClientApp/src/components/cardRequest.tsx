import Image, { StaticImageData } from "next/image";
import React from "react";
import imageCard from "@/src/assets/images/phone.png";
import StarIcon from "@/src/assets/icons/star";
import VerifyBlackIcon from "@/src/assets/icons/verifyBlack";
import Button from "@/src/components/button";
import ROUTES from "../routes";
import LinkGreen from "./linkGreen";
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
interface CardRequestProps {
  data?: RequestData;
  dataByModal?: boolean;
  declined?: "accept" | "decline" | "upcoming" | "ongoing";
}

function CardRequest({ data, dataByModal, declined }: CardRequestProps) {
  if (!data) {
    return <p>No data available</p>; // Handle missing data case
  }
  return (
    <div className="bg-white pt-8 lgl:pt-10 pb-6 px-5 lgl:px-9 max-w-[670px]  rounded-3xl border border-green">
      <div className=" flex items-start gap-4 lgl:gap-6 w-full pb-5 lg:pb-7 border-b border-black/20">
        <div className="flex flex-col gap-2 justify-center ">
          <Image
            alt="user"
            src={data.imgUser}
            className=" lgl:size-[104px] size-[70x] lgl:min-w-[104px] min-w-[70px] rounded-[50%] object-cover object-top"
            priority
          />
          <p className="text-green lgl:text-[16px] text-sm text-center">
            {data.statusUser}
          </p>
        </div>
        <div>
          <div className="flex  gap-5 justify-between mb-1 lgl:mb-3">
            <h3 className="text-base lgl:text-[32px] ">{data.name}</h3>
            <div className="flex items-center justify-center size-5 lgl:size-[26px] ">
              <VerifyBlackIcon />
            </div>
          </div>
          <h4 className="text-grayMedium text-sm lgl:text-[20px]  mb-2 lgl:mb-6">
            Member Since {data.memberSince}
          </h4>
          <div className="flex items-center ">
            <div className="flex items-center gap-1 pe-3 lgl:pe-4">
              <p className="font-Bold text-base lgl:text-[24px]">
                {data.rating}
              </p>
              <StarIcon className="w-4 lgl:w-[22px] h-auto" />
            </div>
            <div className="flex lgl:items-end items-center lgl:text-[16px] text-sm flex-col lgl:flex-row  lgl:gap-1 pe-3 lgl:pe-4 ps-2 border-s border-green">
              <p className="font-Bold text-base lgl:text-[24px]">
                {data.rentedItems}
              </p>
              <p className="text-[12px] lgl:text-[16px] lgl:mb-1 text-grayMedium">
                Rented Items
              </p>
            </div>
            <div className="flex lgl:items-end items-center lgl:text-[16px] text-sm flex-col lgl:flex-row  lgl:gap-1 pe-3 lgl:pe-4 ps-2 border-s border-green">
              <p className="font-Bold text-base lgl:text-[24px]">
                {data.leasedItems}{" "}
              </p>
              <p className="text-[12px] lgl:text-[16px] lgl:mb-1 text-grayMedium">
                {" "}
                Leased Items
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-4lg:pt-6 pb-7 lgl:pb-12">
        <div className="flex items-center gap-4">
          {dataByModal ? (
            <div className="bg-grayBack rounded-2xl p-3 w-[104px] lgl:w-[212px] h-[110px] lgl:h-[170px] flex items-center justify-center">
              <Image
                alt="user"
                src={imageCard}
                priority
                className="w-auto object-contain h-full "
              />
            </div>
          ) : (
            <div className=" rounded-2xl  w-[104px] lgl:w-[212px] h-[110px] lgl:h-[170px] flex items-center justify-center">
              <Image
                alt="user"
                src={data.imgHome}
                priority
                className="w-auto object-contain h-full "
              />
            </div>
          )}

          <div className="flex flex-col gap-4 flex-1">
            <div className="flex items-end justify-between gap-2 ">
              <div>
                <h3 className="text-grayMedium mb-[2px] lgl:mb-1 font-Regular text-[12px] lgl:text-base">
                  Product Name
                </h3>
                <p className="lgl:text-[16px] text-[12px] font-SemiBold">
                  {data.product}
                </p>
              </div>
              <span className=" block h-[34px] w-[1px] bg-green"></span>
              <div>
                <h3 className="text-grayMedium  mb-[2px] lgl:mb-1 font-Regular text-[12px] lgl:text-base">
                  Payment
                </h3>
                <p className="lgl:text-[16px] text-[12px]  font-SemiBold">
                  {data.payment}
                </p>
              </div>
              <span className=" block h-[34px] w-[1px] bg-green"></span>
              <div>
                <h3 className="text-grayMedium mb-[2px] lgl:mb-1 font-Regular text-[12px] lgl:text-base">
                  Rental Period
                </h3>
                <p className="lgl:text-[16px] text-[12px] font-SemiBold">
                  {data.rentalPeriod} Days
                </p>
              </div>
            </div>
            <div className="flex items-end justify-between gap-2 ">
              <div>
                <h3 className="text-grayMedium mb-[2px] lgl:mb-1 font-Regular lgl:text-[16px] text-[12px]">
                  Start Date
                </h3>
                <p className="lgl:text-[16px] text-[12px] font-SemiBold">
                  {data.startDate}
                </p>
              </div>
              <span className=" block h-[34px] w-[1px] bg-green"></span>
              <div>
                <h3 className="text-grayMedium  mb-[2px] lgl:mb-1 font-Regular lgl:text-[16px] text-[12px]">
                  End Date
                </h3>
                <p className="lgl:text-[16px] text-[12px]  font-SemiBold">
                  {data.endDate}
                </p>
              </div>
              <span className=" block h-[34px] w-[1px] bg-green"></span>
              <div>
                <h3 className="text-grayMedium mb-[2px] lgl:mb-1 font-Regular lgl:text-[16px] text-[12px]">
                  Country
                </h3>
                <p className="lgl:text-[16px] text-[12px] font-SemiBold">
                  {data.country}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {declined === "decline" ? (
        <div className="flex gap-4 lgl:gap-6 flex-wrap">
          <LinkGreen
            href={ROUTES.USER.INBOX}
            className={"flex-1 lgl:h-[50px] h-[36px] text-black bg-grayBack border-none"}
          >
            Message {data.name.split(" ")[0]}
          </LinkGreen>
          <Button className={"flex-1 lgl:h-[50px] h-[36px]"}>Reoffer Now</Button>
        </div>
      ) : declined === "ongoing" ? (
        <div className="flex gap-4 lgl:gap-6 flex-wrap">
          <LinkGreen
            href={ROUTES.USER.INBOX}
            className={"flex-1 lgl:h-[50px] h-[36px] text-black bg-grayBack border-none"}
          >
            Message {data.name.split(" ")[0]}
          </LinkGreen>
          <Button className={"flex-1 lgl:h-[50px] h-[36px]"}>View Details</Button>
        </div>
      ) : declined === "upcoming" ? (
        <div className="flex gap-4 lgl:gap-6 flex-wrap">
          <LinkGreen
            href={ROUTES.USER.INBOX}
            className={"flex-1 lgl:h-[50px] h-[36px] text-black bg-grayBack border-none"}
          >
            Message {data.name.split(" ")[0]}
          </LinkGreen>
          <Button className={"flex-1 lgl:h-[50px] h-[36px]"}>Cancel Bookings</Button>
        </div>
      ) : declined === "accept" ? (
        <div className="flex gap-4 lgl:gap-6 flex-wrap">
          <Button className={"w-full lgl:h-[50px] h-[36px]"}>Accept</Button>
          <LinkGreen
            href={ROUTES.USER.INBOX}
            className={"flex-1 lgl:h-[50px] h-[36px] text-black bg-grayBack border-none"}
          >
            Decline
          </LinkGreen>
          <LinkGreen
            href={ROUTES.USER.INBOX}
            className={"flex-1 lgl:h-[50px] h-[36px] text-black bg-grayBack border-none"}
          >
            Message {data.name.split(" ")[0]}
          </LinkGreen>
        </div>
      ) : null}
    </div>
  );
}

export default CardRequest;
