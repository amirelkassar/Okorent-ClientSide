import React from "react";
import logo from "@/src/assets/images/logoWhite.png";
import Image from "next/image";
import { Link } from "@/src/navigation";
import AppStoreIcon from "@/src/assets/icons/appStore";
import GooglePlayIcon from "@/src/assets/icons/googlePlay";
const footerData = [
  {
    title: "About Werent",
    links: [
      { label: "Terms and conditions", url: "#" },
      { label: "Privacy Policy", url: "#", isNew: true },
      { label: "FAQs", url: "#" },
      { label: "Contact us", url: "#" },
      { label: "Who are we ?", url: "#" },
    ],
  },
  {
    title: "Browse ads",
    links: [
      { label: "All listings", url: "#" },
      { label: "Electronic", url: "#" },
      { label: "Fashion", url: "#" },
      { label: "Real estate", url: "#" },
      { label: "Tools", url: "#" },
      { label: "Leisure & Sport", url: "#" },
    ],
  },
  {
    title: "Join WeRent",
    links: [
      { label: "Log in", url: "#" },
      { label: "Create an account", url: "#" },
    ],
  },
];
const footerDataButtons = [
  {
    label: "App Store",
    icon: <AppStoreIcon />,
    url: "#",
  },
  {
    label: "Google Play",
    icon: <GooglePlayIcon />,
    url: "#",
  },
];

function FooterGuest() {
  return (
    <div className="bg-[#022E2D] w-full pb-20 pt-14">
      <div className="max-w-[1600px] mx-auto px-[74px] flex gap-36 justify-between">
        <div className=" max-w-[320px]">
          <Image
            src={logo}
            alt="logo Footer"
            width={135}
            height={45}
            className="w-[135px] h-[45px] mb-5 block"
          />
          <h2 className="font-Regular text-[#D3D4DC]/70 text-base mb-16">
            Rent and lease anything at any time
          </h2>
        </div>
        <div className="flex-1 flex justify-between gap-16">
          {footerData.map((itemFooter, i) => {
            return (
              <div key={i}>
                <h3 className="text-white  mb-6">{itemFooter.title}</h3>
                <ul className="flex flex-col gap-2">
                  {itemFooter.links.map((link, j) => {
                    return (
                      <li className="flex items-center gap-2" key={j}>
                        <Link
                          href={link.url}
                          className="text-base text-[#D3D4DC]/70 duration-200 hover:text-[#D3D4DC] font-Regular"
                        >
                          {link.label}
                        </Link>
                        {link.isNew && (
                          <p className="bg-green px-[10px] py-1 rounded-md flex items-center justify-center text-white text-[13px] font-Regular">
                            New
                          </p>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          <div>
            <h3 className="text-white  mb-6">Download our app</h3>
            <ul className="flex flex-col gap-4">
              {footerDataButtons.map((itemButton, i) => {
                return (
                  <li className="flex items-center gap-2" key={i}>
                    <Link
                      href={itemButton.url}
                      className=" bg-[#012928] w-[220px] py-2 px-5 flex items-center gap-8 rounded-md"
                    >
                      {itemButton.icon}
                      <div>
                        <p className="text-[#D3D4DC]/70 text-[13px] font-Regular">
                          Download on the
                        </p>
                        <p className="text-[#D3D4DC] text-base">
                          {" "}
                          {itemButton.label}
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterGuest;
