"use client";
import React from "react";
import { Link } from "../navigation";
export interface DataProps {
  title: string;
  icon: React.JSX.Element;
  onclick: (ids: any) => void;
  link?: string | undefined;
}
export interface EventsProps {
  item: DataProps;
  ids: any;
}
function Events({ item, ids }: EventsProps) {
  if (item.link) {
    return (
      <Link
        href={item.link || "#"}
        className=" px-3 mdl:px-4 min-h-10 bg-blueLight duration-300 hover:shadow-lg cursor-pointer rounded-xl flex items-center gap-2"
      >
        {item.icon}
        <p
          className={`${
            item.title.toLowerCase() === "delete" ? "text-red" : "text-blue"
          }  text-sm`}
        >
          {item.title}
        </p>
      </Link>
    );
  } else {
    return (
      <div
        onClick={() => {
          item.onclick(ids);
        }}
        className="px-3 mdl:px-4 min-h-10 bg-blueLight duration-300 hover:shadow-lg cursor-pointer rounded-xl flex items-center gap-2"
      >
        {item.icon}
        <p
          className={`${
            item.title.toLowerCase() === "delete" ||
            item.title.toLowerCase() === "cancel"
              ? "text-red"
              : "text-blue"
          }  text-sm`}
        >
          {item.title}
        </p>
      </div>
    );
  }
}

export default Events;
