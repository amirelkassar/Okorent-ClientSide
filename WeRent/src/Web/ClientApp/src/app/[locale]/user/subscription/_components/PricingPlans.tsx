import LockIcon from "@/src/assets/icons/lock";
import TrueIcon from "@/src/assets/icons/true";
import TrueGreenIcon from "@/src/assets/icons/trueGreen";
import VerifyIcon from "@/src/assets/icons/verify";
import Button from "@/src/components/button";
import React from "react";
const PricingPlansData = [
  {
    name: "Essential",
    description:
      "Basic features for starting rental businesses and small teams.",
    price: {
      original: "$35",
      discounted: "$29",
      currency: "USD",
      period: "Month",
    },
    features: [
      { feature: "Lorem ipsum dolor sit amet, consectetur", available: true },
      { feature: "Lorem ipsum dolor sit amet, consectetur", available: true },
      { feature: "Lorem ipsum dolor sit amet, consectetur", available: true },
      { feature: "Lorem ipsum dolor sit amet, consectetur", available: true },
      { feature: "Lorem ipsum dolor sit amet, consectetur", available: true },
      { feature: "Lorem ipsum dolor sit amet, consectetur", available: false }, // Example of a feature not available
    ],
    buttonLabel: "Choose this plan",
    imageDimensions: {
      width: 236,
      height: 162,
    },
  },
  {
    name: "Pro",
    description:
      "The best value for medium-sized and growing rental businesses.",
    badge: "MOST POPULAR",
    price: {
      original: "$35",
      discounted: "$29",
      currency: "USD",
      period: "Month",
    },
    features: [
      { feature: "Lorem ipsum dolor sit amet, consectetur", available: true },
      { feature: "Lorem ipsum dolor sit amet, consectetur", available: true },
      { feature: "Lorem ipsum dolor sit amet, consectetur", available: true },
      { feature: "Lorem ipsum dolor sit amet, consectetur", available: true },
      { feature: "Lorem ipsum dolor sit amet, consectetur", available: true },
      { feature: "Lorem ipsum dolor sit amet, consectetur", available: true },
    ],
    buttonLabel: "Choose this plan",
  },
  {
    name: "Premium",
    description: "Advanced features for large rental companies.",
    price: {
      original: "$35",
      discounted: "$29",
      currency: "USD",
      period: "Month",
    },
    features: [
      { feature: "Lorem ipsum dolor sit amet, consectetur", available: true },
      { feature: "Lorem ipsum dolor sit amet, consectetur", available: true },
      { feature: "Lorem ipsum dolor sit amet, consectetur", available: true },
      { feature: "Lorem ipsum dolor sit amet, consectetur", available: true },
      { feature: "Lorem ipsum dolor sit amet, consectetur", available: true },
      { feature: "Lorem ipsum dolor sit amet, consectetur", available: true },
    ],
    buttonLabel: "Choose this plan",
  },
];

function PricingPlans() {
  return (
    <div className="flex justify-between gap-12 mb-20">
      {PricingPlansData.map((plan, i) => {
        return (
          <div
            key={i}
            className="bg-white flex-1 border-[3px] border-green/30  rounded-xl pt-11 pb-9"
          >
            <div className="px-[22px]">
              <h2 className="text-[32px] mb-1">{plan.name}</h2>
              <h3 className="text-[20px] font-Regular text-[#565656] leading-6 mb-5">
                {plan.description}
              </h3>
              <p className="text-[20px] text-black/80 mb-8 ">
                {plan.price.original}{" "}
                <span className="text-[32px] text-blue font-Bold">
                  {" "}
                  {plan.price.discounted}
                </span>{" "}
                {plan.price.currency} / {plan.price.period}
              </p>
            </div>

            <ul className="py-10 border-t border-[#B6BFC64D]">
              {plan.features.map((feature, j) => {
                return (
                  <li
                    key={j}
                    className="flex items-center px-[22px] gap-5 py-[10px] odd:bg-green/10"
                  >
                    {feature.available ? (
                      <span className=" size-5 min-w-5">
                        <TrueGreenIcon />
                      </span>
                    ) : (
                      <span className=" size-5 min-w-5">
                        <LockIcon />
                      </span>
                    )}
                    <p>{feature.feature}</p>
                  </li>
                );
              })}
            </ul>
            <button className=" text-center flex items-center justify-center mx-auto  px-5 text-blue py-4 text-base font-Regular">
              See all 52 features
            </button>
            <Button className={"w-[280px] max-w-[96%] mx-auto"}>
              Choose this plan
            </Button>
          </div>
        );
      })}
    </div>
  );
}

export default PricingPlans;
