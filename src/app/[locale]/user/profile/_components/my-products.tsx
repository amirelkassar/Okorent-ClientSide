import EditIcon from "@/src/assets/icons/edit";
import LinkViewAll from "@/src/components/linkViewAll";
import React from "react";
import OneCardView from "./oneCardView";
import { GetMyProductsAll } from "@/src/hooks/queries/user/lisitings";
import LoadingProductsRow from "@/src/components/product/loading-products-row";

function MyProducts() {
  const { data, isLoading } = GetMyProductsAll("");

  return (
    <div>
      <div className="flex items-center gap-5 justify-between mb-5 lg:mb-8">
        <div className="flex items-center gap-1">
          <h2 className="text-2xl lg:text-3xl">Your Rrentals</h2>
          <div className="flex items-center gap-1">
            <EditIcon />
            <p className="text-grayMedium text-xl hidden md:block">
              Manage Rentals
            </p>
          </div>
        </div>
        {data?.data?.items?.length > 2 ? <LinkViewAll link="#" /> : null}
      </div>
      {isLoading ? (
        <LoadingProductsRow number={3} />
      ) : data?.data?.items?.length === 0 ? (
        <div className="text-center text-gray-500">No Rentals Found</div>
      ) : (
        <div className="flex flex-wrap gap-5 md:gap-8">
          {data?.data?.items.map((item: any) => (
            <OneCardView key={item?.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MyProducts;
