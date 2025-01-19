'use client';
import RentSwitch from "@/src/components/RentSwitch";
import React from "react";
import star from "@/src/assets/images/star.png";
import support from "@/src/assets/images/support.png";
import money from "@/src/assets/images/money.png";
import plant from "@/src/assets/images/plant.png";
import Management from "@/src/assets/images/managment.png";
import Image from "next/image";
import Button from "@/src/components/button";
import { useSwitchGuestRent } from "@/src/store/rent-slice";
import LinkGreen from "@/src/components/linkGreen";
import ROUTES from "@/src/routes";
const dataLookingFor = [
  {
    title: "Access More",
    description: "Access hundewreds of products",
    image: star,
  },
  {
    title: "Save Money",
    description: "Buy Less, Rent for a fraction of the cost",
    image: money,
  },
  {
    title: "Save the plant",
    description: "Live light, Reduce the waste",
    image: plant,
  },
];
const dataLookingFor2 = [
  {
    title: "Grow Your Rental Business",
    description:
      "Maximize your income and expand your reach by showcasing your products for rent.",
    image: money,
  },
  {
    title: "Hassle-Free Management",
    description:
      "Simplified tools to manage your listings and track your earnings.",
    image: Management,
  },
  {
    title: "Support Your Community",
    description:
      "Help others access the items they need while earning in the process.",
    image: support,
  },
];
function LookingFor() {
  const { isGuestRent } = useSwitchGuestRent();
  return (
    <div className=" relative z-[2]">
      <h2 className="text-2xl mdl:text-[48px] leading-normal mb-6  mdl:mb-3 text-center">
        What are you looking for
      </h2>
      <div className="mx-auto mb-8 w-fit">
        <RentSwitch typeUser="guest" />
      </div>
      {isGuestRent === "rent_out" ? (
        <div>
          <div className="flex items-center gap-3 mdl:gap-6 justify-between lg:max-w-[90%] w-full mx-auto">
            {dataLookingFor2.map((item, i) => {
              return (
                <div className="max-w-[330px] mx-auto" key={i}>
                  <div className=" rounded-full p-5 flex items-center justify-center mx-auto size-[90px] mdl:size-[210px] bg-green/5 ">
                    <div className="bg-green/5 rounded-full w-full h-full p-1 size-[72px] mdl:size-[170px] flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={item.title}
                        className=" h-auto w-[112px] max-w-full max-h-[130px] object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-sm mdl:text-lg mb-1 mdl:mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-xs mdl:text-base text-grayMedium  text-center">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
          <LinkGreen href={ROUTES.USER.ADDLIST} className={"mx-auto w-fit mt-7 mdl:mt-10 px-7 h-10"}>
            Add Listing
          </LinkGreen>
        </div>
      ) : (
        <div>
          <div className="flex items-center gap-3 mdl:gap-6 justify-between lg:max-w-[90%] w-full mx-auto">
            {dataLookingFor.map((item, i) => {
              return (
                <div className="max-w-[330px] mx-auto" key={i}>
                  <div className=" rounded-full p-5 flex items-center justify-center mx-auto size-[90px] mdl:size-[210px] bg-green/5 ">
                    <div className="bg-green/5 rounded-full w-full h-full p-1 size-[72px] mdl:size-[170px] flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={item.title}
                        className=" h-auto w-[112px] max-w-full max-h-[130px] object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-sm mdl:text-lg mb-1 mdl:mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-xs mdl:text-base text-grayMedium  text-center">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
          <Button className={"mx-auto w-fit mt-7 mdl:mt-10 px-7 h-10"}>
            Rent an Item
          </Button>
        </div>
      )}
    </div>
  );
}

export default LookingFor;
