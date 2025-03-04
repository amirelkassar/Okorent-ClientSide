import React from "react";
import SkeletonLoading from "./skeleton-loading";

function LoadingChat() {
  return (
    <div className="flex flex-col max-w-[300px] ">
      <div className="flex gap-2  p-2  items-start flex-row w-full">
        <SkeletonLoading className="!min-w-10  !w-11  lg:!w-14 !h-11 lg:!h-14  !rounded-full" />
        <div className="mb-2 flex-1  ">
          <SkeletonLoading className=" w-full max-w-[200px] mb-3 flex-1 !h-4  rounded-xl" />
          <SkeletonLoading className=" w-full max-w-[200px] flex-1 !h-3  rounded-xl" />
        </div>
      </div>
      <div className="flex gap-2  p-2  items-start flex-row w-full">
        <SkeletonLoading className="!min-w-10  !w-11  lg:!w-14 !h-11 lg:!h-14  !rounded-full" />
        <div className="mb-2 flex-1  ">
          <SkeletonLoading className=" w-full max-w-[200px] mb-3 flex-1 !h-4  rounded-xl" />
          <SkeletonLoading className=" w-full max-w-[200px] flex-1 !h-3  rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default LoadingChat;
