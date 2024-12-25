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


function FAQ({ dataFAQ = [] }: { dataFAQ?: ProcessItem[] }) {
  const items = dataFAQ.map((item: any, i: number) => (
    <Accordion.Item key={i} value={i.toString()}>
      <Accordion.Control className="text-base lg:text-[20px] py-2 max-w-[840px] px-0">
        {item.question}
      </Accordion.Control>
      <Accordion.Panel>
        <ul className="flex flex-col gap-5 max-w-[840px]">
          <li>
            <h4 className="text-base font-Regular mb-1">{item.answer}</h4>
          </li>
        </ul>
      </Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <div className="mb-section">
      <h2 className=" relative text-[20px] mb-4">FAQ</h2>
      <Accordion classNames={{ control: "hover:bg-transparent" }}>
        {items}
      </Accordion>
    </div>
  );
}

export default FAQ;
