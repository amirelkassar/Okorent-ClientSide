import React from "react";
import imgUser from "@/src/assets/images/avatar.png";
import Review from "@/src/components/Review";
import HeaderWho from "./_components/headerWho";
import NumberWho from "./_components/numberWho";
import Mission from "./_components/mission";
import Team from "./_components/team";

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
      <HeaderWho />
      <NumberWho />
      <Mission />
      <Team />

      <div className="mb-16 mt-10 relative">
        <h2 className="text-2xl text-center lg:text-3xl mb-14">
          What our users say
        </h2>
        <div className="flex gap-5 lg:gap-8 md:flex-wrap overflow-x-auto hideScroll">
          {ReviewData.map((item, i) => {
            return (
              <Review key={i} data={{}} idUser={''} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default page;
