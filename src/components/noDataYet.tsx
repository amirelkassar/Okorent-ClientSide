"use client";
import { useMemo } from "react";
import { usePathname } from "../navigation";
import ROUTES from "../routes";
import ErrorView from "./error-view";
import NoDataIcon from "../assets/icons/noData";
function NoDataYet() {
  const pathname = usePathname() || "";

  // const href = useMemo(() => {
  //   if (pathname.includes("admin")) return ROUTES.ADMIN.DASHBOARD;

  //   if (pathname.includes("user")) return ROUTES.USER.HOMEPAGE;
  // }, [pathname]);

  return (
    <ErrorView
      title="No Data Available"
      des="No data is currently available. Please try again later."
    >
      <NoDataIcon className="w-[480px] max-w-[80%] h-auto"/>
    </ErrorView>
  );
}

export default NoDataYet;
