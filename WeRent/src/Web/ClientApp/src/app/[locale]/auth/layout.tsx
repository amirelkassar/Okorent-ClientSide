import React from "react";
import SliderAuth from "./_components/sliderAuth";
interface LayoutAuth {
  children: React.ReactNode;
}
function layout({ children }: LayoutAuth) {
  return (
    <div className="flex  gap-10 px-3 py-5">
      <SliderAuth />
      {children}
    </div>
  );
}

export default layout;
