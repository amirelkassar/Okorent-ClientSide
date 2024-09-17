"use client";
import LangIcon from "@/src/assets/icons/lang";
import NotificationIcon from "@/src/assets/icons/notfication";
import React, { useEffect, useMemo, useState } from "react";
import MenuProfile from "./menuProfile";
import { useLocale } from "next-intl";
import { Link, usePathname } from "../navigation";
import PlusIcon from "../assets/icons/plus";
import Image from "next/image";
import logo from "@/src/assets/images/logo.png";
import ROUTES from "../routes";
import MenuIcon from "../assets/icons/menu";
import { useMediaQuery } from "@mantine/hooks";
import LogOutMenuIcon from "../assets/icons/logOutMenu";
import { useParams } from "next/navigation";
import FilmIcon from "../assets/icons/film";
interface NavProps {
  linkLogo: string;
}
function Nav({ linkLogo = "#" }: NavProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  const params = useParams();

  const isMobile = useMediaQuery("(max-width: 768px)");
  useEffect(() => {
    if (isMobile) {
      showMenu ? setShowMenu(false) : null;
    } else {
      setShowMenu(false);
    }
  }, [isMobile]);

  const LinksNav = useMemo(
    () => [
      {
        id: 1,
        name: "Homepage",
        url: ROUTES.USER.HOMEPAGE,
        active: pathname === ROUTES.USER.HOMEPAGE,
      },

      {
        id: 2,
        name: "Dashboard",
        url: ROUTES.USER.DASHBOARD,
        active: pathname.includes(ROUTES.USER.DASHBOARD),
      },
      {
        id: 3,
        name: "My Listings",
        url: ROUTES.USER.LISTINGS,
        active: pathname.includes(ROUTES.USER.LISTINGS),
        activeDetails:
          pathname === ROUTES.USER.LISTINGSDETAILS(params.listID)
            ? "/  Item Details"
            : pathname === ROUTES.USER.LISTINGSEDIT(params.listID)
            ? "/ Edit Listing"
            : null,
      },
      {
        id: 4,
        name: "Bookings",
        url: ROUTES.USER.BOOKINGS,
        active: pathname === ROUTES.USER.BOOKINGS,
      },

      {
        id: 5,
        name: "Inbox",
        url: ROUTES.USER.INBOX,
        active: pathname === ROUTES.USER.INBOX,
      },
      {
        id: 6,
        name: "Clients",
        url: ROUTES.USER.CLIENTS,
        active: pathname === ROUTES.USER.CLIENTS,
      },
      {
        id: 7,
        name: "Wishlist",
        url: ROUTES.USER.WISHLIST,
        active: pathname === ROUTES.USER.WISHLIST,
      },
      {
        id: 8,
        name: "Calendar",
        url: ROUTES.USER.CALENDAR,
        active: pathname === ROUTES.USER.CALENDAR,
      },
      {
        id: 9,
        name: "Billing",
        url: ROUTES.USER.BILLING,
        active: pathname === ROUTES.USER.BILLING,
      },
      {
        id: 10,
        name: "Support",
        url: ROUTES.USER.SUPPORT,
        active: pathname === ROUTES.USER.SUPPORT,
      },
    ],
    [pathname]
  );
  return (
    <nav className="px-4 lg:px-16 py-5 lg:py-8 flex items-center justify-between gap-4">
      <Link href={linkLogo}>
        <Image src={logo} alt="logo" width={135} height={45} />
      </Link>
      <div className="hidden mdl:flex items-center gap-3">
        <Link
          href={ROUTES.USER.ADDLIST}
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
      <div
        className="block mdl:hidden cursor-pointer duration-300 hover:shadow-md"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <MenuIcon />
      </div>
      {isMobile && (
        <div
          className={`h-screen overflow-hidden w-screen z-50 start-0  duration-300   fixed top-0  ${
            showMenu ? "opacity-100" : " opacity-0 invisible"
          }`}
        >
          <div
            className={` bg-white z-50 rounded-e-2xl duration-300   top-0  absolute h-screen w-[350px] max-w-[75%] ${
              showMenu ? "start-0" : "-start-[calc(100%+50px)]"
            }`}
          >
            <div>
              <div className="h-20 w-full">

              </div>
              <div className="px-5 border-t border-grayLight ">
                <div className="flex flex-col gap-1 mt-8">
                  {LinksNav.map((link) => {
                    return (
                      <div>
                        <Link
                          href={link.url}
                          className="text-[16px] py-5 bg-green/15 rounded-xl min-h-[60px] flex items-center gap-6 px-8 text-nowrap font-SemiBold duration-200 text-black/80 hover:text-black"
                        >
                          <FilmIcon className={"w-auto h-5"} />
                          {link.name}
                        </Link>
                      </div>
                    );
                  })}
                </div>
                <Link
                  href={ROUTES.USER.ADDLIST}
                  className={
                    "gap-2 h-[54px] mt-9 bg-green px-3 border-4  border-[#a9c788] hover:border-green duration-500 text-medium rounded-xl text-white flex items-center justify-center "
                  }
                >
                  <PlusIcon className={"w-[16px] h-auto"} />
                  <p className="text-base">List an item</p>
                </Link>
                <div className="flex items-center gap-4 ps-8 mt-11">
                  <LogOutMenuIcon />
                  <p className="text-[#E31B1B] text-base">Log out</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={` top-0 start-0 absolute w-screen h-screen duration-300 cursor-pointer   bg-black opacity-50 z-10 `}
            onClick={() => setShowMenu(false)}
          ></div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
