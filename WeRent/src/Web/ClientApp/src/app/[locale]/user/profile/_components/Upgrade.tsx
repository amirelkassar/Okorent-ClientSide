import ArrowWhiteIcon from "@/src/assets/icons/arrowWhite";
import TrueGreenIcon from "@/src/assets/icons/trueGreen";
import Button from "@/src/components/button";
import React from "react";
import backUpgrade from "@/src/assets/images/backUpgrade.png";
import TwoLineIcon from "@/src/assets/icons/twoLine";
const UpgradeData = [
  {
    id: 1,
    title: "Rental website builder",
  },
  {
    id: 2,
    title: "Coupon codes",
  },
  {
    id: 3,
    title: "Unlimited products",
  },
  {
    id: 4,
    title: "QR & barcode scanning ",
  },
];

function Upgrade() {
  return (
    <div
      className="px-2 lg:px-8 pt-10 lg:pt-16 pb-9 lg:pb-14 lgl:max-w-[636px] flex-1 lgl:min-w-[530px] rounded-2xl bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${backUpgrade.src})` }}
    >
      <h2 className="text-3xl lg:text-[56px] font-SemiBold text-center leading-[36px] lg:leading-[60px] mb-14 lg:mb-20">
        Upgrade to <br />{" "}
        <span className=" inline-block relative">
          premium
          <span className=" absolute w-full left-1/2 mx-auto -translate-x-1/2 -bottom-5 lg:-bottom-10">
            <TwoLineIcon className="w-[80%] h-auto mx-auto" />
          </span>
        </span>{" "}
        package
      </h2>
      <p className="text-sm lg:text-xl text-black/80 font-Regular text-center mb-11">
        Kickstart your journey and explore the advantages of our premium
        packages, tailored for rental businesses of all sizes from startups to
        large enterprises
      </p>
      <ul className="flex flex-wrap gap-4 md:gap-3 mb-9 mx-auto px-8 lg:px-7">
        {UpgradeData.map((item, i) => {
          return (
            <li
              key={i}
              className="flex items-center gap-2 flex-1 min-w-full md:min-w-[calc(50%-0.5rem)]"
            >
              <TrueGreenIcon fill="#006AFF" />
              <p>{item.title}</p>
            </li>
          );
        })}
      </ul>
      <Button className={" gap-2 mx-auto"}>
        <p className="text-white">Upgrade now</p>
        <ArrowWhiteIcon />
      </Button>
    </div>
  );
}

export default Upgrade;
