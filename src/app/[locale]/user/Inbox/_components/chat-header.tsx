import ArrowBackIcon from "@/src/assets/icons/arrowBack";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import Image, { StaticImageData } from "next/image";
import React from "react";
import ProductClient from "./productClient";
import CloseChatIcon from "@/src/assets/icons/closeChat";
import avatar from "@/src/assets/images/avatar.png";

function ChatHeader({
  userImage,
  userName,
}: {
  userImage: StaticImageData;
  userName: string;
}) {
  return (
    <div className="flex items-center justify-between  border-b-2 border-b-black/20 px-1  pb-3">
      <div className="flex gap-5 flex-wrap ">
        <div className=" flex items-center gap-2 lg:gap-4">
          <Link href={ROUTES.USER.INBOX} className="block lg:hidden">
            <ArrowBackIcon />
          </Link>
          <Image
            className="size-10 rounded-full"
            src={userImage || avatar}
            alt={userName || "User Name"}
            width={100}
            height={100}
            priority
          />
          <div className="text-black">
            <h3 className="text-[14px] leading-5 ">
              {userName || "User Name"}
            </h3>
            <p className=" flex items-center gap-1 text-grayMedium text-[12px] h-fit leading-[18px]">
              {" "}
              <span className=" block size-[5px] rounded-full bg-green animate-pulse "></span>{" "}
              Active
            </p>
          </div>
        </div>
        <span className=" hidden lg:block h-[60px] w-[1px] bg-grayBack"></span>

        <ProductClient />
      </div>
      <div className=" hidden lg:flex items-center justify-center">
        <Link
          href={ROUTES.USER.INBOX}
          className=" size-[34px] rounded-lg bg-grayBack flex items-center justify-center p-3 duration-200  hover:shadow-sm "
        >
          <CloseChatIcon />
        </Link>
      </div>
    </div>
  );
}

export default ChatHeader;
