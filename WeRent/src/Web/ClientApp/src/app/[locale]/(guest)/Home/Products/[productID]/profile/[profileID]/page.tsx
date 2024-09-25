import Image from "next/image";
import React from "react";
import EmpoweringImg from "@/src/assets/images/Empowering.png";
import { Rentals } from "@/src/lib/dataUser";
import ProductList from "@/src/components/product/productList";
import ReviewsProfile from "./_components/reviewsProfile";
import AboutProfile from "./_components/aboutProfile";
import imgUser from "@/src/assets/images/user.png";
import VerifyBlackIcon from "@/src/assets/icons/verifyBlack";
import UserAvailable from "@/src/components/userAvailable";
import SpeakIcon from "@/src/assets/icons/speake";
import LangIcon from "@/src/assets/icons/lang";
import GmailIcon from "@/src/assets/icons/gmail";
import StarIcon from "@/src/assets/icons/star";
import Button from "@/src/components/button";
import ShareIcon from "@/src/assets/icons/share";
import FavIcon from "@/src/assets/icons/fav";
import Verify from "@/src/components/verify";
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
function page() {
  return (
    <div>
      <div className="w-full rounded-3xl overflow-hidden h-[356px]">
        <Image
          src={EmpoweringImg}
          alt="Empowering"
          className="w-full h-full"
          width={1471.48}
          height={356.18}
        />
      </div>
      <div className="flex   gap-4 -mt-[140px] ps-8">
        <div className="min-w-[370px]   bg-white rounded-3xl max-w-[370px] flex-1 pb-24 shadow-md">
          <div className="md:min-w-[200px]">
            <div className=" -mt-24 size-[100px] md:size-[156px] relative rounded-full mx-auto mb-5 border-2 border-white shadow-md ">
              <div className=" absolute top-1/2 -end-4 md:-end-6 w-7 md:w-10 h-auto  ">
                <VerifyBlackIcon className="w-full h-auto" />
              </div>
              <Image
                src={profileData.image}
                alt={profileData.name}
                width={236}
                height={195}
                className="w-full h-full rounded-full object-cover "
              />
            </div>
            <div className="w-fit mx-auto">
              <UserAvailable available />
            </div>
          </div>

          <div className="flex-1 ps-12 pe-2 mt-9">
            <div className="flex flex-col gap-2 mb-16">
              <h2 className="text-2xl md:text-3xl ">{profileData.name}</h2>
              <h3 className="text-base md:text-xl text-grayMedium ">
                Member Since {profileData.memberSince}
              </h3>
              <div className=" flex items-center gap-5">
                <div className="flex items-center gap-1 pe-4 border-e border-green">
                  <StarIcon />
                  <p className="text-base lg:text-2xl">4.52</p>
                </div>
                <div className="flex items-end gap-1">
                  <h4 className="text-base lg:text-2xl">320</h4>
                  <p className="text-sm md:text-base text-grayMedium">
                    Leased Items
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-7">
                <Button className={"h-[50px]"}>Message Ahmed</Button>
                <button className=" size-[46px]  rounded-lg bg-grayBack flex items-center justify-center p-3 duration-300 hover:shadow-md">
                  <FavIcon className="w-full h-auto" />
                </button>
                <button className=" size-[46px]  rounded-lg bg-grayBack flex items-center justify-center p-3 duration-300 hover:shadow-md">
                  <ShareIcon />
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl mb-5">
                About <span className="font-Bold">Mark</span>{" "}
              </h3>
              <div className="flex flex-col gap-5  mb-11">
                {profileData.about.languagesSpoken ? (
                  <div className="flex items-center gap-3">
                    <SpeakIcon className="min-w-5 lg:min-w-6 h-auto w-5 lg:w-6" />
                    <p className="text-base lg:text-xl text-grayMedium font-Medium">
                      Speaks {profileData.about.languagesSpoken}
                    </p>
                  </div>
                ) : null}
                {profileData.about.address ? (
                  <div className="flex items-center gap-3">
                    <LangIcon className="min-w-5 lg:min-w-6 h-auto w-5 lg:w-6" />
                    <p className="text-base lg:text-xl text-grayMedium font-Medium">
                      Lives in {profileData.about.address}
                    </p>
                  </div>
                ) : null}
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
                {profileData.verify.verifiedPhoneNumber ? (
                  <Verify title="Verified Phone number" />
                ) : null}
                {profileData.verify.verifiedEmail ? (
                  <Verify title="Verified Email" />
                ) : null}
                {profileData.verify.verifiedIdentity ? (
                  <Verify title="Verified identity" />
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className=" flex-1 pt-[180px] self-end w-full">
          <AboutProfile />
          <ReviewsProfile />
        </div>
      </div>
      <div className="mt-10 lg:my-20 mx-auto">
        <ProductList more={false} title="Mark Rentals" data={Rentals} />
      </div>
    </div>
  );
}

export default page;
