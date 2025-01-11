"use client";
import { Rating } from "@mantine/core";
import React, { useState } from "react";
import Button from "@/src/components/button";
import CardReviews from "./cardReviews";
import ProgressRev from "./product/ProgressRev";
import SkeletonLoading from "./skeleton-loading";

function Reviews({
  editAdmin = false,
  usersReviews,
  isLoading = false,
  dataReviews = [],
}: {
  editAdmin?: boolean;
  usersReviews?: any;
  isLoading: boolean;
  dataReviews: any[];
}) {
  const [IsEdit, setIsEdit] = useState(false);
  const [ShowAll, setShowAll] = useState(false);

  return (
    <div className="flex gap-5 justify-between flex-wrap pb-9 border-b border-grayMedium/20 mb-section">
      <div className="w-full lg:w-[410px]">
        <h2 className=" relative text-xl lg:text-[24px] mb-3">
          Customer reviews
        </h2>
        <div className="flex items-center gap-3 mb-2">
          <Rating
            classNames={{ starSymbol: "rounded-md " }}
            color="#88BA52"
            value={usersReviews?.average || 0}
            fractions={10}
            readOnly
          />
          <p className="text-sm lg:text-base">
            {parseFloat(usersReviews?.average.toFixed(1)) || 0} Out of 5
          </p>
        </div>
        <p className="text-[14px] font-Regular">
          Based on {usersReviews?.totalReviews || 0} user ratings
        </p>
        <div className="flex flex-col gap-4 mt-5 mb-4 pb-5 border-b border-grayBack">
          <div className="flex items-center gap-2 lg:gap-4">
            <h4 className="text-xs lg:text-[14px] font-Regular text-grayMedium">
              5 Stars{" "}
            </h4>
            <ProgressRev
              val={
                parseInt(
                  usersReviews?.percentages?.five?.replace("%", ""),
                  10
                ) || 0
              }
            />
          </div>
          <div className="flex items-center gap-2 lg:gap-4">
            <h4 className="text-xs lg:text-[14px] font-Regular text-grayMedium">
              4 Stars{" "}
            </h4>
            <ProgressRev
              val={
                parseInt(
                  usersReviews?.percentages?.four?.replace("%", ""),
                  10
                ) || 0
              }
            />
          </div>
          <div className="flex items-center gap-2 lg:gap-4">
            <h4 className="text-xs lg:text-[14px] font-Regular text-grayMedium">
              3 Stars{" "}
            </h4>
            <ProgressRev
              val={
                parseInt(
                  usersReviews?.percentages?.three?.replace("%", ""),
                  10
                ) || 0
              }
            />
          </div>
          <div className="flex items-center gap-2 lg:gap-4">
            <h4 className="text-xs lg:text-[14px] font-Regular text-grayMedium">
              2 Stars{" "}
            </h4>
            <ProgressRev
              val={
                parseInt(
                  usersReviews?.percentages?.two?.replace("%", ""),
                  10
                ) || 0
              }
            />
          </div>
          <div className="flex items-center gap-2 lg:gap-4">
            <h4 className="text-xs lg:text-[14px] font-Regular text-grayMedium">
              1 Stars{" "}
            </h4>
            <ProgressRev
              val={
                parseInt(
                  usersReviews?.percentages?.one?.replace("%", ""),
                  10
                ) || 0
              }
            />
          </div>
        </div>
        <h4 className=" relative text-base lg:text-[24px] mb-3">
          Review this product
        </h4>
        <p className="text-[14px] font-Regular text-grayMedium mb-6">
          Share your thoughts with other customers
        </p>
        {/* <Button
          className={
            "bg-grayBack text-black border-none w-full lg:w-[90%] h-10"
          }
        >
          Write review
        </Button> */}
      </div>
      {isLoading ? (
        <div className="flex flex-col gap-5 w-[800px] max-w-full">
          <SkeletonLoading className="!w-full !h-[140px]" />
          <SkeletonLoading className="!w-full !h-[140px]" />
        </div>
      ) : dataReviews?.length > 0 ? (
        <div className="w-[800px] max-w-full">
          <div className="flex items-center gap-3 flex-wrap justify-between mb-10">
            <h2 className=" relative text-xl lg:text-[24px] ">
              Top reviews from neatherland{" "}
            </h2>
            {editAdmin &&
              (IsEdit ? (
                <div className="flex items-center gap-2 ">
                  <Button
                    className={"h-9 !px-5 !text-sm"}
                    onClick={() => setIsEdit(false)}
                  >
                    Done Edits
                  </Button>
                </div>
              ) : (
                <Button
                  className={"h-9 !px-5 !text-sm"}
                  onClick={() => setIsEdit(true)}
                >
                  Edit
                </Button>
              ))}
          </div>
          <div className="flex flex-col gap-7 mb-7">
            {dataReviews
              ?.slice(0, ShowAll ? dataReviews?.length : 3)
              .map((item: any, index: number) => (
                <CardReviews IsEdit={IsEdit} review={item} key={item?.id} />
              ))}
          </div>
          {ShowAll ? null : dataReviews?.length > 3 ? (
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 text-nowrap duration-300 hover:shadow-md leading-4 rounded-xl text-sm lg:text-base border border-black text-center"
            >
              Show all {+dataReviews?.length - 3} reviews
            </button>
          ) : null}
          {}
        </div>
      ) : null}
    </div>
  );
}

export default Reviews;
