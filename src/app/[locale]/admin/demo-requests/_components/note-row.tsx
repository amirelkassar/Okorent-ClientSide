import { getDate } from "@/src/lib/utils";
import React from "react";

function NoteRow({
  info = "Special Price",
  date = "Today| 05 : 30",
}: {
  info: string;
  date: string;
}) {
  return (
    <div className="flex  justify-between gap-3 pb-3 border-b border-grayBack last-of-type:border-none">
      <h4 className="text-sm mdl:text-base font-Regular">Note : {info}</h4>
      <p className="text-xs text-grayMedium min-w-fit mt-1">{getDate(date).fullYear}</p>
    </div>
  );
}

export default NoteRow;
