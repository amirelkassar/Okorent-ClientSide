import React from "react";
import RowAds from "./_components/row-ads";

function Page() {
  return (
    <div className="mb-section">
      <RowAds title="Ongoing Ads" products={[{},{}]} />
      <RowAds title="Completed Ads" products={[{},{},{},{},{}]} />
    </div>
  );
}

export default Page;
