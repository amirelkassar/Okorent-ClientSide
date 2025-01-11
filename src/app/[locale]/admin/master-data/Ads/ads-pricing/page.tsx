"use client";
import React from "react";
import LayoutMaster from "../../_components/layout-master";
import PricingRow from "./_components/pricing-row";
import { TableHeader } from "@/src/components/table/table-header";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import ManagementIcon from "@/src/assets/icons/Managment";
import Button from "@/src/components/button";
import PlusIcon from "@/src/assets/icons/plus";
import { useDisclosure } from "@mantine/hooks";
import Input from "@/src/components/input";
import ModalComp from "@/src/components/modal-comp";
const dataPricing = [
  {
    id: 1,
    name: "Day",
    price: "25.00 $",
  },
  {
    id: 2,
    name: "3 Days",
    price: "30.00 $",
  },
  {
    id: 3,
    name: "1 Week",
    price: "40.00 $",
  },
  
];

function Page() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <LayoutMaster>
      <TableHeader>
        <TableHeader.First title="Ads Pricing">
          <Link
            href={ROUTES.ADMIN.ADS}
            className="text-sm border duration-300 hover:shadow-md border-black h-10 min-w-[140px] rounded-xl px-4 py-2 flex items-center gap-2"
          >
            <ManagementIcon />
            Ads Managment
          </Link>
        </TableHeader.First>
        <TableHeader.Last className="ms-auto">
          <Button onClick={open} className={"gap-2 px-6 h-10"}>
            <PlusIcon className="w-4 h-auto" />
            Create New Pricing
          </Button>
        </TableHeader.Last>
      </TableHeader>
      <div className="bg-white rounded-xl border border-green/30 shadow-md w-full px-3 mdl:px-8 py-1 mdl:py-2 mb-section">
        {dataPricing.map((item: any, index: number) => (
          <PricingRow key={index} data={item} />
        ))}
      </div>
      <ModalComp title="Create New Pricing" opened={opened} close={close}>
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
              className={" flex-1 h-[54px] text-black bg-grayBack border-none"}
            >
              Cancel
            </Button>
            <Button onClick={close} className={" flex-1 h-[54px]"}>
              Save
            </Button>
          </div>
        </div>
      </ModalComp>
    </LayoutMaster>
  );
}

export default Page;
