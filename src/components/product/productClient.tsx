"use client";
import StarIcon from "@/src/assets/icons/star";
import VerifyBlackIcon from "@/src/assets/icons/verifyBlack";
import Image from "next/image";
import React from "react";
import avatar from "@/src/assets/images/avatar.png";
import ROUTES from "@/src/routes";
import LinkGreen from "@/src/components/linkGreen";
import UserAvailable from "@/src/components/userAvailable";
import { useParams } from "next/navigation";
import { GetUserProductsByID } from "@/src/hooks/queries/user/lisitings";
import SkeletonLoading from "../skeleton-loading";
import { getDate } from "@/src/lib/utils";
import { usePathname } from "@/src/navigation";
function ProductClient({ clientID }: { clientID: any }) {
  const params = useParams();
  const path = usePathname();
  const { data, isLoading } = GetUserProductsByID(clientID);
  if (isLoading) {
    return <SkeletonLoading className="md:!w-full md:!h-[218px]" />;
  }
  const isAdminRoute = path.includes(ROUTES.ADMIN.DASHBOARD);
  
  return (
    <div className="border border-green/30 mt-6 rounded-lg py-6 px-5 bg-white/50">
      <div className=" flex items-center lg:items-start gap-4 flex-col lg:flex-row lg:gap-6 w-full pb-3 border-b border-grayLight">
        <div className="flex flex-col items-center gap-2 justify-center ">
          <Image
            alt="user"
            src={data?.data?.userImage || avatar}
            width={100}
            height={100}
            className=" size-[50px] lg:size-[60px] rounded-[50%] object-cover object-top"
            priority
          />
          <UserAvailable available={false} />
        </div>
        <div className="flex-1">
          <div className="flex gap-3  lg:gap-5 justify-center lg:justify-between mb-3 lg:mb-1 ">
            <h3 className="text-xl lg:text-[24px]">{data?.data?.name}</h3>
            <div className="flex items-center justify-center">
              <VerifyBlackIcon className=" size-5 lg:size-[26px]" />
            </div>
          </div>
          <h4 className="text-grayMedium text-center lg:text-start text-sm lg:text-[16px] font-Regular -mt-2 mb-2">
            Member Since {getDate(data?.data?.created).fullYearWithMonthName}
          </h4>
          <div className="flex items-center ">
            <div className="flex items-center gap-1 pe-2 lg:pe-4">
              <p className="font-Bold text-lg lg:text-xl ">
                {data?.data?.rating}
              </p>
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
        </div>
      </div>
      <div className="flex items-center gap-6 flex-wrap mt-5">
        <LinkGreen
          href={ROUTES.USER.INBOX + "?chat=" + clientID}
          className={"flex-1 h-10 bg-transparent text-green border "}
        >
          Message Ahmed
        </LinkGreen>
        <LinkGreen
          href={ isAdminRoute ? ROUTES.ADMIN.ACCOUNTSDETAILS(data?.data?.id) : ROUTES.GUEST.PROFILE(params.productID, data?.data?.id)}
          className={"flex-1 h-10 bg-grayBack text-black border-none"}
        >
          {" "}
          View Profile
        </LinkGreen>
      </div>
    </div>
  );
}

export default ProductClient;
