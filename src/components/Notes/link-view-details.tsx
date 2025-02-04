import ViewIcon from "@/src/assets/icons/view";
import { Link, usePathname } from "@/src/navigation";
import ROUTES from "@/src/routes";
import React from "react";

function LinkViewDetails({ id }: { id: any }) {
  const path = usePathname();
  return (
    <Link
      href={
        path.includes(ROUTES.ADMIN.NOTESBOOKINGS)
          ? ROUTES.ADMIN.NOTESBOOKINGSDETAILS(id)
          : ROUTES.ADMIN.NOTESACCOUNTSDETAILS(id)
      }
    >
      <ViewIcon className="w-4 h-auto" />
    </Link>
  );
}

export default LinkViewDetails;
