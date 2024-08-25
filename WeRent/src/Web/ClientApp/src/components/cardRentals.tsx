import Image from "next/image";
import React from "react";
import rental from "@/src/assets/images/house1.png";
import LocationIcon from "@/src/assets/icons/location";
import StarIcon from "@/src/assets/icons/star";
import FavIcon from "../assets/icons/fav";
import DeleteIcon from "../assets/icons/delete";

interface CardRentalsProps {
  data: any;
  Fav?: boolean;
  edit?: boolean;
}
function CardRentals({ data, Fav = false, edit = false }: CardRentalsProps) {
  console.log(data.id);
  
  return (
    <div>
      <div className="w-[270px] p-4 bg-white/20 rounded-3xl border border-black/25">
        <div className=" relative mb-3">
          <Image
            alt="Rentals"
            src={rental}
            className="w-full h-[160px] object-cover object-top rounded-[18px]"
          />
          {Fav && (
            <button className="p-2 rounded-lg bg-grayBack flex items-center justify-center absolute bottom-3 end-2 z-[2]">
              <FavIcon />
            </button>
          )}
        </div>
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-Bold text-[20px]">${data.price}</h3>
          {data.state === "New" ? (
            <div className="bg-[#F3F6FC] rounded-lg px-2 w-fit flex items-center justify-center gap-2 h-6">
              <StarIcon className="w-[14px] h-auto" />
              <p className="text-[12px] text-grayDark">New</p>
            </div>
          ) : (
            <div className="bg-[#F3F6FC] rounded-lg px-2 w-fit flex items-center justify-center gap-2 h-6">
              <p className="text-[12px] text-grayDark">Two days ago</p>
            </div>
          )}
        </div>
        <h4 className="text-blue text-[16px] ">{data.title}</h4>
        <h5 className="text-grayMedium text-[12px] pb-[6px] border-b border-black/20">
          {data.details}
        </h5>
        <div className="flex items-center gap-4 mt-2">
          <LocationIcon />
          <div>
            <h6 className="text-[12px] font-Medium text-black/80">
              {data.location}
            </h6>
            <p className="text-[12px] font-Light  text-black/60">
              {data.locationDetails}
            </p>
          </div>
        </div>
      </div>
      {edit && (
        <button className="flex items-center gap-2 w-fit mx-auto mt-3 text-grayMedium text-base">
          <DeleteIcon className="h-[14px] w-auto" />
          Delete
        </button>
      )}
    </div>
  );
}

export default CardRentals;
