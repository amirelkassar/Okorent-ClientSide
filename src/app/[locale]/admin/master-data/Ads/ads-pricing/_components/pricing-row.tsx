"use client";
import EditIcon from "@/src/assets/icons/edit";
import Button from "@/src/components/button";
import Input from "@/src/components/input";
import ModalComp from "@/src/components/modal-comp";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
interface PricingAdminDataProps {
  id: number;
  name: string;
  price: string;
}
interface CategoryRowProps {
  data: PricingAdminDataProps;
}
function PricingRow({ data }: CategoryRowProps) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="flex items-center justify-between gap-4 border-b border-blueLight/50 last-of-type:border-none py-3 flex-wrap">
      <div className="flex items-center gap-7 mdl:gap-24">
        <h4 className=" text-sm mdl:text-base max-w-[200px] min-w-[90px]  mdl:min-w-[140px] w-full truncate">
          {data.name}
        </h4>

        <p className="text-grayMedium text-nowrap text-sm mdl:text-base font-Regular">
          {data?.price}
        </p>
      </div>
      <button onClick={open}>
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
              />
              <Input
                label="Duration Price"
                placeholder="50"
                type="number"
                inputClassName="h-14 bg-white rounded-xl"
                rightSection={
                  <div className="text-grayMedium text-base pe-4">$</div>
                }
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
              <Button onClick={close} className={" flex-1 h-[54px]"}>
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
