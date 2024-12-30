"use client";
import Image from "next/image";
import React, { useState } from "react";
import man from "@/src/assets/images/person1.png";
import { Rating } from "@mantine/core";
import ShowMore from "@/src/components/showMore";
import InputTextarea from "./InputTextarea";
import Button from "./button";
import DeleteIcon from "../assets/icons/delete";
import { getDate } from "../lib/utils";
function CardReviews({
  IsEdit = false,
  review,
}: {
  IsEdit?: boolean;
  review?: any;
}) {
  console.log(review);

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className=" flex items-center gap-3">
          <Image
            src={man}
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
            value={review?.rate || 0}
            fractions={IsEdit ? 1 : 10}
            readOnly={!IsEdit}
          />
          {!IsEdit && <p className="text-base">{review?.rate || 0}</p>}
        </div>
      </div>
      {IsEdit ? (
        <>
          <InputTextarea
            autosize
            className="!min-h-7 h-auto !mb-4"
            inputClassName="!min-h-7 h-auto"
            defaultValue={
              "  Slightly expensive, but the performance justifies the cost ::: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            }
          />
          <Button className="flex bg-blueLight ms-auto h-10 border-none items-center gap-2 py-1 px-2  ">
            <DeleteIcon className="w-4 h-auto" />
            <p className="text-[#E31B1B] text-[12px]  font-medium">Delete</p>
          </Button>
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
