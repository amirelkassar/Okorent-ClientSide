import Image from "next/image";
import React from "react";
import primum from "@/src/assets/images/primum.png";
import Button from "@/src/components/button";
import ImportIcon from "@/src/assets/icons/import";
interface LayoutProps {
  children: React.ReactNode;
}
function layout({ children }: LayoutProps) {
  return (
    <div className="mb-24">
      <div className="flex items-center justify-between gap-4 mb-12 flex-wrap">
        <h2 className="headTitle !font-bold">List your item</h2>
        <Button className={"gap-1 px-6"}>
          <ImportIcon />
          <p>Bulk Import</p>
        </Button>
      </div>
      <div className="flex items-start justify-between gap-6">
        {children}
        <div className="mt-4">
          <Image
            alt="primum"
            src={primum}
            priority
            width={486}
            height={956}
            className="w-[956] h-auto max-w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default layout;
