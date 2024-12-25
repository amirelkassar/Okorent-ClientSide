"use client";
import React from "react";
import { GetMyProductsByID } from "@/src/hooks/queries/user/lisitings";
import { QueryWrapper } from "@/src/components/query-wrapper";
import PageListingId from "./_components/page-listing-id";

function page({ params }: any) {
  const query = GetMyProductsByID(params.listID);

  return (
    <QueryWrapper query={query}>
      {({ data }: { data: any }) => {
        console.log(data);
        return <PageListingId initialData={data} id={params.listID} />;
      }}
    </QueryWrapper>
  );
}

export default page;
