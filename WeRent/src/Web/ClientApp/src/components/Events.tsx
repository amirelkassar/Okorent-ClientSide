import React from "react";
export interface DataProps {
  title: string;
  icon: React.JSX.Element;
  onclick: (ids: any) => void;
}
export interface EventsProps {
  item: DataProps;
  ids:any;
}
function Events({ item, ids }: EventsProps) {
  return (
    <div
      onClick={() => {
        item.onclick(ids);
      }}
      className="px-4 min-h-10 bg-blueLight duration-300 hover:shadow-lg cursor-pointer rounded-xl flex items-center gap-2"
    >
      {item.icon}
      <p
        className={`${
          item.title.toLowerCase() === "delete" ? "text-red" : "text-blue"
        }  text-[14px]`}
      >
        {item.title}
      </p>
    </div>
  );
}

export default Events;
