import Button from "@/src/components/button";
import React from "react";
import CardPhone from "./cardPhone";
import { GetDashboardOngoingRentals } from "@/src/hooks/queries/user/home/user-info";
import SkeletonLoading from "@/src/components/skeleton-loading";
import { useSwitchRent } from "@/src/store/rent-slice";
import LinkGreen from "@/src/components/linkGreen";
import ROUTES from "@/src/routes";
import { Link } from "@/src/navigation";

function OngoingRentals() {
  const { data, isLoading } = GetDashboardOngoingRentals();
  const { setSwitchRent } = useSwitchRent();
  return (
    <div className="bg-white rounded-3xl border w-full lg:w-[430px] border-green shadow-sidebar py-6 lg:py-7 px-4">
      <h3 className="headTitle mb-5 lg:mb-8">Ongoing Rentals</h3>
      <div>
        {isLoading ? (
          <div>
            <SkeletonLoading className="min-w-full mb-4 flex-1 !h-9 md:!h-11 rounded-xl" />
            <SkeletonLoading className="min-w-full mb-4 flex-1 !h-9 md:!h-11 rounded-xl" />
            <SkeletonLoading className="min-w-full mb-4 flex-1 !h-9 md:!h-11 rounded-xl" />
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-6 lg:gap-8">
              {data?.data?.items?.slice(0, 4).map((item: any, i: number) => {
                return <CardPhone key={i} data={item} />;
              })}
            </div>
            <Link
              href={ROUTES.USER.BOOKINGS}
              onClick={() => {
                setSwitchRent("rent_out");
              }}
              className={
                "bg-green hover:shadow-md px-2 lg:px-3 text-sm lg:text-base text-white border-4 h-10 border-[#a9c788] hover:border-green duration-500  rounded-xl  flex items-center justify-center  mt-7"
              }
            >
              View all rentals
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default OngoingRentals;
