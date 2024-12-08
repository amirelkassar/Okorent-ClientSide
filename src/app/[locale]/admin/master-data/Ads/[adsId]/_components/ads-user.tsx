import VerifyBlackIcon from "@/src/assets/icons/verifyBlack";
import Card from "@/src/components/card";
import Image from "next/image";
import React from "react";
import imgUser from "@/src/assets/images/user.png";
import CardStatus from "@/src/components/cardStatus";
import StarIcon from "@/src/assets/icons/star";
import LinkGreen from "@/src/components/linkGreen";
import ROUTES from "@/src/routes";

function AdsUser() {
  return (
    <Card className="py-6 px-8 flex-1">
      <div className=" size-[82px]  relative rounded-full mx-auto mb-5 border-2 border-white shadow-md ">
        <div className=" absolute top-1/2 -end-4  w-6 m h-auto -translate-y-1/2 ">
          <VerifyBlackIcon className="w-full h-auto" />
        </div>
        <Image
          src={imgUser}
          alt={"dddd"}
          width={236}
          height={195}
          className="w-full h-full rounded-full object-cover "
        />
      </div>
      <h3 className="text-xl lg:text-[24px] text-center mb-2">Mark James</h3>
      <div className="flex items-center justify-center gap-2 flex-wrap mb-4">
        <h4 className="text-grayMedium text-center lg:text-start text-sm lg:text-[16px] font-Regular ">
          Member Since March, 2024
        </h4>
        <CardStatus title="Free" type="green" circle />
      </div>
      <div className="flex items-center justify-center ">
        <div className="flex items-center gap-1 pe-2 lg:pe-4">
          <p className="font-Bold text-lg lg:text-xl ">4.52</p>
          <StarIcon className="w-[18px] lg:w-[20px] h-auto" />
        </div>
        <div className="flex items-center md:items-end gap-1 pe-2 lg:pe-4 ps-2 border-s border-green">
          <p className="font-Bold text-lg lg:text-xl ">95%</p>
          <p className="text-sm lg:text-[16px] mb-1 text-grayMedium">
            Response Rate
          </p>
        </div>
        <div className="flex items-center md:items-end gap-1 pe-2 lg:pe-4 ps-2 border-s border-green">
          <p className="font-Bold text-lg lg:text-xl ">320</p>
          <p className="text-sm lg:text-[16px] mb-1 text-grayMedium">
            {" "}
            Leased Items
          </p>
        </div>
      </div>
      <div className="flex items-center gap-6 flex-wrap pt-4 border-t border-grayMedium/30 mt-5">
        <LinkGreen
          href={ROUTES.USER.INBOX}
          className={"flex-1 h-10 bg-transparent text-green border "}
        >
          Message Ahmed
        </LinkGreen>
        <LinkGreen
          href={ROUTES.GUEST.PROFILE(3, 1)}
          className={"flex-1 h-10 bg-grayBack text-black border-none"}
        >
          {" "}
          View Profile
        </LinkGreen>
      </div>
    </Card>
  );
}

export default AdsUser;
