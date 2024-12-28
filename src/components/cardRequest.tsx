import Image, { StaticImageData } from "next/image";
import React from "react";
import imageCard from "@/src/assets/images/phone.png";
import imageUser from "@/src/assets/images/avatar.png";
import StarIcon from "@/src/assets/icons/star";
import VerifyBlackIcon from "@/src/assets/icons/verifyBlack";
import { getDate } from "../lib/utils";
import BottomCardRentOut from "../app/[locale]/user/Bookings/_components/bottom-card-rent-out";
import { useChangeStatusRentOut } from "../app/[locale]/user/Bookings/_hooks/use-change-status-rentOut";
interface RequestData {
  id: number;
  renterName: string;
  phone: string | null;
  from: string;
  statusUser: string;
  status: string;
  quantity: number;
  rating: number;
  rentedItems: number;
  leasedItems: number;
  productName: string;
  amount: string;
  paymentStatus: string;
  rentalPeriod: number;
  to: string;
  country: string;
  action: string;
  imgUser: StaticImageData;
  imgHome: StaticImageData;
  name: string;
  memberSince: string;
  product: string;
  payment: string;
  startDate: string;
  endDate: string;
}
interface CardRequestProps {
  data?: RequestData | any;
  status?: any;
}

function CardRequest({ data, status = 1 }: CardRequestProps) {
  const {
    onSubmitDelete,
    onSubmitChangeStatus,
    onSubmitReject,
    onSubmitCancel,
    onSubmitRefundNo,
    onSubmitRefundYes,
  } = useChangeStatusRentOut(data.id);

  if (!data) {
    return <p>No data available</p>; // Handle missing data case
  }
  const FirstLessorName = data?.renterName?.split(" ")[0];
  return (
    <div className="bg-white pt-8 lgl:pt-10 pb-6 px-3 lgl:px-9 max-w-[670px]  rounded-3xl border border-green">
      <div className=" flex items-start gap-3 lgl:gap-6 w-full pb-5 lg:pb-7 border-b border-black/20">
        <div className="flex flex-col gap-2 justify-center ">
          <Image
            alt="user"
            src={imageUser || data?.heroImage}
            className=" lgl:size-[104px] size-[70x] lgl:min-w-[104px] min-w-[70px] rounded-[50%] object-cover object-top"
            priority
          />
          <p className="text-green lgl:text-[16px] text-sm text-center">
            {data?.statusUser || "available"}
          </p>
        </div>
        <div>
          <div className="flex  gap-5 justify-between mb-1 lgl:mb-3">
            <h3 className="text-base lgl:text-[32px] ">
              {data?.renterName || "Renter Name"}
            </h3>
            <div className="flex items-center justify-center size-5 lgl:size-[26px] ">
              <VerifyBlackIcon />
            </div>
          </div>
          <h4 className="text-grayMedium text-sm lgl:text-[20px]  mb-2 lgl:mb-6">
            Member Since {getDate(data?.from || "").fullMonthNameWithDayName}
          </h4>
          <div className="flex items-center ">
            <div className="flex items-center gap-1 pe-3 lgl:pe-4">
              <p className="font-Bold text-base lgl:text-[24px]">1</p>
              <StarIcon className="w-4 lgl:w-[22px] h-auto" />
            </div>
            <div className="flex lgl:items-end items-center lgl:text-[16px] text-sm flex-col lgl:flex-row  lgl:gap-1 pe-3 lgl:pe-4 ps-2 border-s border-green">
              <p className="font-Bold text-base lgl:text-[24px]">50</p>
              <p className="text-[12px] lgl:text-[16px] lgl:mb-1 text-grayMedium">
                Rented Items
              </p>
            </div>
            <div className="flex lgl:items-end items-center lgl:text-[16px] text-sm flex-col lgl:flex-row  lgl:gap-1 pe-3 lgl:pe-4 ps-2 border-s border-green">
              <p className="font-Bold text-base lgl:text-[24px]">50</p>
              <p className="text-[12px] lgl:text-[16px] lgl:mb-1 text-grayMedium">
                {" "}
                Leased Items
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-4 lg:pt-6 pb-7 lgl:pb-12">
        <div className="flex items-center gap-2 lg:gap-4">
          <div className="bg-grayBack rounded-2xl p-3 w-[104px] lgl:w-[212px] h-[110px] lgl:h-[170px] flex items-center justify-center">
            <Image
              alt="user"
              src={imageCard}
              priority
              className="w-auto object-contain h-full "
            />
          </div>

          <div className="flex flex-col gap-4 flex-1">
            <div className="flex items-end justify-between gap-2 ">
              <div>
                <h3 className="text-grayMedium mb-[2px] lgl:mb-1 font-Regular text-[12px] lgl:text-base">
                  Product Name
                </h3>
                <p className="lgl:text-[16px] text-[12px] font-SemiBold max-w-[130px] truncate">
                  {data?.productName}
                </p>
              </div>
              <span className=" block h-[34px] w-[1px] bg-green"></span>
              <div>
                <h3 className="text-grayMedium  mb-[2px] lgl:mb-1 font-Regular text-[12px] lgl:text-base">
                  Payment
                </h3>
                <p className="lgl:text-[16px] text-[12px]  font-SemiBold">
                  {data?.amount}
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
                  {getDate(data?.from || "").fullMonthNameWithDayName}
                </p>
              </div>
              <span className=" block h-[34px] w-[1px] bg-green"></span>
              <div>
                <h3 className="text-grayMedium  mb-[2px] lgl:mb-1 font-Regular lgl:text-[16px] text-[12px]">
                  End Date
                </h3>
                <p className="lgl:text-[16px] text-[12px]  font-SemiBold">
                  {getDate(data?.to || "").fullMonthNameWithDayName}
                </p>
              </div>
              <span className=" block h-[34px] w-[1px] bg-green"></span>
              <div>
                <h3 className="text-grayMedium mb-[2px] lgl:mb-1 font-Regular lgl:text-[16px] text-[12px]">
                  Country
                </h3>
                <p className="lgl:text-[16px] text-[12px] font-SemiBold">
                  Egypt
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 lg:gap-y-3 lg:gap-x-5 mt-4 ">
        {status === 1 && (
          <>
            <BottomCardRentOut.Accept
              style="w-full min-w-full"
              id={data?.id || "undefined"}
              onClick={() => onSubmitChangeStatus()}
            />
            <BottomCardRentOut.Reject
              id={data?.id || "undefined"}
              onClick={() => onSubmitReject()}
            />
            <BottomCardRentOut.ViewDetailsLink id={data?.id || "undefined"} />
          </>
        )}
        {status === 3 && (
          <>
            <BottomCardRentOut.OutForDelivery
              style="w-full min-w-full"
              id={data?.id || "undefined"}
              onClick={() => onSubmitChangeStatus()}
            />
            <BottomCardRentOut.MessageLink
              id={data?.id || "undefined"}
              name={FirstLessorName || "User"}
            />
            <BottomCardRentOut.CancelBookings
              id={data?.id || "undefined"}
              onClick={() => onSubmitCancel()}
            />
          </>
        )}
        {status === 4 && (
          <>
            <BottomCardRentOut.MessageLink
              id={data?.id || "undefined"}
              name={FirstLessorName || "User"}
            />
            <BottomCardRentOut.ViewDetailsLink id={data?.id || "undefined"} />
          </>
        )}
        {status === 6 && (
          <>
            <BottomCardRentOut.OutForReturn
              style="w-full min-w-full"
              id={data?.id || "undefined"}
              onClick={() => onSubmitChangeStatus()}
            />
            <BottomCardRentOut.MessageLink
              id={data?.id || "undefined"}
              name={FirstLessorName || "User"}
            />
            <BottomCardRentOut.ViewDetailsLink id={data?.id || "undefined"} />
          </>
        )}
        {status === 12 && (
          <>
            <BottomCardRentOut.MessageLink
              id={data?.id || "undefined"}
              name={FirstLessorName || "User"}
            />
            <BottomCardRentOut.MarkAsCompleted
              id={data?.id || "undefined"}
              onClick={() => onSubmitChangeStatus()}
            />
          </>
        )}
        {(status === 9 || status === 8 || status === 7 || status === 10) && (
          <>
            <BottomCardRentOut.MessageLink
              id={data?.id || "undefined"}
              name={FirstLessorName || "User"}
            />
            <BottomCardRentOut.Delete
              onClick={() => onSubmitDelete()}
              id={data?.id || "undefined"}
            />
          </>
        )}
        {status === 11 && (
          <>
            <BottomCardRentOut.Approve
              style="w-full min-w-full"
              id={data?.id || "undefined"}
              onClick={() => onSubmitRefundYes()}
            />
            <BottomCardRentOut.MessageLink
              id={data?.id || "undefined"}
              name={FirstLessorName || "User"}
            />
            <BottomCardRentOut.RejectReturn
              id={data?.id || "undefined"}
              onClick={() => onSubmitRefundNo()}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default CardRequest;
