import React from "react";
import NavLinks from "./_components/navLinks";
import NewsLetter from "./_components/newsletter";
import Footer from "@/src/components/footer";
import FooterGuest from "./_components/footer";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="font-Medium min-h-[100vh]  text-black   mx-auto ">
        <div className="max-w-[1600px] mx-auto ">
          <NavLinks />
          <main className="px-4 xl:px-12 overflow-hidden md:!overflow-visible  min-h-[calc(100vh-130px)] md:min-h-[calc(100vh-150px)] mt-5 lg:mt-4">
            {children}
          </main>
        </div>
        <NewsLetter />
        <FooterGuest />
        <Footer />
      </div>
    </div>
  );
}

export default layout;
