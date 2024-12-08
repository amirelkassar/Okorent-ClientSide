"use client";
import Logo from "@/src/components/logo";
import React from "react";
import SignupView from "./_components/signup-view";
function PageLogin() {
  return (
    <div className="flex-1 pt-4 lgl:pt-20 pb-8 md:pb-16  flex  min-h-full justify-center lgl:justify-start">
      <div className="max-w-[470px] w-full flex flex-col gap-4">
        <Logo theme="green" />
        <SignupView />
      </div>
    </div>
  );
}

export default PageLogin;
