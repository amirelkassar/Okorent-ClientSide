import React from "react";
import GmailIcon from "../assets/icons/gmail";
import Verify from "./verify";
import imgUser from "@/src/assets/images/user.png";
import VerifyBlackIcon from "../assets/icons/verifyBlack";
import Image from "next/image";
import UserAvailable from "./userAvailable";
import StarIcon from "../assets/icons/star";
import FavIcon from "../assets/icons/fav";
import ShareIcon from "../assets/icons/share";
import SpeakIcon from "../assets/icons/speake";
import LangIcon from "../assets/icons/lang";
import AboutProfile from "./aboutProfile";
import ReviewsProfile from "./reviewsProfile";
import { getDate } from "../lib/utils";
import LinkGreen from "./linkGreen";
import ROUTES from "../routes";

const profileData = {
  name: "Mark James",
  memberSince: "March 2024",
  image: imgUser,
  rating: 4.52,
  leasedItems: 320,
  membership: "Starter Membership",
  availability: "Available",
  about: {
    languagesSpoken: "English and French",
    address: "Neatherland",
    email: "",
  },
  verify: {
    verifiedPhoneNumber: true,
    verifiedEmail: true,
    verifiedIdentity: true,
  },
};
function ViewProfile({
  editAdmin = false,
  data = {},
}: {
  editAdmin?: boolean;
  data?: any;
}) {
  return (
    <div className="flex  flex-col lg:flex-row gap-10 lg:items-start  lg:gap-4 -mt-5 lg:-mt-[140px] lg:ps-8">
      <div className="min-w-[370px]   bg-white rounded-2xl lg:rounded-3xl w-full max-w-[93%] lg:max-w-[370px] mx-auto flex-1 pb-12 lg:pb-24 shadow-md">
        <div className="lg:min-w-[200px]">
          <div className=" -mt-5 lg:-mt-24 size-[100px] lg:size-[156px] relative rounded-full mx-auto mb-5 border-2 border-white shadow-md ">
            <div className=" absolute top-1/2 -end-4 lg:-end-6 w-7 lg:w-10 h-auto  ">
              <VerifyBlackIcon className="w-full h-auto" />
            </div>
            <Image
              src={data.userImage || profileData.image}
              alt={data.name || profileData.name}
              width={236}
              height={195}
              className="w-full h-full rounded-full object-cover object-top "
            />
          </div>
          <div className="w-fit mx-auto">
            <UserAvailable available />
          </div>
        </div>

        <div className="flex-1 ps-4 md:ps-12 pe-2 mt-5 md:mt-9">
          <div className="flex justify-center text-center flex-col gap-2 mb-14 lg:mb-16">
            <h2 className="text-2xl lg:text-3xl ">
              {data.name || profileData.name}
            </h2>
            <h3 className="text-base lg:text-xl text-grayMedium ">
              Member Since{" "}
              {data.created
                ? getDate(data.created).fullYearWithMonthName
                : profileData.memberSince}
            </h3>
            <div className=" flex items-center justify-center md:justify-start gap-5">
              <div className="flex items-center gap-1 pe-4 border-e border-green">
                <StarIcon />
                <p className="text-base lg:text-2xl">{data.rating || 0}</p>
              </div>
              <div className="flex items-end gap-1">
                <h4 className="text-base lg:text-2xl">
                  {data.leasedItems || 0}
                </h4>
                <p className="text-sm lg:text-base text-grayMedium">
                  Leased Items
                </p>
              </div>
            </div>
            <div className="flex items-center pe-4 md:pe-12 justify-center md:justify-start gap-2 mt-7">
              <LinkGreen
                href={
                  editAdmin
                    ? ROUTES.ADMIN.INBOX + "?chat=" + data?.id
                    : ROUTES.USER.INBOX + "?chat=" + data?.id
                }
                className={"h-[50px] w-full"}
              >
                Message {data.name?.split(" ")[0] || "user"}
              </LinkGreen>
            </div>
          </div>
          <div>
            <h3 className="text-2xl lg:text-3xl mb-5">
              About{" "}
              <span className="font-Bold">{data.name?.split(" ")[0]}</span>{" "}
            </h3>
            <div className="flex flex-col gap-5  mb-11">
              <div className="flex items-center gap-3">
                <SpeakIcon className="min-w-5 lg:min-w-6 h-auto w-5 lg:w-6" />
                <p className="text-base lg:text-xl text-grayMedium font-Medium">
                  Speaks {data?.languageNames?.join(", ") || "--"}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <LangIcon className="min-w-5 lg:min-w-6 h-auto w-5 lg:w-6" />
                <p className="text-base lg:text-xl text-grayMedium font-Medium">
                  Lives in {data?.city || "--"}
                </p>
              </div>

              {profileData.about.email ? (
                <div className="flex items-center gap-3">
                  <GmailIcon className="min-w-5 lg:min-w-6 h-auto w-5 lg:w-6" />
                  <p className="text-base lg:text-xl text-grayMedium font-Medium">
                    {profileData.about.email}
                  </p>
                </div>
              ) : null}
            </div>
            <div className="flex flex-col gap-5">
              {data.phoneNumberVerified ? (
                <Verify title="Verified Phone number" />
              ) : null}
              {data.emailVerified ? <Verify title="Verified Email" /> : null}
            </div>
          </div>
        </div>
      </div>

      <div className=" flex-1 lg:pt-[180px] w-full">
        <AboutProfile
          description={data.description}
          nameUser={data?.name?.split(" ")[0] || ""}
        />
        <ReviewsProfile
          editAdmin={editAdmin}
          userID={data?.id || ""}
          userName={data?.name?.split(" ")[0] || ""}
        />
      </div>
    </div>
  );
}

export default ViewProfile;
