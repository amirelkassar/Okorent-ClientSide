"use client";
import LangIcon from "@/src/assets/icons/lang";
import NotificationIcon from "@/src/assets/icons/notfication";
import React, { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import Image from "next/image";
import logo from "@/src/assets/images/logo.png";
import { useMediaQuery } from "@mantine/hooks";
import { Link, usePathname } from "@/src/navigation";
import ROUTES from "@/src/routes";
import PlusIcon from "@/src/assets/icons/plus";
import MenuProfile from "@/src/components/menuProfile";

interface NavProps {
  linkLogo: string;
}
function Nav({ linkLogo = "#" }: NavProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const isMobile = useMediaQuery("(max-width: 768px)");
  useEffect(() => {
    if (isMobile) {
      showMenu ? setShowMenu(false) : null;
    } else {
      setShowMenu(false);
    }
  }, [isMobile]);

  return (
    <nav className="px-4 lg:px-16 py-5 lg:py-8 flex items-center justify-between gap-4">
      <Link href={linkLogo}>
        <Image
          src={logo}
          alt="logo"
          width={135}
          height={45}
          className="md:w-[135px] w-[98px] h-auto"
        />
      </Link>
      <div className="hidden mdl:flex items-center gap-3">
        <Link
          href={ROUTES.ADMIN.LISTINGSADD}
          className={
            "gap-1 h-10 bg-green px-3 border-4  border-[#a9c788] hover:border-green duration-500 text-medium rounded-xl text-white flex items-center justify-center "
          }
        >
          <PlusIcon className={"w-[16px] h-auto"} />
          <p className="text-base">List an item</p>
        </Link>
        <div className="w-10 h-10 rounded-[50%] bg-[#E5F1FB] p-2 relative flex items-center justify-center  cursor-pointer duration-300 hover:shadow-lg">
          <p className="text-white text-[8px] flex items-center border border-[#E5F1FB] justify-center bg-red min-w-[12px] w-fit h-[12px] aspect-[1/1] rounded-[50%] p-[2px] absolute top-2 right-2">
            1
          </p>
          <NotificationIcon />
        </div>
        <Link
          href={pathname}
          locale={locale === "en" ? "ar" : "en"}
          className="w-10 h-10 cursor-pointer duration-300 hover:shadow-lg rounded-[50%] bg-[#E5F1FB] p-2 relative flex items-center justify-center"
        >
          <LangIcon />
        </Link>
        <MenuProfile />
      </div>
    </nav>
  );
}

export default Nav;
