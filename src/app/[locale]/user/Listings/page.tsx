"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import TableViewListings from "./_components/table-view-listings";
import { GetMyProductsAll } from "@/src/hooks/queries/user/lisitings";
import PageCardsView from "./_components/page-cards-view";

function Page() {
  const searchParams = useSearchParams();
  const query = GetMyProductsAll(searchParams.toString());

  return (
    <div>
      {searchParams.get("card") === "true" ? (
        <PageCardsView />
      ) : (
        <>
          <TableViewListings query={query} />
          <div className=" block mdl:hidden">
            <PageCardsView />
          </div>
        </>
      )}
    </div>
  );
}

export default Page;
