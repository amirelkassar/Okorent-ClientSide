import Image from "next/image";
import React from "react";
import homeImg from "@/src/assets/images/house1.png";
import userImg from "@/src/assets/images/avatar.png";
import Button from "@/src/components/button";
import NoteIcon from "@/src/assets/icons/note";
import LinkGreen from "@/src/components/linkGreen";
import ROUTES from "@/src/routes";

function OneCardView() {
  return (
    <div className="bg-white border border-green/50 rounded-3xl px-5 py-4 max-w-[400px] mb-3 w-full min-w-[320px] shadow-sidebar relative">
      <div className="flex items-center justify-center gap-2 bg-[#FF0E0E] rounded-xl absolute top-7 start-6  p-3">
        <NoteIcon />
        <p className="text-white text-[14px] font-SemiBold">Ending Soon!</p>
      </div>
      <Image
        alt="home"
        priority
        src={homeImg}
        className="w-full rounded-xl h-40 object-cover object-top"
      />
      <div className="flex items-center gap-3 mt-6">
        <Image
          alt="userImg"
          priority
          src={userImg}
          className="size-[60px] rounded-full  object-cover object-top"
        />
        <div>
          <h3>Ahmed Mohamed Badr</h3>
          <p>ahmed5badr5@gmail.com</p>
        </div>
      </div>
      <div className="flex items-end justify-between gap-3 mt-5">
        <div>
          <h3 className="text-grayMedium mb-1 font-Regular">Product Name</h3>
          <p className="text-[16px] font-SemiBold">Apple Laptop</p>
        </div>
        <span className=" block h-[34px] w-[1px] bg-green"></span>
        <div>
          <h3 className="text-grayMedium text-center mb-1 font-Regular">
            Payment
          </h3>
          <p className="text-[16px] text-center font-SemiBold">100$</p>
        </div>
        <span className=" block h-[34px] w-[1px] bg-green"></span>
        <div>
          <h3 className="text-grayMedium mb-1 font-Regular">Quantity</h3>
          <p className="text-[16px] font-SemiBold">14</p>
        </div>
      </div>
      <div className="flex items-center gap-5 mt-4">
        <Button className={"h-10 bg-grayBack flex-1 text-black border-none"}>
          View Details
        </Button>
        <LinkGreen href={ROUTES.USER.INBOX} className={"h-10 flex-1"}> Message Ahmed</LinkGreen>
      </div>
    </div>
  );
}

export default OneCardView;
