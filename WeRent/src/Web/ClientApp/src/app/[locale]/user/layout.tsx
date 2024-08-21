import React from "react";

import NavLinks from "./_components/navLinks";
import { before } from "node:test";
import Nav from "@/src/components/nav";
import Footer from "@/src/components/footer";
import ROUTES from "@/src/routes";

interface layoutProps {
  children: React.ReactNode;
}
function layout({ children }: layoutProps) {
  return (
    <div className="min-h-[100vh] ">
      <div className="max-w-screen-2xl mx-auto">
        <Nav linkLogo={ROUTES.USER.HOMEPAGE} />
        <main className="px-4 lgl:px-16 min-h-[calc(100vh-150px)]">
          <NavLinks />
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default layout;
