"use client";

import { useRouter } from "@/src/navigation";
import ROUTES from "@/src/routes";


import { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    router.push(ROUTES.AUTH.LOGIN);
  }, []);
  return null;
};

export default Page;
