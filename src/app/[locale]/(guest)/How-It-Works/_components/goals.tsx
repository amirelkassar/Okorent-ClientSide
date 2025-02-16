import React from "react";
import water from "@/src/assets/images/water.png";
import co from "@/src/assets/images/co.png";
import waste from "@/src/assets/images/waste.png";
import Image from "next/image";
const dataGoals = [
  {
    id: 1,
    title: "-65 Million",
    decroptions: "Liters of Water",
    image: water,
  },
  {
    id: 2,
    title: "-42 Million",
    decroptions: "KG og CO2eq",
    image: co,
  },
  {
    id: 1,
    title: "-833,000 ",
    decroptions: "KG of Waste",
    image: waste,
  },
];
function Goals() {
  return (
    <div className=" py-12 mdl:py-20 lg:py-32 relative mapBefore before:absolute before:left-1/2 before:top-1/2 before:bg-no-repeat before:rotate-[26deg] before:-translate-x-1/2 before:-translate-y-1/2 before:h-0 before:hidden lg:before:block lg:before:h-full before:bg-center before:w-0 lg:before:w-full ">
      <h2 className="text-2xl lg:text-3xl text-center max-w-[460px] mx-auto relative">
        We support the worlds sustainable development goals
      </h2>
      <div className=" mt-9 lg:mt-16 flex items-center justify-between gap-2 md:gap-5 relative lg:max-w-[90%] mx-auto">
        {dataGoals.map((goal, i) => {
          return (
            <div
              key={i}
              className="bg-white duration-200 hover:shadow-lg hover:-translate-y-1 w-[300px] rounded-2xl shadow-md py-3 lg:py-7 px-2 lg:px-6 flex items-center justify-center flex-col"
            >
              <div className=" size-12 lg:size-[100px] rounded-full bg-grayBack/50 flex items-center justify-center lg:p-2">
                <div className=" rounded-full bg-grayBack/90 size-10 lg:size-[84px] flex items-center justify-center">
                  <Image
                    src={goal.image}
                    alt={goal.title}
                    className="lg:max-w-full max-w-9  h-auto max-h-6 lg:max-h-[50px] object-contain"
                  />
                </div>
              </div>
              <h3 className="text-base lg:text-2xl text-center mb-1 lg:mb-2">{goal.title}</h3>
              <p className="text-center text-sm lg:text-xl font-Regular text-grayMedium">
                {goal.decroptions}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Goals;
