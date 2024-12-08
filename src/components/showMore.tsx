import React from "react";
import ArrowDownIcon from "../assets/icons/arrowDown";
import ShowMoreText from "react-show-more-text";

function ShowMore({
  children,
  lines,
}: {
  children: React.ReactNode;
  lines: number;
}) {
  return (
    <ShowMoreText
      lines={lines}
      more={
        <span className="text-black font-Regular inline-flex  items-center gap-1  cursor-pointer">
          <ArrowDownIcon /> Read more
        </span>
      }
      less={
        <span className="text-black inline-flex items-center gap-1 font-Regular  cursor-pointer">
          <ArrowDownIcon className="rotate-180" />
          Show less
        </span>
      }
      expanded={false}
      width={0}
    >
      {children}
    </ShowMoreText>
  );
}

export default ShowMore;
