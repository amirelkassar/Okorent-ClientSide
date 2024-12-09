"use client";
import { Link, usePathname } from "@/src/navigation";
import ROUTES from "@/src/routes";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import logo from "@/src/assets/images/logo.png";
import LinkGreen from "@/src/components/linkGreen";
import LangIcon from "@/src/assets/icons/lang";
import { useLocale } from "next-intl";
import { useParams, useSearchParams } from "next/navigation";
import MenuIcon from "@/src/assets/icons/menu";
import { useMediaQuery } from "@mantine/hooks";
import HomepageIcon from "@/src/assets/icons/Homepage";
import SupportIcon from "@/src/assets/icons/Support";
import ClientsIcon from "@/src/assets/icons/Clients";
import PricingIcon from "@/src/assets/icons/pricing";
import HowIcon from "@/src/assets/icons/how";
import LoginIcon from "@/src/assets/icons/login";

function NavLinks() {
  const locale = useLocale();
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const LinksNav = useMemo(
    () => [
      {
        id: 1,
        name: "Home",
        url: ROUTES.GUEST.HOMEPAGE,
        icon: <HomepageIcon />,
        active:
          pathname === ROUTES.GUEST.HOMEPAGE ||
          pathname + `?category=${searchParams.get("category")}` ===
            ROUTES.GUEST.PRODUCTS(searchParams.get("category")) ||
          pathname === ROUTES.GUEST.PRODUCTSDETAILS(params.productID),
      },

      {
        id: 3,
        name: "Who we are",
        icon: <ClientsIcon />,
        url: ROUTES.GUEST.WHOWEARE,
        active: pathname === ROUTES.GUEST.WHOWEARE,
      },
      {
        id: 4,
        name: "How it works",
        icon: <HowIcon />,
        url: ROUTES.GUEST.HOWITWORKS,
        active: pathname === ROUTES.GUEST.HOWITWORKS,
      },
      {
        id: 5,
        name: "Pricing",
        icon: <PricingIcon />,
        url: ROUTES.GUEST.PRICING,
        active: pathname === ROUTES.GUEST.PRICING,
      },
      {
        id: 6,
        name: "Contact Us",
        icon: <SupportIcon />,
        url: ROUTES.GUEST.CONTACTUS,
        active: pathname === ROUTES.GUEST.CONTACTUS,
      },
    ],
    [pathname]
  );

  useEffect(() => {
    if (isMobile) {
      showMenu ? setShowMenu(false) : null;
    } else {
      setShowMenu(false);
    }
  }, [isMobile]);
  return (
    <nav className="py-7 px-4 relative z-30">
      <div className=" mx-auto gap-4   flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="logo"
            width={135}
            height={45}
            className="md:w-[135px] w-[98px] h-auto"
          />
        </Link>
        <div className=" lg:hidden flex items-center gap-5">
          <LinkGreen
            href={ROUTES.AUTH.SIGNUP}
            className="h-10  !px-5 text-sm mdl:text-base"
          >
            Signup
          </LinkGreen>
          <div
            className=" cursor-pointer duration-300 hover:shadow-md"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <MenuIcon />
          </div>
        </div>
        <div className=" hidden lg:flex items-center gap-6 xl:gap-11">
          {/* Map through the links array to render each link */}
          {LinksNav.map((link, i) => (
            <Link
              key={i}
              href={link.url}
              className={`${
                link.active
                  ? "!border-green text-black "
                  : "border-transparent text-black/80"
              }  font-Bold border-b-2  hover:text-black xl:text-base text-sm duration-200`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className=" hidden lg:flex items-center gap-5 xl:gap-8">
          <Link
            href={pathname}
            locale={locale === "en" ? "ar" : "en"}
            className="w-10 h-10 cursor-pointer duration-300 hover:shadow-lg rounded-[50%] bg-[#E5F1FB] p-2 relative flex items-center justify-center"
          >
            <LangIcon />
          </Link>
          <Link href={ROUTES.AUTH.LOGIN} className="text-base font-SemiBold">
            Login
          </Link>

          <LinkGreen
            href={ROUTES.AUTH.SIGNUP}
            className="h-10 w-fit xl:w-[140px] text-base"
          >
            Signup
          </LinkGreen>
        </div>
      </div>
      {isMobile && (
        <div
          className={`h-screen overflow-hidden w-screen z-50 start-0  duration-300   fixed top-0  ${
            showMenu ? "opacity-100" : " opacity-0 invisible"
          }`}
        >
          <div
            className={` bg-white  hideScroll overflow-y-auto !z-50 rounded-e-2xl duration-300   top-0  absolute h-screen w-[350px] max-w-[75%] ${
              showMenu ? "start-0" : "-start-[calc(100%+50px)]"
            }`}
          >
            <div className="px-5 z-50 bg-white relative">
              <div className="flex flex-col gap-1 mt-8">
                {LinksNav.map((link, i) => {
                  return (
                    <div key={i} onClick={() => setShowMenu(false)}>
                      <Link
                        href={link.url}
                        className={`text-base  ${
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
                    href={pathname}
                    locale={locale === "en" ? "ar" : "en"}
                    className={`text-base   bg-transparent rounded-lg min-h-[60px] relative  before:w-[6px] before:content-[''] hover:bg-green/5  before:h-12 before:-start-5 before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-e-lg  flex items-center gap-5 px-8 text-nowrap font-SemiBold duration-200 text-black/80 hover:text-black`}
                  >
                    <LangIcon />
                    Language
                  </Link>
                </div>
                <div onClick={() => setShowMenu(false)}>
                  <Link
                    href={ROUTES.AUTH.LOGIN}
                    className={`text-base text-blue   bg-transparent rounded-lg min-h-[60px] relative  before:w-[6px] before:content-[''] hover:bg-green/5  before:h-12 before:-start-5 before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-e-lg  flex items-center gap-5 px-8 text-nowrap font-Bold duration-200 `}
                  >
                    <LoginIcon />
                    Log in
                  </Link>
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
export default NavLinks;
