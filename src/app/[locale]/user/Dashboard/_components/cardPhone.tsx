import React from "react";
import placTableProduct from "@/src/assets/images/placTableProduct.png";
import Image from "next/image";
import CardStatus from "@/src/components/cardStatus";
import { getDate } from "@/src/lib/utils";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
interface PhoneProps {
  name: string;
  endDate: string;
  leftPeriod: string;
  image: string;
  id: string;
}
interface CardPhoneProps {
  data: PhoneProps;
}
function CardPhone({ data }: CardPhoneProps) {
  return (
    <div className="flex items-center justify-between gap-3 max-w-full">
      <div className="flex items-center justify-between gap-2 md:gap-3 max-w-[calc(100%-70px)]">
        <div className=" size-11  md:size-[50px] min-w-11 md:min-w-[50px] rounded-full bg-grayBack flex items-center justify-center p-[6px]">
          <Image
            alt="phone"
            src={data.image || placTableProduct}
            priority
            width={100}
            height={100}
            className="h-full w-auto object-cover rounded-full"
          />
        </div>
        <div>
          <h4 className="text-xs lg:text-[16px] font-SemiBold truncate max-w-[200px] md:max-w-[270px]">{data.name} dfg df gdf gfdg dfg fdg dfg sdf dsf df sfdg dfg</h4>
          <h5 className="text-grayMedium text-[12px] lg:text-[14px] font-Regular mb-1">
            Ending Date:{" "}
            <span className="font-SemiBold">
              {" "}
              {getDate(data.endDate).fullYear}
            </span>
          </h5>
          {data.leftPeriod.toLocaleLowerCase() === "1 day" ||
          data.leftPeriod.toLocaleLowerCase() === "0 days" ? (
            <CardStatus title={data.leftPeriod} type="red" />
          ) : (
            <CardStatus title={data.leftPeriod} type="blue" />
          )}
        </div>
      </div>
      <Link
        href={ROUTES.USER.ORDERID(data.id)}
        className="text-blue underline text-[14px] font-Regular"
      >
        View
      </Link>
    </div>
  );
}

export default CardPhone;
