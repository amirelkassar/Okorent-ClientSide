"use client";
import EditIcon from "@/src/assets/icons/edit";
import Button from "@/src/components/button";
import Input from "@/src/components/input";
import ModalComp from "@/src/components/modal-comp";
import { useDisclosure } from "@mantine/hooks";
import React, { useCallback, useState } from "react";
import GetErrorMsg from "@/src/components/getErrorMsg";
import {
  useCreatePricingInAdmin,
  useEditPricingInAdmin,
} from "@/src/hooks/queries/admin/master-data/ads";
import { Toast } from "@/src/components/toast";

interface PricingAdminDataProps {
  id: string;
  durationDays: string;
  durationPrice: string;
}
interface CategoryRowProps {
  data: PricingAdminDataProps;
}
function PricingRow({ data }: CategoryRowProps) {
  //hooks
  const [adData, setAdData] = useState({
    id: data?.id || "0",
    durationDays: data?.durationDays || "0",
    durationPrice: data?.durationPrice || "0",
  });
  const [opened, { open, close }] = useDisclosure(false);
  //query
  const {
    mutateAsync: EditPricing,
    error,
    reset,
  } = useEditPricingInAdmin(data?.id || "");
  //function
  const formatDuration = useCallback((days: number) => {
    return days % 7 === 0
      ? `${days / 7} Week${days / 7 > 1 ? "s" : ""}`
      : `${days} Day${days > 1 ? "s" : ""}`;
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    reset();
    const { name, value } = e.target;
    setAdData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onSubmitEditPricing = useCallback(async () => {
    Toast.Promise(EditPricing(adData), {
      success: "successfully Edit Pricing",
      onSuccess(res) {
        close();
      },
    });
  }, [EditPricing, close, adData]);

  return (
    <div className="flex items-center justify-between gap-4 border-b border-blueLight/50 last-of-type:border-none py-3 flex-wrap">
      <div className="flex items-center gap-7 mdl:gap-24">
        <h4 className=" text-sm mdl:text-base max-w-[200px] min-w-[90px]  mdl:min-w-[140px] w-full truncate">
          {formatDuration(+data.durationDays)}
        </h4>

        <p className="text-grayMedium text-nowrap text-sm mdl:text-base font-Regular">
          {data?.durationPrice}$
        </p>
      </div>
      <button
        onClick={() => {
          open();
        }}
      >
        <EditIcon className=" w-4 md:w-5  h-auto" fill="#006AFF" />
      </button>
      {opened && (
        <ModalComp title="Edit Pricing" opened={opened} close={close}>
          <div className="w-[584px] max-w-full">
            <div className="flex flex-col gap-3 mb-7">
              <Input
                label="Ad Duration (days)"
                placeholder="15 Days"
                type="number"
                inputClassName="h-14 bg-white rounded-xl"
                name="durationDays"
                value={adData.durationDays}
                onChange={handleChange}
                error={GetErrorMsg(error, "DurationDays")}
              />
              <Input
                label="Duration Price"
                placeholder="50"
                type="number"
                inputClassName="h-14 bg-white rounded-xl"
                rightSection={
                  <div className="text-grayMedium text-base pe-4">$</div>
                }
                name="durationPrice"
                value={adData.durationPrice}
                onChange={handleChange}
                error={GetErrorMsg(error, "DurationPrice")}
              />
            </div>
            <div className="flex items-center gap-7 w-full">
              <Button
                onClick={close}
                className={
                  " flex-1 h-[54px] text-black bg-grayBack border-none"
                }
              >
                Cancel
              </Button>
              <Button
                onClick={onSubmitEditPricing}
                className={" flex-1 h-[54px]"}
              >
                Save
              </Button>
            </div>
          </div>
        </ModalComp>
      )}
    </div>
  );
}

export default PricingRow;
