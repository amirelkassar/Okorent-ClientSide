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
          path === ROUTES.ADMIN.BOOKINGSDETAILS(params.bookingsId) ||
          path === ROUTES.ADMIN.NOTESBOOKINGS,
      },
      {
        id: 8,
        name: "Invoices",
        url: ROUTES.ADMIN.INVOICES,
        active: path === ROUTES.ADMIN.INVOICES,
      },
      {
        id: 9,
        name: "Inbox",
        url: ROUTES.ADMIN.INBOX,
        active: path === ROUTES.ADMIN.INBOX,
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
        id: 4,
        name: "Booking Details",
        url: ROUTES.ADMIN.BOOKINGSDETAILS(params.bookingsId),
        active: path === ROUTES.ADMIN.BOOKINGSDETAILS(params.bookingsId),
      },
      {
        id: 5,
        name: "Ads Details ",
        url: ROUTES.ADMIN.ADSDETAILS(params.adsId),
        active: path === ROUTES.ADMIN.ADSDETAILS(params.adsId),
      },
      {
        id: 6,
        name: "Accounts",
        url: ROUTES.ADMIN.NOTESACCOUNTS,
        active: path === ROUTES.ADMIN.NOTESACCOUNTS,
      },
      {
        id: 7,
        name: "Accounts",
        url: ROUTES.ADMIN.NOTESACCOUNTSDETAILS(params.noteID),
        active: path === ROUTES.ADMIN.NOTESACCOUNTSDETAILS(params.noteID),
      },
      {
        id: 8,
        name: "Bookings",
        url: ROUTES.ADMIN.NOTESBOOKINGS,
        active: path === ROUTES.ADMIN.NOTESBOOKINGS,
      },
      {
        id: 9,
        name: "Bookings",
        url: ROUTES.ADMIN.NOTESBOOKINGSDETAILS(params.noteID),
        active: path === ROUTES.ADMIN.NOTESBOOKINGSDETAILS(params.noteID),
      },
    ],
    [path]
  );
  return (
    <div className="mt-2 max-w-full hidden lg:block">
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

          <span className="mx-3">
            {LinksNav.find((item) => item?.activeDetails)?.activeDetails}
          </span>
        </h1>
      )}
      <div className="overflow-x-auto overflow-y-hidden">
        <div className=" border-b-[1.5px]  max-w-full   mb-5 ">
          <ul className=" max-w-[1600px] px-4 xl:px-[60px] mx-auto flex items-center gap-6 justify-between ">
            {LinksNav.map((link, i) => {
              return (
                <li
                  key={link.id}
                  className={` pb-3 -mb-[2px] ${
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
    </div>
  );
}

export default NavLinks;
