"use client";
import SwitchControl from "@/src/components/switch-control";
import { useRouter } from "@/src/navigation";
import ROUTES from "@/src/routes";
import React, { memo } from "react";

function SwitchPagesMaster() {
  const router = useRouter();

  const handelChangeSwitch = (e: any) => {
    switch (e) {
      case "Plans":
        router.push(ROUTES.ADMIN.PLANS);
        break;
      case "Categories":
        router.push(ROUTES.ADMIN.CATEGORIES);
        break;
      case "Banners":
        router.push(ROUTES.ADMIN.BANNERS);
    }
  };
  return (
    <div className="mx-auto mb-5 w-fit">
      <SwitchControl
        radius={"md"}
        options={[
          { label: "Plans", value: "Plans" },
          { label: "Categories", value: "Categories" },
          { label: "Banners", value: "Banners" },
        ]}
        size="lg"
        rootClassName="!w-auto lg:!w-[310px] !h-10"
        optionClassName="border-none before:hidden"
        onChange={handelChangeSwitch}
      />
    </div>
  );
}

export default memo(SwitchPagesMaster);
