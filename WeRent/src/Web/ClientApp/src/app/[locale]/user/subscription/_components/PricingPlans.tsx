import LockIcon from "@/src/assets/icons/lock";
import TrueGreenIcon from "@/src/assets/icons/trueGreen";
import Button from "@/src/components/button";
import React from "react";
const PricingPlansData = [
  {
    name: "Essential",
    description:
      "Basic features for starting rental businesses and small teams.",
      numMore:52,
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
      { feature: "Lorem ipsum dolor sit amet, consectetur", available: false },
      { feature: "Lorem ipsum dolor sit amet, consectetur", available: true },
      { feature: "Lorem ipsum dolor sit amet, consectetur", available: false },
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
    numMore:60,
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
      { feature: "Lorem ipsum dolor sit amet, consectetur", available: false },
      { feature: "Lorem ipsum dolor sit amet, consectetur", available: false },
      { feature: "Lorem ipsum dolor sit amet, consectetur", available: true },
    ],
    buttonLabel: "Choose this plan",
  },
  {
    name: "Premium",
    description: "Advanced features for large rental companies.",
    numMore:75,
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
      { feature: "Lorem ipsum dolor sit amet, consectetur", available: false },
      { feature: "Lorem ipsum dolor sit amet, consectetur", available: false },
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
            className="bg-white flex-1 relative  border-[3px] border-green/30  rounded-xl pt-11 pb-9"
          >
            {plan.badge && (
              <p className="bg-green ps-5 pe-[22px] py-1 text-center h-7 uppercase after:content-[''] after:right-[-20px] after:-rotate-45 after:absolute after:size-[30px] after:bg-white after:top-1/2 overflow-hidden after:-translate-y-1/2 absolute left-[-3px] top-4 text-white font-Medium">
                Most Popular
              </p>
            )}

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
                      <span className=" size-5 min-w-5 opacity-50">
                        <LockIcon />
                      </span>
                    )}
                    <p>{feature.feature}</p>
                  </li>
                );
              })}
            </ul>
            <button className=" text-center flex items-center justify-center mx-auto  px-5 text-blue py-4 text-base font-Regular">
              See all {plan.numMore} features
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
