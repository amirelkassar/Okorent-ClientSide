"use client";
import { usePathname, useRouter } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { Tabs } from "@mantine/core";
import React, { memo } from "react";

function SwitchPagesMaster() {
  const router = useRouter();
  const pathname = usePathname();

  const handelChangeSwitch = (e: any) => {
    switch (e) {
      case "plans":
        router.push(ROUTES.ADMIN.MASTERDATA);
        break;
      case "categories":
        router.push(ROUTES.ADMIN.CATEGORIES);
        break;
      case "banners":
        router.push(ROUTES.ADMIN.BANNERS);
        break;
      case "ads":
        router.push(ROUTES.ADMIN.ADS);
        break;
    }
  };
  return (
    <div className="mx-auto mb-5 w-fit">
      <Tabs
        onChange={handelChangeSwitch}
        color="#88BA52"
        variant="pills"
        radius="lg"
        classNames={{
          root: "border p-[2px] rounded-xl border-solid border-green",
          tab: "border-2 h-9 rounded-xl border-solid data-[active]:border-[#a9c788] px-2 md:px-4  border-transparent duration-500  hover:border-green",
        }}
        value={
          pathname === ROUTES.ADMIN.MASTERDATA
            ? "plans"
            : pathname === ROUTES.ADMIN.CATEGORIES
            ? "categories"
            : pathname === ROUTES.ADMIN.BANNERS
            ? "banners"
            : (pathname === ROUTES.ADMIN.ADS|| pathname === ROUTES.ADMIN.ADSPRICING)
            ? "ads"
            : null
        }
      >
        <Tabs.List>
          <Tabs.Tab value="plans">Plans</Tabs.Tab>
          <Tabs.Tab value="categories">Categories</Tabs.Tab>
          <Tabs.Tab value="banners">Banners</Tabs.Tab>
          <Tabs.Tab value="ads">Ads</Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </div>
  );
}

export default memo(SwitchPagesMaster);
