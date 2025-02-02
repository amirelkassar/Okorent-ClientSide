'use client'
import React from "react";
import teamImg from "@/src/assets/images/team.png";
import Image from "next/image";
const dataTeam = [
  {
    id: 0,
    name: "Thomas Carmo",
    titleJob: "Co Founder",
    image: teamImg,
    bg: "blue",
  },
  {
    id: 1,
    name: "Thomas Carmo",
    titleJob: "Co Founder",
    image: teamImg,
    bg: "green",
  },
  {
    id: 2,
    name: "Thomas Carmo",
    titleJob: "Co Founder",
    image: teamImg,
    bg: "black",
  },
];
function Team() {
  return (
    <div className="py-7 mb-1 mdl:mb-12">
      <h2 className=" text-2xl lg:text-3xl text-center mb-8">Meet out team</h2>
      <div className="flex justify-between gap-5 max-w-[900px] mx-auto overflow-x-auto hideScroll">
        {dataTeam.map((item, i) => {
         

          return (
            <div className="w-[252px] min-w-[190px]" key={i}>
              <div
                className={`w-full mb-5 relative before:content-[''] before:z-0 before:absolute before:w-full before:h-[75%] before:rounded-[32px] before:opacity-10 before:bottom-0 before:left-1/2 before:-translate-x-1/2 ${
                  (i + 1) % 3 === 0 ? "before:bg-black" : (i + 1) % 3 === 1
                    ? "before:bg-blue"
                    : "before:bg-green"
                }  `}
              >
                <Image
                  src={item.image}
                  alt="team"
                  className="w-[calc(100%-20px)] block mx-auto relative h-auto z-10"
                />
              </div>
              <div className=" relative">
                <h3 className=" text-sm lg:text-base font-Bold text-center">{item.name}</h3>
                <p className="text-sm lg:text-base font-Regular text-center text-blue">
                  {item.titleJob}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Team;
