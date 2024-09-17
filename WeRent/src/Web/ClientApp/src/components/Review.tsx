import { Rating } from "@mantine/core";
import Image, { StaticImageData } from "next/image";
import React from "react";
interface PropsReview {
  name: string;
  image: StaticImageData;
  stateUser: string;
  title: string;
  rate: number;
}
function Review({ name, image, stateUser, title ,rate}: PropsReview) {
  return (
    <div className="px-3 lg:px-4 py-5 lg:py-6 border border-black/60 rounded-3xl max-w-[328px] min-w-[290px]">
      <p className="text-xs lg:text-sm font-Regular text-grayMedium mb-3">{title}</p>
      <Rating color="#88BA52" value={rate} fractions={10} readOnly classNames={{ label:'me-1' }} />
      <div className="flex items-center gap-2 mt-5">
        <Image src={image} width={40} height={40} alt={name} className=" size-9 lg:size-10 rounded-full"/>
        <div>
            <h3 className="text-xs lg:text-sm text-grayMedium">{name}</h3>
            <p className="text-xs text-grayMedium font-Regular">{stateUser}</p>
        </div>
      </div>
    </div>
  );
}

export default Review;
