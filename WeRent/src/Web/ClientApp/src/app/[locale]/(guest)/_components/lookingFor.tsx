import RentSwitch from "@/src/components/RentSwitch";
import React from "react";
import star from "@/src/assets/images/star.png";
import money from "@/src/assets/images/money.png";
import plant from "@/src/assets/images/plant.png";
import Image from "next/image";
import Button from "@/src/components/button";
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
function LookingFor() {
  return (
    <div className=" relative z-[2]">
      <h2 className="text-[48px]  mb-3 text-center">
        What are you looking for
      </h2>
      <div className="mx-auto mb-8 w-fit">
        <RentSwitch typeUser="guest" />
      </div>
      <div className="flex items-center gap-6 justify-between lg:max-w-[90%] w-full mx-auto">
        {dataLookingFor.map((item, i) => {
          return (
            <div className="max-w-[330px] mx-auto" key={i}>
              <div className=" rounded-full p-5 flex items-center justify-center size-[210px] bg-green/5 ">
                <div className="bg-green/5 rounded-full w-full h-full p-1 size-[170px] flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className=" h-auto w-[112px] max-w-full max-h-[130px] object-contain"
                  />
                </div>
              </div>
              <h3 className="text-lg mb-2 text-center">{item.title}</h3>
              <p className="text-base text-grayMedium  text-center">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
      <Button className={"mx-auto w-fit mt-10 px-7 h-10"}>Rent an Item</Button>
    </div>
  );
}

export default LookingFor;
