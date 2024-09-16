"use client";
import { Link, usePathname } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { useParams } from "next/navigation";
import React, { useMemo } from "react";

function NavLinks() {
  const path = usePathname();
  const params = useParams();

  const LinksNav = useMemo(
    () => [
      {
        id: 1,
        name: "Dashboard",
        url: ROUTES.ADMIN.DASHBOARD,
        active: path === ROUTES.ADMIN.DASHBOARD,
      },
      {
        id: 2,
        name: "Accounts",
        url: ROUTES.ADMIN.ACCOUNTS,
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
        active: path === ROUTES.ADMIN.LISTINGS,
      },
      {
        id: 4,
        name: "Support Inbox",
        url: ROUTES.ADMIN.SUPPORT,
        active: path === ROUTES.ADMIN.SUPPORT,
      },
      {
        id: 5,
        name: "Lessors",
        url: ROUTES.ADMIN.LESSORS,
        active: path === ROUTES.ADMIN.LESSORS,
      },
      {
        id: 6,
        name: "Renters",
        url: ROUTES.ADMIN.RENTERS,
        active: path === ROUTES.ADMIN.RENTERS,
      },
      {
        id: 7,
        name: "Bookings",
        url: ROUTES.ADMIN.BOOKINGS,
        active: path === ROUTES.ADMIN.BOOKINGS,
      },
      {
        id: 8,
        name: "Reservations",
        url: ROUTES.ADMIN.RESERVATIONS,
        active: path === ROUTES.ADMIN.RESERVATIONS,
      },
      {
        id: 9,
        name: "Reports",
        url: ROUTES.ADMIN.REPORTS,
        active: path === ROUTES.ADMIN.REPORTS,
      },
      {
        id: 10,
        name: "Memberships",
        url: ROUTES.ADMIN.MEMBERSHIPS,
        active: path === ROUTES.ADMIN.MEMBERSHIPS,
      },
      {
        id: 11,
        name: "User Management",
        url: ROUTES.ADMIN.MANAGEMENT,
        active: path === ROUTES.ADMIN.MANAGEMENT,
      },
    ],
    [path]
  );

  return (
    <div className="mt-10 max-w-full ">
      <h1 className="mb-11 text-[32px] font-Bold">
        {LinksNav.find((item) => item.active)?.name}
        <span className="mx-3">
          {LinksNav.find((item) => item?.activeDetails)?.activeDetails}
        </span>
      </h1>
      <div className=" max-w-full overflow-x-auto overflow-y-hidden mb-12 pb-4">
        <ul className=" border-b-[1.5px] flex items-center gap-6 justify-between ">
          {LinksNav.map((link, i) => {
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
