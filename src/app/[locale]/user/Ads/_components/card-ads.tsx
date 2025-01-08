import StarIcon from "@/src/assets/icons/star";
import LinkGreen from "@/src/components/linkGreen";
import ROUTES from "@/src/routes";
import Image from "next/image";
import React from "react";
import placCardProduct from "@/src/assets/images/placCardProduct.png";
import CardStatus from "@/src/components/cardStatus";
import EditIcon from "@/src/assets/icons/edit";
import DeleteIcon from "@/src/assets/icons/delete";

function CardAds({ product = {} }: { product: any }) {
  return (
    <div className="bg-white border border-green/50 rounded-3xl px-3 lg:px-5 py-3 lg:py-4 max-w-[400px] mb-3 w-full mdl:min-w-[320px] shadow-sidebar relative">
      <div className=" rounded-xl bg-blueLight w-full h-[122px] lg:h-40">
        <Image
          alt="home"
          priority
          src={product?.heroImage || placCardProduct}
          width={370}
          height={166}
          className="w-full rounded-xl h-full object-cover object-center "
        />
      </div>

      <div className="flex items-center gap-3 justify-between mt-2 lg:mt-5 pb-3 border-b border-green">
        <div>
          <h3 className="text-xs text-grayMedium lg:text-sm font-Regular">
            Product Name
          </h3>
          <p className=" text-xs  lg:text-sm ">Apple Laptop</p>
        </div>
        <CardStatus title="Ongoing" type="blue" circle />
      </div>

      <div className="flex items-end justify-between gap-1 lg:gap-3 mt-5">
        <div>
          <h3 className="text-grayMedium mb-1 font-Regular text-sm lg:text-base">
            Boost Frome
          </h3>
          <p className="text-sm lg:text-base font-SemiBold">11-10-2024</p>
        </div>
        <span className=" block h-[34px] w-[1px] bg-green"></span>
        <div>
          <h3 className="text-grayMedium text-center mb-1 font-Regular text-sm lg:text-base">
            Boost To
          </h3>
          <p className="text-sm lg:text-base text-center font-SemiBold">
            15-10-2024
          </p>
        </div>
        <span className=" block h-[34px] w-[1px] bg-green"></span>
        <div>
          <h3 className="text-grayMedium mb-1 font-Regular text-sm lg:text-base">
            Payment
          </h3>
          <p className="text-sm lg:text-base text-center font-SemiBold">
            1000$
          </p>
        </div>
      </div>
      <div className="flex flex-col  gap-3 mt-8">
        <LinkGreen
          href={ROUTES.USER.PRODUCTDETAILS(50)}
          className={"!h-9 py-1 flex-1"}
        >
          View Details
        </LinkGreen>
        <div className="flex items-center gap-4">
          <LinkGreen
            href={ROUTES.USER.PRODUCTDETAILS(50)}
            className={"h-10 bg-grayBack flex-1 gap-2 text-black border-none"}
          >
            <EditIcon className="w-3 h-auto" />
            Edit Ad
          </LinkGreen>
          <LinkGreen
            href={ROUTES.USER.PRODUCTDETAILS(50)}
            className={"h-10 bg-grayBack flex-1 gap-2 text-red  border-none"}
          >
            <DeleteIcon className="w-3 h-auto" />
            <p className="text-red text-sm mdl:text-base">Delete Ad</p>
          </LinkGreen>
        </div>
      </div>
    </div>
  );
}

export default CardAds;
