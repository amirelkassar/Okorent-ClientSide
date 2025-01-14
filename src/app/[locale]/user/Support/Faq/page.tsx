"use client";
import React from "react";
import LayoutSupport from "../_components/layout-support";
import { Accordion, rem } from "@mantine/core";
import PlusIcon from "@/src/assets/icons/plus";
const accordionData = [
  {
    id: "01",
    title: "Lorem ipsum dolor sit amet consectetur. Sagittis id.",
    content: `Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisi ullamcorper in facilisis consequat aliquam.

Id placerat dui habitasse quisque nisl tincidunt facilisi mi id. Dictum elit velit.`,
  },
  {
    id: "03",
    title: "Lorem ipsum dolor sit amet consectetur. Sagittis id.",
    content: "Content for section 3",
  },
  {
    id: "04",
    title: "Lorem ipsum dolor sit amet consectetur. Sagittis id.",
    content: "Content for section 4",
  },
  {
    id: "05",
    title: "Lorem ipsum dolor sit amet consectetur. Sagittis id.",
    content: "Content for section 5",
  },
  {
    id: "06",
    title: "Lorem ipsum dolor sit amet consectetur. Sagittis id.",
    content: "Content for section 6",
  },
];

function page() {
  return (
    <LayoutSupport>
      <h3 className=" text-lg md:text-xl mdl:text-[32px] font-SemiBold transform-none transition-none">
        FAQ
      </h3>
      <div className="my-section">
        <Accordion
          defaultValue="01"
          classNames={{
            root: "max-w-full w-full mx-auto p-1  space-y-8",
            item: "border border-gray-200 rounded-lg overflow-hidden bg-transparent",
            control:
              "w-full flex items-center justify-between pb-0 pt-0 ps-2 px-0 text-base mdl:text-2xl",
            label: "flex items-center gap-4 font-SemiBold",
            icon: "p-2 rounded",
            content: "px-6 pb-6 pt-4 text-sm mdl:text-xl font-Regular ps-16",
            chevron:
              " w-[50px] mdl:w-[86px] h-[72px] mdl:h-[80px] self-start  flex items-center justify-center !transform-none data-[rotate]:!bg-green bg-blueLight/80 rounded-e-lg",
          }}
          chevronPosition="right"
          className="AccordionFAQ"
        >
          {accordionData.map((item) => (
            <Accordion.Item key={item.id} value={item.id}>
              <Accordion.Control
                chevron={
                  <PlusIcon className=" w-4 mdl:w-6 h-auto" fill="currentColor" />
                }
                icon={
                  <span className="text-base mdl:text-2xl font-Bold w-5 mdl:w-8">
                    {item.id}
                  </span>
                }
              >
                {item.title}
              </Accordion.Control>
              <Accordion.Panel>{item.content}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </LayoutSupport>
  );
}

export default page;
