"use client";
import React from "react";
import CardView from "./cardView";
import { QueryWrapper } from "@/src/components/query-wrapper";
import { useSearchParams } from "next/navigation";
import ROUTES from "@/src/routes";

function PageCardsView({ query }: { query: any }) {
  const searchParams = useSearchParams();

  return (
    <div>
      <QueryWrapper query={query}>
        {({ data }: { data: any }) => {
          const DataIsActive = data?.filter(
            (item: any) => item.isActive === true
          );
          const DataIsNotActive = data?.filter(
            (item: any) => item.isActive === false
          );

          return searchParams.get("card") === "true" ? (
            <>
              {searchParams.get("active") === "true" ? (
                DataIsActive?.length > 0 && (
                  <CardView title={"Online"} data={DataIsActive} withStatus />
                )
              ) : searchParams.get("active") === "false" ? (
                DataIsNotActive?.length > 0 && (
                  <CardView
                    title={"Offline"}
                    data={DataIsNotActive}
                    withStatus
                  />
                )
              ) : (
                <div>
                  {DataIsActive?.length > 0 && (
                    <CardView
                      title={"Online"}
                      first
                      data={DataIsActive}
                      viewAllLink={`${ROUTES.USER.LISTINGS}?card=true&active=true`}
                    />
                  )}
                  {DataIsNotActive?.length > 0 && (
                    <CardView
                      title={"Offline"}
                      data={DataIsNotActive}
                      viewAllLink={`${ROUTES.USER.LISTINGS}?card=true&active=false`}
                    />
                  )}
                </div>
              )}
            </>
          ) : (
            <div>
              <CardView title={"Online"} data={DataIsActive} />
              <CardView title={"Offline"} data={DataIsNotActive} />
            </div>
          );
        }}
      </QueryWrapper>
    </div>
  );
}

export default PageCardsView;
