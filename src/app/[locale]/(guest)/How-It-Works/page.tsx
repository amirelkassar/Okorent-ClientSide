import React from "react";
import LookingFor from "../_components/lookingFor";
import imgUser from "@/src/assets/images/avatar.png";
import Review from "@/src/components/Review";
import Goals from "./_components/goals";

const ReviewData = [
  {
    name: "Sara Johnathan",
    image: imgUser,
    stateUser: "Verified User",
    title:
      "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting",
    rate: 5,
  },
  {
    name: "Sara Johnathan",
    image: imgUser,
    stateUser: "Verified User",
    title:
      "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting",
    rate: 5,
  },
  {
    name: "Sara Johnathan",
    image: imgUser,
    stateUser: "Verified User",
    title:
      "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting",
    rate: 5,
  },
  {
    name: "Sara Johnathan",
    image: imgUser,
    stateUser: "Verified User",
    title:
      "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting",
    rate: 5,
  },
  {
    name: "Sara Johnathan",
    image: imgUser,
    stateUser: "Verified User",
    title:
      "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting",
    rate: 5,
  },
  {
    name: "Sara Johnathan",
    image: imgUser,
    stateUser: "Verified User",
    title:
      "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting",
    rate: 5,
  },
  {
    name: "Sara Johnathan",
    image: imgUser,
    stateUser: "Verified User",
    title:
      "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting",
    rate: 5,
  },
  {
    name: "Sara Johnathan",
    image: imgUser,
    stateUser: "Verified User",
    title:
      "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting",
    rate: 5,
  },
];
function page() {
  return (
    <div>
      <LookingFor />
      <Goals />
      <div className="mb-12 lg:mb-16 mt-4 lg:mt-10 relative">
        <h2 className="text-xl text-center lg:text-3xl mb-4 lg:mb-14">
          What our users say
        </h2>

        <div className="flex gap-5 lg:gap-8 md:flex-wrap   overflow-x-auto hideScroll">
          {ReviewData.map((item, i) => {
            return <Review key={i} data={{}} idUser={''} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default page;
