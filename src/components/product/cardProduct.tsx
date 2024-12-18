"use client";
import React, { useMemo, useState } from "react";
import ImagesProduct from "./imagesProduct";
import PricingOptions from "./PricingOptions";
import RentalDuration from "./rentalDuration";
import PriceDetails from "./priceDetails";
import ShareIcon from "@/src/assets/icons/share";
import FavRedIcon from "@/src/assets/icons/favRed";
import FeaturesProduct from "./FeaturesProduct";
import ProductClient from "./productClient";
import ShowMore from "@/src/components/showMore";
import ChooseAddressType from "./choose-address-type";
import { useParams, useSearchParams } from "next/navigation";
import ViewCheckout from "./checkout/view-checkout";
import LinkGreen from "../linkGreen";
import ROUTES from "@/src/routes";

function CardProduct({
  data = [],
  guest = false,
}: {
  data?: any;
  guest?: boolean;
}) {
  const params = useParams();
  const searchparams = useSearchParams();
  const [daysNumber, setDaysNumber] = useState(0);
  const [valueDate, setValueDate] = useState<[Date | null, Date | null]>([
    new Date(),
    new Date(),
  ]);
  const [valueAddressType, setValueAddressType] = useState("");
  const [location, setLocation] = useState<any>(null);
  const priceOptions = useMemo(
    () => ({
      Daily: data?.dailyPrice || 0,
      Weekly: data?.weeklyPrice || 0,
      Monthly: data?.monthlyPrice || 0,
    }),
    [data]
  );
  const PriceBYDays = useMemo(() => {
    if (daysNumber > 28) return priceOptions.Monthly;
    if (daysNumber > 6) return priceOptions.Weekly;
    return priceOptions.Daily;
  }, [daysNumber, priceOptions]);
  const TotalPriceOrder = useMemo(
    () => PriceBYDays * daysNumber - 50.82,
    [PriceBYDays, daysNumber]
  );
  console.log(location);

  const formData = {
    orderItems: [
      {
        productId: data?.id,
        quantity: 1,
        from: valueDate[0]?.toISOString(),
        to: valueDate[1]?.toISOString(),
        price: TotalPriceOrder,
      },
    ],
    handlingType: 1,
    deliveryType:
      valueAddressType === "store"
        ? 1
        : valueAddressType === "delivery"
        ? 2
        : valueAddressType === "pickup"
        ? 3
        : 1,
    paymentMethod: 1,
    paymentAmount: TotalPriceOrder,
    handler: "4444",
    paymentAction: 1,
    customerId: "",
    isQuotation: true,
    ...(valueAddressType === "store" && {
      stockId: location,
    }),
    ...(valueAddressType === "delivery" && {
      renterAddress: location,
    }),
    ...(valueAddressType === "pickup" && {
      pickUpAddress: location,
    }),
  };

  if (searchparams.get("checkout") === "true") {
    return <ViewCheckout data={formData} />;
  }
  return (
    <div className=" mb-section">
      <ImagesProduct dataImages={data?.images||[]} />
      <div className=" w-full  border-b border-grayMedium/40 pb-6">
        <div className="flex w-full items-center  justify-between gap-3 mb-7 mt-5 md:mt-section ">
          <h2 className="text-lg lg:text-[32px] font-SemiBold ">
            {data.name || "Hbada E3 Air Ergonomic Office Chair"}
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-5">
            <button className=" size-9 md:size-11 lg:size-[60px] rounded-full bg-grayBack flex items-center justify-center p-2 md:p-3 duration-300 hover:shadow-md">
              <ShareIcon />
            </button>
            <button className=" size-9 md:size-11 lg:size-[60px] rounded-full bg-grayBack flex items-center justify-center p-2 md:p-3 duration-300 hover:shadow-md">
              <FavRedIcon />
            </button>
          </div>
        </div>

        <FeaturesProduct />
      </div>

      <div className="flex mt-5 md:mt-section items-start justify-between flex-col lg:flex-row gap-11">
        <div className="lg:max-w-[650px] w-full flex-1">
          <div>
            <h3 className="text-base font-SemiBold mb-1 lg:mb-2 lg:text-xl">
              Description
            </h3>
            <div className="text-sm font-Regular lg:text-base text-grayMedium whitespace-pre-wrap">
              <ShowMore lines={3}>
                {data.description ||
                  " Hbada F3 Air ergonomic office chair combines the latest technologies to help you maintain a comfortable posture and live a healthy lifestyle. This office chair comes with elastic lumbar support, 3D adjustable headrest and armrests, durable and breathable mesh, 140-degree reclining, adjustable seat depth, and gravity-sensing chassis, offering lasting comfort even after all-day sitting."}
              </ShowMore>
            </div>
          </div>
          <PricingOptions daysNumber={daysNumber} priceOptions={priceOptions} />
          <RentalDuration
            setDaysNumber={setDaysNumber}
            setValue={setValueDate}
            value={valueDate}
          />
        </div>

        <div className="flex-1 flex flex-col gap-8 lg:max-w-[620px] w-full">
          <ProductClient />
          <PriceDetails
            daysNumber={daysNumber}
            TotalPriceOrder={TotalPriceOrder}
            PriceBYDays={PriceBYDays}
          >
            <div className="flex items-center px-5 justify-between gap-4 pb-4 flex-wrap mt-5">
              <LinkGreen
                href={guest?ROUTES.AUTH.LOGIN:ROUTES.USER.PRODUCTDETAILSCHECKOUT(params.productID)}
                className={`w-full  ${
                  valueAddressType && TotalPriceOrder && location 
                    ? "opacity-100"
                    :guest? "opacity-100" :"opacity-50 pointer-events-none"
                 }  duration-300  `}
              >
                Request this item
              </LinkGreen>
            </div>
          </PriceDetails>
        </div>
      </div>
      <ChooseAddressType
        setValueAddressType={setValueAddressType}
        valueAddressType={valueAddressType}
        setLocation={setLocation}
        location={location}
        stocks={data?.stocks || []}
      />
    </div>
  );
}

export default CardProduct;
