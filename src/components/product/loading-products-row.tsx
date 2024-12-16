import React from "react";
import SkeletonLoading from "../skeleton-loading";

function LoadingProductsRow({ number = 4 }: { number?: number }) {
  return (
    <div className="flex gap-3 lg:gap-4  flex-wrap mb-section">
      <SkeletonLoading />
      <SkeletonLoading />
      <SkeletonLoading />
      <SkeletonLoading />
      {number === 5 && <SkeletonLoading />}
    </div>
  );
}

export default LoadingProductsRow;
