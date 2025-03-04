"use client";
import React from "react";
import AdsDetails from "./_components/ads-details";
import AdsUser from "./_components/ads-user";
import { GetAdsIDUserInAdmin } from "@/src/hooks/queries/admin/master-data/ads";
import { GetProductsInAdminByID } from "@/src/hooks/queries/admin/lisiting";
import PageListingId from "@/src/components/product/page-listing-id";
import SkeletonLoading from "@/src/components/skeleton-loading";
import ActionMenu from "./_components/action-menu";
import { QueryWrapper } from "@/src/components/query-wrapper";

function page({ params }: any) {
  const query = GetAdsIDUserInAdmin(params.adsId);

  const { data: ProductDetails, isLoading } = GetProductsInAdminByID(
    query?.data?.data?.productId
  );

  return (
    <QueryWrapper query={query}>
      {({ data }: { data: any }) => {
        console.log(data);

        return (
          <div>
            <ActionMenu id={params.adsId} status={data?.advertisementStatus} />
            <div className="flex gap-3 flex-col-reverse lgl:flex-row mb-section ">
              <AdsDetails data={data} />
              <AdsUser clientID={data?.userId} />
            </div>
            {isLoading ? (
              <div className="flex flex-col gap-3 w-full py-5 px-5">
                <SkeletonLoading className="md:!w-full w-full !h-8 md:!h-9 rounded-xl" />
                <SkeletonLoading className="md:!w-full w-full !h-8 md:!h-9 rounded-xl" />
              </div>
            ) : (
              <PageListingId
                initialData={ProductDetails?.data}
                id={data?.productId}
              />
            )}
          </div>
        );
      }}
    </QueryWrapper>
  );
}

export default page;
