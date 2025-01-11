import Button from "@/src/components/button";
import InputTextarea from "@/src/components/InputTextarea";
import ModalComp from "@/src/components/modal-comp";
import Image from "next/image";
import React, { useState } from "react";
import avatar from "@/src/assets/images/avatar.png";
import { Rating } from "@mantine/core";
import {
  useReviewOrderMutation,
  useReviewUserOrderMutation,
} from "@/src/hooks/queries/user/booking/reviews";
import { Toast } from "@/src/components/toast";
import placholderImg from "@/src/assets/images/placTableProduct.png";
import GetErrorMsg from "@/src/components/getErrorMsg";
import ErrorMsg from "@/src/components/error-msg";

function ReviewModal({
  opened,
  close,
  dataForReview,
  dataForReviewUser,
}: {
  opened: boolean;
  close: any;
  dataForReview: any;
  dataForReviewUser: any;
}) {
  const [review, setReview] = useState("");
  const [rate, setRate] = useState(0);
  const [reviewUser, setReviewUser] = useState("");
  const [rateUser, setRateUser] = useState(0);
  const { mutateAsync: SendReview, error, reset } = useReviewOrderMutation();
  const {
    mutateAsync: SendUserReview,
    error: errorUserReview,
    reset: resetUserReview,
  } = useReviewUserOrderMutation();

  const onSubmitReview = () => {
    const reviewData = {
      review: review,
      rate: rate,
      productId: dataForReview?.ProdId,
    };
    Toast.Promise(SendReview(reviewData), {
      success: "Done Send Review On Product",
      onSuccess: async (res) => {
        close();
      },
    });
  };
  const onSubmitReviewUser = () => {
    const reviewData = {
      review: reviewUser,
      rate: rateUser,
      reviewedUserId: dataForReviewUser?.userId,
    };
    Toast.Promise(SendUserReview(reviewData), {
      success: "Done Send Review On User",
      onSuccess: async (res) => {
        close();
      },
    });
  };
  return (
    <ModalComp title="Review" opened={opened} close={close}>
      <div className="w-[700px] max-w-full">
        <div className="flex gap-5 flex-col mdl:flex-row w-full mb-6 ">
          <div className="flex-1 border-green/30 border rounded-xl p-5 w-full">
            <h3 className="text-center text-sm mdl:text-base mb-4 md:mb-7">
              Review Lessor
            </h3>
            <Image
              src={dataForReviewUser?.imageUser || avatar}
              alt={dataForReviewUser?.UserName || "User"}
              width={50}
              height={50}
              className=" size-12 mdl:size-16 rounded-full object-cover object-center mx-auto"
            />
            <h4 className="text-center max-w-full md:max-w-[250px] truncate text-sm mdl:text-base mt-2 mx-auto mb-4 mdl:mb-6 font-SemiBold">
              {dataForReviewUser?.UserName || "UserName"}
            </h4>
            <div className="flex flex-col items-center w-fit mx-auto mb-4 mdl:mb-8">
              <Rating
                color="#88BA52"
                count={5}
                fractions={10}
                value={rateUser}
                classNames={{
                  symbolBody: " size-6 mdl:size-8 ",
                  starSymbol: "size-6 mdl:size-8",
                }}
                onChange={(e) => {
                  setRateUser(e);
                  resetUserReview();
                }}
              />
                <ErrorMsg error={GetErrorMsg(errorUserReview, "Rate")} />
            </div>
            <InputTextarea
              autosize
              label="Leave A comment"
              placeholder="Provide additional details"
              inputClassName="bg-white  !min-h-16 h-auto rounded-xl"
              labelClassName="!text-sm"
              className="!min-h-16 h-auto !mb-0"
              onChange={(event) => {
                setReviewUser(event.target.value);
                resetUserReview();
              }}
              error={GetErrorMsg(errorUserReview, "Review")}
            />
            <Button
              onClick={onSubmitReviewUser}
              className={" flex-1 w-full mt-5 h-[54px]"}
            >
              Confirn
            </Button>
          </div>
          <div className="flex-1 border-green/30 border rounded-xl p-5 w-full">
            <h3 className="text-center text-sm mdl:text-base mb-4 md:mb-7">
              Review Product
            </h3>
            <div
              className={
                " size-12 mdl:size-16 rounded-full p-[3px] bg-grayBack flex justify-center items-center mx-auto"
              }
            >
              <Image
                src={dataForReview?.imageProduct || placholderImg}
                alt={dataForReview?.productName || "ProductName"}
                width={50}
                height={50}
                className={
                  "w-full h-full rounded-full  object-cover object-center "
                }
              />
            </div>

            <h4 className="text-center max-w-full md:max-w-[250px] truncate text-sm mdl:text-base mx-auto mt-2 mb-4 mdl:mb-6 font-SemiBold">
              {dataForReview?.productName || "Product Name"}
            </h4>
            <div className="flex flex-col items-center w-fit mx-auto mb-4 mdl:mb-8">
              <Rating
                color="#88BA52"
                count={5}
                fractions={10}
                value={rate}
                onChange={(e) => {
                  setRate(e);
                  reset();
                }}
                classNames={{
                  symbolBody: " size-6 mdl:size-8 ",
                  starSymbol: "size-6 mdl:size-8",
                }}
              />
              <ErrorMsg error={GetErrorMsg(error, "Rate")} />
            </div>
            <InputTextarea
              autosize
              label="Leave A comment"
              placeholder="Provide additional details"
              inputClassName="bg-white  !min-h-16 h-auto rounded-xl"
              labelClassName="!text-sm"
              className="!min-h-16 h-auto !mb-0"
              onChange={(event) => {
                setReview(event.target.value);
                reset();
              }}
              error={GetErrorMsg(error, "Review")}
            />
            <Button
              onClick={onSubmitReview}
              className={" w-full mt-5 flex-1 h-[54px]"}
            >
              Confirn
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-7 w-full">
          <Button
            onClick={close}
            className={" flex-1 h-[54px] text-black bg-grayBack border-none"}
          >
            Cancel
          </Button>
        </div>
      </div>
    </ModalComp>
  );
}

export default ReviewModal;
