"use client";
import Image from "next/image";
import React from "react";
import rental from "@/src/assets/images/placProduct.png";
import LocationIcon from "@/src/assets/icons/location";
import StarIcon from "@/src/assets/icons/star";
import DeleteIcon from "../assets/icons/delete";
import { Link, usePathname } from "../navigation";
import ROUTES from "../routes";
import FavoriteProduct from "./favorite-product";

interface CardRentalsProps {
  data: any;
  Fav?: boolean;
  edit?: boolean;
}
function CardRentals({ data, Fav = false, edit = false }: CardRentalsProps) {
  const pathName = usePathname();
  return (
    <div className="w-full flex-1 sml:flex-none max-w-[270px] min-w-[200px] block">
      <div className=" w-full p-2 lg:p-4 bg-white/80 rounded-3xl  border border-black/25 duration-200 hover:shadow-md">
        <div className=" relative mb-[6px] md:mb-3">
          <Link
            href={
              pathName.includes("/user")
                ? ROUTES.USER.PRODUCTDETAILS(data.id)
                : ROUTES.GUEST.PRODUCTSDETAILS(data.id)
            }
          >
            <Image
              alt={`${data?.title || data?.id}`}
              src={data?.heroImage || rental}
              width={252}
              height={160}
              property="10000000"
              className="w-full h-[124px] md:h-[160px] object-cover object-center rounded-[18px]"
            />
          </Link>

          {Fav && (
            <FavoriteProduct id={data?.id} favorite={data?.favorite || false} />
          )}
        </div>
        <Link
          href={
            pathName.includes("/user")
              ? ROUTES.USER.PRODUCTDETAILS(data.id)
              : ROUTES.GUEST.PRODUCTSDETAILS(data.id)
          }
        >
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-Bold text-[12px] md:text-[20px]">
              ${data?.dailyPrice || data.price}
            </h3>
            {data?.isNew ? (
              <div className="bg-[#F3F6FC] rounded-lg px-2 w-fit flex items-center justify-center gap-1 lg:gap-2 h-5 lg:h-6">
                <StarIcon className=" w-[10px] md:w-[14px] h-auto" />
                <p className="text-[10px] md:text-[12px] text-grayDark">New</p>
              </div>
            ) : (
              <div className="bg-[#F3F6FC] rounded-lg px-2 w-fit flex items-center justify-center gap-2 h-6">
                <p className="text-[10px] md:text-[12px] text-grayDark">
                  Two days ago
                </p>
              </div>
            )}
          </div>
          <h4 className="text-blue text-sm lg:text-base font-medium capitalize  w-full max-w-full truncate ">
            {data?.name || data.title}
          </h4>
          <h5 className="text-grayMedium text-[10px] md:text-[12px] pb-[6px] border-b border-black/20 min-h-7 max-w-full truncate">
            {data?.description || data.details || "--"}
          </h5>
          <div className="flex md:items-center gap-1 lg:gap-2 mt-1 md:mt-2">
            <LocationIcon className="w-3 min-w-3 md:w-[18px] h-auto" />
            <div>
              <h6 className="text-[10px] md:text-[12px] font-Medium text-black/80 line-clamp-2 min-h-9 place-content-center">
                {data.address || data.location || "--"}
              </h6>
              {/* <p className="text-[10px] md:text-[12px] font-Light  text-black/60">
                {data.locationDetails}
              </p> */}
            </div>
          </div>
        </Link>
      </div>
      {edit && (
        <button className="flex items-center gap-2 text-red w-fit mx-auto mt-3 border px-4 py-2 duration-300 h-10 text-sm md:text-base hover:shadow-md hover:border-red rounded-xl border-black/20 ">
          <DeleteIcon className="h-[14px] w-auto" />
          Delete
        </button>
      )}
    </div>
  );
}

export default CardRentals;
