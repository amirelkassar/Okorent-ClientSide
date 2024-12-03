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
        active: path === ROUTES.ADMIN.SUPPORT,
      },
      {
        id: 7,
        name: "Bookings",
        url: ROUTES.ADMIN.BOOKINGS,
        active:
          path === ROUTES.ADMIN.BOOKINGS ||
          path === ROUTES.ADMIN.BOOKINGSDETAILS(params.bookingsId),
      },
      {
        id: 9,
        name: "Inbox",
        url: ROUTES.ADMIN.INBOX,
        active: path === ROUTES.ADMIN.INBOX,
      },
      {
        id: 10,
        name: "Reports",
        url: ROUTES.ADMIN.REPORTS,
        active: path === ROUTES.ADMIN.REPORTS,
      },
      {
        id: 11,
        name: "Memberships",
        url: ROUTES.ADMIN.MEMBERSHIPS,
        active: path === ROUTES.ADMIN.MEMBERSHIPS,
      },
      {
        id: 12,
        name: "Master Data",
        url: ROUTES.ADMIN.MASTERDATA,
        active: path.includes(ROUTES.ADMIN.MASTERDATA),
      },
    ],
    [path]
  );
  const newPath = useMemo(
    () => [
      {
        id: 2,
        name: "Listing Details",
        url: ROUTES.ADMIN.LISTINGSDETAILS(params.productID),
        active:
          path === ROUTES.ADMIN.LISTINGSDETAILS(params.productID) ||
          path === ROUTES.ADMIN.LISTINGSDETAILSEdit(params.productID),
      },
      {
        id: 3,
        name: "Subscription",
        url: ROUTES.USER.SUBSCRIPTION,
        active: path === ROUTES.USER.SUBSCRIPTION,
      },
      {
        id: 2,
        name: "Booking Details",
        url: ROUTES.ADMIN.BOOKINGSDETAILS(params.bookingsId),
        active: path === ROUTES.ADMIN.BOOKINGSDETAILS(params.bookingsId),
      },
    ],
    [path]
  );
  return (
    <div className="mt-3 max-w-full hidden lg:block">
      {newPath.find((item) => item.active) ? (
        <div className="flex mb-5  items-center gap-3">
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
        <h1 className="mb-5 text-[32px] font-Bold">
          {LinksNav.find((item) => item.active)?.name}

          <span className="mx-3">
            {LinksNav.find((item) => item?.activeDetails)?.activeDetails}
          </span>
        </h1>
      )}

      <div className=" max-w-full overflow-x-auto overflow-y-hidden mb-6 pb-4">
        <ul className=" border-b-[1.5px] flex items-center gap-6 lgl:gap-12 justify-between  ">
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
