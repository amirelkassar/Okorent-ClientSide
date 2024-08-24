"use client";
import BackIcon from "@/src/assets/icons/back";
import { Link, usePathname } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { useParams, useRouter } from "next/navigation";
import React, { useMemo } from "react";

function NavLinks() {
  const path = usePathname();
  const params = useParams();
  const router = useRouter();
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
        active: path.includes(ROUTES.USER.LISTINGS),
        activeDetails:
          path === ROUTES.USER.LISTINGSDETAILS(params.listID)
            ? "/  Item Details"
            : path === ROUTES.USER.LISTINGSEDIT(params.listID)
            ? "/ Edit Listing"
            : null,
      },
      {
        id: 4,
        name: "Bookings",
        url: ROUTES.USER.BOOKINGS,
        active: path === ROUTES.USER.BOOKINGS,
      },

      {
        id: 5,
        name: "Inbox",
        url: ROUTES.USER.INBOX,
        active: path === ROUTES.USER.INBOX,
      },
      {
        id: 6,
        name: "Clients",
        url: ROUTES.USER.CLIENTS,
        active: path === ROUTES.USER.CLIENTS,
      },
      {
        id: 7,
        name: "Wishlist",
        url: ROUTES.USER.WISHLIST,
        active: path === ROUTES.USER.WISHLIST,
      },
      {
        id: 8,
        name: "Calendar",
        url: ROUTES.USER.CALENDAR,
        active: path === ROUTES.USER.CALENDAR,
      },
      {
        id: 9,
        name: "Billing",
        url: ROUTES.USER.BILLING,
        active: path === ROUTES.USER.BILLING,
      },
      {
        id: 10,
        name: "Support",
        url: ROUTES.USER.SUPPORT,
        active: path === ROUTES.USER.SUPPORT,
      },
    ],
    [path]
  );
  const newPath = useMemo(
    () => [
      {
        id: 10,
        name: "Product Details ",
        url: ROUTES.USER.PRODUCTDETAILS(params.productID),
        active: path === ROUTES.USER.PRODUCTDETAILS(params.productID),
      },
    ],
    []
  );
  return (
    <div className="mt-10 max-w-full ">
      <h1 className="mb-11 text-[32px] font-Bold">
        {LinksNav.find((item) => item.active)?.name}
        {path === ROUTES.USER.ADDLIST && "List an item"}
        <span className="mx-3">
          {LinksNav.find((item) => item?.activeDetails)?.activeDetails}
        </span>
      </h1>
      {newPath.find((item) => item.active) && (
        <div className="flex mb-11  items-center gap-3">
          <button
            className=" size-5"
            onClick={() => {
              router.back();
            }}
          >
            <BackIcon className={'w-full h-full'}/>
          </button>
          <h1 className="text-[32px] font-Bold">
            {newPath.find((item) => item.active)?.name}
          </h1>
        </div>
      )}

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
