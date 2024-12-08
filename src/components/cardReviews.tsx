"use client";
import Image from "next/image";
import React, { useState } from "react";
import man from "@/src/assets/images/person1.png";
import { Rating } from "@mantine/core";
import ShowMore from "@/src/components/showMore";
import InputTextarea from "./InputTextarea";
import Button from "./button";
import DeleteIcon from "../assets/icons/delete";
function CardReviews({ IsEdit = false }: { IsEdit?: boolean }) {
  const [expanded, setExpanded] = useState(false);
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
            <h3 className="text-base font-SemiBold">Saad</h3>
            <p className="text-[12px] text-black/80">October 2023</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <Rating
            color="#88BA52"
            value={4.6}
            fractions={IsEdit ? 1 : 10}
            readOnly={!IsEdit}
          />
          {!IsEdit && <p className="text-base">4.6</p>}
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
          <h3 className="text-sm lg:text-base">
            Slightly expensive, but the performance justifies the cost
          </h3>
          <div className="text-sm lg:text-base text-grayMedium font-Regular">
            <ShowMore lines={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do
            </ShowMore>
          </div>
        </>
      )}
    </div>
  );
}

export default CardReviews;
