import LinkViewAll from "@/src/components/linkViewAll";
import Review from "@/src/components/Review";
import React from "react";
import { GetMyReviewsAboutMe } from "@/src/hooks/queries/user/my-profile";
import LoadingProductsRow from "@/src/components/product/loading-products-row";

function ReviewAboutMe() {
  const { data, isLoading } = GetMyReviewsAboutMe();
  console.log(data);
  return (
    <div className="mb-16">
      <div className="flex items-center gap-5 justify-between mb-5 lg:mb-8">
        <h2 className="text-2xl lg:text-3xl">Your Reviews</h2>
        {data?.data?.length > 2 ? <LinkViewAll link="#" /> : null}
      </div>
      {isLoading ? (
        <LoadingProductsRow number={2} />
      ) : data?.data?.length === 0 ? (
        <div className="text-center text-gray-500">No reviews found</div>
      ) : (
        <div className="flex gap-5 lg:gap-8 md:flex-wrap overflow-x-auto hideScroll">
          {data?.data?.map((item: any, i: number) => {
            return <Review key={item?.id} data={item} idUser={""} />;
          })}
        </div>
      )}
    </div>
  );
}

export default ReviewAboutMe;
