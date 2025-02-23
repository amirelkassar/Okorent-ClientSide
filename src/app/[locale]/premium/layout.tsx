import React from "react";
import NavLinks from "./_components/navLinks";
import Nav from "@/src/components/nav";
import Footer from "@/src/components/footer";
import ROUTES from "@/src/routes";

interface layoutProps {
  children: React.ReactNode;
}
function layout({ children }: layoutProps) {
  return (
    <div className="font-Medium min-h-[100vh]  text-black   mx-auto ">
      <div className="max-w-[1600px] mx-auto ">
        <Nav linkLogo={ROUTES.USER.HOMEPAGE} />
        <main className="px-4 xl:px-[60px] min-h-[calc(100vh-150px)] mt-3 lg:mt-0">
          <NavLinks />
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default layout;
