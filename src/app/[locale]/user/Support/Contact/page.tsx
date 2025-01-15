import React from "react";
import LayoutSupport from "../_components/layout-support";
import ContactPage from "@/src/components/contact-page";

function page() {
  return (
    <LayoutSupport>
      <h3 className=" text-lg md:text-xl mdl:text-[32px] font-SemiBold">
        Contact
      </h3>
      <ContactPage />
    </LayoutSupport>
  );
}

export default page;
