import React from "react";
import CardAds from "../_components/card-ads";

function page() {
  return (
    <div className="mb-section">
      <div className="flex items-center gap-5 mb-10 w-fit md:justify-start justify-between">
        <h2 className="text-xl lg:text-[32px] ">Ongoing Ads</h2>
      </div>
      <div className="flex flex-wrap gap-6 ">
        <CardAds product={{}} />
        <CardAds product={{}} />
        <CardAds product={{}} />
        <CardAds product={{}} />
      </div>
    </div>
  );
}

export default page;
