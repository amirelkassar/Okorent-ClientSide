"use client";
import LangIcon from "@/src/assets/icons/lang";
import NotificationIcon from "@/src/assets/icons/notfication";
import React, { useEffect, useMemo, useState } from "react";
import { useLocale } from "next-intl";
import Image from "next/image";
import logo from "@/src/assets/images/logo.png";
import { useMediaQuery } from "@mantine/hooks";
import { Link, usePathname } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { useParams, useRouter } from "next/navigation";
import MenuIcon from "@/src/assets/icons/menu";
import LogOutMenuIcon from "@/src/assets/icons/logOutMenu";
import DashboardIcon from "@/src/assets/icons/Dashboard";
import ListingsIcon from "@/src/assets/icons/Listings";
import SupportIcon from "@/src/assets/icons/Support";
import BookingsIcon from "@/src/assets/icons/Bookings";
import CalendarIcon from "@/src/assets/icons/Calendar";
import InboxIcon from "@/src/assets/icons/Inbox";
import HomepageIcon from "@/src/assets/icons/Homepage";
import man from "@/src/assets/images/user.png";
import ClientsIcon from "@/src/assets/icons/Clients";
import BillingIcon from "@/src/assets/icons/Billing";
import NotificationsIcon from "@/src/assets/icons/Notifications";
import MembershipsIcon from "@/src/assets/icons/memberships";
import MasterDataIcon from "@/src/assets/icons/masterData";

interface NavProps {
  linkLogo: string;
}
function Nav({ linkLogo = "#" }: NavProps) {
  const path = usePathname();
  const params = useParams();
  const router = useRouter();
  const locale = useLocale();
  const [showMenu, setShowMenu] = useState(false);

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
        name: "Dashboard",
        icon: <DashboardIcon />,
        url: ROUTES.ADMIN.DASHBOARD,
        active: path === ROUTES.ADMIN.DASHBOARD,
      },
      {
        id: 2,
        name: "Accounts",
        url: ROUTES.ADMIN.ACCOUNTS,
        icon: <ClientsIcon />,
        active: path.includes(ROUTES.ADMIN.ACCOUNTS),
        activeDetails: params.accountId
          ? "/ Details"
          : path === ROUTES.ADMIN.ACCOUNTSLISTDETAILS(params.listID)
          ? "/ Listing Details"
          : path === ROUTES.ADMIN.ACCOUNTSLISTDETAILSEDIT(params.listID)
          ? "/ Edit Listing "
          : null,
      },
      {
        id: 3,
        name: "Listings",
        url: ROUTES.ADMIN.LISTINGS,
        icon: <ListingsIcon />,
        active:
          path === ROUTES.ADMIN.LISTINGS ||
          path === ROUTES.ADMIN.LISTINGSDETAILS(params.productID) ||
          path === ROUTES.ADMIN.LISTINGSDETAILSEdit(params.productID) ||
          path === ROUTES.ADMIN.LISTINGSADD,
      },
      {
        id: 4,
        name: "Support Inbox",
        url: ROUTES.ADMIN.SUPPORT,
        icon: <SupportIcon />,
        active: path === ROUTES.ADMIN.SUPPORT,
      },
      {
        id: 7,
        name: "Bookings",
        url: ROUTES.ADMIN.BOOKINGS,
        icon: <BookingsIcon />,
        active:
          path === ROUTES.ADMIN.BOOKINGS ||
          path === ROUTES.ADMIN.BOOKINGSDETAILS(params.bookingsId),
      },
      {
        id: 8,
        name: "Invoices",
        url: ROUTES.ADMIN.INVOICES,
        icon: <BillingIcon className="w-5 h-auto" />,
        active: path === ROUTES.ADMIN.INVOICES,
      },
      {
        id: 9,
        name: "Inbox",
        url: ROUTES.ADMIN.INBOX,
        icon: <InboxIcon />,
        active: path === ROUTES.ADMIN.INBOX,
      },

      {
        id: 11,
        name: "Memberships",
        url: ROUTES.ADMIN.MEMBERSHIPS,
        icon: <MembershipsIcon />,
        active: path === ROUTES.ADMIN.MEMBERSHIPS,
      },
      {
        id: 12,
        name: "Master Data",
        icon: <MasterDataIcon />,
        url: ROUTES.ADMIN.MASTERDATA,
        active: path.includes(ROUTES.ADMIN.MASTERDATA),
      },
      {
        id: 13,
        name: "Notifications",
        icon: <NotificationsIcon />,
        url: ROUTES.USER.SUPPORT,
        active: path === ROUTES.ADMIN.SUPPORT,
      },
    ],
    [path]
  );
  return (
    <nav className="px-4 lg:px-16 py-5 lg:py-7 flex items-center justify-between gap-4 max-w-[1600px] mx-auto ">
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
        {/* <Link
          href={ROUTES.ADMIN.LISTINGSADD}
          className={
            "gap-1 h-10 bg-green px-3 border-4  border-[#a9c788] hover:border-green duration-500 text-medium rounded-xl text-white flex items-center justify-center "
          }
        >
          <PlusIcon className={"w-[16px] h-auto"} />
          <p className="text-base">List an item</p>
        </Link> */}
        <div className="w-10 h-10 rounded-[50%] bg-[#E5F1FB] p-2 relative flex items-center justify-center  cursor-pointer duration-300 hover:shadow-lg">
          <p className="text-white text-[8px] flex items-center border border-[#E5F1FB] justify-center bg-red min-w-[12px] w-fit h-[12px] aspect-[1/1] rounded-[50%] p-[2px] absolute top-2 right-2">
            1
          </p>
          <NotificationIcon />
        </div>
        <Link
          href={path}
          locale={locale === "en" ? "ar" : "en"}
          className="w-10 h-10 cursor-pointer duration-300 hover:shadow-lg rounded-[50%] bg-[#E5F1FB] p-2 relative flex items-center justify-center"
        >
          <LangIcon />
        </Link>
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
            className={` bg-white hideScroll overflow-y-auto z-50 rounded-e-2xl duration-300   top-0  absolute h-screen w-[350px] max-w-[75%] ${
              showMenu ? "start-0" : "-start-[calc(100%+50px)]"
            }`}
          >
            <div>
              <div className="px-5 border-t border-grayLight ">
                <div className="flex flex-col gap-1 mt-8">
                  {LinksNav.map((link, i) => {
                    return (
                      <div key={i} onClick={() => setShowMenu(false)}>
                        <Link
                          href={link.url}
                          className={`text-base py- ${
                            link.active
                              ? " before:bg-green !bg-green/15 hover:bg-green/15 "
                              : " bg-transparent"
                          } rounded-lg min-h-[60px] relative  before:w-[6px] before:content-[''] hover:bg-green/5  before:h-12 before:-start-5 before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-e-lg  flex items-center gap-5 px-8 text-nowrap font-SemiBold duration-200 text-black/80 hover:text-black`}
                        >
                          {link.icon}
                          {link.name}
                        </Link>
                      </div>
                    );
                  })}
                  <div onClick={() => setShowMenu(false)}>
                    <Link
                      href={path}
                      locale={locale === "en" ? "ar" : "en"}
                      className={`text-base py- ${" bg-transparent"} rounded-lg min-h-[60px] relative  before:w-[6px] before:content-[''] hover:bg-green/5  before:h-12 before:-start-5 before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-e-lg  flex items-center gap-5 px-8 text-nowrap font-SemiBold duration-200 text-black/80 hover:text-black`}
                    >
                      <LangIcon />
                      Language
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-4 min-h-8 mb-10 cursor-pointer ps-8 mt-11">
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
