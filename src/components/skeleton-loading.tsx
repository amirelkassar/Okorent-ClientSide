import { Skeleton } from "@mantine/core";
import React from "react";

function SkeletonLoading({ className = "", ...props }: { className?: string }) {
  return (
    <Skeleton
      className={` w-full sm:w-[210px] md:w-[270px] h-[260px] md:h-[350px]  ${className}`}
      {...props}
      animate={true}
      radius="xl"
    />
  );
}

export default SkeletonLoading;
