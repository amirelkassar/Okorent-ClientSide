"use client";
import { Rating } from "@mantine/core";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import MenuActions from "./MenuActionsReviews";
import InputTextarea from "./InputTextarea";
import Button from "./button";
import { useEditReviewUserInAdmin } from "../hooks/queries/admin/account/reviews";
import imgUser from "@/src/assets/images/avatar.png";

import { Toast } from "./toast";
interface PropsReview {
  edit?: boolean;
  idUser: any;
  data: any;
}
function Review({
  edit = false,
  idUser,
  data,
}: PropsReview) {
  const [isEdit, setIsEdit] = useState(false);
  const [dataReview, setDataReview] = useState({
    ReviewId: data?.id,
    Review: data?.review || "",
    Rate: data?.review || 0,
  });
  console.log(dataReview);
  console.log(data);

  //queries
  const { mutateAsync: EditReviewUser } = useEditReviewUserInAdmin(
    idUser || ""
  );

  //Edit Review
  const onSubmitEditReview = useCallback(async () => {
    Toast.Promise(EditReviewUser(dataReview), {
      loading: "Processing...",
      success: "Update Review User Done",
      onSuccess(res) {
        setIsEdit(false);
      },
    });
  }, [EditReviewUser, dataReview]);

  return (
    <div className="px-3 lg:px-4 py-5 lg:py-6  border border-black/60 rounded-3xl flex justify-between flex-col max-w-[330px] min-w-[290px]">
      {isEdit ? (
        <InputTextarea
          defaultValue={data?.review || ""}
          onChange={(e) =>
            setDataReview({ ...dataReview, Review: e.target.value })
          }
          autosize
          inputClassName="text-xs h-auto !min-h-7"
          className="!mb-3 h-auto !min-h-2"
        />
      ) : (
        <p className="text-xs max-w-full text-wrap lg:text-sm font-Regular text-grayMedium mb-3">
          {data?.review || ""}
        </p>
      )}
      <div>
        <div className="flex items-center flex-wrap gap-3 justify-between">
          <Rating
            color="#88BA52"
            defaultValue={data?.rate || 0}
            fractions={10}
            readOnly={!isEdit}
            classNames={{ label: "me-1", starSymbol: " stroke-green" }}
            onChange={(e) => setDataReview({ ...dataReview, Rate: e })}
          />
          {isEdit && (
            <div className="flex items-center gap-2 w-fit">
              <Button
                onClick={() => setIsEdit(false)}
                className={
                  "  !text-sm h-[34px] w-fit !px-2  text-black bg-grayBack border-none"
                }
              >
                Cancel
              </Button>
              <Button
                onClick={() => onSubmitEditReview()}
                className={"  !text-sm h-[34px]  !px-2 w-fit"}
              >
                Confirm
              </Button>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between gap-2 mt-5">
          <div className="flex items-center gap-2 ">
            <Image
              src={data?.reviewerImage || imgUser}
              width={40}
              height={40}
              alt={data?.reviewerName || "name"}
              className=" size-9 lg:size-10 rounded-full object-cover object-top"
            />
            <div>
              <h3 className="text-xs lg:text-sm text-grayMedium">
                {data?.reviewerName || "User"}
              </h3>
              <p className="text-xs text-grayMedium font-Regular">
                {data?.isReviwerVerified ? "Verified User" : "Unverified User"}
              </p>
            </div>
          </div>
          {edit && (
            <MenuActions setIsEdit={setIsEdit} id={data?.id} userID={idUser} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Review;
