import React from "react";
import imgUser from "@/src/assets/images/avatar.png";
import Review from "@/src/components/Review";

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
];
function ReviewsProfile() {
  return (
    <div className=" mt-10 relative">
      <h2 className="text-2xl  lg:text-3xl mb-7">
        Customer Reviews about <span className="font-Bold">Mark</span>
      </h2>

      <div className="flex gap-3 lg:gap-4 md:flex-wrap overflow-x-auto hideScroll">
        {ReviewData.map((item, i) => {
          return (
            <Review
              key={i}
              name={item.name}
              image={item.image}
              stateUser={item.stateUser}
              title={item.title}
              rate={item.rate}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ReviewsProfile;
