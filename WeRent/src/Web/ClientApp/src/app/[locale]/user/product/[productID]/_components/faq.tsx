"use client";
import { Accordion } from "@mantine/core";
import React from "react";
type SubItem = {
  title: string;
  description: string;
};
type ProcessItem = {
  id: number;
  title: string;
  details: SubItem[];
};

const processItems: ProcessItem[] = [
  {
    id: 1,
    title: "What is the Process",
    details: [
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    ],
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    details: [
        {
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
      ],
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit2",
    details: [
        {
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
       
      ],
  },
];
const items = processItems.map((item, i) => (
  <Accordion.Item key={i} value={item.id.toString()}>
    <Accordion.Control className="text-[20px] py-2 max-w-[840px]">{item.title}</Accordion.Control>
    <Accordion.Panel>
      <ul className="flex flex-col gap-5 max-w-[840px]">
        {item.details.map((det, j) => {
          return (
            <li key={j}>
              <h4 className="text-base font-Regular mb-1">
                {j + 1 + ". "} {det.title}
              </h4>
              <p className="text-grayMedium  text-[14px] font-Regular">{det.description}</p>
            </li>
          );
        })}
      </ul>
    </Accordion.Panel>
  </Accordion.Item>
));
function FAQ() {
  return (
    <div className="mb-16">
      <h2 className=" relative text-[24px] mb-8">FAQ</h2>
      <Accordion classNames={{control:'hover:bg-transparent'}}>{items}</Accordion>
    </div>
  );
}

export default FAQ;
