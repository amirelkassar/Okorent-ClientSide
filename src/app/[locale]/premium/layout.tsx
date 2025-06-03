'use client';

import React from "react";
import Footer from "@/src/components/footer";
import NavLinks from "./_components/navLinks";
import { NotificationsHub } from "@/src/components/notifications-hub";
import Nav from "./_components/nav";
import { PremiumGuard } from "@/src/components/premium-guard";
// import LoadingSpinner from "@/src/components/loading-spinner";

interface layoutProps {
  children: React.ReactNode;
}

function layout({ children }: layoutProps) {
  return (
    <PremiumGuard
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-green border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
      redirectOnFailure={true}
    >
      <div className="font-Medium min-h-[100vh] text-black mx-auto">
        <NotificationsHub />
        <Nav />
        <NavLinks />
        <div className="max-w-[1600px] mx-auto">
          <main className="px-4 xl:px-[60px] min-h-[calc(100vh-130px)] md:min-h-[calc(100vh-150px)] mt-3 lg:mt-0">
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </PremiumGuard>
  );
}

export default layout;
