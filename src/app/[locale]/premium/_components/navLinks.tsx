"use client";
import BackIcon from "@/src/assets/icons/back";
import { Link, usePathname } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useMemo } from "react";

function NavLinks() {
  const path = usePathname();
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();

  const LinksNav = useMemo(
    () => [
      {
        id: 1,
        name: "Homepage",
        url: ROUTES.PREMIUM.HOMEPAGE,
        active:
          path === ROUTES.PREMIUM.HOMEPAGE ||
          path + `?category=${searchParams.get("category")}` ===
            ROUTES.PREMIUM.CATEGORIES(searchParams.get("category")),
      },

      {
        id: 2,
        name: "Dashboard",
        url: ROUTES.PREMIUM.DASHBOARD,
        active: path.includes(ROUTES.PREMIUM.DASHBOARD),
      },
      {
        id: 3,
        name: "My Listings",
        url: ROUTES.PREMIUM.LISTINGS,
        active: path.includes(ROUTES.PREMIUM.LISTINGS),
        activeDetails:
          path === ROUTES.PREMIUM.LISTINGSDETAILS(params.listID)
            ? "/  Item Details"
            : path === ROUTES.PREMIUM.LISTINGSEDIT(params.listID)
            ? "/ Edit Listing"
            : null,
      },
      {
        id: 4,
        name: "Bookings",
        url: ROUTES.PREMIUM.BOOKINGS,
        active:
          path === ROUTES.PREMIUM.BOOKINGS ||
          path === ROUTES.PREMIUM.BOOKINGSID(params.BookingID) ||
          path === ROUTES.PREMIUM.ORDERID(params.orderId),
      },

      {
        id: 5,
        name: "Inbox",
        url: ROUTES.PREMIUM.INBOX,
        active: path === ROUTES.PREMIUM.INBOX,
      },
      {
        id: 6,
        name: "Clients",
        url: ROUTES.PREMIUM.CLIENTS,
        active: path === ROUTES.PREMIUM.CLIENTS,
      },
      {
        id: 7,
        name: "Wishlist",
        url: ROUTES.PREMIUM.WISHLIST,
        active: path === ROUTES.PREMIUM.WISHLIST,
      },
      {
        id: 8,
        name: "Calendar",
        url: ROUTES.PREMIUM.CALENDAR,
        active: path === ROUTES.PREMIUM.CALENDAR,
      },
      {
        id: 9,
        name: "Billing",
        url: ROUTES.PREMIUM.BILLING,
        active: path === ROUTES.PREMIUM.BILLING,
      },
      {
        id: 10,
        name: "Support",
        url: ROUTES.PREMIUM.SUPPORT,
        active:
          path === ROUTES.PREMIUM.SUPPORT ||
          path === ROUTES.PREMIUM.SUPPORTHISTORY ||
          path === ROUTES.PREMIUM.SUPPORTFAQ ||
          path === ROUTES.PREMIUM.SUPPORTCONTACT,
      },
    ],
    [path]
  );
  const newPath = useMemo(
    () => [
      {
        id: 0,
        name: `Homepage / ${searchParams.get("category") || "Products"}`,
        url: ROUTES.PREMIUM.CATEGORIES(searchParams.get("category")),
        active:
          path + `?category=${searchParams.get("category")}` ===
          ROUTES.PREMIUM.CATEGORIES(searchParams.get("category")),
      },
      {
        id: 1,
        name: `Bookings / ${searchParams
          .get("statusTitle")
          ?.toString()
          .split("-")
          .join("  ")}`,
        url: ROUTES.PREMIUM.BOOKINGS,
        active:
          path === ROUTES.PREMIUM.BOOKINGSID(params.BookingID) &&
          path + "?checkout=true" !==
            ROUTES.PREMIUM.PRODUCTDETAILSCHECKOUT(params.productID),
      },

      {
        id: 3,
        name: "Product Details ",
        url: ROUTES.PREMIUM.PRODUCTDETAILS(params.productID),
        active: path === ROUTES.PREMIUM.PRODUCTDETAILS(params.productID),
      },
      {
        id: 4,
        name: "Subscription",
        url: ROUTES.PREMIUM.SUBSCRIPTION,
        active: path === ROUTES.PREMIUM.SUBSCRIPTION,
      },
      {
        id: 5,
        name: "My Profile",
        url: ROUTES.PREMIUM.PROFILE,
        active: path === ROUTES.PREMIUM.PROFILE,
      },
      {
        id: 6,
        name: "Wallet",
        url: ROUTES.PREMIUM.WALLET,
        active: path === ROUTES.PREMIUM.WALLET,
      },
      {
        id: 7,
        name: `Order Details`,
        url: ROUTES.PREMIUM.BOOKINGS,
        active: path === ROUTES.PREMIUM.ORDERID(params.orderId),
      },
      {
        id: 8,
        name: `Checkout`,
        url: ROUTES.PREMIUM.PRODUCTDETAILS(params.productID),
        active:
          path + "?checkout=true" ===
          ROUTES.PREMIUM.PRODUCTDETAILSCHECKOUT(params.productID),
      },
      {
        id: 9,
        name: `Promot Listing`,
        url: ROUTES.PREMIUM.LISTINGSDETAILSADS(params.listID),
        active: path === ROUTES.PREMIUM.LISTINGSDETAILSADS(params.listID),
      },
      {
        id: 10,
        name: `Ads`,
        url: ROUTES.PREMIUM.ADS,
        active: path === ROUTES.PREMIUM.ADS,
      },
      {
        id: 11,
        name: `Ads Details`,
        url: ROUTES.PREMIUM.ADS,
        active:
          path === ROUTES.PREMIUM.ADSID(params.adsID) ||
          path === ROUTES.PREMIUM.ADSDETAILSID(params.adsDetailsID),
      },
      {
        id: 12,
        name: `Warehouses`,
        url: ROUTES.PREMIUM.WAREHOUSES,
        active: path === ROUTES.PREMIUM.WAREHOUSES,
      },
      {
        id: 13,
        name: `New Order`,
        url: ROUTES.PREMIUM.CREATEORDER,
        active: path === ROUTES.PREMIUM.CREATEORDER,
      },
    ],
    [path, searchParams.toString()]
  );

  return (
    path !== ROUTES.PREMIUM.CHECKOUT &&
    path !== ROUTES.PREMIUM.CHECKOUTID(params.checkoutID) && (
      <div className="mt-2 max-w-full hidden lg:block  ">
        {newPath.find((item) => item.active) ? (
          <div className="flex mb-5  items-center gap-3 max-w-[1600px] px-4 xl:px-[60px] mx-auto">
            <button
              className=" size-5"
              onClick={() => {
                router.back();
              }}
            >
              <BackIcon className={"w-full h-full"} />
            </button>
            <h1 className="text-[32px] font-Bold">
              {newPath.find((item) => item.active)?.name}
            </h1>
          </div>
        ) : (
          <h1 className="mb-6 text-[32px] font-Bold max-w-[1600px] px-4 xl:px-[60px] mx-auto">
            {LinksNav.find((item) => item.active)?.name}
            {path === ROUTES.PREMIUM.ADDLIST && "List an item"}
            <span className="mx-3">
              {LinksNav.find((item) => item?.activeDetails)?.activeDetails}
            </span>
          </h1>
        )}
        <div className="overflow-x-auto overflow-y-hidden">
          <div className=" border-b-[1.5px]  max-w-full   mb-5 ">
            <ul className=" max-w-[1600px] px-4 xl:px-[60px] mx-auto flex items-center gap-6 justify-between ">
              {LinksNav.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={` pb-3 -mb-[2px]   ${
                      link.active && "border-b-[3px] border-green "
                    } `}
                  >
                    <Link
                      href={link.url}
                      className={`${
                        link.active && "!font-Bold !text-black"
                      } text-[16px] text-nowrap font-SemiBold duration-200 text-black/80 hover:text-black`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  );
}
export default NavLinks;
