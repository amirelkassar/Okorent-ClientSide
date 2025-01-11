"use client";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import man from "@/src/assets/images/person1.png";
import { Rating } from "@mantine/core";
import ShowMore from "@/src/components/showMore";
import InputTextarea from "./InputTextarea";
import Button from "./button";
import DeleteIcon from "../assets/icons/delete";
import { getDate } from "../lib/utils";
import {
  useDeleteReviewProductInAdmin,
  useEditReviewInAdmin,
} from "../hooks/queries/admin/lisiting/Reviews";
import { useParams } from "next/navigation";
import { Toast } from "./toast";
import EditIcon from "../assets/icons/edit";
function CardReviews({
  IsEdit = false,
  review,
}: {
  IsEdit?: boolean;
  review?: any;
}) {
  //Hooks
  const params = useParams();
  const [openEdit, setOpenEdit] = useState(false);
  console.log(review);
  const [dataEdit, setDataEdit] = useState({
    ReviewId: review?.id,
    Review: review?.review || "",
    Rate: review?.rate || 0,
  });

  //queries
  const { mutateAsync: EditReview } = useEditReviewInAdmin(
    params?.productID || ""
  );
  const { mutateAsync: DeleteReview } = useDeleteReviewProductInAdmin(
    params?.productID || ""
  );

  //functions

  //Edit Review
  const onSubmitEditReview = useCallback(async () => {
    Toast.Promise(EditReview(dataEdit), {
      loading: "Processing...",
      success: "Update Review Product Done",
      onSuccess(res) {
        setOpenEdit(false);
      },
    });
  }, [EditReview, dataEdit]);

  //Delete Review
  const onSubmitDeleteReview = useCallback(async () => {
    Toast.Promise(DeleteReview(review?.id), {
      success: "Deleted Review Product Done",
      onSuccess: async (res) => {},
    });
  }, [DeleteReview, review?.id]);
  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className=" flex items-center gap-3">
          <Image
            src={review?.reviewerImage || man}
            width={40}
            height={40}
            className=" size-10 rounded-full object-cover object-top"
            alt="man"
          />
          <div>
            <h3 className="text-base font-SemiBold">
              {review?.reviewerName || "name"}
            </h3>
            <p className="text-[12px] text-black/80">
              {getDate(review?.created).fullYearWithMonthName || "October 2023"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <Rating
            color="#88BA52"
            value={dataEdit.Rate || 0}
            fractions={10}
            readOnly={!openEdit}
            onChange={(e) => setDataEdit({ ...dataEdit, Rate: e })}
          />
          {!openEdit && <p className="text-base">{review?.rate || 0}</p>}
        </div>
      </div>
      {IsEdit ? (
        <>
          <InputTextarea
            autosize
            className="!min-h-12 h-auto !mb-4"
            inputClassName="!min-h-12 h-auto"
            value={dataEdit.Review || ""}
            readOnly={!openEdit}
            onChange={(e) => {
              setDataEdit({ ...dataEdit, Review: e.target.value });
            }}
          />
          <div className="flex items-center justify-end ms-auto gap-4">
            {openEdit ? (
              <>
                <Button
                  onClick={() => {
                    setOpenEdit(false);
                  }}
                  className={
                    "!px-6 h-10 border-none hover:shadow-md text-blue bg-blueLight"
                  }
                >
                  Discard
                </Button>
                <Button onClick={onSubmitEditReview} className={"!px-8 h-10"}>Save</Button>
              </>
            ) : (
              <Button
                onClick={() => {
                  setOpenEdit(true);
                }}
                className="flex bg-blueLight  h-10 border-none items-center gap-2 py-1 px-2  "
              >
                <EditIcon fill="#006aff" className="w-4 h-auto" />
                <p className="text-blue text-[12px]  font-medium">Edit</p>
              </Button>
            )}

            <Button
              onClick={onSubmitDeleteReview}
              className="flex bg-blueLight  h-10 border-none items-center gap-2 py-1 px-2  "
            >
              <DeleteIcon className="w-4 h-auto" />
              <p className="text-[#E31B1B] text-[12px]  font-medium">Delete</p>
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="text-sm lg:text-base px-1 md:px-3 text-grayMedium font-Regular">
            <ShowMore lines={2}>{review?.review || ""}</ShowMore>
          </div>
        </>
      )}
    </div>
  );
}

export default CardReviews;
