"use client";
import React from "react";
import Image from "next/image";
import CardStatus from "@/src/components/cardStatus";
import { Popover } from "@mantine/core";
import DeleteIcon from "@/src/assets/icons/delete";
import DotsIcon from "@/src/assets/icons/dots";
import EditIcon from "@/src/assets/icons/edit";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";

interface PhoneProps {
  id: number;
  product: string;
  productType: string;
  userType: string;
  user: string;
  paymentStatus: string;
  payment: number;
  img: any;
  quantity: number;
}
interface CardDataProps {
  dataCard?: PhoneProps;
}
function CardViewPhoneActivities({ dataCard }: CardDataProps) {
  const getRent = (userType:string) => {
    switch (userType.toLowerCase()) {
      case "rentout":
        return <CardStatus animation circle type="green" title={userType} />;
      case "rent":
        return <CardStatus circle type="blue" title={userType} />;
      default:
        return <CardStatus circle type="gray" title="--" />;
    }
  };
  const getStatus = (paymentStatus:string) => {
    switch (paymentStatus.toLowerCase()) {
      case "pending":
        return (
          <CardStatus animation circle type="green" title={paymentStatus} />
        );
      case "canceled":
        return <CardStatus circle type="red" title={paymentStatus} />;
      case "completed":
        return <CardStatus circle type="blue" title={paymentStatus} />;
      default:
        return <CardStatus circle type="gray" title="--" />;
    }
  };
  return dataCard ? (
    <>
      <div className="px-8 pt-5 relative pb-7 rounded-3xl border border-green shadow-md bg-white/50 w-full">
        <div className="absolute top-5 end-5">
          <Popover width={110} position="bottom-end" shadow="md">
            <Popover.Target>
              <button className="w-4 bg-/10 flex items-center justify-center h-4">
                <DotsIcon />
              </button>
            </Popover.Target>
            <Popover.Dropdown className="rounded-xl bg-white px-0 border border-grayBack">
              <div className="flex flex-col gap-1">
                <button className="flex items-center gap-2 py-1 px-2 border-b border-grayBack ">
                  <DeleteIcon className="w-4 h-auto" />
                  <p className="text-[#E31B1B] text-[12px]  font-medium">
                    Delete
                  </p>
                </button>
                <Link
                  href={ROUTES.USER.LISTINGSDETAILS(dataCard.id) + "/edit"}
                  className="flex items-center gap-2 py-1 px-2 border-b border-grayBack "
                >
                  <EditIcon className="w-4 h-auto" />
                  <p className="text-grayMedium  text-[12px] font-medium">
                    Edit
                  </p>
                </Link>
              </div>
            </Popover.Dropdown>
          </Popover>
        </div>
        <h2 className="mb-3">Product</h2>
        <div className="flex items-start  gap-5 pb-6 border-b border-grayLight">
          <div className="bg-grayBack size-[58px] min-w-[58px] rounded-full p-1 flex items-center justify-center">
            <Image
              src={dataCard.img}
              alt="phone"
              width={20}
              height={40}
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <h3 className="text-base font-SemiBold">{dataCard.product}</h3>
            <div className="flex items-center justify-between gap-4">
              <h4 className="text-base font-SemiBold">Quantity</h4>
              <p className="text-base text-grayMedium">{dataCard.quantity}</p>
            </div>
            <div className="flex items-center justify-between gap-4">
              <h4 className="text-base font-SemiBold">user</h4>
              <p className="text-base text-grayMedium">{dataCard.user}</p>
            </div>
            <div className="flex items-center justify-between gap-4">
              <h4 className="text-base font-SemiBold">payment</h4>
              <p className="text-base text-grayMedium">$ {dataCard.payment}</p>
            </div>
            <div className="flex items-center justify-between gap-4">
              <h4 className="text-base font-SemiBold">Activitie type</h4>
              {getRent(dataCard.userType)}
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex items-center justify-between gap-4">
            <h4 className="text-base font-medium">Payment Status</h4>
            {getStatus(dataCard.paymentStatus)}
          </div>
        </div>
      </div>
    </>
  ) : null;
}

export default CardViewPhoneActivities;
