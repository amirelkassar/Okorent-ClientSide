import React from "react";
import { GetReviewsUserInAdmin } from "../hooks/queries/admin/account/reviews";
import LoadingProductsRow from "./product/loading-products-row";
import Review from "./Review";

function ReviewsListProfileAdmin({ userID }: { userID: string }) {
  const { data, isLoading } = GetReviewsUserInAdmin(userID);

  return (
    <>
      {isLoading ? (
        <LoadingProductsRow number={2} />
      ) : (
        <div className="flex gap-3 lg:gap-4 md:flex-wrap overflow-x-auto hideScroll">
          {data?.data?.length === 0 ? (
            <p className="text-center text-gray-500 w-full">No reviews found</p>
          ) : (
            data?.data?.map((item: any, i: number) => {
              return <Review key={i} data={item} idUser={userID} edit={true} />;
            })
          )}
        </div>
      )}
    </>
  );
}

export default ReviewsListProfileAdmin;
