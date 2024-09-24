import React from "react";
interface DescriptionProps {
  title: string;
  description: string;
}
function Description({ title, description }: DescriptionProps) {
  return (
    <div className="pb-5 border-b border-[#B6BFC64D]">
      <h3 className="text-base mb-2 font-SemiBold lg:text-xl">{title}</h3>
      <p className="text-grayMedium font-Regular text-sm lg:text-base">{description}</p>
    </div>
  );
}

export default Description;
