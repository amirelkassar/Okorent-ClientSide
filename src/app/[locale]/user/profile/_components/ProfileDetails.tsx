"use client";
import EditIcon from "@/src/assets/icons/edit";
import StarIcon from "@/src/assets/icons/star";
import Button from "@/src/components/button";
import React from "react";
import Missing from "./Missing";
import SpeakIcon from "@/src/assets/icons/speake";
import LangIcon from "@/src/assets/icons/lang";
import GmailIcon from "@/src/assets/icons/gmail";
import RocketIcon from "@/src/assets/icons/Rocket";
import imgUser from "@/src/assets/images/user.png";
import { useDisclosure } from "@mantine/hooks";
import Verify from "@/src/components/verify";
import UploadAndCropImg from "./uploadAndCropImg";
import ModalEditProfile from "./modal-edit-profile";
import { getDate } from "@/src/lib/utils";
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
    email: "markjames@gmail.com",
  },
  verify: {
    verifiedPhoneNumber: true,
    verifiedEmail: true,
    verifiedIdentity: false,
  },
};

function ProfileDetails({ initialData }: { initialData: any }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="bg-white/50 flex-1 md:flex-row flex-col min-w-[530ox] xxl:min-w-[800px] flex gap-4 md:gap-5 pt-6 pb-9 lg:pb-12  px-6 rounded-2xl border border-green/80 shadow-md">
      <div className="md:min-w-[200px]">
        <UploadAndCropImg image={initialData.userImage || profileData.image} />
        <p className="flex items-center gap-1 text-center mx-auto justify-center mb-1 md:mb-4 text-sm  md:text-base text-green">
          <span className="block h-[5px] w-[5px] rounded-full animate-pulse bg-green"></span>
          {profileData.availability}
        </p>
        <div className="flex items-center justify-center gap-2 w-fit mx-auto rounded-lg bg-green/15 px-3 py-1 md:py-2">
          <RocketIcon />
          <p className="text-sm md:text-base font-Medium">
            {profileData.membership}
          </p>
        </div>
      </div>
      <div className="flex lg:px-0 md:px-8 px-0 flex-wrap flex-1 gap-10 lg:gap-2 flex-col lg:flex-row md:pt-6">
        <div className="flex-1">
          <div className="flex flex-col text-center justify-center md:justify-start md:text-start gap-2 mb-8">
            <h2 className="text-2xl md:text-3xl ">
              {initialData.name || profileData.name}
            </h2>
            <h3 className="text-base md:text-xl text-grayMedium ">
              Member Since{" "}
              {initialData.created
                ? getDate(initialData.created).fullYearWithMonthName
                : profileData.memberSince}
            </h3>
            <div className=" flex items-center justify-center md:justify-start gap-5">
              <div className="flex items-center gap-1 pe-4 border-e border-green">
                <StarIcon />
                <p className="text-base lg:text-xl">
                  {initialData.rating || 0}
                </p>
              </div>
              <div className="flex items-end gap-1">
                <h4 className="text-base lg:text-xl">
                  {" "}
                  {initialData.leasedItems || 0}
                </h4>
                <p className="text-sm md:text-base text-grayMedium">
                  Leased Items
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl mb-5">About </h3>
            <div className="flex flex-col gap-5 pb-8 border-b border-grayLight mb-6">
              {initialData?.languageNames.length > 0 ? (
                <div className="flex items-center gap-3">
                  <SpeakIcon className="min-w-5 lg:min-w-6 h-auto w-5 lg:w-6" />
                  <p className="text-base lg:text-xl text-grayMedium font-Medium">
                    Speaks {initialData?.languageNames?.join(", ") || "--"}
                  </p>
                </div>
              ) : (
                <Missing title="Add languages you speak" />
              )}
              {initialData?.city ? (
                <div className="flex items-center gap-3">
                  <LangIcon className="min-w-5 lg:min-w-6 h-auto w-5 lg:w-6" />
                  <p className="text-base lg:text-xl text-grayMedium font-Medium">
                    Lives in {initialData?.city || "--"}
                  </p>
                </div>
              ) : (
                <Missing title="Add your address" />
              )}
              {initialData?.userName ? (
                <div className="flex items-center gap-3">
                  <GmailIcon className="min-w-5 lg:min-w-6 h-auto w-5 lg:w-6" />
                  <p className="text-base lg:text-xl text-grayMedium font-Medium">
                    {initialData?.userName}
                  </p>
                </div>
              ) : (
                <Missing title="Add Your Email" />
              )}
            </div>
            <div className="flex flex-col gap-5">
              {initialData?.phoneNumberVerified ? (
                <Verify title="Verified Phone number" />
              ) : (
                <Missing title="Click to verify your Phone number!" />
              )}
              {initialData?.emailVerified ? (
                <Verify title="Verified Email" />
              ) : (
                <Missing title="Click to verify your Email!" />
              )}
            </div>
          </div>
        </div>
        <Button
          onClick={open}
          className={"gap-1 min-w-[180px] w-[190px] mx-auto"}
        >
          <EditIcon fill="white" />
          <p>Edit profile</p>
        </Button>
      </div>
      <ModalEditProfile
        opened={opened}
        close={close}
        initialData={initialData}
      />
    </div>
  );
}

export default ProfileDetails;
