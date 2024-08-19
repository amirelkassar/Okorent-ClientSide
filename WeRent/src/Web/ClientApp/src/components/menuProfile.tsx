'use client'
import DownIcon from "@/src/assets/icons/down";
import { Menu } from "@mantine/core";
import Image from "next/image";
import React, { useState } from "react";
import profile from "@/src/assets/images/Shape.png";
function MenuProfile() {
    const [opened, setOpened] = useState(false);
  return (
    <Menu shadow="md" width={140} opened={opened} onChange={setOpened} classNames={{dropdown:'bg-[#e0ede2]'}}>
      <Menu.Target>
        <button className="px-[6px] py-[3px] w-fit rounded-xl border border-black flex items-center justify-between gap-3">
          <div className="flex items-center gap-1">
            <DownIcon className={` duration-300 ${opened&&"rotate-180"}`}/>
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
      <Menu.Dropdown>
        <Menu.Item>Profile</Menu.Item>
        <Menu.Item>Adress</Menu.Item>
        <Menu.Item>Settings</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default MenuProfile;
