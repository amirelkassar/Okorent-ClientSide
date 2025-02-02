"use client";
import React from "react";
import { GetProductsFavoriteAll } from "@/src/hooks/queries/user/home";
import { QueryWrapper } from "@/src/components/query-wrapper";
import CardFavView from "./_components/card-fav-view";

function page() {
  const query = GetProductsFavoriteAll("IncludeFavoritesOnly=true");

  return (
    <QueryWrapper query={query}>
      {({ data, totalPages }) => {
        console.log(data);
        console.log(totalPages);
        return (
          <div className="flex gap-x-5 justify-center md:justify-start lg:gap-x-10 mb-24 flex-wrap gap-y-4 lg:gap-y-8">
            {data.map((item: any, index: number) => (
              <CardFavView product={item} key={index} />
            ))}
          </div>
        );
      }}
    </QueryWrapper>
  );
}

export default page;
