'use client'
import Image from "next/image";
import React, { useState } from "react";
import man from "@/src/assets/images/person1.png";
import { Rating, Spoiler } from "@mantine/core";
function CardReviews() {
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
          <Rating color="#88BA52" value={4.6} fractions={10} readOnly />
          <p className="text-base">4.6</p>
        </div>
      </div>
      <h3 className="text-base">
        Slightly expensive, but the performance justifies the cost
      </h3>
      <div className="text-base text-grayMedium font-Regular">
        <Spoiler
          showLabel="Read More"
          hideLabel="Read Less"
          transitionDuration={0}
          maxHeight={48}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Spoiler>
      </div>
    </div>
  );
}

export default CardReviews;
