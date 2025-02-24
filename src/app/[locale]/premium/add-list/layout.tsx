import React from "react";
import ImgAddList from "./_components/imgAddList";
interface LayoutProps {
  children: React.ReactNode;
}
function layout({ children }: LayoutProps) {
  return (
    <div className="mb-section">
      <div className="flex items-center justify-between gap-4 mb-12 flex-wrap">
        <h2 className="headTitle !font-bold">List your item</h2>
      </div>
      <div className="flex items-start justify-between gap-6">
        {children}
        <ImgAddList />
      </div>
    </div>
  );
}

export default layout;
