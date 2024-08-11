"use client";
import { DataTable } from "@/src/components/data-table";
import FilterBy from "@/src/components/filterBy";
import { RentalsData } from "@/src/lib/dataUser";
import React from "react";
import { columns } from "./_components/columns";
import { useSearchParams } from "next/navigation";
import { Link } from "@/src/navigation";
import CardIcon from "@/src/assets/icons/card";
import ROUTES from "@/src/routes";

function page() {
  const searchParams = useSearchParams();
  console.log(searchParams.get("cards"));
  return (
    <div>
      {searchParams.get("cards") === "true" ? null : (
        <div>
          <div className="flex items-center justify-between gap-6 flex-wrap mb-10">
            <div className="flex items-center gap-5">
              <h2 className="text-[32px] font-Bold">My Rentals</h2>
              <Link
                href={`${ROUTES.USER.RENTALS}?cards=true`}
                className="px-3 duration-300 hover:shadow-md w-fit py-2 rounded-xl border border-black flex items-center justify-center gap-2"
              >
                <CardIcon />
                <p>Card View</p>
              </Link>
            </div>
            <FilterBy data={["Closed", "Ongoing",'Upcoming']} search />
          </div>
          <DataTable data={RentalsData} columns={columns} />
        </div>
      )}
    </div>
  );
}

export default page;
