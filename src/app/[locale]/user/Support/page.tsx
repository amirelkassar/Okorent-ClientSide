import React from "react";
import LayoutSupport from "./_components/layout-support";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import ClockIcon from "@/src/assets/icons/clock";

function page() {
  return (
    <LayoutSupport>
      <div>
        <div className="flex items-center  gap-4 flex-wrap mb-section">
          <h3 className=" text-lg md:text-xl mdl:text-[32px] font-SemiBold">
            Support
          </h3>
          <Link
            href={ROUTES.ADMIN.ADSPRICING}
            className="text-sm border duration-300 hover:shadow-md border-black h-10 min-w-[140px] rounded-xl px-4 py-2 flex items-center gap-2"
          >
            <ClockIcon className="w-4 h-auto rotate-180" />
            Support History
          </Link>
        </div>
      </div>
    </LayoutSupport>
  );
}

export default page;
