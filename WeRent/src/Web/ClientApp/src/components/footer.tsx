import FacebookIcon from "@/src/assets/icons/facebook";
import InstaIcon from "@/src/assets/icons/insta";
import LinkedIcon from "@/src/assets/icons/linked";
import SocialIcon from "@/src/assets/icons/social";
import { Link } from "@/src/navigation";
import React from "react";

function Footer() {
  return (
    <footer className="px-16 py-4  bg-[#012929] flex items-center justify-between">
      <div className="text-white text-[16px] ">
        <span className="text-[#B6BFC6] text-[16px] font-Light"> ©2023</span> Werent.ch
      </div>
      <ul className="flex items-center gap-2">
        <li>
          <Link href="" className="   w-6 h-6 rounded-full border border-white p-[6px] flex items-center justify-center hover:bg-green hover:border-green duration-300">
            <FacebookIcon/>
          </Link>
        </li>
        <li>
          <Link href="" className="w-6 h-6 rounded-full border border-white p-[6px] flex items-center justify-center hover:bg-green hover:border-green duration-300">
            <InstaIcon/>
          </Link>
        </li>
        <li>
          <Link href="" className="w-6 h-6 rounded-full border border-white p-[6px] flex items-center justify-center hover:bg-green hover:border-green duration-300">
            <LinkedIcon/>
          </Link>
        </li>
        <li>
          <Link href="" className="w-6 h-6 rounded-full border border-white p-[6px] flex items-center justify-center hover:bg-green hover:border-green duration-300">
            <SocialIcon/>
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
