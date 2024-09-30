"use client";

import { Link, usePathname } from "@/src/navigation";
import ROUTES from "@/src/routes";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import logo from "@/src/assets/images/logo.png";
import LinkGreen from "@/src/components/linkGreen";
import LangIcon from "@/src/assets/icons/lang";
import { useLocale } from "next-intl";
import { useParams, useSearchParams } from "next/navigation";
import MenuIcon from "@/src/assets/icons/menu";

function NavLinks() {
  const locale = useLocale();
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();
  const [showMenu, setShowMenu] = useState(false);

  const LinksNav = useMemo(
    () => [
      {
        id: 1,
        name: "Home",
        url: ROUTES.GUEST.HOMEPAGE,
        active:
          pathname === ROUTES.GUEST.HOMEPAGE ||
          pathname + `?category=${searchParams.get("category")}` ===
            ROUTES.GUEST.PRODUCTS(searchParams.get("category")) ||
          pathname === ROUTES.GUEST.PRODUCTSDETAILS(params.productID),
      },

      {
        id: 2,
        name: "Add a listing",
        url: ROUTES.GUEST.ADDLISTING,
        active: pathname.includes(ROUTES.GUEST.ADDLISTING),
      },
      {
        id: 3,
        name: "Who we are",
        url: ROUTES.GUEST.WHOWEARE,
        active: pathname === ROUTES.GUEST.WHOWEARE,
      },
      {
        id: 4,
        name: "How it works",
        url: ROUTES.GUEST.HOWITWORKS,
        active: pathname === ROUTES.GUEST.HOWITWORKS,
      },
      {
        id: 5,
        name: "Pricing",
        url: ROUTES.GUEST.PRICING,
        active: pathname === ROUTES.GUEST.PRICING,
      },
      {
        id: 6,
        name: "Contact Us",
        url: ROUTES.GUEST.CONTACTUS,
        active: pathname === ROUTES.GUEST.CONTACTUS,
      },
    ],
    [pathname]
  );
  return (
    <nav className="py-7 px-4 relative z-[2]">
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
            className="h-10  !px-7 text-base"
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
    </nav>
  );
}
export default NavLinks;
