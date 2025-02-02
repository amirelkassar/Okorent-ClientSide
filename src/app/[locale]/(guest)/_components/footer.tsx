"use client";
import React, { useState } from "react";
import logo from "@/src/assets/images/logoWhite.png";
import Image from "next/image";
import { Link, usePathname } from "@/src/navigation";
import AppStoreIcon from "@/src/assets/icons/appStore";
import GooglePlayIcon from "@/src/assets/icons/googlePlay";
import englishImg from "@/src/assets/images/english.png";
import arabicImg from "@/src/assets/images/saud.png";
import { Menu } from "@mantine/core";
import DownIcon from "@/src/assets/icons/down";
import { useLocale } from "next-intl";
import ROUTES from "@/src/routes";
const footerData = [
  {
    title: "About Werent",
    links: [
      { label: "Terms and conditions", url: "#" },
      { label: "Privacy Policy", url: "#", isNew: true },
      { label: "FAQs", url: "#" },
      { label: "Contact us", url: ROUTES.GUEST.CONTACTUS },
      { label: "Who are we ?", url: ROUTES.GUEST.WHOWEARE },
    ],
  },
  {
    title: "Browse ads",
    links: [
      { label: "All listings", url: ROUTES.GUEST.ALLPRODUCTS },
      { label: "Electronic", url: ROUTES.GUEST.PRODUCTS("Electronic") },
      { label: "Fashion", url: ROUTES.GUEST.PRODUCTS("Fashion") },
      { label: "Real estate", url: ROUTES.GUEST.PRODUCTS("RealEstate") },
      { label: "Tools", url: ROUTES.GUEST.PRODUCTS("Tools") },
      { label: "Leisure & Sport", url: ROUTES.GUEST.PRODUCTS("LeisureSport") },
    ],
  },
  {
    title: "Join WeRent",
    links: [
      { label: "Log in", url: ROUTES.AUTH.LOGIN },
      { label: "Create an account", url: ROUTES.AUTH.SIGNUP },
    ],
  },
];
const footerDataButtons = [
  {
    label: "App Store",
    icon: <AppStoreIcon />,
    url: "#",
  },
  {
    label: "Google Play",
    icon: <GooglePlayIcon />,
    url: "#",
  },
];

function FooterGuest() {
  const [opened, setOpened] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="bg-[#022E2D] w-full pb-14 lg:pb-20 pt-8 mdl:pt-14">
      <div className="max-w-[1600px] flex-col mdl:flex-row mx-auto px-9 lg:px-[74px] flex gap-14 lg:gap-36 justify-between">
        <div className=" w-full  justify-between gap-4 mdl:max-w-[320px] flex flex-row mdl:flex-col flex-wrap">
          <div>
            <Link href={ROUTES.GUEST.HOMEPAGE}>
              <Image
                src={logo}
                alt="logo Footer"
                width={135}
                height={45}
                className="w-[135px] h-[45px] mb-5 block"
              />
            </Link>
            <h2 className="font-Regular text-[#D3D4DC]/70 text-base mb-4 max-w-[180px] mdl:max-w-[320px]">
              Rent and lease anything at any time
            </h2>
          </div>

          <Menu
            shadow="md"
            width={124}
            opened={opened}
            onChange={setOpened}
            classNames={{
              dropdown: " border rounded-xl border-black",
            }}
          >
            <Menu.Target>
              <button className="flex h-9 py-1 items-center bg-[#012928] text-white px-[6px] w-fit rounded-md border  border-black  justify-between gap-3">
                <Image
                  src={locale === "en" ? englishImg : arabicImg}
                  alt="Language Flag"
                  width={26}
                  height={20}
                  className="w-[26px] h-5"
                />

                <p className="text-white text-[15px] font-Regular">
                  {locale === "en" ? "English" : "العربية"}
                </p>
                <DownIcon
                  fill="white"
                  className={` duration-300 ${opened && "rotate-180"}`}
                />
              </button>
            </Menu.Target>

            <Menu.Dropdown className="w-[124px] bg-green/10">
              <Menu.Item className="flex items-center gap-2 hover:bg-green/20 py-1 px-1">
                <Link
                  className="flex items-center gap-2"
                  href={pathname}
                  locale={"en"}
                >
                  <Image
                    src={englishImg}
                    width={26}
                    height={20}
                    alt="English"
                    className="w-[26px] h-5"
                  />
                  <p className="text-white text-[15px] font-Regular">English</p>
                </Link>
              </Menu.Item>

              <Menu.Item className="flex items-center gap-2 hover:bg-green/20 py-1 px-1">
                <Link
                  className="flex items-center gap-2"
                  href={pathname}
                  locale={"ar"}
                >
                  <Image
                    src={arabicImg}
                    width={25.83}
                    height={20}
                    alt="Arabic"
                    className="w-[26px] h-5"
                  />
                  <p className="text-white text-[15px] font-Regular">العربية</p>
                </Link>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
        <div className="flex-1 xl:flex-nowrap flex-wrap  flex justify-between gap-x-6 gap-y-10 lg:gap-16">
          {footerData.map((itemFooter, i) => {
            return (
              <div key={i}>
                <h3 className="text-white  mb-6">{itemFooter.title}</h3>
                <ul className="flex flex-col gap-2">
                  {itemFooter.links.map((link, j) => {
                    return (
                      <li className="flex items-center gap-2" key={j}>
                        <Link
                          href={link.url}
                          className="text-sm md:text-base text-[#D3D4DC]/70 duration-200 hover:text-[#D3D4DC] font-Regular"
                        >
                          {link.label}
                        </Link>
                        {link.isNew && (
                          <p className="bg-green px-[10px] py-1 rounded-md flex items-center justify-center text-white text-[13px] font-Regular">
                            New
                          </p>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          <div className="w-full lg:w-auto mx-auto lg:mx-0">
            <h3 className="text-white  mb-6 text-center lg:text-start">
              Download our app
            </h3>
            <ul className="flex flex-col items-center lg:items-start gap-4">
              {footerDataButtons.map((itemButton, i) => {
                return (
                  <li className="flex items-center gap-2" key={i}>
                    <Link
                      href={itemButton.url}
                      className=" bg-[#012928] w-[220px] py-2 px-5 flex items-center gap-8 rounded-md"
                    >
                      {itemButton.icon}
                      <div>
                        <p className="text-[#D3D4DC]/70 text-[13px] font-Regular">
                          Download on the
                        </p>
                        <p className="text-[#D3D4DC] text-base">
                          {" "}
                          {itemButton.label}
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterGuest;
