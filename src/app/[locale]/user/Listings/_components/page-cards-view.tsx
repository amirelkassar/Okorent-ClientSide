"use client";
import React from "react";
import CardView from "./cardView";
import { useSearchParams } from "next/navigation";
import ROUTES from "@/src/routes";
import { GetMyProductsAll } from "@/src/hooks/queries/user/lisitings";
import Loading from "@/src/components/loading";
import NoDataYet from "@/src/components/noDataYet";
import { Pagination } from "@/src/components/pagination";

function PageCardsView() {
  const searchParams = useSearchParams();
  const { data: ActiveProducts } = GetMyProductsAll(
    searchParams.get("active") === "true"
      ? searchParams.toString()
      : "active=true&PageSize=5"
  );
  const { data: OfflineProducts, isLoading } = GetMyProductsAll(
    searchParams.get("active") === "false"
      ? searchParams.toString()
      : "active=false&PageSize=5"
  );
  console.log(OfflineProducts?.data?.items?.length);
  console.log(isLoading);
  if (isLoading) {
    return <Loading />;
  }
  if (
    ActiveProducts?.data?.items?.length === 0 &&
    OfflineProducts?.data?.items?.length === 0
  ) {
    return <NoDataYet />;
  }
  return (
    <div>
      {searchParams.get("card") === "true" ? (
        <>
          {searchParams.get("active") === "true" ? (
            ActiveProducts?.data?.items?.length > 0 ? (
              <div>
                <CardView
                  title={"Online"}
                  data={ActiveProducts?.data?.items}
                  withStatus
                />
                <Pagination totalPages={ActiveProducts?.data?.totalPages} />
              </div>
            ) : (
              <NoDataYet />
            )
          ) : searchParams.get("active") === "false" ? (
            OfflineProducts?.data?.items?.length > 0 ? (
              <div>
                <CardView
                  title={"Offline"}
                  data={OfflineProducts?.data?.items}
                  withStatus
                />
                <Pagination totalPages={OfflineProducts?.data?.totalPages} />
              </div>
            ) : (
              <NoDataYet />
            )
          ) : (
            <div>
              {ActiveProducts?.data?.items?.length > 0 && (
                <CardView
                  title={"Online"}
                  first
                  data={ActiveProducts?.data?.items}
                  viewAllLink={`${ROUTES.USER.LISTINGS}?card=true&active=true`}
                />
              )}
              {OfflineProducts?.data?.items?.length > 0 && (
                <CardView
                  title={"Offline"}
                  data={OfflineProducts?.data?.items}
                  viewAllLink={`${ROUTES.USER.LISTINGS}?card=true&active=false`}
                />
              )}
            </div>
          )}
        </>
      ) : (
        <div>
          <CardView title={"Online"} data={ActiveProducts?.data?.items} />
          <CardView title={"Offline"} data={OfflineProducts?.data?.items} />
        </div>
      )}
    </div>
  );
}

export default PageCardsView;
