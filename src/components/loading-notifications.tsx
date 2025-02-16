import React from "react";
import SkeletonLoading from "./skeleton-loading";

function LoadingNotifications() {
  return (
    <div className="flex flex-col ">
      <div className="flex gap-3  p-4  items-start flex-row max-w-[300px]">
        <SkeletonLoading className="min-w-10  !w-10 !h-10  rounded-full" />
        <div className="mb-1  ">
          <SkeletonLoading className=" w-[200px] max-w-[200px] mb-4 flex-1 !h-5  rounded-xl" />
          <SkeletonLoading className=" w-[200px] max-w-[200px] flex-1 !h-5  rounded-xl" />
        </div>
      </div>
      <div className="flex gap-3  p-4  items-start flex-row max-w-[300px]">
        <SkeletonLoading className="min-w-10  !w-10 !h-10  rounded-full" />
        <div className="mb-2  ">
          <SkeletonLoading className=" w-[200px] max-w-[200px] mb-4 flex-1 !h-5  rounded-xl" />
          <SkeletonLoading className=" w-[200px] max-w-[200px] flex-1 !h-5  rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default LoadingNotifications;
