import StarIcon from "@/src/assets/icons/star";
import VerifyBlackIcon from "@/src/assets/icons/verifyBlack";
import Button from "@/src/components/button";
import Image from "next/image";
import React from "react";
import avatar from "@/src/assets/images/avatar.png";
function ProductClient() {
  return (
    <div className="border border-green/30 mt-6 rounded-lg py-6 px-5">
      <div className=" flex items-start gap-6 w-full pb-3 border-b border-black/20">
        <div className="flex flex-col gap-2 justify-center ">
          <Image
            alt="user"
            src={avatar}
            className=" size-[60px] rounded-[50%] object-cover object-top"
            priority
          />
          <p className="text-green text-[14px] text-center">Available</p>
        </div>
        <div
          className="flex-1
            "
        >
          <div className="flex  gap-5 justify-between ">
            <h3 className="text-[24px]">Ahmed Mohamed Badr</h3>
            <div className="flex items-center justify-center">
              <VerifyBlackIcon />
            </div>
          </div>
          <h4 className="text-grayMedium text-[16px] font-Regular -mt-2 mb-2">
            Member Since March, 2024
          </h4>
          <div className="flex items-center ">
            <div className="flex items-center gap-1 pe-4">
              <p className="font-Bold text-[24px]">4.52</p>
              <StarIcon className="w-[22px] h-auto" />
            </div>
            <div className="flex items-end gap-1 pe-4 ps-2 border-s border-green">
              <p className="font-Bold text-[24px]">320</p>
              <p className="text-[16px] mb-1 text-grayMedium">Rented Items</p>
            </div>
            <div className="flex items-end gap-1 pe-4 ps-2 border-s border-green">
              <p className="font-Bold text-[24px]">320</p>
              <p className="text-[16px] mb-1 text-grayMedium"> Leased Items</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6 flex-wrap mt-5">
        <Button className={"flex-1 h-10"}>Message Ahmed</Button>
        <Button className={"flex-1 h-10 bg-grayBack text-black border-none"}>
          {" "}
          View Profile
        </Button>
      </div>
    </div>
  );
}

export default ProductClient;
