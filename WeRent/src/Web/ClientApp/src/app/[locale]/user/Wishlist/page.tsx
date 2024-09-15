import React from "react";
import OneCardView from "./_components/oneCardView";


function page() {
   
  return (
    <div className="flex gap-x-12 mb-24 flex-wrap gap-y-8">
      <OneCardView />
      <OneCardView />
      <OneCardView />
      <OneCardView />
      <OneCardView />
      <OneCardView />
    
    </div>
  );
}

export default page;
