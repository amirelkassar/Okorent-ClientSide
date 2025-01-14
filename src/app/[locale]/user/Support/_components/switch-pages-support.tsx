"use client";
import { usePathname, useRouter } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { Tabs } from "@mantine/core";
import React, { memo } from "react";

function SwitchPagesSupport() {
  const router = useRouter();
  const pathname = usePathname();

  const handelChangeSwitch = (e: any) => {
    switch (e) {
      case "Support":
        router.push(ROUTES.USER.SUPPORT);
        break;
      case "FAQ":
        router.push(ROUTES.USER.SUPPORTFAQ);
        break;
      case "Contact":
        router.push(ROUTES.USER.SUPPORTCONTACT);
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
          tab: "border-2 h-9 rounded-xl border-solid data-[active]:border-[#a9c788] px-2 md:px-6  border-transparent duration-500  hover:border-green",
        }}
        value={
          pathname === ROUTES.USER.SUPPORT ||
          pathname === ROUTES.USER.SUPPORTHISTORY
            ? "Support"
            : pathname === ROUTES.USER.SUPPORTFAQ
            ? "FAQ"
            : pathname === ROUTES.USER.SUPPORTCONTACT
            ? "Contact "
            : null
        }
      >
        <Tabs.List>
          <Tabs.Tab value="Support">Support</Tabs.Tab>
          <Tabs.Tab value="FAQ">FAQ</Tabs.Tab>
          <Tabs.Tab value="Contact ">Contact </Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </div>
  );
}

export default memo(SwitchPagesSupport);
