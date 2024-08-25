"use client";
import DownIcon from "@/src/assets/icons/down";
import { Menu } from "@mantine/core";
import Image from "next/image";
import React, { useState } from "react";
import profile from "@/src/assets/images/Shape.png";
import ProfileIcon from "../assets/icons/Profile";
import LogoutIcon from "../assets/icons/Logout";
import SettingsIcon from "../assets/icons/Settings";
import SubscriptionIcon from "../assets/icons/Subscription";
function MenuProfile() {
  const [opened, setOpened] = useState(false);
  return (
    <Menu
      shadow="md"
      width={140}
      opened={opened}
      onChange={setOpened}
      classNames={{
        dropdown: "bg-[rgba(240,246,251,1)] border rounded-xl border-black",
      }}
    >
      <Menu.Target>
        <button className="px-[6px] py-[3px] w-fit rounded-xl border  border-black  flex items-center justify-between gap-3">
          <div className="flex items-center gap-1">
            <DownIcon className={` duration-300 ${opened && "rotate-180"}`} />
            <p className="text-[14px]">My Profile</p>
          </div>
          <Image
            src={profile}
            width={40}
            height={40}
            alt="profile"
            className="w-8 h-8 rounded-full"
          />
        </button>
      </Menu.Target>
      <Menu.Dropdown className="pt-3">
        <Menu.Item
          leftSection={<ProfileIcon />}
          className=" hover:bg-green/15 py-0 h-[30px] px-1 text-[14px] font-SemiBold rounded-lg"
        >
          Profile
        </Menu.Item>
        <Menu.Item
          leftSection={<SubscriptionIcon />}
          className=" hover:bg-green/15 py-0 h-[30px] px-1 text-[14px] font-SemiBold rounded-lg"
        >
          Subscription
        </Menu.Item>
        <Menu.Item
          leftSection={<SettingsIcon />}
          className=" hover:bg-green/15 py-0 h-[30px] px-1 text-[14px] font-SemiBold rounded-lg"
        >
          Settings
        </Menu.Item>
        <Menu.Item
          leftSection={<LogoutIcon />}
          className=" hover:bg-green/15 py-0 h-[30px] px-1 text-[14px] font-SemiBold rounded-lg"
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default MenuProfile;
