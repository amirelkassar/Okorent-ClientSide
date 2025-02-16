"use client";
import DownIcon from "@/src/assets/icons/down";
import { Menu } from "@mantine/core";
import Image from "next/image";
import React, { useState } from "react";
import profile from "@/src/assets/images/Shape.png";
import ProfileIcon from "../assets/icons/Profile";
import LogoutIcon from "../assets/icons/Logout";
import SubscriptionIcon from "../assets/icons/Subscription";
import { Link } from "../navigation";
import ROUTES from "../routes";
import SwitchAvailable from "./switchAvailable";
import AdsIcon from "../assets/icons/ads";
import { clearToken } from "../lib/token";
import { useLocale } from "next-intl";
import { useToken } from "../hooks/use-token";
import { useDisclosure } from "@mantine/hooks";
import ModalVacation from "./modal-vacation";
import LocationIcon from "../assets/icons/location";
import { GetMyProfile } from "../hooks/queries/user/my-profile";
function MenuProfile() {
  const [openMenu, setOpened] = useState(false);
  const locale = useLocale();
  const { setToken } = useToken();
  const [opened, { open, close }] = useDisclosure(false);
  const { data } = GetMyProfile();

  
  const handleLogout = () => {
    setToken({}); // Clear token from the state
    clearToken(); // Clear token from storage
  };

  return (
    <>
      <Menu
        shadow="md"
        width={140}
        opened={openMenu}
        onChange={setOpened}
        classNames={{
          dropdown: "bg-[rgba(240,246,251,1)] border rounded-xl border-black",
        }}
      >
        <Menu.Target>
          <button className="px-[6px] py-[3px] w-fit rounded-xl border  border-black  flex items-center justify-between gap-3">
            <div className="flex items-center gap-1">
              <DownIcon
                className={` duration-300 ${openMenu && "rotate-180"}`}
              />
              <p className="text-[14px]">My Profile</p>
            </div>
            <Image
              src={data?.data?.userImage||profile}
              width={40}
              height={40}
              alt="profile"
              className="w-8 h-8 rounded-full object-cover object-top"
            />
          </button>
        </Menu.Target>
        <Menu.Dropdown className="pt-3 !w-[172px] ">
          <Menu.Item
            closeMenuOnClick={false}
            className="  py-0 h-[30px] px-1 !mb-2 text-[14px] font-SemiBold rounded-lg"
          >
            <SwitchAvailable open={open} vacation={data?.data?.isVacationEnd} />
          </Menu.Item>
          <Menu.Item
            leftSection={<ProfileIcon />}
            className=" hover:bg-green/15 py-0 h-[30px] px-1 text-[14px] font-SemiBold rounded-lg"
          >
            <Link className="flex-1 w-full  block" href={ROUTES.USER.PROFILE}>
              Profile
            </Link>
          </Menu.Item>
          <Menu.Item
            leftSection={<SubscriptionIcon />}
            className=" hover:bg-green/15 py-0 h-[30px] px-1 text-[14px] font-SemiBold rounded-lg"
          >
            <Link className="flex-1 w-full  block" href={ROUTES.USER.WALLET}>
              Wallet
            </Link>
          </Menu.Item>
          <Menu.Item
            leftSection={<AdsIcon />}
            className=" hover:bg-green/15 py-0 h-[30px] px-1 text-[14px] font-SemiBold rounded-lg"
          >
            <Link className="flex-1 w-full  block" href={ROUTES.USER.ADS}>
              Ads
            </Link>
          </Menu.Item>
          <Menu.Item
            leftSection={<LocationIcon fill="#0F2A43" className="w-3 h-auto" />}
            className=" hover:bg-green/15 py-0 h-[30px] px-1 text-[14px] font-SemiBold rounded-lg"
          >
            <Link
              className="flex-1 w-full  block"
              href={ROUTES.USER.WAREHOUSES}
            >
              Warehouses
            </Link>
          </Menu.Item>
          <Menu.Item
            onClick={handleLogout}
            component="a"
            href={`/${locale}`}
            leftSection={<LogoutIcon />}
            className=" hover:bg-green/15 py-0 h-[30px] px-1 text-[14px] font-SemiBold rounded-lg"
          >
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <ModalVacation opened={opened} close={close} />
    </>
  );
}

export default MenuProfile;
