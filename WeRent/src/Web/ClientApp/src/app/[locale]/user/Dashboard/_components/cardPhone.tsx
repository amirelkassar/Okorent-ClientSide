import React from "react";
import phone from "@/src/assets/images/phone.png";
import Image from "next/image";
import CardStatus from "@/src/components/cardStatus";
interface PhoneProps {
  productName: string;
  endingDate: string;
  timeLeft: string;
}
interface CardPhoneProps {
  data: PhoneProps;
}
function CardPhone({ data }: CardPhoneProps) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center justify-between gap-3">
        <div className="size-[50px] rounded-full bg-grayBack flex items-center justify-center p-[6px]">
          <Image
            alt="phone"
            src={phone}
            priority
            className="h-full w-auto object-contain"
          />
        </div>
        <div>
          <h4 className="text-[16px] font-SemiBold">{data.productName}</h4>
          <h5 className="text-grayMedium text-[14px] font-Regular mb-1">
            Ending Date:{" "}
            <span className="font-SemiBold"> {data.endingDate}</span>
          </h5>
          {data.timeLeft.toLocaleLowerCase() === "one day left" ? (
            <CardStatus title={data.timeLeft} type="red" />
          ) : (
            <CardStatus title={data.timeLeft} type='blue' />
          )}
        </div>
      </div>
      <div className="text-blue underline text-[14px] font-Regular">View</div>
    </div>
  );
}

export default CardPhone;
