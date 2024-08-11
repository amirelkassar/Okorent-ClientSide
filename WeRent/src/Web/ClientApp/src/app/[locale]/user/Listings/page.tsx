"use client";
import { DataTable } from "@/src/components/data-table";
import FilterBy from "@/src/components/filterBy";
import { ListingsData } from "@/src/lib/dataUser";
import React from "react";
import { columns } from "./_components/columns";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import CardIcon from "@/src/assets/icons/card";
import { useSearchParams } from "next/navigation";
import CardView from "./_components/cardView";

function page() {
  const searchParams = useSearchParams();
  console.log(searchParams.get("cards"));

  return (
    <div>
      {searchParams.get("cards") === "true" ? <div>
        <CardView first title={'Active'}/>
        <CardView title={'Not Active'}/>
        </div> : (
        <div>
          <div className="flex items-center justify-between gap-6 flex-wrap mb-10">
            <div className="flex items-center gap-5">
              <h2 className="text-[32px] font-Bold">My Listings</h2>
              <Link
                href={`${ROUTES.USER.LISTINGS}?cards=true`}
                className="px-3 duration-300 hover:shadow-md w-fit py-2 rounded-xl border border-black flex items-center justify-center gap-2"
              >
                <CardIcon />
                <p>Card View</p>
              </Link>
            </div>
            <FilterBy data={["Active", "Not Active"]} search/>

          </div>
          <DataTable data={ListingsData} columns={columns} />
        </div>
      )}
    </div>
  );
}

export default page;
