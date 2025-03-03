"use client";
import DownIcon from "@/src/assets/icons/down";
import { Menu } from "@mantine/core";
import Image from "next/image";
import React, { useState } from "react";
import profile from "@/src/assets/images/Shape.png";
import { useLocale } from "next-intl";
import { useToken } from "@/src/hooks/use-token";
import { useDisclosure } from "@mantine/hooks";
import { GetMyProfile } from "@/src/hooks/queries/user/my-profile";
import { clearToken } from "@/src/lib/token";
import SwitchAvailable from "@/src/components/switchAvailable";
import ProfileIcon from "@/src/assets/icons/Profile";
import { Link, usePathname } from "@/src/navigation";
import ROUTES from "@/src/routes";
import SubscriptionIcon from "@/src/assets/icons/Subscription";
import AdsIcon from "@/src/assets/icons/ads";
import LocationIcon from "@/src/assets/icons/location";
import LogoutIcon from "@/src/assets/icons/Logout";
import ModalVacation from "@/src/components/modal-vacation";
import SettingsIcon from "@/src/assets/icons/Settings";

function MenuProfile() {
  const [openMenu, setOpened] = useState(false);
  const locale = useLocale();
  const { setToken } = useToken();
  const [opened, { open, close }] = useDisclosure(false);
  const { data } = GetMyProfile();
  const path = usePathname();

  const handleLogout = () => {
    setToken({}); // Clear token from the state
    clearToken(); // Clear token from storage
  };
  const menuItems = [
    {
      icon: <ProfileIcon />,
      text: "Profile",
      link: ROUTES.PREMIUM.PROFILE,
      active: path === ROUTES.PREMIUM.PROFILE,
    },
    {
      icon: <SubscriptionIcon />,
      text: "Wallet",
      link: ROUTES.PREMIUM.WALLET,
      active: path === ROUTES.PREMIUM.WALLET,
    },
    {
      icon: <p>%</p>,
      text: "Taxes",
      link: ROUTES.PREMIUM.TAXES,
      active: path === ROUTES.PREMIUM.TAXES,
    },
    {
      icon: <AdsIcon />,
      text: "Ads",
      link: ROUTES.PREMIUM.ADS,
      active: path === ROUTES.PREMIUM.ADS,
    },
    {
      icon: <SettingsIcon fill="#0F2A43" className="w-3 h-auto" />,
      text: "Settings",
      link: ROUTES.PREMIUM.WAREHOUSES,
      active: path === ROUTES.PREMIUM.WAREHOUSES,
    },
  ];
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
              src={data?.data?.userImage || profile}
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
          {menuItems.map((item, index) => (
            <Menu.Item
              key={index}
              className={`hover:bg-green/15 py-0 h-[30px] px-0 text-[14px] font-SemiBold rounded-lg ${
                item.active && "bg-green/15"
              } `}
            >
              <Link
                href={item.link}
                className="flex-1 w-full flex items-center gap-2 px-1 h-[30px]"
              >
                {item.icon}
                {item.text}
              </Link>
            </Menu.Item>
          ))}

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
