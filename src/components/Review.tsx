"use client";
import { Rating } from "@mantine/core";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import MenuActions from "./MenuActionsReviews";
import InputTextarea from "./InputTextarea";
import Button from "./button";
interface PropsReview {
  name: string;
  image: StaticImageData;
  stateUser: string;
  title: string;
  rate: number;
  edit?: boolean;
}
function Review({
  name,
  image,
  stateUser,
  title,
  rate,
  edit = false,
}: PropsReview) {
  const [isEdit, setIsEdit] = useState(false);
  const [dataReview, setDataReview] = useState({
    title: title,
    rate: rate,
  });
  return (
    <div className="px-3 lg:px-4 py-5 lg:py-6  border border-black/60 rounded-3xl max-w-[330px] min-w-[290px]">
      {isEdit ? (
        <InputTextarea
          value={dataReview.title}
          onChange={(e) =>
            setDataReview({ ...dataReview, title: e.target.value })
          }
          autosize
          inputClassName="text-xs h-auto !min-h-7"
          className="!mb-3 h-auto !min-h-2"
        />
      ) : (
        <p className="text-xs lg:text-sm font-Regular text-grayMedium mb-3">
          {title}
        </p>
      )}
      <div className="flex items-center flex-wrap gap-3 justify-between">
        <Rating
          color="#88BA52"
          value={dataReview.rate || 0}
          fractions={1}
          readOnly={!isEdit}
          classNames={{ label: "me-1", starSymbol: " stroke-green" }}
          onChange={(e) => setDataReview({ ...dataReview, rate: e })}
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
              onClick={() => setIsEdit(false)}
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
            src={image}
            width={40}
            height={40}
            alt={name}
            className=" size-9 lg:size-10 rounded-full"
          />
          <div>
            <h3 className="text-xs lg:text-sm text-grayMedium">{name}</h3>
            <p className="text-xs text-grayMedium font-Regular">{stateUser}</p>
          </div>
        </div>
        {edit && <MenuActions setIsEdit={setIsEdit} />}
      </div>
    </div>
  );
}

export default Review;
