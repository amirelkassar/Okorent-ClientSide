import StarIcon from "@/src/assets/icons/star";
import Image from "next/image";
import React from "react";
import Avatar from "@/src/assets/images/avatar.png";
import DeleteIcon from "@/src/assets/icons/delete";
interface CardReviewProps {
  edit: boolean;
}
function CardReview({ edit }: CardReviewProps) {
  const getStar = (num: number) => {
    const stars = [];
    for (let i = 1; i <= num; i++) {
      stars.push(<StarIcon key={i} className={"w-[18px]  h-auto"} />);
    }
    return stars;
  };
  return (
    <div className="py-6 px-4 rounded-3xl border border-black max-w-[338px]">
      <p className="mb-3 text-[14px] text-grayMedium">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting
      </p>
      <div className="flex items-center gap-2 mb-5">{getStar(4)}</div>
      <div className="flex justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <Image
            alt="user"
            src={Avatar}
            priority
            className=" size-[40px] rounded-[50%] object-cover object-top"
          />
          <div>
            <h4 className="text-grayMedium text-[14px] font-Medium">
              Sara Johnathan
            </h4>
            <p className="text-grayMedium text-[14px] font-ExtraLight">
              Verified User
            </p>
          </div>
        </div>
        {edit && (
          <button className="text-grayMedium text-base shadow-sm bg-grayBack rounded-xl px-3 min-h-10 flex items-center justify-center gap-2">
            <DeleteIcon className="h-[14px] w-auto" />
            <p>Delete</p>
          </button>
        )}
      </div>
    </div>
  );
}

export default CardReview;
