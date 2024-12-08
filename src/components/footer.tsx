import FacebookIcon from "@/src/assets/icons/facebook";
import InstaIcon from "@/src/assets/icons/insta";
import LinkedIcon from "@/src/assets/icons/linked";
import SocialIcon from "@/src/assets/icons/social";
import { Link } from "@/src/navigation";
import React from "react";

function Footer() {
  return (
    <footer className="px-6 lg:px-16 py-2 lg:py-4  bg-[#012929] ">
      <div className=" max-w-screen-2xl mx-auto flex items-center justify-between ">
        <div className="text-white text-[10px] md:text-[16px] ">
          <span className="text-[#B6BFC6]  font-Light"> ©2025</span> Okorent.com
        </div>
        <ul className="flex items-center gap-2">
          <li>
            <Link
              href=""
              className="   w-4 md:h-6 md:w-6 h-4 rounded-full border border-white p-[4px] md:p-[6px] flex items-center justify-center hover:bg-green hover:border-green duration-300"
            >
              <FacebookIcon />
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="w-4 md:h-6 md:w-6 h-4 rounded-full border border-white p-[4px] md:p-[6px] flex items-center justify-center hover:bg-green hover:border-green duration-300"
            >
              <InstaIcon />
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="w-4 md:h-6 md:w-6 h-4 rounded-full border border-white p-[4px] md:p-[6px] flex items-center justify-center hover:bg-green hover:border-green duration-300"
            >
              <LinkedIcon />
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="w-4 md:h-6 md:w-6 h-4 rounded-full border border-white p-[4px] md:p-[6px] flex items-center justify-center hover:bg-green hover:border-green duration-300"
            >
              <SocialIcon />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
