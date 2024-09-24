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
    <div className="py-32 relative mapBefore before:absolute before:left-1/2 before:top-1/2 before:bg-no-repeat before:rotate-[26deg] before:-translate-x-1/2 before:-translate-y-1/2 before:h-full before:bg-center  before:w-full "
    
    >
      <h2 className="text-3xl text-center max-w-[460px] mx-auto relative">We support the worlds sustainable development goals</h2>
      <div className="mt-16 flex items-center justify-between gap-5 relative lg:max-w-[90%] mx-auto">
        {dataGoals.map((goal, i) => {
          return (
            <div
              key={i}
              className="bg-white duration-200 hover:shadow-lg hover:-translate-y-1 w-[300px] rounded-2xl shadow-md py-7 px-6 flex items-center justify-center flex-col"
            >
              <div className=" size-[100px] rounded-full bg-grayBack/50 flex items-center justify-center p-2">
                <div className=" rounded-full bg-grayBack/90 size-[84px] flex items-center justify-center">
                  <Image
                    src={goal.image}
                    alt={goal.title}
                    className="max-w-full object-contain"
                  />
                </div>
              </div>
              <h3 className="text-2xl text-center mb-2">{goal.title}</h3>
              <p className="text-center text-xl font-Regular text-grayMedium">
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
