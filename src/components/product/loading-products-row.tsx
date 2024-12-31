import React from "react";
import SkeletonLoading from "../skeleton-loading";

function LoadingProductsRow({
  number = 4,
  oneLine,
}: {
  number?: number;
  oneLine?: boolean;
}) {
  return (
    <div
      className={`flex gap-3 lg:gap-4  mb-section ${
        oneLine ? "" : "flex-wrap "
      }`}
    >
      <SkeletonLoading />
      <SkeletonLoading />
      <SkeletonLoading />
      <SkeletonLoading />
      {number === 5 && <SkeletonLoading />}
    </div>
  );
}

export default LoadingProductsRow;
