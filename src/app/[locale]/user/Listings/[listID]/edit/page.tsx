"use client";
import React from "react";
import { GetMyProductsByID } from "@/src/hooks/queries/user/lisitings";
import { QueryWrapper } from "@/src/components/query-wrapper";
import UpdateListing from "./_components/update-listing";

function Page({ params }: any) {
  const query = GetMyProductsByID(params.listID);
  return (
    <QueryWrapper query={query}>
      {({ data }) => {
        console.log(data);

        return <UpdateListing initialValues={data} />;
      }}
    </QueryWrapper>
  );
}

export default Page;
