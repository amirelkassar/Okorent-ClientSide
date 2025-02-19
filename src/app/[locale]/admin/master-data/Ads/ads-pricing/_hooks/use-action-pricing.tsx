import { Toast } from "@/src/components/toast";
import { useCreatePricingInAdmin } from "@/src/hooks/queries/admin/master-data/ads";
import React, { useCallback, useState } from "react";

function UseActionPricing({ close }: { close: () => void }) {
  const [adData, setAdData] = useState({
    durationDays: "0",
    durationPrice: "0",
  });
  //query
  const {
    mutateAsync: CreatePricing,
    error,
    reset,
  } = useCreatePricingInAdmin();
  //function
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    reset();
    const { name, value } = e.target;
    setAdData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onSubmitCreatePricing = useCallback(async () => {
    Toast.Promise(CreatePricing(adData), {
      success: "successfully Create Pricing",
      onSuccess(res) {
        close();
        setAdData({ durationDays: "0", durationPrice: "0" });
      },
    });
  }, [CreatePricing, close, adData]);
  return {
    adData,
    handleChange,
    onSubmitCreatePricing,
    error,
    setAdData
  };
}

export default UseActionPricing;
