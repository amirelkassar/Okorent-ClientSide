import { Rating } from "@mantine/core";
import React from "react";
import Button from "@/src/components/button";
import CardReviews from "./cardReviews";
import ProgressRev from "./product/ProgressRev";


function Reviews() {
  return (
    <div className="flex gap-5 justify-between flex-wrap pb-9 border-b border-grayMedium/20 mb-10">
      <div className="w-full lg:w-[410px]">
        <h2 className=" relative text-xl lg:text-[24px] mb-3">Customer reviews</h2>
        <div className="flex items-center gap-3 mb-2">
          <Rating
            classNames={{ starSymbol: "rounded-md " }}
            color="#88BA52"
            value={4.8}
            fractions={10}
            readOnly
          />
          <p className="text-sm lg:text-base">4.6 Out of 5</p>
        </div>
        <p className="text-[14px] font-Regular">Based on 110 user ratings</p>
        <div className="flex flex-col gap-4 mt-5 mb-4 pb-5 border-b border-grayBack">
          <div className="flex items-center gap-2 lg:gap-4">
            <h4 className="text-xs lg:text-[14px] font-Regular text-grayMedium">
              5 Stars{" "}
            </h4>
            <ProgressRev val={75} />
          </div>
          <div className="flex items-center gap-2 lg:gap-4">
            <h4 className="text-xs lg:text-[14px] font-Regular text-grayMedium">
              4 Stars{" "}
            </h4>
            <ProgressRev val={13} />
          </div>
          <div className="flex items-center gap-2 lg:gap-4">
            <h4 className="text-xs lg:text-[14px] font-Regular text-grayMedium">
              3 Stars{" "}
            </h4>
            <ProgressRev val={6} />
          </div>
          <div className="flex items-center gap-2 lg:gap-4">
            <h4 className="text-xs lg:text-[14px] font-Regular text-grayMedium">
              2 Stars{" "}
            </h4>
            <ProgressRev val={2} />
          </div>
          <div className="flex items-center gap-2 lg:gap-4">
            <h4 className="text-xs lg:text-[14px] font-Regular text-grayMedium">
              1 Stars{" "}
            </h4>
            <ProgressRev val={4} />
          </div>
        </div>
        <h4 className=" relative text-base lg:text-[24px] mb-3">Review this product</h4>
        <p className="text-[14px] font-Regular text-grayMedium mb-6">
          Share your thoughts with other customers
        </p>
        <Button className={"bg-grayBack text-black border-none w-full lg:w-[90%] h-10"}>
          Write review
        </Button>
      </div>
      <div className="w-[800px] max-w-full">
        <h2 className=" relative text-xl lg:text-[24px] mb-10">
          Top reviews from neatherland{" "}
        </h2>
        <div className="flex flex-col gap-7 mb-7">
          <CardReviews />
          <CardReviews />
          <CardReviews />
        </div>
        <button className="px-8 py-3 text-nowrap duration-300 hover:shadow-md leading-4 rounded-xl text-sm lg:text-base border border-black text-center">
          Show all 19 reviews
        </button>
      </div>
    </div>
  );
}

export default Reviews;
