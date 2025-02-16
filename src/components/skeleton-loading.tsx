import { Skeleton } from "@mantine/core";
import React from "react";
import { cn } from "../lib/utils";

function SkeletonLoading({ className = "", ...props }: { className?: string }) {
  return (
    <Skeleton
      className={cn(` rounded-xl md:rounded-3xl w-full flex-1 md:flex-none min-w-[162px] sml:min-w-[200px] sml:w-[200px] md:w-[270px] h-[200px] sml:h-[260px] md:h-[350px] `,className)}
      {...props}
      animate={true}
 
    />
  );
}

export default SkeletonLoading;
