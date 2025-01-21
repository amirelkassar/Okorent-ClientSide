import LockIcon from "@/src/assets/icons/lock";
import TrueGreenIcon from "@/src/assets/icons/trueGreen";
import Button from "@/src/components/button";
import React from "react";
import LinkGreen from "../linkGreen";
import ROUTES from "@/src/routes";
const PricingPlansData = [
  {
    name: "Essential",
    description:
      "Basic features for starting rental businesses and small teams.",
    numMore: 52,
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
    numMore: 60,
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
    numMore: 75,
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
interface PricingPlansProps {
  withBtn?: boolean;
}
function PricingPlans({ withBtn = true }: PricingPlansProps) {
  return (
    <div className="flex justify-between gap-4 lg:gap-12 hideScroll max-w-full overflow-x-auto mb-11 lg:mb-20">
      {PricingPlansData.map((plan, i) => {
        return (
          <div
            key={i}
            className="bg-white flex-1 relative  border-[3px] border-green/30 md:min-w-[377px] min-w-[90%]  max-w-[90%]   rounded-xl pt-11 pb-5 lg:pb-9"
          >
            {plan.badge && (
              <p className="bg-green ps-5 pe-[22px] py-1 text-center h-7 uppercase after:content-[''] after:right-[-20px] after:-rotate-45 after:absolute text-sm md:text-base  after:size-[30px] after:bg-white after:top-1/2 overflow-hidden after:-translate-y-1/2 absolute left-[-3px] top-4 text-white font-Medium">
                Most Popular
              </p>
            )}

            <div className="px-[22px]">
              <h2 className="text-2xl lg:text-[32px] mb-1">{plan.name}</h2>
              <h3 className="text-base lg:text-[20px] font-Regular text-[#565656] leading-6 mb-3 lg:mb-5">
                {plan.description}
              </h3>
              <p className="text-base lg:text-[20px] text-black/80 mb-4 lg:mb-8 ">
                {plan.price.original}{" "}
                <span className="text-2xl lg:text-[32px] text-blue font-Bold">
                  {" "}
                  {plan.price.discounted}
                </span>{" "}
                {plan.price.currency} / {plan.price.period}
              </p>
            </div>

            <ul className=" py-7 lg:py-10 border-t border-[#B6BFC64D]">
              {plan.features.map((feature, j) => {
                return (
                  <li
                    key={j}
                    className="flex items-center px-4 lg:px-[22px] gap-4 lg:gap-5 py-[10px] odd:bg-green/10"
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
                    <p className="text-sm lg:text-base"> {feature.feature}</p>
                  </li>
                );
              })}
            </ul>
            <button className=" text-center flex items-center justify-center mx-auto  px-5 text-blue py-4 text-sm md:text-base font-Regular">
              See all {plan.numMore} features
            </button>
            {withBtn && (
              <LinkGreen href={ROUTES.USER.CHECKOUTID('dfg')} className={"w-[280px] max-w-[96%] mx-auto"}>
                Choose this plan
              </LinkGreen>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default PricingPlans;
