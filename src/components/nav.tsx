"use client";
import LangIcon from "@/src/assets/icons/lang";
import React, { useEffect, useMemo, useState } from "react";
import MenuProfile from "./menuProfile";
import { useLocale } from "next-intl";
import { Link, usePathname } from "../navigation";
import PlusIcon from "../assets/icons/plus";
import Image from "next/image";
import man from "@/src/assets/images/user.png";
import ROUTES from "../routes";
import MenuIcon from "../assets/icons/menu";
import { useMediaQuery } from "@mantine/hooks";
import LogOutMenuIcon from "../assets/icons/logOutMenu";
import { useParams } from "next/navigation";
import HomepageIcon from "../assets/icons/Homepage";
import DashboardIcon from "../assets/icons/Dashboard";
import ListingsIcon from "../assets/icons/Listings";
import BookingsIcon from "../assets/icons/Bookings";
import WishlistIcon from "../assets/icons/Wishlist";
import CalendarIcon from "../assets/icons/Calendar";
import BillingIcon from "../assets/icons/Billing";
import SupportIcon from "../assets/icons/Support";
import InboxIcon from "../assets/icons/Inbox";
import Notifications from "./Notifications";
import LogoOkoRent from "../assets/icons/logo";
import AdsIcon from "../assets/icons/ads";
import { ScrollArea } from "@mantine/core";
import { useToken } from "../hooks/use-token";
import { clearToken } from "../lib/token";
interface NavProps {
  linkLogo: string;
}
function Nav({ linkLogo = "#" }: NavProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken } = useToken();
  const params = useParams();

  const handleLogout = () => {
    setToken({}); // Clear token from the state
    clearToken(); // Clear token from storage
  };

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
        icon: <HomepageIcon />,
        url: ROUTES.USER.HOMEPAGE,
        active: pathname === ROUTES.USER.HOMEPAGE,
      },

      {
        id: 2,
        name: "Dashboard",
        icon: <DashboardIcon />,
        url: ROUTES.USER.DASHBOARD,
        active: pathname.includes(ROUTES.USER.DASHBOARD),
      },
      {
        id: 3,
        name: "My Listings",
        icon: <ListingsIcon />,
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
        icon: <BookingsIcon />,
        url: ROUTES.USER.BOOKINGS,
        active: pathname === ROUTES.USER.BOOKINGS,
      },

      {
        id: 5,
        name: "Inbox",
        icon: <InboxIcon />,
        url: ROUTES.USER.INBOX,
        active: pathname === ROUTES.USER.INBOX,
      },
      {
        id: 7,
        name: "Wishlist",
        icon: <WishlistIcon />,
        url: ROUTES.USER.WISHLIST,
        active: pathname === ROUTES.USER.WISHLIST,
      },
      {
        id: 8,
        name: "Calendar",
        icon: <CalendarIcon />,
        url: ROUTES.USER.CALENDAR,
        active: pathname === ROUTES.USER.CALENDAR,
      },
      {
        id: 9,
        name: "Billing",
        icon: <BillingIcon />,
        url: ROUTES.USER.BILLING,
        active: pathname === ROUTES.USER.BILLING,
      },
      {
        id: 10,
        name: "Support",
        icon: <SupportIcon />,
        url: ROUTES.USER.SUPPORT,
        active: pathname === ROUTES.USER.SUPPORT,
      },
     
      {
        id: 12,
        name: "Ads",
        icon: <AdsIcon className="w-5 h-auto" />,
        url: ROUTES.USER.ADS,
        active: pathname === ROUTES.USER.ADS,
      },
    ],
    [pathname]
  );
  return (
    <nav className="px-4 lg:px-16 py-5 lg:py-7 flex items-center justify-between gap-4 max-w-[1600px] mx-auto ">
      <Link href={linkLogo}>
        <LogoOkoRent className="md:w-[135px] w-[98px] h-auto" />
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
        <Notifications />
        <Link
          href={pathname}
          locale={locale === "en" ? "ar" : "en"}
          className="w-10 h-10 cursor-pointer duration-300 hover:shadow-lg rounded-[50%] bg-[#E5F1FB] p-2 relative flex items-center justify-center"
        >
          <LangIcon />
        </Link>
        <MenuProfile />
      </div>
      <div className="flex gap-3  mdl:hidden items-center">
        <Notifications />
        <div
          className=" cursor-pointer duration-300 hover:shadow-md"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <MenuIcon />
        </div>
      </div>

      {isMobile && (
        <div
          className={`h-screen overflow-hidden w-screen z-50 start-0  duration-300   fixed top-0  ${
            showMenu ? "opacity-100" : " opacity-0 invisible"
          }`}
        >
          <div
            className={` bg-white hideScroll overflow-y-auto z-50 rounded-e-2xl duration-300   top-0  absolute h-screen w-[350px] max-w-[75%] ${
              showMenu ? "start-0" : "-start-[calc(100%+50px)]"
            }`}
          >
            <div>
              <div
                className="h-24 w-full ps-11 pb-5 flex items-end mb-2  border-b border-grayLight"
                onClick={() => setShowMenu(false)}
              >
                <Link
                  href={ROUTES.USER.PROFILE}
                  className="flex items-center gap-2 "
                >
                  <Image
                    src={man}
                    width={44}
                    height={44}
                    className=" rounded-full size-11 object-cover object-top"
                    alt="user"
                  />
                  <h3 className="text-base font-Medium">
                    {token?.userFirstName || "User Name"}
                  </h3>
                </Link>
              </div>
              <ScrollArea
                className="h-[calc(100vh-130px)] me-1"
                classNames={{
                  scrollbar: "bg-grayMedium/15 rounded-2xl",
                  thumb: "bg-green",
                }}
              >
                <div className="px-5 pt-4  ">
                  <div className="flex flex-col gap-1 ">
                    {LinksNav.map((link, i) => {
                      return (
                        <div key={i} onClick={() => setShowMenu(false)}>
                          <Link
                            href={link.url}
                            className={`text-base py- ${
                              link.active
                                ? " before:bg-green !bg-green/15 duration-300 hover:bg-green/10 "
                                : " bg-transparent"
                            } rounded-lg min-h-[60px] relative  before:w-[6px] before:content-[''] hover:bg-green/10  before:h-12 before:-start-5 before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-e-lg  flex items-center gap-5 px-8 text-nowrap font-SemiBold duration-200 text-black/80 hover:text-black`}
                          >
                            {link.icon}
                            {link.name}
                          </Link>
                        </div>
                      );
                    })}
                    <div onClick={() => setShowMenu(false)}>
                      <Link
                        href={pathname}
                        locale={locale === "en" ? "ar" : "en"}
                        className={`text-base py- ${" bg-transparent"} rounded-lg min-h-[60px] relative  before:w-[6px] before:content-[''] hover:bg-green/5  before:h-12 before:-start-5 before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-e-lg  flex items-center gap-5 px-8 text-nowrap font-SemiBold duration-200 text-black/80 hover:text-black`}
                      >
                        <LangIcon />
                        Language
                      </Link>
                    </div>
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
                  <Link
                    href={ROUTES.GUEST.HOMEPAGE}
                    onClick={() => handleLogout()}
                    className="flex items-center gap-4 min-h-8 mb-4 cursor-pointer ps-8 mt-9"
                  >
                    <LogOutMenuIcon />
                    <p className="text-[#E31B1B] text-base">Log out</p>
                  </Link>
                </div>
              </ScrollArea>
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
