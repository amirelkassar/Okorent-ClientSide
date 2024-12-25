import { Skeleton } from "@mantine/core";
import React from "react";
import { cn } from "../lib/utils";

function SkeletonLoading({ className = "", ...props }: { className?: string }) {
  return (
    <Skeleton
      className={cn(` w-full sm:w-[210px] md:w-[270px] h-[260px] md:h-[350px] `,className)}
      {...props}
      animate={true}
      radius="xl"
    />
  );
}

export default SkeletonLoading;
