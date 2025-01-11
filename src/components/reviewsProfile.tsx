import React from "react";
import Review from "@/src/components/Review";
import { GetReviewsUserInAdmin } from "../hooks/queries/admin/account/reviews";
import LoadingProductsRow from "./product/loading-products-row";


function ReviewsProfile({
  editAdmin = false,
  userName = "User",
  userID = "",
}: {
  editAdmin?: boolean;
  userName?: string;
  userID: string;
}) {
  const { data, isLoading } = GetReviewsUserInAdmin(userID);
  console.log(data);

  return (
    <div className=" mt-10 relative">
      <h2 className="text-2xl  lg:text-3xl mb-7">
        Customer Reviews about <span className="font-Bold">{userName}</span>
      </h2>
      {isLoading ? (
        <LoadingProductsRow number={2} />
      ) : (
        <div className="flex gap-3 lg:gap-4 md:flex-wrap overflow-x-auto hideScroll">
          {data?.data?.map((item: any, i: number) => {
            return (
              <Review
                key={i}
                data={item}
                idUser={userID}
                edit={editAdmin}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ReviewsProfile;
