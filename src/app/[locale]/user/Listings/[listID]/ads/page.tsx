import Button from "@/src/components/button";
import Card from "@/src/components/card";
import { Link } from "@/src/navigation";
import React from "react";
import PriceAdsDetails from "./_components/price-ads-details";
import DurationAds from "./_components/Duration-ads";
import CardRentals from "@/src/components/cardRentals";
const data = {
  dailyPrice: 500,
  id: 4,
  name: "Luxury Villa",
  description: "For rent luxury villa,315 Meter , 3 Floors",
  address: "England, United KingdomPX8X - V4 New York, United States",
};
function Page() {
  return (
    <div className="mb-section">
      <h2 className="text-xl mdl:text-2xl font-SemiBold mb-5">Ad Preview</h2>
      <div className="flex lgl:flex-row flex-col lgl:items-start justify-between gap-5 flex-wrap mdl:gap-7 mb-14">
        <CardRentals data={data} />
        <DurationAds />
        <PriceAdsDetails />
      </div>
      <div>
        <Card className="py-7 px-5 md:px-9 rounded-3xl flex items-center gap-4 flex-col mdl:flex-row justify-between">
          <h3 className="text-sm mdl:text-base font-Regular text-center mdl:text-start">
            By clicking Publish, you agree to Okorent
            <Link href={"#"} className="text-blue px-1 font-Medium">
              Terms & Conditions
            </Link>
          </h3>
          <Button className={"px-10 h-12 w-[400px] max-w-full"}>
            Publish this ad
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Page;
