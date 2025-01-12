import React from "react";
import LoadingProductsRow from "./product/loading-products-row";
import Review from "./Review";
import { GetReviewByIDInGuest } from "../hooks/queries/guest";

function ReviewsListProfileGuest({ userID }: { userID: any }) {
  const { data, isLoading } = GetReviewByIDInGuest(userID);

  return (
    <>
      {isLoading ? (
        <LoadingProductsRow number={2} />
      ) : (
        <div className="flex gap-3 lg:gap-4 md:flex-wrap overflow-x-auto hideScroll">
          {data?.data?.map((item: any, i: number) => {
            return <Review key={i} data={item} idUser={userID}  />;
          })}
        </div>
      )}
    </>
  );
}

export default ReviewsListProfileGuest;
