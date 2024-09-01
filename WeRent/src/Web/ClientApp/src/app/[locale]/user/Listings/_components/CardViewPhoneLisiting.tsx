"use client";
import React from "react";
import phoneImg from "@/src/assets/images/phone.png";
import Image from "next/image";
import CardStatus from "@/src/components/cardStatus";
import { Menu, Popover } from "@mantine/core";
import DeleteIcon from "@/src/assets/icons/delete";
import DotsIcon from "@/src/assets/icons/dots";
import EditIcon from "@/src/assets/icons/edit";
import BarcodeIcon from "@/src/assets/icons/barcode";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import BtnBarcode from "./btnBarcode";
interface PhoneProps {
  id: number;
  phone: string;
  quantity: number;
  status: boolean;
  inStock: number;
  rented: number;
  rentalCost: number;
}
interface CardDataProps {
  dataCard: PhoneProps;
}
function CardViewPhoneListing({ dataCard }: CardDataProps) {
  return (
    <div className="px-8 pt-4 relative pb-6 rounded-3xl border border-green shadow-md bg-white w-full">
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
                <p className="text-grayMedium  text-[12px] font-medium">Edit</p>
              </Link>
              <div className="py-1 px-2  ">
                <BtnBarcode title=" Bar Code" />
              </div>
            </div>
          </Popover.Dropdown>
        </Popover>
      </div>
      <div className="flex items-center justify-between gap-4 pe-5 mb-6">
        <div className="flex items-center gap-4">
          <div className="bg-grayBack size-[52px] rounded-full p-1 flex items-center justify-center">
            <Image
              src={phoneImg}
              alt="phone"
              width={20}
              height={40}
              className="h-full w-auto object-contain"
            />
          </div>
          <h3 className="text-base font-semibold">{dataCard.phone}</h3>
        </div>
        {dataCard.status ? (
          <CardStatus type="blue" circle animation title={"Active"} />
        ) : (
          <CardStatus type="green" circle title={"Not Active"} />
        )}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center justify-between gap-4">
          <h4 className="text-base font-medium">Quantity</h4>
          <p className="text-base text-grayMedium">{dataCard.quantity}</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <h4 className="text-base font-medium">In stock</h4>
          <p className="text-base text-grayMedium">{dataCard.inStock}</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <h4 className="text-base font-medium">Rented</h4>
          <p className="text-base text-grayMedium">{dataCard.rented}</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <h4 className="text-base font-medium">
            Rental Cost per default period
          </h4>
          <p className="text-base text-grayMedium">{dataCard.rentalCost}</p>
        </div>
      </div>
    </div>
  );
}

export default CardViewPhoneListing;
