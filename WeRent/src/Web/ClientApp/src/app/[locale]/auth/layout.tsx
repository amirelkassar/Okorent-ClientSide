import React from "react";
import SliderAuth from "./_components/sliderAuth";
interface LayoutAuth {
  children: React.ReactNode;
}
function layout({ children }: LayoutAuth) {
  return (
    <div className="flex h-screen  gap-28 px-3 py-5">
      <SliderAuth />
      {children}
    </div>
  );
}

export default layout;
