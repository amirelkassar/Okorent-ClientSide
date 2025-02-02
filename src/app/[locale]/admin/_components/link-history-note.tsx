import ClockIcon from "@/src/assets/icons/clock";
import { Link } from "@/src/navigation";
import React from "react";

function LinkHistoryNote({ link = "#" }: { link: string }) {
  return (
    <Link
      href={link}
      className=" w-9 md:w-10 h-7 md:h-9 rounded-lg border border-black flex items-center justify-center p-1 duration-300 hover:shadow-md"
    >
      <ClockIcon className="md:w-5 w-4 h-auto" />
    </Link>
  );
}

export default LinkHistoryNote;
