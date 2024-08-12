"use client";
import { Link, usePathname } from "@/src/navigation";
import ROUTES from "@/src/routes";
import React, { useMemo } from "react";

function NavLinks() {
  const path = usePathname();
  const LinksNav = useMemo(
    () => [
      {
        id: 1,
        name: "Homepage",
        url: ROUTES.USER.HOMEPAGE,
        active: path === ROUTES.USER.HOMEPAGE,
      },
      {
        id: 2,
        name: "Dashboard",
        url: ROUTES.USER.DASHBOARD,
        active: path.includes(ROUTES.USER.DASHBOARD),
      },
      {
        id: 3,
        name: "My Listings",
        url: ROUTES.USER.LISTINGS,
        active: path === ROUTES.USER.LISTINGS,
      },
      {
        id: 4,
        name: "Reservations",
        url: ROUTES.USER.RENTALS,
        active: path === ROUTES.USER.RENTALS,
      },
      {
        id: 5,
        name: "Requests",
        url: ROUTES.USER.REQUESTS,
        active: path === ROUTES.USER.REQUESTS,
      },
      {
        id: 6,
        name: "Inbox",
        url: ROUTES.USER.INBOX,
        active: path === ROUTES.USER.INBOX,
      },
      {
        id: 7,
        name: "Clients",
        url: ROUTES.USER.CLIENTS,
        active: path === ROUTES.USER.CLIENTS,
      },
      {
        id: 8,
        name: "Wishlist",
        url: ROUTES.USER.WISHLIST,
        active: path === ROUTES.USER.WISHLIST,
      },
      {
        id: 9,
        name: "Calendar",
        url: ROUTES.USER.CALENDAR,
        active: path === ROUTES.USER.CALENDAR,
      },
      {
        id: 10,
        name: "Billing",
        url: ROUTES.USER.BILLING,
        active: path === ROUTES.USER.BILLING,
      },
      {
        id: 11,
        name: "Support",
        url: ROUTES.USER.SUPPORT,
        active: path === ROUTES.USER.SUPPORT,
      },
    ],
    [path]
  );
  

  return (
    <div className="mt-10 max-w-full ">
      <h1 className="mb-11 text-[32px] font-Bold">
        {LinksNav.find((item) => item.active)?.name}
        
      </h1>
      <div className=" max-w-full overflow-x-auto overflow-y-hidden mb-12 pb-4">
        <ul className=" border-b-[1.5px] flex items-center gap-6 justify-between ">
          {LinksNav.map((link) => {
            return (
              <li
                key={link.id}
                className={` pb-[14px] -mb-[2px] ${
                  link.active && "border-b-[3px] border-green"
                } `}
              >
                <Link
                  href={link.url}
                  className="text-[16px] text-nowrap font-SemiBold duration-200 text-black/80 hover:text-black"
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default NavLinks;
