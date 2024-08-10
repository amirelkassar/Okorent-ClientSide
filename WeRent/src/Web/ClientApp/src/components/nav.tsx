import LangIcon from "@/src/assets/icons/lang";
import LogoBlack from "@/src/assets/icons/logoBlack";
import NotificationIcon from "@/src/assets/icons/notfication";
import React from "react";
import MenuProfile from "./menuProfile";

function Nav() {
  return (
    <nav className="px-16 py-8 flex items-center justify-between gap-4">
      <div>
        <LogoBlack />
      </div>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-[50%] bg-[#E5F1FB] p-2 relative flex items-center justify-center">
          <p className="text-white text-[8px] flex items-center border border-[#E5F1FB] justify-center bg-red min-w-[12px] w-fit h-[12px] aspect-[1/1] rounded-[50%] p-[2px] absolute top-2 right-2">
            1
          </p>
          <NotificationIcon />
        </div>
        <div className="w-10 h-10 rounded-[50%] bg-[#E5F1FB] p-2 relative flex items-center justify-center">
          <LangIcon />
        </div>
        <MenuProfile />
      </div>
    </nav>
  );
}

export default Nav;
