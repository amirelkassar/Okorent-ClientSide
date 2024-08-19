import ArrowWhiteIcon from "@/src/assets/icons/arrowWhite";
import EditIcon from "@/src/assets/icons/edit";
import Button from "@/src/components/button";
import React from "react";
import CardReview from "./cardReview";
interface AccountReviewsProps {
  edit: boolean;
}
function AccountReviews({edit}:AccountReviewsProps) {
  return (
    <div className="mt-24">
      <div className="flex items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="headTitle">Ahmed Reviews</h2>
          <button className="flex items-center gap-3 bottom-0 bg-transparent">
            <p className="text-grayMedium text-[20px] font-Medium">Edit</p>
            <EditIcon className="w-5" />
          </button>
        </div>
        <Button className={"h-10 gap-3"}>
          <p className="text-white text-[16px] font-Medium">
          Show more reviews
          </p>
          <ArrowWhiteIcon />
        </Button>
      </div>
      <div className="flex gap-8 flex-wrap pb-16 border-b border-grayBack">
        <CardReview edit={edit} />
        <CardReview edit={edit} />
        <CardReview edit={edit} />
        <CardReview edit={edit} />
      </div>
    </div>
  );
}

export default AccountReviews;
