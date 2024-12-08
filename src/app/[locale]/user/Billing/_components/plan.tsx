import RocketIcon from "@/src/assets/icons/Rocket";
import TrueGreenIcon from "@/src/assets/icons/trueGreen";

import LinkGreen from "@/src/components/linkGreen";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import React from "react";
const dataPla = [
  "Rental website builder",
  "Payment with no commission",
  "Zapier Intergration",
  "API",
];
function Plan() {
  return (
    <div className=" order-1 flex flex-col lg:flex-row flex-1 justify-between shadow-md border gap-3 lg:gap-5 bg-white/50 border-green rounded-3xl px-6 pt-8 lg:pt-10 pb-4">
      <div>
        <h3 className="text-base lg:text-xl text-grayMedium font-Regular mb-3 lg:mb-0 ps-10">
          Your Plan{" "}
        </h3>
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-green/10 size-8 rounded-lg flex items-center justify-center p-2">
            <RocketIcon />
          </div>
          <h4 className="text-xl lg:text-2xl">Starter Membership</h4>
        </div>
        <div>
          <ul className="flex flex-col gap-4 ps-9 ">
            {dataPla.map((item, i) => {
              return (
                <li className="flex items-center gap-3" key={i}>
                  <TrueGreenIcon />
                  <p className="text-base font-Regular">{item}</p>
                </li>
              );
            })}
            <li>
              <Link href={"#"} className="text-blue font-Regular text-base">
                See all 52 features
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <LinkGreen href={ROUTES.USER.SUBSCRIPTION} className={"lg:mt-6"}>
        Change Plan
      </LinkGreen>
    </div>
  );
}

export default Plan;
