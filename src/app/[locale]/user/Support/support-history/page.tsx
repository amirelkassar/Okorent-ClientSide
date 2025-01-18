import React from "react";
import LayoutSupport from "../_components/layout-support";
import { Link } from "@/src/navigation";
import SupportIcon from "@/src/assets/icons/Support";
import ROUTES from "@/src/routes";
import Card from "@/src/components/card";
import { DataTable } from "@/src/components/data-table";
import { columns } from "./_components/column";
import CardPhoneSupport from "./_components/card-phone-support";
interface SupportDataProps {
  id: number;
  Category: string;
  Status: string;
  Topic: string;
  date: string;
}
const SupportData: SupportDataProps[] = [
  {
    id: 1,
    Category: "Complaint",
    Status: "In Progress",
    Topic: "I want help in adjusting my listings ",
    date: "Today | 05:30 PM",
  },
  {
    id: 2,
    Category: "Sales",
    Status: "New",
    Topic: "I want help in adjusting my listings ",
    date: "Today | 05:30 PM",
  },
  {
    id: 3,
    Category: "Complaint",
    Status: "In Progress",
    Topic: "I want help in adjusting my listings ",
    date: "Today | 05:30 PM",
  },
  {
    id: 4,
    Category: "Sales",
    Status: "Solved",
    Topic: "I want help in adjusting my listings ",
    date: "Today | 05:30 PM",
  },
];
function page() {
  return (
    <LayoutSupport>
      <div className="flex items-center  gap-4 flex-wrap mb-section">
        <h3 className=" text-lg md:text-xl mdl:text-[32px] font-SemiBold">
          Support History
        </h3>
        <Link
          href={ROUTES.USER.SUPPORT}
          className="text-sm border justify-center duration-300 hover:shadow-md border-black h-10 min-w-[110px] rounded-xl px-4 py-2 flex items-center gap-2"
        >
          <SupportIcon className="w-4 h-auto " />
          Support
        </Link>
      </div>
      <Card className="mdl:p-11 rounded-2xl bg-transparent mdl:bg-white border-none mdl:border">
        <DataTable
          title=""
          data={SupportData}
          columns={columns}
          Component={CardPhoneSupport}
          functionSelect={[]}
        />
      </Card>
    </LayoutSupport>
  );
}

export default page;
