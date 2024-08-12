import Image, { StaticImageData } from "next/image";
import React from "react";
import imageCard from "@/src/assets/images/phone.png";
import StarIcon from "@/src/assets/icons/star";
import VerifyBlackIcon from "@/src/assets/icons/verifyBlack";
import Button from "@/src/components/button";
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
  dataByModal?:boolean
}

function CardRequest({ data ,dataByModal}: CardRequestProps) {
  console.log(data);

  if (!data) {
    return <p>No data available</p>; // Handle missing data case
  }
  return (
    <div className="bg-white pt-10 pb-8 px-9 max-w-[670px] rounded-3xl border border-green">
      <div className=" flex items-start gap-6 w-full pb-7 border-b border-black/20">
        <div className="flex flex-col gap-2 justify-center ">
          <Image
            alt="user"
            src={data.imgUser}
            className=" size-[104px] rounded-[50%] object-cover object-top"
            priority
          />
          <p className="text-green text-[16px] text-center">
            {data.statusUser}
          </p>
        </div>
        <div>
          <div className="flex  gap-5 justify-between ">
            <h3 className="headTitle">{data.name}</h3>
            <div className="flex items-center justify-center">
              <VerifyBlackIcon />
            </div>
          </div>
          <h4 className="text-grayMedium text-[20px] -mt-3 mb-6">
            Member Since {data.memberSince}
          </h4>
          <div className="flex items-center ">
            <div className="flex items-center gap-1 pe-4">
              <p className="font-Bold text-[24px]">{data.rating}</p>
              <StarIcon className="w-[22px] h-auto" />
            </div>
            <div className="flex items-end gap-1 pe-4 ps-2 border-s border-green">
              <p className="font-Bold text-[24px]">{data.rentedItems}</p>
              <p className="text-[16px] mb-1 text-grayMedium">Rented Items</p>
            </div>
            <div className="flex items-end gap-1 pe-4 ps-2 border-s border-green">
              <p className="font-Bold text-[24px]">{data.leasedItems} </p>
              <p className="text-[16px] mb-1 text-grayMedium"> Leased Items</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-6 pb-12">
        <div className="flex items-center gap-4">
          {dataByModal ? (
            <div className="bg-grayBack rounded-2xl p-3 w-[212px] h-[170px] flex items-center justify-center">
              <Image
                alt="user"
                src={imageCard}
                priority
                className="w-auto object-contain h-full "
              />
            </div>
          ) : (
            <div className=" rounded-2xl  w-[212px] h-[170px] flex items-center justify-center">
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
                <h3 className="text-grayMedium mb-1 font-Regular">
                  Product Name
                </h3>
                <p className="text-[16px] font-SemiBold">{data.product}</p>
              </div>
              <span className=" block h-[34px] w-[1px] bg-green"></span>
              <div>
                <h3 className="text-grayMedium  mb-1 font-Regular">Payment</h3>
                <p className="text-[16px]  font-SemiBold">{data.payment}</p>
              </div>
              <span className=" block h-[34px] w-[1px] bg-green"></span>
              <div>
                <h3 className="text-grayMedium mb-1 font-Regular">
                  Rental Period
                </h3>
                <p className="text-[16px] font-SemiBold">
                  {data.rentalPeriod} Days
                </p>
              </div>
            </div>
            <div className="flex items-end justify-between gap-2 ">
              <div>
                <h3 className="text-grayMedium mb-1 font-Regular">
                  Start Date
                </h3>
                <p className="text-[16px] font-SemiBold">{data.startDate}</p>
              </div>
              <span className=" block h-[34px] w-[1px] bg-green"></span>
              <div>
                <h3 className="text-grayMedium  mb-1 font-Regular">End Date</h3>
                <p className="text-[16px]  font-SemiBold">{data.endDate}</p>
              </div>
              <span className=" block h-[34px] w-[1px] bg-green"></span>
              <div>
                <h3 className="text-grayMedium mb-1 font-Regular">Country</h3>
                <p className="text-[16px] font-SemiBold">{data.country}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-6 flex-wrap">
        <Button className={"w-full"}>Accept</Button>
        <Button className={"flex-1 text-black bg-grayBack border-none"}>
          Decline
        </Button>
        <Button className={"flex-1 text-black bg-grayBack border-none"}>
          Message {data.name.split(' ')[0]}
        </Button>
      </div>
    </div>
  );
}

export default CardRequest;
