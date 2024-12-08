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
import Image from "next/image";
import imgUser from "@/src/assets/images/user.png";
import VerifyBlackIcon from "@/src/assets/icons/verifyBlack";
import CameraIcon from "@/src/assets/icons/camera";
import ModalComp from "@/src/components/modal-comp";
import { useDisclosure } from "@mantine/hooks";
import { MultiSelect, Select, TextInput } from "@mantine/core";
import Input from "@/src/components/input";
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
    email: "markjames@gmail.com",
  },
  verify: {
    verifiedPhoneNumber: true,
    verifiedEmail: true,
    verifiedIdentity: false,
  },
};
const initialValues = {
  name: "Mark James",
  email: "markjames@gmail.com",
  phoneNumber: "+20 1067373528",
  languages: ["English", "French"],
  streetName: "Rue Origer / Av. De La Liberté, L-1931",
  city: "Luxembourg",
  postalCode: "5445",
  accountNumber: "LU280019400644750000",
};
function ProfileDetails() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="bg-white/50 flex-1 md:flex-row flex-col min-w-[530ox] xxl:min-w-[800px] flex gap-7 pt-6 pb-9 lg:pb-12  px-8 rounded-2xl border border-green/80 shadow-md">
      <div className="md:min-w-[200px]">
        <div className=" size-[100px] md:size-[156px] relative rounded-full mx-auto mb-5 border-2 border-white shadow-md ">
          <div className=" absolute top-1/2 -end-4 md:-end-6 w-7 md:w-10 h-auto -translate-y-1/2 ">
            <VerifyBlackIcon className="w-full h-auto" />
          </div>
          <Image
            src={profileData.image}
            alt={profileData.name}
            width={236}
            height={195}
            className="w-full h-full rounded-full object-cover "
          />
          <div className=" absolute bg-[#D9D9D9] md:min-w-8  md:min-h-8  left-1/2 -bottom-3 md:-bottom-5 cursor-pointer duration-200 hover:shadow-md size-5 md:size-8 rounded-full p-1 flex items-center justify-center h-auto -translate-x-1/2 ">
            <CameraIcon />
          </div>
        </div>
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
      <div className="flex lg:px-0 px-8 flex-wrap flex-1 gap-10 lg:gap-2 flex-col lg:flex-row pt-6">
        <div className="flex-1">
          <div className="flex flex-col gap-2 mb-8">
            <h2 className="text-2xl md:text-3xl ">{profileData.name}</h2>
            <h3 className="text-base md:text-xl text-grayMedium ">
              Member Since {profileData.memberSince}
            </h3>
            <div className=" flex items-center gap-5">
              <div className="flex items-center gap-1 pe-4 border-e border-green">
                <StarIcon />
                <p className="text-base lg:text-xl">4.52</p>
              </div>
              <div className="flex items-end gap-1">
                <h4 className="text-base lg:text-xl">320</h4>
                <p className="text-sm md:text-base text-grayMedium">
                  Leased Items
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl mb-5">About </h3>
            <div className="flex flex-col gap-5 pb-8 border-b border-grayLight mb-6">
              {profileData.about.languagesSpoken ? (
                <div className="flex items-center gap-3">
                  <SpeakIcon className="min-w-5 lg:min-w-6 h-auto w-5 lg:w-6" />
                  <p className="text-base lg:text-xl text-grayMedium font-Medium">
                    Speaks {profileData.about.languagesSpoken}
                  </p>
                </div>
              ) : (
                <Missing title="Add languages you speak" />
              )}
              {profileData.about.address ? (
                <div className="flex items-center gap-3">
                  <LangIcon className="min-w-5 lg:min-w-6 h-auto w-5 lg:w-6" />
                  <p className="text-base lg:text-xl text-grayMedium font-Medium">
                    Lives in {profileData.about.address}
                  </p>
                </div>
              ) : (
                <Missing title="Add your address" />
              )}
              {profileData.about.email ? (
                <div className="flex items-center gap-3">
                  <GmailIcon className="min-w-5 lg:min-w-6 h-auto w-5 lg:w-6" />
                  <p className="text-base lg:text-xl text-grayMedium font-Medium">
                    {profileData.about.email}
                  </p>
                </div>
              ) : (
                <Missing title="Add Your Email" />
              )}
            </div>
            <div className="flex flex-col gap-5">
              {profileData.verify.verifiedPhoneNumber ? (
                <Verify title="Verified Phone number" />
              ) : (
                <Missing title="Click to verify your Phone number!" />
              )}
              {profileData.verify.verifiedEmail ? (
                <Verify title="Verified Email" />
              ) : (
                <Missing title="Click to verify your Email!" />
              )}
              {profileData.verify.verifiedIdentity ? (
                <Verify title="Verified identity" />
              ) : (
                <Missing title="Click to verify your identity!" />
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
      <ModalComp opened={opened} close={close} title="Edit profile">
        <form className="flex flex-col gap-4 md:min-w-[420px]">
          <Input label="Name" placeholder="Name" />
          <Input label="Email" placeholder="Email" />
          <Input label="Phone Number" placeholder="Phone Number" />

          <MultiSelect
            label="Languages"
            data={["English", "French"]}
            placeholder="Select Languages"
            searchable
            classNames={{
              input: "bg-grayLight border-none h-11 rounded-[8px] ",
              label: "text-[16px] mb-2 font-Medium ms-1",
              inputField: " h-full placeholder:text-xs ",
              pillsList: "h-full ",
              pill: "bg-green text-white rounded-lg text-xs font-Regular",
              dropdown:
                "bg-white text-black rounded-lg border border-green/50 text-grayDark py-2",
              option:
                "hover:bg-green hover:text-white duration-300  flex items-center ",
            }}
            clearable
          />
          <div>
            <p className="text-sm lg:text-base font-Medium mb-1">Address information</p>
            <Input label="Street Name" placeholder="Street Name" />
          </div>
          <div className="flex gap-7">
            <Input label="City" placeholder="City" />
            <Input label="Postal Code" placeholder="Postal Code" />
          </div>
          <Input label="Account Number" placeholder="Account Number" />
        </form>
        <div className="flex items-center mt-11 justify-between w-full gap-6 pb-7">
          <Button
            className={"bg-grayBack flex-1 border-none text-black"}
            onClick={close}
          >
            Discard Edits
          </Button>
          <Button className={"flex-1"}>Confirm</Button>
        </div>
      </ModalComp>
    </div>
  );
}

export default ProfileDetails;
