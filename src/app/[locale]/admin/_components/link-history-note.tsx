import ClockIcon from "@/src/assets/icons/clock";
import { Link } from "@/src/navigation";
import React from "react";

function LinkHistoryNote({ link = "#" }: { link: string }) {
  return (
    <Link
      href={link}
      className=" w-fit h-7 md:h-9 rounded-lg border gap-2 border-black flex items-center justify-center py-1 px-3 duration-300 hover:shadow-md"
    >
      <ClockIcon className="md:w-4 w-3 h-auto" />
      <p className="text-xs md:text-sm font-SemiBold">History Notes</p>
    </Link>
  );
}

export default LinkHistoryNote;
