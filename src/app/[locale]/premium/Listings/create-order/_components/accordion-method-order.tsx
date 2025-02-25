import PaymentsIcon from "@/src/assets/icons/payments";
import { Accordion } from "@mantine/core";
import React from "react";

function AccordionMethodOrder({
  title = "",
  icon,
  children,
}: {
  title: string;
  icon: () => React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Accordion.Item
      value={title}
      className="bg-white !mt-0 !border border-solid border-green/30 rounded-xl z-10 relative overflow-hidden hover:shadow-md duration-300"
    >
      <Accordion.Control
        classNames={{ label: "font-SemiBold" }}
        className="border-none text-black font-SemiBold h-14"
        icon={
          <div className="bg-blueLight/50 p-1 size-10 rounded-full flex items-center justify-center">
            <div className="size-8 rounded-full bg-blueLight flex items-center justify-center p-2">{icon()}</div>
          </div>
        }
      >
        {title}
      </Accordion.Control>
      <Accordion.Panel>{children}</Accordion.Panel>
    </Accordion.Item>
  );
}

export default AccordionMethodOrder;
